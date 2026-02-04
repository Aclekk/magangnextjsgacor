"use client";

import { Button } from "@/components/ui/button";
import {
  Mail,
  PenTool,
  Shield,
  Video,
  Globe,
  GitBranch,
  HardDrive,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Icon mapping based on services.ts
const iconMap: Record<string, any> = {
  Mail: Mail,
  PenTool: PenTool,
  Shield: Shield,
  Video: Video,
  Globe: Globe,
  GitBranch: GitBranch,
  HardDrive: HardDrive,
  AlertTriangle: AlertTriangle,
};

const services = [
  {
    id: "email-resmi",
    title: "Email Resmi",
    description:
      "Pengajuan pembuatan email resmi @tangerangkota.go.id untuk pegawai",
    icon: "Mail",
    route: "/services/email-resmi",
  },
  {
    id: "tanda-tangan-elektronik",
    title: "Tanda Tangan Elektronik",
    description: "Pengajuan pembuatan sertifikat tanda tangan elektronik (TTE)",
    icon: "PenTool",
    route: "/services/tanda-tangan-elektronik",
  },
  {
    id: "vpn",
    title: "Layanan VPN Pemerintah Kota Tangerang",
    description:
      "Akses aman ke jaringan internal Pemerintah Kota Tangerang untuk...",
    icon: "Shield",
    route: "/services/vpn",
  },
  {
    id: "video-conference",
    title: "Video Conference Zoom",
    description: "Pengajuan penggunaan akun Zoom premium untuk meeting",
    icon: "Video",
    route: "/services/video-conference",
  },
  {
    id: "subdomain",
    title: "Subdomain",
    description: "Pengajuan pembuatan subdomain *.tangerangkota.go.id",
    icon: "Globe",
    route: "/services/subdomain",
  },
  {
    id: "repository-git",
    title: "Repository (Git/Repo)",
    description:
      "Pengajuan pembuatan repository Git untuk pengembangan aplikasi",
    icon: "GitBranch",
    route: "/services/repository-git",
  },
  {
    id: "repository-storage",
    title: "Repository (File/Storage)",
    description: "Pengajuan penyimpanan file dan dokumen di cloud storage",
    icon: "HardDrive",
    route: "/services/repository-storage",
  },
  {
    id: "laporan-insiden",
    title: "Laporan Insiden",
    description: "Laporkan insiden atau gangguan sistem TIK",
    icon: "AlertTriangle",
    route: "/incident",
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
              }, index * 80);
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
      className="relative py-16 lg:py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Pilih Layanan yang{" "}
            <span className="text-helpdesk-blue-600">Anda Butuhkan</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            8 layanan digital terintegrasi untuk mendukung produktivitas dan
            efisiensi kerja Anda
          </p>
        </div>

        {/* Services Grid - 4 Columns */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isVisible = visibleCards.includes(index);

            return (
              <Link key={service.id} href={service.route}>
                <div
                  className={`group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-helpdesk-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer h-full ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Available Badge - only for Git Repo */}
                  {service.id === "repository-git" && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full border border-green-200">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Tersedia
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex rounded-2xl bg-helpdesk-blue-50 p-4 group-hover:bg-helpdesk-blue-100 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-helpdesk-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-helpdesk-blue-600 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    {/* Link with Arrow */}
                    <div className="flex items-center text-helpdesk-blue-600 font-medium text-sm pt-2 group-hover:gap-2 gap-1 transition-all duration-300">
                      Selengkapnya
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-medium rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              Lihat Katalog Lengkap
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute top-40 right-0 -z-10 h-80 w-80 rounded-full bg-helpdesk-blue-50 opacity-30 blur-3xl" />
      <div className="absolute bottom-40 left-0 -z-10 h-80 w-80 rounded-full bg-helpdesk-yellow-50 opacity-30 blur-3xl" />
    </section>
  );
}
