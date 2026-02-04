"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 right-20 h-96 w-96 rounded-full bg-helpdesk-blue-100 opacity-20 blur-3xl transition-all duration-1500 ${
            mounted ? "scale-100" : "scale-0"
          }`}
        />
        <div
          className={`absolute bottom-20 left-20 h-96 w-96 rounded-full bg-helpdesk-yellow-100 opacity-20 blur-3xl transition-all duration-1500 delay-300 ${
            mounted ? "scale-100" : "scale-0"
          }`}
        />
      </div>

      <div className="container relative mx-auto px-4 py-16 text-center">
        {/* 3D Chat Icon */}
        <div
          className={`mb-8 flex justify-center transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Main Chat Bubble - Light Blue */}
            <div className="relative z-10 transform rotate-12">
              <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl"
              >
                <path
                  d="M20 30C20 23.3726 25.3726 18 32 18H108C114.627 18 120 23.3726 120 30V82C120 88.6274 114.627 94 108 94H78L58 110V94H32C25.3726 94 20 88.6274 20 82V30Z"
                  fill="#7DD3FC"
                  opacity="0.9"
                />
                <circle cx="50" cy="52" r="6" fill="white" opacity="0.8" />
                <circle cx="70" cy="52" r="6" fill="white" opacity="0.8" />
                <circle cx="90" cy="52" r="6" fill="white" opacity="0.8" />
              </svg>
            </div>

            {/* Middle Chat Bubble - Medium Blue */}
            <div className="absolute top-4 left-4 z-20 transform -rotate-6">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-xl"
              >
                <path
                  d="M15 25C15 19.4772 19.4772 15 25 15H95C100.523 15 105 19.4772 105 25V72C105 77.5228 100.523 82 95 82H68L52 95V82H25C19.4772 82 15 77.5228 15 72V25Z"
                  fill="#38BDF8"
                />
                <circle cx="42" cy="48" r="5" fill="white" opacity="0.9" />
                <circle cx="60" cy="48" r="5" fill="white" opacity="0.9" />
                <circle cx="78" cy="48" r="5" fill="white" opacity="0.9" />
              </svg>
            </div>

            {/* Front Chat Bubble - Dark Blue */}
            <div className="absolute top-8 left-8 z-30">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl"
              >
                <path
                  d="M10 20C10 15.5817 13.5817 12 18 12H82C86.4183 12 90 15.5817 90 20V62C90 66.4183 86.4183 70 82 70H58L45 80V70H18C13.5817 70 10 66.4183 10 62V20Z"
                  fill="#2563EB"
                />
                <circle cx="35" cy="40" r="4" fill="white" />
                <circle cx="50" cy="40" r="4" fill="white" />
                <circle cx="65" cy="40" r="4" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div
          className={`mb-6 transition-all duration-700 delay-200 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-2">
            Layanan <span className="text-helpdesk-blue-600">Helpdesk TIK</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 transition-all duration-700 delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Layanan TIK Dinas Komunikasi dan Informatika Kota Tangerang V3
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-400 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link href="/services">
            <Button
              size="lg"
              className="group bg-helpdesk-blue-600 hover:bg-helpdesk-blue-700 text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Lihat Semua Layanan
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="/incident">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-medium rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              Laporkan Insiden
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
