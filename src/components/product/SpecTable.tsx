import type { SpecRow } from "@/types";

interface SpecTableProps {
  rows: SpecRow[];
  caption: string;
}

export function SpecTable({ rows, caption }: SpecTableProps) {
  return (
    <div className="mt-8 overflow-x-auto border border-line">
      <table className="w-full min-w-[520px] border-collapse text-left text-[0.95rem]">
        <caption className="border-b border-line bg-champagne/70 px-5 py-3 text-left text-[0.72rem] font-semibold tracking-[0.2em] text-gold-ink uppercase">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="w-[34%] px-5 py-3 font-semibold text-forest">
              Parameter
            </th>
            <th scope="col" className="px-5 py-3 font-semibold text-forest">
              What to confirm
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.parameter} className="border-b border-line last:border-b-0">
              <th scope="row" className="px-5 py-3.5 align-top font-medium text-ink">
                {row.parameter}
              </th>
              <td className="px-5 py-3.5 align-top leading-relaxed text-slate-green">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
