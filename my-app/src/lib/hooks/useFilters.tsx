"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page <= 1) {
      params.set("page", "1");
    } else {
      params.set("page", page.toString());
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const clearFilter = () => router.replace("/tours?page=1", { scroll: false });

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
      params.set("page", "1");
      params.set(key, next.join(","));
    } else {
      params.set("page", "1");
      params.delete(key);
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return { setPage, toggleFilter, searchParams, clearFilter };
}
