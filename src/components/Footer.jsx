import React from 'react';
import { ShieldCheck, Globe, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium text-slate-800">
              SIINas • TKDN Dashboard — Dinas Perindustrian & Perdagangan Provinsi Banten
            </p>
            <p className="text-xs text-slate-500">
              Warna: biru muda, putih, oranye, dan hijau lembut — efisiensi, transparansi, dan kemajuan.
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="inline-flex items-center gap-1 text-xs">
              <ShieldCheck className="h-4 w-4" /> Data Terintegrasi
            </span>
            <span className="inline-flex items-center gap-1 text-xs">
              <Globe className="h-4 w-4" /> Layanan Publik Digital
            </span>
            <span className="inline-flex items-center gap-1 text-xs">
              Dibuat dengan <Heart className="h-4 w-4 text-rose-500" /> semangat kolaborasi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
