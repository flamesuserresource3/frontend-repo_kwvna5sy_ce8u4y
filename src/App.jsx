import { useEffect, useMemo, useState } from 'react';
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
        className="mx-auto max-w-6xl rounded-t-md border-2 flex items-center justify-between px-3 py-2"
        style={{ background: colors.peach, borderColor: colors.sage }}
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.rose }} />
          <a href="#home" className="text-xs font-semibold" style={{ color: '#5a6a3a' }}>Start</a>
          <span className="text-xs" style={{ color: '#5a6a3a' }}>•</span>
          <a href="#about" className="text-xs" style={{ color: '#5a6a3a' }}>About</a>
          <a href="#projects" className="text-xs ml-2" style={{ color: '#5a6a3a' }}>Projects</a>
          <a href="#contact" className="text-xs ml-2" style={{ color: '#5a6a3a' }}>Contact</a>
        </div>
        <div className="text-xs font-mono" style={{ color: '#5a6a3a' }}>
          {now.toLocaleDateString()} {now.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const cursorPink = useMemo(() => {
    const svg = encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' shape-rendering='crispEdges'>` +
        `<path d='M2 2 L12 6 L6 12 Z' fill='${colors.rose}' stroke='${colors.rose}'/>` +
      `</svg>`
    );
    return `url("data:image/svg+xml,${svg}") 2 2, auto`;
  }, []);

  return (
    <div className="min-h-screen w-full" style={{ background: colors.cream, cursor: cursorPink }}>
      <HeroDesktop />
      <ProfileWindow />
      <ProjectsWall />
      <ContactChat />
      <Taskbar />
    </div>
  );
}
