import { integrity } from "@/lib/data";

export default function Integrity() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Integrity file</h1>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-[#243049] bg-[#10192c] p-4">
          <p className="text-xs text-[#f4efe4]/55">Contractor</p>
          <p className="mt-1 font-medium">{integrity.contractor}</p>
          <p className="text-sm text-[#f4efe4]/65">{integrity.rc}</p>
        </div>
        <div className="rounded-2xl border border-[#243049] bg-[#10192c] p-4">
          <p className="text-xs text-[#f4efe4]/55">CAC / tax / PPA</p>
          <p className="mt-1">{integrity.cac}</p>
          <p className="text-sm text-[#f4efe4]/65">Tax expiry {integrity.taxExpiry}</p>
          <p className="text-sm text-[#f4efe4]/65">{integrity.ppaExclusion}</p>
        </div>
      </div>
      <div className="rounded-2xl border border-red-500/30 bg-[#2a1212] p-5">
        <p className="text-sm font-medium text-red-200">Unreported approach</p>
        <p className="mt-2 text-sm">{integrity.giftLog.text}</p>
        <p className="mt-3 text-xs text-red-200/70">Date {integrity.giftLog.date} | Reported: {integrity.giftLog.reported ? "yes" : "no"}</p>
        <button className="mt-4 rounded-full bg-red-200 px-4 py-2 text-sm text-[#2a1212]">File internal report</button>
      </div>
    </div>
  );
}
