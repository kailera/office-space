'use client';

import Image from "next/image";

interface Employee {
  id: string;
  name: string;
  image: string;
  isNew?: boolean;
}

interface IEmployeesBanner {
  employees: Employee[];
}

export default function EmployeesOfTheMonthBanner({ employees }: IEmployeesBanner) {
  return (
    <div className="w-full flex flex-col items-center px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Employees of the Month</h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        {employees.map(emp => (
          <div key={emp.id} className="relative group">
            <div
              className={`
                w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4
                ${emp.isNew ? 'border-green-500' : 'border-gray-300'}
                transition-all duration-300
              `}
            >
              <Image
                src={emp.image}
                alt={emp.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm text-center mt-2">{emp.name}</p>

            {emp.isNew && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-1 py-[1px] rounded-full shadow">
                New
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
