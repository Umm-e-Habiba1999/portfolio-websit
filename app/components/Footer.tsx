'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
              Portfolio
            </Link>
            <p className="text-gray-500 text-sm mt-2">
              Building the future with AI and Web Technologies
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm">
              © 2026 Umm-e-Habiba. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Designed and Developed with Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
