'use client';
import { useEffect, useRef } from 'react';



const LAYERS = [0.12, 0.38, 0.62, 0.88];
const COUNTS = [4, 6, 6, 3];

function getColors(dark) {
  return {
    primary:    dark ? '#4ade80' : '#16a34a',
    primaryDim: dark ? '#14532d' : '#dcfce7',
    nodeFill:   dark ? '#0f172a' : '#ffffff',
    edgeLine:   dark ? 'rgba(74,222,128,0.08)'  : 'rgba(22,163,74,0.07)',
    edgeHot:    dark ? 'rgba(74,222,128,0.35)'  : 'rgba(22,163,74,0.28)',
    packet:     dark ? '#86efac' : '#15803d',
    binDim:     dark ? 'rgba(74,222,128,0.07)'  : 'rgba(22,163,74,0.06)',
    binBright:  dark ? 'rgba(74,222,128,0.25)'  : 'rgba(22,163,74,0.18)',
    label:      dark ? 'rgba(74,222,128,0.18)'  : 'rgba(22,163,74,0.14)',
  };
}

function buildNodes(W, H) {
  const nodes = [];
  LAYERS.forEach((lx, layer) => {
    const count = COUNTS[layer];
    for (let i = 0; i < count; i++) {
      const ox = W * lx;
      const oy = H * 0.1 + (H * 0.8 / Math.max(count - 1, 1)) * i;
      nodes.push({
        x: ox, y: oy,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 5 + Math.random() * 3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.018 + Math.random() * 0.018,
        layer,
        originX: ox,
      });
    }
  });
  return nodes;
}

function buildStreams(W) {
  return Array.from({ length: 22 }, () => ({
    x: Math.random() * W,
    y: Math.random() * -300,
    speed: 0.35 + Math.random() * 0.7,
    chars: Array.from({ length: 14 }, () =>
      Math.random() > 0.5
        ? String(Math.floor(Math.random() * 2))
        : String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
    ),
    opacity: 0.25 + Math.random() * 0.4,
    fontSize: 9 + Math.random() * 5,
  }));
}

export function useAICanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let nodes   = buildNodes(canvas.width, canvas.height);
    let streams = buildStreams(canvas.width);
    let packets = [];
    let frame = 0;

    const getEdges = () => {
      const edges = [];
      nodes.forEach((a, i) => {
        nodes.forEach((b, j) => {
          if (j > i && b.layer - a.layer === 1) edges.push([i, j]);
        });
      });
      return edges;
    };

    const spawnPacket = () => {
      const edges = getEdges();
      const e = edges[Math.floor(Math.random() * edges.length)];
      packets.push({ fromNode: e[0], toNode: e[1], progress: 0, speed: 0.007 + Math.random() * 0.01 });
    };

    const draw = () => {
      const dark = document.documentElement.getAttribute('data-theme') === 'business';
      const C = getColors(dark);
      const W = canvas.width, H = canvas.height;
      frame++;

      ctx.clearRect(0, 0, W, H);

      // ── Binary rain ──────────────────────────────────────────────
      streams.forEach(s => {
        s.y += s.speed;
        if (s.y > H + 200) { s.y = -150 - Math.random() * 200; s.x = Math.random() * W; }
        if (frame % 18 === 0) {
          const idx = Math.floor(Math.random() * s.chars.length);
          s.chars[idx] = Math.random() > 0.5
            ? String(Math.floor(Math.random() * 2))
            : String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
        }
        ctx.font = `${s.fontSize}px monospace`;
        s.chars.forEach((ch, i) => {
          ctx.globalAlpha = i === 0 ? s.opacity : s.opacity * (1 - i / s.chars.length) * 0.5;
          ctx.fillStyle   = i === 0 ? C.binBright : C.binDim;
          ctx.fillText(ch, s.x, s.y - i * (s.fontSize + 2));
        });
      });
      ctx.globalAlpha = 1;

      // ── Edges ────────────────────────────────────────────────────
      getEdges().forEach(([ai, bi]) => {
        const a = nodes[ai], b = nodes[bi];
        const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        g.addColorStop(0,   C.edgeLine);
        g.addColorStop(0.5, C.edgeHot);
        g.addColorStop(1,   C.edgeLine);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = g;
        ctx.lineWidth   = 0.7;
        ctx.stroke();
      });

      // ── Packets ──────────────────────────────────────────────────
      packets = packets.filter(p => p.progress < 1);
      packets.forEach(p => {
        p.progress += p.speed;
        const a = nodes[p.fromNode], b = nodes[p.toNode];
        const px = a.x + (b.x - a.x) * p.progress;
        const py = a.y + (b.y - a.y) * p.progress;
        const gr = ctx.createRadialGradient(px, py, 0, px, py, 7);
        gr.addColorStop(0, C.packet);
        gr.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = gr; ctx.globalAlpha = 0.65; ctx.fill();
        ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = C.packet; ctx.globalAlpha = 1; ctx.fill();
      });
      if (frame % 38 === 0 && packets.length < 14) spawnPacket();

      // ── Nodes ────────────────────────────────────────────────────
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (Math.abs(n.x - n.originX) > 24) n.vx *= -1;
        if (n.y < 8 || n.y > H - 8)         n.vy *= -1;
        n.pulsePhase += n.pulseSpeed;
        const pulse = 0.5 + 0.5 * Math.sin(n.pulsePhase);

        // glow
        const glowR = n.radius * (2.8 + pulse * 1.4);
        const glow  = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        glow.addColorStop(0, C.primary + '33');
        glow.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glow; ctx.globalAlpha = 0.5 + pulse * 0.5; ctx.fill();
        ctx.globalAlpha = 1;

        // body
        const bg = ctx.createRadialGradient(n.x - 1, n.y - 1, 0, n.x, n.y, n.radius);
        bg.addColorStop(0, C.nodeFill);
        bg.addColorStop(1, C.primaryDim);
        ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = bg; ctx.strokeStyle = C.primary + 'cc';
        ctx.lineWidth = 1.2; ctx.fill(); ctx.stroke();

        // core
        ctx.beginPath(); ctx.arc(n.x, n.y, n.radius * 0.32, 0, Math.PI * 2);
        ctx.fillStyle = C.primary; ctx.globalAlpha = 0.55 + pulse * 0.45; ctx.fill();
        ctx.globalAlpha = 1;
      });

      // ── Layer labels ─────────────────────────────────────────────
      ctx.font = '8px monospace';
      ['INPUT', 'HIDDEN', 'HIDDEN', 'OUTPUT'].forEach((l, i) => {
        ctx.fillStyle   = C.label;
        ctx.globalAlpha = 1;
        ctx.fillText(l, LAYERS[i] * W - ctx.measureText(l).width / 2, H - 6);
      });

      animId = requestAnimationFrame(draw);
    };

    let animId = requestAnimationFrame(draw);

    const mo = new MutationObserver(() => {
      nodes   = buildNodes(canvas.width, canvas.height);
      streams = buildStreams(canvas.width);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      mo.disconnect();
    };
  }, []);
}