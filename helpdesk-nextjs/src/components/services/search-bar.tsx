"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mx-auto max-w-2xl">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Cari layanan..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 rounded-2xl border-2 border-gray-200 pl-12 text-base shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}
