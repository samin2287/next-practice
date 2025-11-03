"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  page: number;
  totalPages: number;
  limit: number;
}

export default function Pagination({ page, totalPages, limit }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (p: number) => {
    const params = new URLSearchParams(
      Array.from(searchParams?.entries() || [])
    );
    params.set("page", String(p));
    params.set("limit", String(limit));
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex justify-center gap-2 mt-5">
      <button
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 border rounded cursor-pointer">
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => goToPage(i + 1)}
          className={`px-3 py-1 border cursor-pointer rounded ${
            page === i + 1 ? "bg-gray-800 text-white" : ""
          }`}>
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded">
        Next
      </button>
    </div>
  );
}
