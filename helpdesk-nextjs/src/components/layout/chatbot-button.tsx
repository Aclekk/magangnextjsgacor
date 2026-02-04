"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="group h-14 w-14 rounded-full bg-gradient-to-br from-helpdesk-blue-600 to-helpdesk-blue-500 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 p-0"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white transition-transform group-hover:scale-110 duration-300" />
          )}
        </Button>

        {/* Pulse Animation Ring */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-helpdesk-blue-400 opacity-75 animate-ping" />
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-helpdesk-blue-600 to-helpdesk-blue-500 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-white" />
              </div>
              <div>
                <h3 className="font-semibold">Asisten Helpdesk</h3>
                <p className="text-xs text-blue-100">Online - Siap Membantu</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 h-64 bg-gray-50">
            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 max-w-[80%]">
                <p className="text-sm text-gray-700">
                  Halo! 👋 Ada yang bisa saya bantu hari ini?
                </p>
              </div>

              <div className="flex gap-2 flex-wrap mt-2">
                <button className="text-xs bg-helpdesk-blue-100 hover:bg-helpdesk-blue-200 text-helpdesk-blue-700 px-3 py-2 rounded-lg transition-colors duration-200">
                  📋 Buat Tiket
                </button>
                <button className="text-xs bg-helpdesk-blue-100 hover:bg-helpdesk-blue-200 text-helpdesk-blue-700 px-3 py-2 rounded-lg transition-colors duration-200">
                  🔍 Cek Status
                </button>
                <button className="text-xs bg-helpdesk-blue-100 hover:bg-helpdesk-blue-200 text-helpdesk-blue-700 px-3 py-2 rounded-lg transition-colors duration-200">
                  ❓ FAQ
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ketik pesan..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-helpdesk-blue-500 focus:border-transparent"
              />
              <Button
                size="sm"
                className="bg-helpdesk-blue-600 hover:bg-helpdesk-blue-700"
              >
                Kirim
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
