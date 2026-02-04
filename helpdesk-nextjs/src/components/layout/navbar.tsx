"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo & Title */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="relative h-10 w-10">
            {/* Logo Icon - Gradient Blue */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-helpdesk-blue-400 to-helpdesk-blue-600 opacity-20"></div>
            <div className="relative flex h-full w-full items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 20V16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-helpdesk-blue-600"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">
              Helpdesk TIK
            </span>
            <span className="text-xs text-gray-500">Kota Tangerang</span>
          </div>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Login Button */}
          <Link href="/login">
            <Button className="bg-helpdesk-blue-600 hover:bg-helpdesk-blue-700">
              <LogIn className="mr-2 h-4 w-4" />
              Masuk
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
