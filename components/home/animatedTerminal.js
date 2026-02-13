export default function AnimatedTerminal() {
  return (
    <>
      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes code-1 {
          0%, 8% { opacity: 0; }
          8.1%, 16% { opacity: 1; }
          16.1%, 100% { opacity: 0; }
        }
        @keyframes code-2 {
          0%, 16% { opacity: 0; }
          16.1%, 28% { opacity: 1; }
          28.1%, 100% { opacity: 0; }
        }
        @keyframes code-3 {
          0%, 28% { opacity: 0; }
          28.1%, 40% { opacity: 1; }
          40.1%, 100% { opacity: 0; }
        }
        @keyframes code-4 {
          0%, 40% { opacity: 0; }
          40.1%, 52% { opacity: 1; }
          52.1%, 100% { opacity: 0; }
        }
        @keyframes code-5 {
          0%, 52% { opacity: 0; }
          52.1%, 64% { opacity: 1; }
          64.1%, 100% { opacity: 0; }
        }
        @keyframes code-6 {
          0%, 64% { opacity: 0; }
          64.1%, 76% { opacity: 1; }
          76.1%, 100% { opacity: 0; }
        }
        @keyframes code-7 {
          0%, 76% { opacity: 0; }
          76.1%, 88% { opacity: 1; }
          88.1%, 100% { opacity: 0; }
        }
        @keyframes code-8 {
          0%, 88% { opacity: 0; }
          88.1%, 98% { opacity: 1; }
          98.1%, 100% { opacity: 0; }
        }
      `}</style>

      <div className="mx-auto max-w-3xl">
        <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,rgb(203_213_225/0.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,rgb(203_213_225/0.8),transparent)1]">
          
          {/* Terminal Header */}
          <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,rgb(75_85_99)_4.5px,transparent_0)] after:w-[41px]">
            <span className="text-[13px] font-medium text-white">
              bpxinnovations.com ~ terminal
            </span>
          </div>

          {/* Terminal Content */}
          <div className="font-mono text-sm text-gray-500 [&_span]:opacity-0">
            <span className="animate-[code-1_12s_infinite] text-cyan-400">
              $ echo &quot;Hello, World!&quot;
            </span>
            <br />
            <span className="animate-[code-2_12s_infinite] text-white">
              Welcome to BPX Innovations 🚀
            </span>
            <br />
            <br />
            <span className="animate-[code-3_12s_infinite]">
              Where innovation meets execution.
            </span>
            <br />
            <span className="animate-[code-4_12s_infinite]">
              We build exceptional software solutions.
            </span>
            <br />
            <br />
            <span className="animate-[code-5_12s_infinite] text-yellow-400">
              $ project.init()
            </span>
            <br />
            <span className="animate-[code-6_12s_infinite] text-green-400">
              ✓ Environment ready
            </span>
            <br />
            <span className="animate-[code-7_12s_infinite] text-green-400">
              ✓ Dependencies installed
            </span>
            <br />
            <span className="animate-[code-8_12s_infinite] text-green-400">
              ✓ Let&apos;s build something amazing together!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}