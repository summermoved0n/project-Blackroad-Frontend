"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const clearFilter = () => router.replace("/tours", { scroll: false });

  const toggleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const current = params.get(key)?.split(",") || [];

    let next;

    if (current.includes(value)) {
      next = current.filter((v) => v !== value);
    } else {
      next = [...current, value];
    }

    if (next.length > 0) {
      params.set(key, next.join(","));
    } else {
      params.delete(key);
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return { toggleFilter, searchParams, clearFilter };
}
