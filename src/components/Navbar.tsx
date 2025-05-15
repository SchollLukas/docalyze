'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Docalyze
        </Link>
        <div className="hidden md:flex space-x-6">
          <a href="#leistungen" className="text-gray-700 hover:text-gray-900">
            Leistungen
          </a>
          <a href="#ueber" className="text-gray-700 hover:text-gray-900">
            Über mich
          </a>
          <a href="#kontakt" className="text-gray-700 hover:text-gray-900">
            Kontakt
          </a>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menü */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#leistungen" className="block text-gray-700">
            Leistungen
          </a>
          <a href="#ueber" className="block text-gray-700">
            Über mich
          </a>
          <a href="#kontakt" className="block text-gray-700">
            Kontakt
          </a>
        </div>
      )}
    </nav>
  )
}

