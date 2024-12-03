'use client'

import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, AlertTriangle, History, Book, Users, Building2, Lock, Bell } from 'lucide-react';
import { Video } from './video';


const SimSwapWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Keamanan SIM Digital Indonesia</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
            <Link href="/quiz" className="hover:text-blue-200">Quiz</Link>
              {/* <a href="#history" className="hover:text-blue-200">Sejarah</a>
              <a href="#action" className="hover:text-blue-200">Tindakan</a>
              <a href="#future" className="hover:text-blue-200">Masa Depan</a> */}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Alert Banner */}
        <Alert className="mb-8 bg-yellow-50 border-yellow-200">
          <div className='flex align-middle'>
          <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
          <AlertDescription className="text-yellow-800">
            Waspada terhadap ancaman SIM swapping. Lindungi identitas digital Anda.
          </AlertDescription>
          </div>
        </Alert>

        {/* ATHG Section */}
        <section id="threat" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Mengapa SIM Swapping Dianggap ATHG?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3 text-lg">Ancaman (Threat)</h3>
              <p>SIM swapping menimbulkan ancaman signifikan bagi individu dan organisasi dengan memungkinkan akses tidak sah ke informasi pribadi dan keuangan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3 text-lg">Tantangan (Challenge)</h3>
              <p>Peningkatan kecanggihan teknik SIM swap menantang langkah-langkah keamanan yang ada dan membutuhkan adaptasi berkelanjutan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3 text-lg">Hambatan (Obstacle)</h3>
              <p>Menghambat kepercayaan terhadap layanan keuangan digital, berpotensi memperlambat adopsi perbankan digital dan e-commerce.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3 text-lg">Gangguan (Disruption)</h3>
              <p>SIM swapping mengganggu komunikasi pribadi dan transaksi keuangan, berpotensi menyebabkan kerugian finansial dan pencurian identitas.</p>
            </div>
          </div>
        </section>

        {/* Historical Context */}
        <section id="history" className="mb-12">
          <div className="flex items-center mb-6">
            <History className="h-6 w-6 mr-2 text-blue-900" />
            <h2 className="text-2xl font-bold text-blue-900">Konteks Historis</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4 text-lg">Insiden Penting:</h3>
            <div className="space-y-4">
              <p>2019: Akun Twitter CEO Jack Dorsey diretas melalui SIM swapping dan memungkinkan penyerang untuk mengeposkan tweet yang tidak sah dari akunnya.</p>
              <p>2018: Investor cryptocurrency Michael Terpin kehilangan $24 juta akibat penipuan SIM swap.</p>
              <p>2020: Jurnalis Indonesia Ilham Bintang menjadi korban penipuan SIM swap saat berada di luar negeri.</p>
            </div>
          </div>
        </section>

        <Video />

        {/* Government Action */}
        <section id="action" className="mb-12">
          <div className="flex items-center mb-6">
            <Building2 className="h-6 w-6 mr-2 text-blue-900" />
            <h2 className="text-2xl font-bold text-blue-900">Tindakan Pemerintah</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4 text-lg">Kebijakan Utama:</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Registrasi SIM Card Wajib:</h4>
                <p>Kominfo mewajibkan semua pengguna ponsel mendaftarkan kartu SIM menggunakan NIK dan nomor KK untuk memastikan setiap kartu SIM terhubung dengan individu yang terverifikasi.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Proses Verifikasi yang Ditingkatkan:</h4>
                <p>Operator telekomunikasi diwajibkan menerapkan prosedur verifikasi yang lebih ketat untuk penggantian kartu SIM.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Preparedness */}
        <section id="future" className="mb-12">
          <div className="flex items-center mb-6">
            <Book className="h-6 w-6 mr-2 text-blue-900" />
            <h2 className="text-2xl font-bold text-blue-900">Kesiapan Masa Depan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3 text-lg">Rekomendasi untuk Pemerintah</h3>
              <p>Meningkatkan regulasi dengan mewajibkan autentikasi multi-faktor, menyelenggarakan kampanye edukasi publik, dan mengembangkan protokol standar untuk penerbitan dan penggantian SIM.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3 text-lg">Rekomendasi untuk Warga</h3>
              <p>Pantau aktivitas akun secara rutin, lindungi data pribadi, dan manfaatkan fitur keamanan seperti PIN, kata sandi, dan autentikasi biometrik.</p>
            </div>
          </div>
        </section>

        {/* Community Engagement */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 mr-2 text-blue-900" />
            <h2 className="text-2xl font-bold text-blue-900">Keterlibatan Masyarakat</h2>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <p className="mb-4">Membangun kesadaran keamanan siber melalui program komunitas dan lokakarya, mendorong kerjasama antara lembaga pemerintah, institusi keuangan, dan penyedia telekomunikasi.</p>
            <p>Berdasarkan prinsip Pancasila, kami mendorong kesadaran komunitas dan tanggung jawab kolektif dalam memerangi ancaman siber.</p>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-blue-800">Langkah-langkah Perlindungan Diri</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
                <h4 className="text-lg font-semibold ml-3">Kewaspadaan Personal</h4>
              </div>
              <p>Pantau aktivitas akun Anda secara rutin dan segera laporkan perilaku mencurigakan. Perhatikan notifikasi transaksi dan perubahan pada akun Anda.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Bell className="h-8 w-8 text-blue-600" />
                <h4 className="text-lg font-semibold ml-3">Perlindungan Data</h4>
              </div>
              <p>Hindari membagikan informasi pribadi di platform yang tidak aman. Waspadai upaya phishing dan selalu verifikasi identitas pihak yang meminta informasi Anda.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
                <h4 className="text-lg font-semibold ml-3">Fitur Keamanan</h4>
              </div>
              <p>Aktifkan fitur keamanan akun seperti PIN, kata sandi, dan autentikasi biometrik. Gunakan autentikasi dua faktor untuk perlindungan tambahan.</p>
            </div>
          </div>
        </section>

        <section id="future" className="mb-12  flex items-center justify-center">
          <Link href="/quiz">
            <Button className="bg-blue-900 text-white hover:bg-blue-800 p-6 text-xl font-bold">
              Mulai Kuis Keamanan SIM Swapping
            </Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Tentang Kami</h3>
              <p className="text-sm">Situs ini merupakan bagian dari inisiatif pemerintah Indonesia untuk meningkatkan kesadaran tentang keamanan digital.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Kontak</h3>
              <p className="text-sm">Email: info@bssn.go.id</p>
              <p className="text-sm">Telepon: +62 21-3190-0915</p>
            </div>
            {/* <div>
              <h3 className="font-semibold mb-3">Tautan Penting</h3>
              <div className="space-y-2 text-sm">
                <p><a href="#" className="hover:text-blue-200">Kebijakan Privasi</a></p>
                <p><a href="#" className="hover:text-blue-200">Syarat dan Ketentuan</a></p>
                <p><a href="#" className="hover:text-blue-200">Peta Situs</a></p>
              </div>
            </div> */}
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm">
            <p>&copy; 2024 Keamanan SIM Digital Indonesia. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimSwapWebsite;