"use client";

import { Button } from "@/components/ui/button";
import {
  Laptop,
  Network,
  Database,
  Mail,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const services = [
  {
    icon: Laptop,
    title: "Hardware & Software",
    description: "Perbaikan dan instalasi perangkat komputer dan software",
    color: "blue",
    features: ["Troubleshooting", "Instalasi", "Maintenance"],
  },
  {
    icon: Network,
    title: "Jaringan & Infrastruktur",
    description: "Pengelolaan dan perbaikan infrastruktur jaringan IT",
    color: "yellow",
    features: ["Konfigurasi", "Monitoring", "Optimasi"],
  },
  {
    icon: Database,
    title: "Database & Server",
    description: "Manajemen database dan server untuk operasional optimal",
    color: "blue",
    features: ["Backup", "Recovery", "Performance"],
  },
  {
    icon: Mail,
    title: "Email & Komunikasi",
    description: "Layanan email dan sistem komunikasi internal",
    color: "yellow",
    features: ["Setup", "Migration", "Support"],
  },
  {
    icon: Globe,
    title: "Website & Portal",
    description: "Pengembangan dan maintenance website resmi",
    color: "blue",
    features: ["Development", "Update", "Security"],
  },
  {
    icon: Smartphone,
    title: "Mobile & App",
    description: "Dukungan aplikasi mobile dan sistem terintegrasi",
    color: "yellow",
    features: ["Integration", "Update", "Support"],
  },
];

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-helpdesk-yellow-100 px-4 py-2 text-sm font-medium text-helpdesk-yellow-700 mb-4">
            <CheckCircle2 className="h-4 w-4" />
            Layanan Unggulan Kami
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            Solusi IT yang{" "}
            <span className="bg-gradient-to-r from-helpdesk-blue-600 to-helpdesk-yellow-500 bg-clip-text text-transparent">
              Komprehensif
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan teknologi informasi untuk
            mendukung operasional digital Pemerintah Kota Tangerang
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                className={`group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    service.color === "blue"
                      ? "bg-gradient-to-br from-helpdesk-blue-50 to-transparent"
                      : "bg-gradient-to-br from-helpdesk-yellow-50 to-transparent"
                  }`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex rounded-xl p-3 mb-4 transition-all duration-300 ${
                      service.color === "blue"
                        ? "bg-helpdesk-blue-100 group-hover:bg-helpdesk-blue-600"
                        : "bg-helpdesk-yellow-100 group-hover:bg-helpdesk-yellow-500"
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 transition-colors duration-300 ${
                        service.color === "blue"
                          ? "text-helpdesk-blue-600 group-hover:text-white"
                          : "text-helpdesk-yellow-600 group-hover:text-white"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-helpdesk-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className={`h-4 w-4 ${
                            service.color === "blue"
                              ? "text-helpdesk-blue-500"
                              : "text-helpdesk-yellow-500"
                          }`}
                        />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <Link
                    href="/services"
                    className={`inline-flex items-center text-sm font-medium transition-all duration-300 group-hover:gap-2 gap-1 ${
                      service.color === "blue"
                        ? "text-helpdesk-blue-600 hover:text-helpdesk-blue-700"
                        : "text-helpdesk-yellow-600 hover:text-helpdesk-yellow-700"
                    }`}
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Corner Decoration */}
                <div
                  className={`absolute -bottom-8 -right-8 h-32 w-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                    service.color === "blue"
                      ? "bg-helpdesk-blue-400"
                      : "bg-helpdesk-yellow-400"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-helpdesk-blue-600 hover:bg-helpdesk-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Lihat Semua Layanan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-helpdesk-blue-200 hover:border-helpdesk-blue-400 hover:bg-helpdesk-blue-50"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 right-0 -z-10 h-96 w-96 rounded-full bg-helpdesk-blue-100 opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-0 -z-10 h-96 w-96 rounded-full bg-helpdesk-yellow-100 opacity-10 blur-3xl" />
    </section>
  );
}
