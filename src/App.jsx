import { useEffect, useMemo, useRef, useState } from 'react';
import HeroDesktop from './components/HeroDesktop';
import ProfileWindow from './components/ProfileWindow';
import ProjectsWall from './components/ProjectsWall';
import ContactChat from './components/ContactChat';

const colors = {
  sage: '#abb382',
  peach: '#fad4d3',
  rose: '#f3a0a8',
  cream: '#fcf7ef',
};

function Taskbar() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20">
      <div
        className="mx-auto max-w-6xl rounded-t-md border-2 flex items-center justify-between px-3 py-2 backdrop-blur"
        style={{ background: colors.peach, borderColor: colors.sage }}
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.rose }} />
          <a href="#home" className="text-xs font-semibold hover:underline" style={{ color: '#5a6a3a' }}>Start</a>
          <span className="text-xs" style={{ color: '#5a6a3a' }}>•</span>
          <a href="#about" className="text-xs hover:underline" style={{ color: '#5a6a3a' }}>About</a>
          <a href="#projects" className="text-xs ml-2 hover:underline" style={{ color: '#5a6a3a' }}>Projects</a>
          <a href="#contact" className="text-xs ml-2 hover:underline" style={{ color: '#5a6a3a' }}>Contact</a>
        </div>
        <div className="text-xs font-mono" style={{ color: '#5a6a3a' }}>
          {now.toLocaleDateString()} {now.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}

function CursorTrail() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dots = [];
    const maxDots = 20;

    function addDot(x, y) {
      const dot = document.createElement('span');
      dot.style.position = 'fixed';
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.width = '6px';
      dot.style.height = '6px';
      dot.style.borderRadius = '2px';
      dot.style.background = colors.rose;
      dot.style.opacity = '0.9';
      dot.style.boxShadow = `0 0 6px ${colors.rose}`;
      dot.style.pointerEvents = 'none';
      dot.style.transform = 'translate(-50%, -50%)';
      dot.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
      container.appendChild(dot);
      requestAnimationFrame(() => {
        dot.style.opacity = '0';
        dot.style.transform = 'translate(-50%, -50%) scale(0.8)';
      });
      dots.push(dot);
      if (dots.length > maxDots) {
        const d = dots.shift();
        d && container.removeChild(d);
      }
      setTimeout(() => {
        dot.remove();
      }, 700);
    }

    const onMove = (e) => addDot(e.clientX, e.clientY);
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 z-30" />;
}

function NoiseOverlay() {
  // subtle retro noise texture using SVG data URI
  const noise =
    "url('data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\">` +
        `<filter id=\"n\">` +
          `<feTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" numOctaves=\"1\" stitchTiles=\"stitch\"/>` +
          `<feColorMatrix type=\"saturate\" values=\"0\"/>` +
          `<feComponentTransfer><feFuncA type=\"table\" tableValues=\"0 0 0.12 0\"/></feComponentTransfer>` +
        `</filter>` +
        `<rect width=\"100%\" height=\"100%\" filter=\"url(#n)\"/>` +
      `</svg>`
    ) +
    "')";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 opacity-40 mix-blend-multiply"
      style={{ backgroundImage: noise }}
    />
  );
}

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const cursorPink = useMemo(() => {
    const svg = encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' shape-rendering='crispEdges'>` +
        `<path d='M2 2 L12 6 L6 12 Z' fill='${colors.rose}' stroke='${colors.rose}'/>` +
      `</svg>`
    );
    return `url("data:image/svg+xml,${svg}") 2 2, auto`;
  }, []);

  return (
    <div className="min-h-screen w-full relative" style={{ background: colors.cream, cursor: cursorPink }}>
      {booting && (
        <div className="fixed inset-0 z-40 grid place-items-center" style={{ background: colors.cream }}>
          <div className="rounded-md border-2 px-4 py-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]" style={{ borderColor: colors.sage, background: colors.peach, color: '#5a6a3a' }}>
            Booting Aishwarya’s Portfolio…
          </div>
        </div>
      )}

      <NoiseOverlay />
      <CursorTrail />

      <div className={booting ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-500'}>
        <HeroDesktop />
        <ProfileWindow />
        <ProjectsWall />
        <ContactChat />
      </div>
      <Taskbar />
    </div>
  );
}
