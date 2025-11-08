import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, ClipboardCheck, Lightbulb } from 'lucide-react';

const people = [
  {
    role: 'Mahasiswa Informatika',
    desc:
      'Mempresentasikan arsitektur dashboard berwarna dengan indikator TKDN dan alur SIINas.',
    Icon: User,
    color: 'from-sky-400 to-sky-600',
  },
  {
    role: 'Staf Dinas Perindustrian & Perdagangan',
    desc:
      'Berkoordinasi meninjau berkas dan memantau progres aplikasi industri kecil.',
    Icon: Users,
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    role: 'Verifier TKDN',
    desc:
      'Memastikan kelengkapan data, validasi komponen lokal, dan transparansi proses.',
    Icon: ClipboardCheck,
    color: 'from-orange-400 to-orange-600',
  },
  {
    role: 'Inovator Digital',
    desc:
      'Mendorong efisiensi layanan publik melalui antarmuka ramah pengguna dan edukatif.',
    Icon: Lightbulb,
    color: 'from-sky-400 to-emerald-500',
  },
];

export default function CharactersShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h3 className="text-2xl font-semibold text-slate-900">
        Karakter & Kolaborasi
      </h3>
      <p className="mt-2 max-w-3xl text-slate-600">
        Karakter bergaya anime dengan ekspresi hangat dan mata berkilau, menggambarkan semangat
        kerja tim, transparansi, dan kemajuan layanan publik.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {people.map(({ role, desc, Icon, color }, idx) => (
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl`}
            />
            <div className="mb-3 inline-flex rounded-lg bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="text-base font-semibold text-slate-900">{role}</div>
            <p className="mt-1 text-sm text-slate-600">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
