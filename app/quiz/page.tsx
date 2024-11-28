'use client'

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const SimSwapQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      question: 'Apa yang dimaksud dengan SIM swapping?',
      options: [
        'Menukar kartu SIM dengan teman',
        'Teknik pencurian identitas dimana penipu mengambil alih nomor telepon korban',
        'Mengupgrade kartu SIM ke teknologi baru',
        'Metode untuk mendapatkan pulsa gratis'
      ],
      correctAnswer: 1,
      explanation: 'SIM swapping adalah bentuk pencurian identitas di mana penipu mengambil alih nomor telepon seseorang dengan meyakinkan provider untuk memindahkan nomor tersebut ke kartu SIM baru.'
    },
    {
      question: 'Mengapa registrasi kartu SIM dengan NIK dan KK penting?',
      options: [
        'Hanya formalitas administrasi',
        'Untuk memudahkan penjualan kartu',
        'Membantu mencegah SIM swapping dengan verifikasi identitas',
        'Tidak ada manfaat khusus'
      ],
      correctAnswer: 2,
      explanation: 'Registrasi dengan NIK dan KK membantu memverifikasi identitas pemilik kartu SIM yang sah, membuat lebih sulit bagi penipu untuk melakukan SIM swapping.'
    },
    {
      question: 'Apa yang harus dilakukan jika Anda mencurigai menjadi korban SIM swapping?',
      options: [
        'Menunggu sampai masalah selesai sendiri',
        'Segera hubungi provider dan bank, lalu laporkan ke pihak berwajib',
        'Membeli kartu SIM baru',
        'Mengabaikan masalah tersebut'
      ],
      correctAnswer: 1,
      explanation: 'Tindakan cepat sangat penting. Hubungi provider untuk memblokir kartu dan bank untuk mengamankan akun, serta laporkan kejadian ke pihak berwajib.'
    },
    {
      question: 'Langkah keamanan apa yang bisa diambil untuk mencegah SIM swapping?',
      options: [
        'Menggunakan autentikasi ganda dan PIN khusus untuk kartu SIM',
        'Membagikan informasi pribadi di media sosial',
        'Menggunakan password yang sama untuk semua akun',
        'Tidak perlu melakukan apa-apa'
      ],
      correctAnswer: 0,
      explanation: 'Menggunakan autentikasi ganda dan PIN khusus untuk kartu SIM adalah langkah keamanan penting untuk melindungi dari SIM swapping.'
    },
    {
      question: 'Berdasarkan prinsip Pancasila, mengapa penting bagi masyarakat untuk saling membantu mencegah SIM swapping?',
      options: [
        'Tidak ada hubungannya dengan Pancasila',
        'Hanya tanggung jawab pemerintah',
        'Mencerminkan gotong royong dan keadilan sosial',
        'Untuk mendapatkan hadiah'
      ],
      correctAnswer: 2,
      explanation: 'Gotong royong dalam mencegah kejahatan siber mencerminkan nilai Pancasila, terutama sila kelima tentang keadilan sosial dan sila ketiga tentang persatuan Indonesia.'
    }
  ];

  const handleAnswerClick = (answerIndex: (number | null)) => {
    if (!answered) {
      setSelectedAnswer(answerIndex);
      setAnswered(true);
      if (answerIndex === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-900 mb-8">Kuis Keamanan SIM Swapping</h1>

          {showScore ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <h2 className="text-xl font-bold mb-4">
                Skor Anda: {score} dari {questions.length}
              </h2>
              <p className="mb-6 text-gray-600">
                {score === questions.length
                  ? 'Selamat! Anda memahami dengan baik tentang keamanan SIM swapping!'
                  : 'Terus pelajari tentang keamanan digital untuk melindungi diri Anda.'}
              </p>
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center mx-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Mulai Ulang Kuis
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Pertanyaan {currentQuestion + 1} dari {questions.length}
                  </span>
                  <span className="text-sm text-gray-500">
                    Skor: {score}
                  </span>
                </div>

                <h2 className="text-lg font-semibold mb-6">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border transition-colors ${
                        answered
                          ? index === questions[currentQuestion].correctAnswer
                            ? 'bg-green-50 border-green-200'
                            : index === selectedAnswer
                            ? 'bg-red-50 border-red-200'
                            : 'border-gray-200'
                          : selectedAnswer === index
                          ? 'bg-blue-50 border-blue-200'
                          : 'hover:bg-gray-50 border-gray-200'
                      }`}
                      onClick={() => handleAnswerClick(index)}
                      disabled={answered}
                    >
                      <div className="flex items-center">
                        {answered && index === questions[currentQuestion].correctAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                        )}
                        {answered && index === selectedAnswer && index !== questions[currentQuestion].correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-500 mr-2" />
                        )}
                        {option}
                      </div>
                    </button>
                  ))}
                </div>

                {answered && (
                  <Alert className="mt-6 bg-blue-50 border-blue-200">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-800">
                      {questions[currentQuestion].explanation}
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              <div className="p-6 bg-gray-50 border-t">
                <button
                  onClick={handleNextQuestion}
                  className={`flex items-center justify-center w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ${
                    !answered && 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!answered}
                >
                  {currentQuestion === questions.length - 1 ? 'Lihat Hasil' : 'Pertanyaan Berikutnya'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimSwapQuiz;