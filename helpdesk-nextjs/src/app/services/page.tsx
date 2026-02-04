"use client";

import { useState } from "react";
import { SearchBar } from "@/components/services/search-bar";
import { CategoryFilter } from "@/components/services/category-filter";
import { ServiceCardDetail } from "@/components/services/service-card-detail";
import { services, categories } from "@/data/service";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = services.filter((service) => {
    const matchCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchSearch =
      searchQuery === "" ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            DISKOMINFO KOTA TANGERANG
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Katalog Layanan
          </h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Temukan dan ajukan layanan teknologi informasi yang Anda butuhkan.
            Semua permintaan akan diproses oleh tim TIK secara profesional dan
            tepat waktu.
          </p>
        </div>

        {/* Stats Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            {services.length} Layanan Tersedia
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            servicesCount={filteredServices.length}
          />
        </div>

        {/* Results Info */}
        <div className="mb-6 text-sm text-gray-600">
          Menampilkan{" "}
          <span className="font-semibold text-blue-600">
            {filteredServices.length}
          </span>{" "}
          dari <span className="font-semibold">{services.length}</span> layanan
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service) => (
              <ServiceCardDetail key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 text-6xl">🔍</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Tidak ada layanan ditemukan
            </h3>
            <p className="text-gray-600">
              Coba ubah filter atau kata kunci pencarian
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
