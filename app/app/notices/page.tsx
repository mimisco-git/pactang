import { project } from "@/lib/data";

export default function Notices() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Notice clocks</h1>
      <p className="mt-1 text-sm text-[#f4efe4]/65">Condition-precedent dates from the uploaded contract clause.</p>
      <div className="mt-6 grid gap-3">
        {project.notices.map((n) => (
          <div key={n.id} className="rounded-2xl border border-[#243049] bg-[#10192c] p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">
                {n.id} | {n.type}
              </p>
              <span className={`rounded-full px-2 py-1 text-xs ${
                  n.status === "expired"
                    ? "bg-red-500/20 text-red-300"
                    : n.status === "at-risk"
                      ? "bg-amber-500/20 text-amber-200"
                      : "bg-emerald-500/20 text-emerald-200"
                }`}>{n.status}</span>
            </div>
            <p className="mt-1 text-sm text-[#f4efe4]/70">{n.title}</p>
            <p className="mt-2 text-xs text-[#f4efe4]/50">Deadline {n.deadline} | Served {n.served || "not served"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
