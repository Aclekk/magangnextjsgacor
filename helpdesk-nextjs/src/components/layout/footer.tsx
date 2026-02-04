import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-helpdesk-blue-400 to-helpdesk-blue-600 opacity-20"></div>
              <div className="relative flex h-full w-full items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
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
            <span className="text-sm font-semibold text-gray-700">
              Helpdesk TIK
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <p>© 2026 Dinas Komunikasi dan Informatika Kota Tangerang</p>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="text-xs text-gray-400">V3.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
