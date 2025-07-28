// components/PayrollList.tsx
import { ChevronDown } from "lucide-react";

interface Payroll {
  id: string;
  month: string;
  gross: string;
  net: string;
}

interface IPayrollList{
    payrolls:Payroll[]
}

export default function PayrollList({payrolls}:IPayrollList) {
  return (
    <div className="mt-6 bg-white dark:bg-zinc-800 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-3">Latests Payrolls</h2>
      <ul className="space-y-3">
        {payrolls.map((p) => (
          <li
            key={p.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-zinc-700 p-3 rounded-lg"
          >
            <div className="flex flex-col text-sm">
              <span className="font-medium">{p.month}</span>
              <span className="text-xs text-gray-600 dark:text-gray-300">
                Gross: {p.gross}
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-300">
                Net: {p.net}
              </span>
            </div>
            <button className="text-gray-500 hover:text-blue-600 transition">
              <ChevronDown size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
