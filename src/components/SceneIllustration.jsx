import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, BarChart3, GitBranch, Gauge, Sun, Database, Zap } from 'lucide-react';

const pulse = {
  animate: {
    scale: [1, 1.06, 1],
    opacity: [0.9, 1, 0.9],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function SceneIllustration() {
  return (
    <section className="relative mx-auto max-w-6xl px-6">
      {/* Holographic UI overlay */}
      <div className="pointer-events-none absolute inset-x-0 -top-8 z-0 mx-auto h-40 max-w-4xl bg-gradient-to-r from-sky-200/30 via-emerald-200/30 to-orange-200/30 blur-3xl" />

      <div className="relative z-10 grid gap-8 md:grid-cols-2">
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
              <GitBranch className="h-4 w-4" /> Alur Data SIINas
            </li>
            <li className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 text-orange-800">
              <Gauge className="h-4 w-4" /> Indikator TKDN
            </li>
            <li className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-slate-800">
              <Database className="h-4 w-4" /> Integrasi Data
            </li>
          </ul>
        </motion.div>

        {/* Right: Futuristic "dashboard" with micro-animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sky-700">
                <BarChart3 className="h-4 w-4" /> Aplikasi Masuk
              </div>
              <div className="h-24 w-full rounded bg-white p-2 shadow-inner">
                <div className="flex h-full items-end gap-1">
                  {[8, 12, 6, 14, 10, 16, 9].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-3 rounded-t bg-gradient-to-t from-sky-300 to-sky-500"
                      initial={{ height: `${h * 4}%` }}
                      animate={{ height: [
                        `${Math.max(4, h - 2) * 4}%`,
                        `${(h + 3) * 4}%`,
                        `${h * 4}%`,
                      ] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <Gauge className="h-4 w-4" /> Persentase TKDN
              </div>
              <div className="relative h-24 w-full overflow-hidden rounded bg-white p-2 shadow-inner">
                <motion.div
                  className="absolute bottom-2 left-2 right-2 h-3 rounded-full bg-emerald-200"
                  {...pulse}
                />
                <motion.div
                  className="absolute bottom-2 left-2 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                  initial={{ width: '58%' }}
                  animate={{ width: ['52%', '66%', '58%'] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute right-4 top-2 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
                  initial={{ opacity: 0, y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Zap className="h-3 w-3" /> Real-time
                </motion.div>
              </div>
            </div>
            <div className="rounded-xl border border-orange-100 bg-orange-50 p-4 md:col-span-2">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-orange-700">
                <GitBranch className="h-4 w-4" /> Alur Verifikasi & Validasi
              </div>
              <div className="h-28 w-full rounded bg-white p-3 shadow-inner">
                <div className="relative grid h-full grid-cols-6 items-center gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="relative h-2 rounded-full bg-orange-300/70"
                      initial={{ opacity: 0.9 }}
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.2, delay: i * 0.2, repeat: Infinity }}
                    >
                      <motion.span
                        className="absolute -top-1 h-4 w-4 -translate-y-1/2 rounded-full bg-orange-500"
                        initial={{ left: '-4%' }}
                        animate={{ left: ['-4%', '50%', '104%'] }}
                        transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </motion.div>
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
