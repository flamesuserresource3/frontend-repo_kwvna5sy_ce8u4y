import { Mail, Linkedin } from 'lucide-react';

const colors = {
  sage: '#abb382',
  peach: '#fad4d3',
  rose: '#f3a0a8',
  cream: '#fcf7ef',
};

function WindowShell({ title, children }) {
  return (
    <div className="rounded-md border-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] overflow-hidden" style={{ borderColor: colors.sage, background: colors.cream }}>
      <div className="flex items-center justify-between px-3 py-1 border-b-2" style={{ borderColor: colors.sage, background: colors.peach }}>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.rose }} />
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.sage }} />
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.peach }} />
          <span className="ml-2 text-xs font-semibold" style={{ color: '#5a6a3a' }}>{title}</span>
        </div>
        <div className="text-[10px]" style={{ color: '#5a6a3a' }}>− □ ×</div>
      </div>
      <div className="p-4" style={{ color: '#5a6a3a' }}>{children}</div>
    </div>
  );
}

export default function ContactChat() {
  return (
    <section id="contact" className="px-4 py-12 md:py-16" style={{ background: '#fbf6ef' }}>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div>
          <WindowShell title="Chat">
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-end">
                <div className="rounded-md border-2 px-3 py-2 max-w-[80%]" style={{ borderColor: colors.sage, background: colors.peach }}>
                  Hiii! Let’s build something cute and useful. 💌
                </div>
              </div>
              <div className="flex gap-2 items-end justify-end">
                <div className="rounded-md border-2 px-3 py-2 max-w-[80%]" style={{ borderColor: colors.sage, background: colors.rose, color: 'white' }}>
                  I love Java, web UI, and pastel pixels. Message me!
                </div>
              </div>
              <div className="flex gap-2 items-end">
                <div className="rounded-md border-2 px-3 py-2 max-w-[80%]" style={{ borderColor: colors.sage, background: colors.peach }}>
                  ↓ Quick links below
                </div>
              </div>
            </div>
          </WindowShell>
        </div>
        <div>
          <WindowShell title="Reach out">
            <div className="flex flex-col gap-3">
              <a
                href="mailto:aishwaryalolla@example.com"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border-2"
                style={{ borderColor: colors.sage, background: colors.peach, color: '#5a6a3a' }}
              >
                <Mail size={16} /> Gmail
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border-2"
                style={{ borderColor: colors.sage, background: colors.peach, color: '#5a6a3a' }}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </WindowShell>
        </div>
      </div>
    </section>
  );
}
