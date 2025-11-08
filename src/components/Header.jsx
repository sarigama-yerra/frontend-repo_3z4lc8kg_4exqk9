import React from 'react';
import { Sparkles, Building2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-sky-100 p-3 text-sky-700 shadow-sm">
            <Building2 className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Transformasi Layanan Publik: SIINas & TKDN
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600">
              Seorang mahasiswa informatika mempresentasikan dashboard cerdas di Kantor Dinas Perindustrian dan Perdagangan Provinsi Banten.
              Nuansa cerah, kolaboratif, dan berorientasi pada masa depan.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Anime-style • Futuristik • Edukatif
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
