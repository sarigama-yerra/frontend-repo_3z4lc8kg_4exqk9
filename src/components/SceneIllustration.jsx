import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, BarChart3, FlowChart, Gauge, Sun, Database } from 'lucide-react';

export default function SceneIllustration() {
  return (
    <section className="relative mx-auto max-w-6xl px-6">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: Anime-style scene description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-sky-100 p-2 text-sky-700">
              <Monitor className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">
              Presentasi Dashboard SIINas di Ruang Pemerintahan Modern
            </h2>
          </div>
          <p className="mt-3 text-slate-600">
            Cahaya matahari menembus jendela besar, memantul pada layar berisi grafik, arus data, dan indikator monitoring TKDN untuk industri kecil.
            Karakter digambar dengan gaya anime detail: ekspresif, mata berkilau, dan palet warna profesional yang ceria.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2 rounded-lg bg-sky-50 p-3 text-sky-800">
              <BarChart3 className="h-4 w-4" /> Grafik Interaktif
            </li>
            <li className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-emerald-800">
              <FlowChart className="h-4 w-4" /> Alur Data SIINas
            </li>
            <li className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 text-orange-800">
              <Gauge className="h-4 w-4" /> Indikator TKDN
            </li>
            <li className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-slate-800">
              <Database className="h-4 w-4" /> Integrasi Data
            </li>
          </ul>
        </motion.div>

        {/* Right: Futuristic "dashboard" illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="absolute -top-8 -right-8 hidden rounded-xl bg-yellow-100/80 p-2 text-yellow-700 shadow md:block">
            <Sun className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-medium text-slate-500">SIINas • TKDN Monitoring</div>
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              <span className="h-2 w-2 rounded-full bg-sky-400" />
            </div>
          </div>

          {/* Dashboard cards */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
              <div className="mb-2 text-sm font-semibold text-sky-700">Aplikasi Masuk</div>
              <div className="h-24 w-full rounded bg-white p-2 shadow-inner">
                <div className="h-full w-full bg-gradient-to-tr from-sky-200 to-sky-400" />
              </div>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="mb-2 text-sm font-semibold text-emerald-700">Persentase TKDN</div>
              <div className="h-24 w-full rounded bg-white p-2 shadow-inner">
                <div className="h-full w-full bg-gradient-to-tr from-emerald-200 to-emerald-400" />
              </div>
            </div>
            <div className="rounded-xl border border-orange-100 bg-orange-50 p-4 md:col-span-2">
              <div className="mb-2 text-sm font-semibold text-orange-700">Alur Verifikasi & Validasi</div>
              <div className="h-28 w-full rounded bg-white p-3 shadow-inner">
                <div className="grid h-full grid-cols-6 items-center gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-2 rounded-full bg-orange-300" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hologram badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              'Transparansi',
              'Efisiensi',
              'Kolaborasi',
              'Monitoring Real-time',
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
