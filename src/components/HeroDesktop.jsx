import { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const colors = {
  sage: '#abb382',
  peach: '#fad4d3',
  rose: '#f3a0a8',
  cream: '#fcf7ef',
};

function WindowChrome({ title = 'System Message', children }) {
  return (
    <div
      className="rounded-md shadow-[4px_4px_0px_rgba(0,0,0,0.2)] border-2"
      style={{
        background: colors.cream,
        borderColor: colors.sage,
      }}
    >
      <div
        className="flex items-center justify-between px-3 py-1 border-b-2"
        style={{ background: colors.peach, borderColor: colors.sage }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ background: colors.rose }}
          />
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ background: colors.sage }}
          />
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ background: colors.peach }}
          />
          <span className="ml-2 text-xs font-semibold" style={{ color: '#5a6a3a' }}>
            {title}
          </span>
        </div>
        <Sparkles size={16} color={colors.rose} />
      </div>
      <div className="p-4 text-sm" style={{ color: '#5a6a3a' }}>
        {children}
      </div>
    </div>
  );
}

export default function HeroDesktop() {
  const cursorUrl = useMemo(() => {
    const svg = encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' shape-rendering='crispEdges'>` +
        `<rect x='0' y='0' width='18' height='18' fill='none'/>` +
        `<path d='M2 2 L10 6 L6 10 Z' fill='${colors.rose}' stroke='${colors.rose}'/>` +
      `</svg>`
    );
    return `url("data:image/svg+xml,${svg}") 2 2, auto`;
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[90vh] overflow-hidden"
      style={{ background: colors.cream, cursor: cursorUrl }}
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fA4LwfT7IUUelEGO/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fdfaf3]/50 via-transparent to-[#fdfaf3]" />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="max-w-xl w-full">
          <WindowChrome title="Welcome to Aishwarya’s Digital Desktop 🌸">
            <p className="leading-relaxed">
              Hi! I’m Aishwarya Lolla — a Computer Science and Engineering undergraduate (2023–2027)
              at Pragati Engineering College, Surampalem. I love Java, web projects, and cute retro
              design. Explore my desktop to learn more!
            </p>
          </WindowChrome>
        </div>
      </div>

      {/* Floating pixel icons */}
      <div className="absolute left-6 top-8 animate-bounce">
        <div
          className="w-10 h-10 border-2 rounded-md grid place-items-center"
          style={{ background: colors.peach, borderColor: colors.sage }}
        >
          <span className="text-xs" role="img" aria-label="flower">🌸</span>
        </div>
      </div>
      <div className="absolute right-8 top-16 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }}>
        <div
          className="w-12 h-12 border-2 rounded-md grid place-items-center"
          style={{ background: colors.rose, borderColor: colors.sage }}
        >
          <span className="text-base" role="img" aria-label="sparkles">✨</span>
        </div>
      </div>
      <div className="absolute right-16 bottom-10 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '1.2s' }}>
        <div
          className="w-9 h-9 border-2 rounded-md grid place-items-center"
          style={{ background: colors.peach, borderColor: colors.sage }}
        >
          <span className="text-sm" role="img" aria-label="heart">💖</span>
        </div>
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) } 50% { transform: translateY(-10px) } }
      `}</style>
    </section>
  );
}
