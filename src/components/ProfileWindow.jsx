const colors = {
  sage: '#abb382',
  peach: '#fad4d3',
  rose: '#f3a0a8',
  cream: '#fcf7ef',
};

function WindowShell({ title, children }) {
  return (
    <div
      className="rounded-md border-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] overflow-hidden"
      style={{ borderColor: colors.sage, background: colors.cream }}
    >
      <div className="flex items-center justify-between px-3 py-1 border-b-2" style={{ borderColor: colors.sage, background: colors.peach }}>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.rose }} />
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.sage }} />
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.peach }} />
          <span className="ml-2 text-xs font-semibold" style={{ color: '#5a6a3a' }}>{title}</span>
        </div>
        <div className="text-[10px]" style={{ color: '#5a6a3a' }}>− □ ×</div>
      </div>
      <div className="p-4 md:p-6" style={{ color: '#5a6a3a' }}>
        {children}
      </div>
    </div>
  );
}

function SkillBar({ label, value }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span>{label}</span>
        <span className="opacity-70">{value}%</span>
      </div>
      <div className="h-4 rounded-sm border-2 overflow-hidden group" style={{ borderColor: colors.sage, background: '#fff' }}>
        <div
          className="h-full transition-all duration-700 ease-in-out group-hover:w-[101%]"
          style={{ width: `${Math.max(10, value)}%`, background: colors.rose }}
        />
      </div>
    </div>
  );
}

export default function ProfileWindow() {
  return (
    <section id="about" className="px-4 py-12 md:py-16" style={{ background: '#fbf3e8' }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6 items-start">
        <div className="md:col-span-2">
          <WindowShell title="Profile Properties">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-md border-2" style={{ borderColor: colors.sage, background: colors.peach }} />
              <div>
                <h2 className="text-lg font-bold" style={{ color: '#486133' }}>Aishwarya Lolla</h2>
                <p className="text-xs">CSE Undergraduate • 2023–2027</p>
                <p className="text-xs">Pragati Engineering College, Surampalem</p>
                <p className="text-xs mt-2">Interests: Java • Web Dev • Design ✨💾⭐</p>
              </div>
            </div>
          </WindowShell>
        </div>
        <div className="md:col-span-3">
          <WindowShell title="About & Skills">
            <div className="space-y-5">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Java developer who enjoys writing clean, readable code</li>
                <li>Web projects with a focus on friendly, retro-inspired UX</li>
                <li>Design lover — pastel palettes, pixel art, cozy vibes</li>
                <li>Curious learner exploring frontend frameworks and UI motion</li>
              </ul>
              <div className="grid sm:grid-cols-2 gap-4">
                <SkillBar label="Java" value={85} />
                <SkillBar label="HTML/CSS" value={80} />
                <SkillBar label="React" value={70} />
                <SkillBar label="UI Design" value={78} />
              </div>
            </div>
          </WindowShell>
        </div>
      </div>
    </section>
  );
}
