import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Building2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden min-h-[560px] md:min-h-[640px]">
      {/* Base soft gradient background (visible even if 3D fails) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />

      {/* Spline 3D background */}
      <div className="absolute inset-0 z-0 h-full">
        <Spline
          scene="https://prod.spline.design/0gQ7GqZ2q0d1Tq8K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Light rays + gradient overlay (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-white/60 to-emerald-50/60" />
        <div className="absolute -left-10 top-0 h-80 w-80 rotate-12 rounded-full bg-gradient-to-br from-orange-200/40 to-transparent blur-2xl" />
        <div className="absolute right-0 top-10 h-72 w-72 -rotate-6 rounded-full bg-gradient-to-br from-sky-200/40 to-transparent blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-sky-100/80 p-3 text-sky-700 shadow-sm backdrop-blur">
            <Building2 className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Transformasi Layanan Publik: SIINas & TKDN
            </h1>
            <p className="mt-2 max-w-2xl text-slate-700">
              Seorang mahasiswa informatika mempresentasikan dashboard cerdas di Kantor Dinas Perindustrian dan Perdagangan Provinsi Banten.
              Nuansa cerah, kolaboratif, dan berorientasi pada masa depan.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Anime-style • Futuristik • Edukatif
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
