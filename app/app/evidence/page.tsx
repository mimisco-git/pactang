import { project } from "@/lib/data";

export default function Evidence() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Evidence locker</h1>
      <p className="mt-1 text-sm text-[#f4efe4]/65">Export a claims pack without hunting through WhatsApp.</p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {project.evidence.map((e) => (
          <div key={e.id} className="rounded-2xl border border-[#243049] bg-[#10192c] p-4">
            <p className="text-xs uppercase tracking-wide text-[#c9a227]">{e.kind}</p>
            <p className="mt-2 font-medium">{e.name}</p>
            <p className="text-xs text-[#f4efe4]/55">{e.date} | tag {e.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
