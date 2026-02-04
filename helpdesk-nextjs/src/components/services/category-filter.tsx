"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  label: string;
  color: string;
}

interface CategoryFilterProps {
  categories: readonly Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  servicesCount: number;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  servicesCount,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Semua Layanan Button */}
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => onSelectCategory("all")}
        className={cn(
          "rounded-full px-6 transition-all",
          selectedCategory === "all"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border-2 border-gray-200 bg-white text-gray-700 hover:border-blue-500 hover:bg-blue-50",
        )}
      >
        <span className="mr-2">●</span>
        Semua Layanan
      </Button>

      {/* Category Buttons */}
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onSelectCategory(category.id)}
          className={cn(
            "rounded-full px-6 transition-all",
            selectedCategory === category.id
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border-2 border-gray-200 bg-white text-gray-700 hover:border-blue-500 hover:bg-blue-50",
          )}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
