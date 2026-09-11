import Link from "next/link";
import { Building2, Bell, FolderOpen, Shield, Scale, LayoutDashboard } from "lucide-react";

const items = [
  { href: "/app", label: "Overview", icon: LayoutDashboard },
  { href: "/app/variations", label: "Variations", icon: Building2 },
  { href: "/app/notices", label: "Notices", icon: Bell },
  { href: "/app/evidence", label: "Evidence", icon: FolderOpen },
  { href: "/app/integrity", label: "Integrity", icon: Shield },
  { href: "/app/settlement", label: "Settlement", icon: Scale },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0b1220] text-[#f4efe4]">
      <aside className="hidden w-60 border-r border-[#243049] p-5 md:block">
        <Link href="/" className="mb-8 block text-lg font-semibold">
          PactaNG
        </Link>
        <nav className="space-y-1">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#f4efe4]/80 hover:bg-[#18233a] hover:text-white">
              <i.icon size={16} />
              {i.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-[#243049] px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c9a227]">Demo entity</p>
            <p className="font-medium">State-owned University</p>
          </div>
          <p className="text-xs text-[#f4efe4]/60">PPA 2007 | AMA 2023 | live site</p>
        </header>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
