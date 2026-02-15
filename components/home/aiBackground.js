'use client';
import { useEffect, useRef } from 'react';



export default function AIBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── Detect DaisyUI theme ──────────────────────────────────────
    const getTheme = () =>
      document.documentElement.getAttribute('data-theme') || 'corporate';

    const getColors = () => {
      const dark = getTheme() === 'business';
      return {
        isDark:      dark,
        primary:     dark ? '#4ade80' : '#16a34a',   // green accent
        primaryDim:  dark ? '#166534' : '#bbf7d0',
        nodeFill:    dark ? '#1e293b' : '#f0fdf4',
        nodeBorder:  dark ? '#4ade80' : '#16a34a',
        edgeLine:    dark ? '#4ade8030' : '#16a34a20',
        edgeActive:  dark ? '#4ade8088' : '#16a34a66',
        binary:      dark ? '#4ade8018' : '#16a34a12',
        binaryFade:  dark ? '#4ade8040' : '#16a34a30',
        packet:      dark ? '#86efac' : '#15803d',
        bg:          dark ? '#0f172a' : '#f0fdf4',
      };
    };

    // ── Resize ────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Build nodes (3-layer neural net + scatter) ────────────────
    const buildNodes = ()=> {
      const nodes = [];
      const W = canvas.width, H = canvas.height;

      // Layer 0 – left input neurons
      for (let i = 0; i < 4; i++) {
        nodes.push({
          x: W * 0.12,
          y: H * 0.15 + (H * 0.7 / 3) * i,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: 5 + Math.random() * 3,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          layer: 0,
        });
      }
      // Layer 1 – hidden
      for (let i = 0; i < 6; i++) {
        nodes.push({
          x: W * 0.38,
          y: H * 0.08 + (H * 0.84 / 5) * i,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: 5 + Math.random() * 3,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          layer: 1,
        });
      }
      // Layer 2 – hidden 2
      for (let i = 0; i < 6; i++) {
        nodes.push({
          x: W * 0.62,
          y: H * 0.08 + (H * 0.84 / 5) * i,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: 5 + Math.random() * 3,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          layer: 2,
        });
      }
      // Layer 3 – right output
      for (let i = 0; i < 3; i++) {
        nodes.push({
          x: W * 0.88,
          y: H * 0.2 + (H * 0.6 / 2) * i,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: 6 + Math.random() * 3,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          layer: 3,
        });
      }
      return nodes;
    };

    // ── Build binary streams ──────────────────────────────────────
    const buildStreams = () => {
      const W = canvas.width;
      return Array.from({ length: 18 }, () => ({
        x:        Math.random() * W,
        y:        Math.random() * -400,
        speed:    0.4 + Math.random() * 0.8,
        chars:    Array.from({ length: 12 }, () =>
          Math.random() > 0.5
            ? String(Math.floor(Math.random() * 2))
            : String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
        ),
        opacity:  0.3 + Math.random() * 0.4,
        fontSize: 10 + Math.random() * 5,
      }));
    };

    let nodes    = buildNodes();
    let streams  = buildStreams();
    let packets= [];
    let frame = 0;

    // Edges: connect adjacent layers
    const getEdges = () => {
      const edges = [];
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          if (nodes[b].layer - nodes[a].layer === 1) {
            edges.push([a, b]);
          }
        }
      }
      return edges;
    };

    // Spawn a data packet along a random edge
    const spawnPacket = () => {
      const edges = getEdges();
      const edge  = edges[Math.floor(Math.random() * edges.length)];
      packets.push({
        fromNode: edge[0],
        toNode:   edge[1],
        progress: 0,
        speed:    0.008 + Math.random() * 0.012,
      });
    };

    // ── Main draw loop ────────────────────────────────────────────
    const draw = () => {
      const C = getColors();
      const W = canvas.width, H = canvas.height;
      frame++;

      ctx.clearRect(0, 0, W, H);

      // ── 1. Binary rain ──────────────────────────────────────────
      streams.forEach(s => {
        s.y += s.speed;
        if (s.y > H + 200) {
          s.y = -150 - Math.random() * 200;
          s.x = Math.random() * W;
        }
        // Randomly mutate chars
        if (frame % 20 === 0) {
          const idx = Math.floor(Math.random() * s.chars.length);
          s.chars[idx] = Math.random() > 0.5
            ? String(Math.floor(Math.random() * 2))
            : String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
        }
        ctx.font = `${s.fontSize}px monospace`;
        s.chars.forEach((ch, i) => {
          const alpha = i === 0
            ? s.opacity
            : s.opacity * (1 - i / s.chars.length) * 0.6;
          ctx.fillStyle = i === 0 ? C.binaryFade : C.binary;
          ctx.globalAlpha = alpha;
          ctx.fillText(ch, s.x, s.y - i * (s.fontSize + 2));
        });
      });
      ctx.globalAlpha = 1;

      // ── 2. Edges ────────────────────────────────────────────────
      const edges = getEdges();
      edges.forEach(([a, b]) => {
        const na = nodes[a], nb = nodes[b];
        const grad = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
        grad.addColorStop(0, C.edgeLine);
        grad.addColorStop(0.5, C.edgeActive);
        grad.addColorStop(1, C.edgeLine);
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 0.6;
        ctx.stroke();
      });

      // ── 3. Data packets ─────────────────────────────────────────
      packets = packets.filter(p => p.progress < 1);
      packets.forEach(p => {
        p.progress += p.speed;
        const na = nodes[p.fromNode], nb = nodes[p.toNode];
        const px = na.x + (nb.x - na.x) * p.progress;
        const py = na.y + (nb.y - na.y) * p.progress;

        // Glow trail
        const trailGrad = ctx.createRadialGradient(px, py, 0, px, py, 6);
        trailGrad.addColorStop(0, C.packet);
        trailGrad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = trailGrad;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = C.packet;
        ctx.fill();
      });

      // Spawn packets periodically
      if (frame % 40 === 0 && packets.length < 12) spawnPacket();

      // ── 4. Nodes ────────────────────────────────────────────────
      nodes.forEach(n => {
        // Drift
        n.x += n.vx;
        n.y += n.vy;
        // Soft boundary bounce within ±20px of original layer x
        const layerX = [0.12, 0.38, 0.62, 0.88][n.layer] * W;
        if (Math.abs(n.x - layerX) > 28)  n.vx *= -1;
        if (n.y < 10 || n.y > H - 10)     n.vy *= -1;

        n.pulsePhase += n.pulseSpeed;
        const pulse = 0.5 + 0.5 * Math.sin(n.pulsePhase);

        // Outer glow ring
        const glowR = n.radius * (2.5 + pulse * 1.5);
        const glow  = ctx.createRadialGradient(n.x, n.y, n.radius * 0.5, n.x, n.y, glowR);
        glow.addColorStop(0, C.primary + '44');
        glow.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.globalAlpha = 0.6 + pulse * 0.4;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Node body
        const bodyGrad = ctx.createRadialGradient(
          n.x - n.radius * 0.3, n.y - n.radius * 0.3, 0,
          n.x, n.y, n.radius
        );
        bodyGrad.addColorStop(0, C.nodeFill);
        bodyGrad.addColorStop(1, C.primaryDim);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle   = bodyGrad;
        ctx.strokeStyle = C.nodeBorder;
        ctx.lineWidth   = 1.2;
        ctx.fill();
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = C.primary;
        ctx.globalAlpha = 0.6 + pulse * 0.4;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // ── 5. Floating hex labels (layer annotations) ──────────────
      if (frame % 1 === 0) {
        ctx.font = '9px monospace';
        ctx.fillStyle = C.primary;
        ctx.globalAlpha = 0.25;
        const labels = ['INPUT', 'HIDDEN', 'HIDDEN', 'OUTPUT'];
        const xs = [0.12, 0.38, 0.62, 0.88];
        labels.forEach((l, i) => {
          ctx.fillText(l, xs[i] * W - ctx.measureText(l).width / 2, H - 8);
        });
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(draw);
    };

    let animId = requestAnimationFrame(draw);

    // Watch for theme changes and rebuild node positions on resize
    const observer = new MutationObserver(() => {
      nodes   = buildNodes();
      streams = buildStreams();
    });
    observer.observe(document.documentElement, {
      attributes: true, attributeFilter: ['data-theme'],
    });

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}