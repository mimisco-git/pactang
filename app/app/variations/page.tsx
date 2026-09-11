import { project } from "@/lib/data";
import { naira } from "@/lib/utils";

export default function Variations() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Variation register</h1>
      <p className="mt-1 text-sm text-[#f4efe4]/65">Written extras only. Oral site chat is not an instruction.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-[#243049]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#10192c] text-[#f4efe4]/60">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Estimate</th>
              <th className="px-4 py-3">Authority</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {project.variations.map((v) => (
              <tr key={v.id} className="border-t border-[#243049]">
                <td className="px-4 py-3 font-mono text-xs">{v.id}</td>
                <td className="px-4 py-3">
                  <p>{v.title}</p>
                  <p className="text-xs text-[#f4efe4]/50">{v.note}</p>
                </td>
                <td className="px-4 py-3">{naira(v.estimate)}</td>
                <td className="px-4 py-3">{v.authority}</td>
                <td className="px-4 py-3 capitalize">{v.status.replace("-", " ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
