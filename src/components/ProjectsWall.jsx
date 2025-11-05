import { useState } from 'react';
import { Folder, ExternalLink, Github } from 'lucide-react';

const colors = {
  sage: '#abb382',
  peach: '#fad4d3',
  rose: '#f3a0a8',
  cream: '#fcf7ef',
};

function WindowShell({ title, children, onClose }) {
  return (
    <div className="rounded-md border-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] overflow-hidden" style={{ borderColor: colors.sage, background: colors.cream }}>
      <div className="flex items-center justify-between px-3 py-1 border-b-2" style={{ borderColor: colors.sage, background: colors.peach }}>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.rose }} />
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.sage }} />
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.peach }} />
          <span className="ml-2 text-xs font-semibold" style={{ color: '#5a6a3a' }}>{title}</span>
        </div>
        <button onClick={onClose} className="text-[10px]" style={{ color: '#5a6a3a' }}>×</button>
      </div>
      <div className="p-4 text-sm" style={{ color: '#5a6a3a' }}>
        {children}
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    name: 'Retro Diary',
    description: 'A pastel, pixel-themed personal journal built with web components and playful UI.',
    github: 'https://github.com/',
  },
  {
    name: 'Java Utils',
    description: 'Handy Java snippets and patterns for clean code and quick problem solving.',
    github: 'https://github.com/',
  },
  {
    name: 'Cozy Portfolio',
    description: 'A responsive portfolio with soft gradients and XP-style windows.',
    github: 'https://github.com/',
  },
];

export default function ProjectsWall() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="px-4 py-12 md:py-16" style={{ background: '#fffaf2' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl font-extrabold mb-6" style={{ color: '#486133' }}>Projects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {PROJECTS.map((p, idx) => (
            <button
              key={p.name}
              onClick={() => setActive(idx)}
              className="group flex flex-col items-center gap-2 p-3 rounded-md border-2 transition-transform hover:-translate-y-1"
              style={{ borderColor: colors.sage, background: colors.peach }}
            >
              <div className="w-14 h-12 rounded-sm grid place-items-center border-2" style={{ background: colors.rose, borderColor: colors.sage }}>
                <Folder size={22} color="#fff" />
              </div>
              <span className="text-xs font-medium" style={{ color: '#5a6a3a' }}>{p.name}</span>
              <span className="text-[10px] text-rose-500 opacity-0 group-hover:opacity-100 transition">open</span>
            </button>
          ))}
        </div>

        {active !== null && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px] grid place-items-center p-4" onClick={() => setActive(null)}>
            <div className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <WindowShell title={PROJECTS[active].name} onClose={() => setActive(null)}>
                <p className="mb-4">{PROJECTS[active].description}</p>
                <div className="flex items-center gap-3">
                  <a
                    href={PROJECTS[active].github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border-2 text-xs font-semibold"
                    style={{ borderColor: colors.sage, background: colors.peach, color: '#5a6a3a' }}
                  >
                    <Github size={14} /> View on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </WindowShell>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
