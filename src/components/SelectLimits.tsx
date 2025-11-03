"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SelectLimits() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("limit") || "10";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("limit", value);
    router.push(`/?${params.toString()}`);
  };

  return (
    <select
      value={current}
      onChange={handleChange}
      className="border rounded-md p-2 text-gray-700">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </select>
  );
}
