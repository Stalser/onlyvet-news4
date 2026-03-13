'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ScaleIn from '@/components/ScaleIn';

// Контакты
const CONTACTS = {
  telegram: 'https://t.me/onlyvet_clinic',
  whatsapp: 'https://wa.me/79000000000',
  max: 'https://max.ru/onlyvet', // Замените на актуальный URL
  email: 'mailto:consult@onlyvet.ru',
  phone: 'tel:+79000000000',
};

const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'consult@onlyvet.ru';
const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+7 900 000-00-00';
const PHONE_TEL = process.env.NEXT_PUBLIC_PHONE_TEL || '+79000000000';

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gradient-to-br from-primary-light via-white to-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* Хлебные крошки */}
          <FadeIn>
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Главная</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">Запись на консультацию</span>
            </nav>
          </FadeIn>

          {/* Заголовок */}
          <FadeIn delay={100}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Запись на консультацию
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Выберите удобный способ связи с нами
              </p>
            </div>
          </FadeIn>

          {/* Способы связи */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Telegram */}
              <ScaleIn delay={0}>
                <a
                  href={CONTACTS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-3xl border-2 border-sky-200 p-8 hover:shadow-2xl hover:border-sky-400 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image src="/images/svg/telegram-logo2.svg" alt="Telegram" width={40} height={40} className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">Telegram</h3>
                      <p className="text-sm text-gray-500">Быстрые сообщения</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Напишите нам в Telegram — удобный способ для быстрых вопросов и записи на консультацию.
                  </p>
                  <div className="flex items-center gap-2 text-sky-600 font-semibold">
                    <span>Написать</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </ScaleIn>

              {/* WhatsApp */}
              <ScaleIn delay={100}>
                <a
                  href={CONTACTS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-3xl border-2 border-green-200 p-8 hover:shadow-2xl hover:border-green-400 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image src="/images/svg/whatsapp-sign-logo2.svg" alt="WhatsApp" width={40} height={40} className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</h3>
                      <p className="text-sm text-gray-500">Популярный мессенджер</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Пишите в WhatsApp — ответим в рабочее время, поможем с записью и ответим на вопросы.
                  </p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <span>Написать</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </ScaleIn>

              {/* Max Messenger */}
              <ScaleIn delay={200}>
                <a
                  href={CONTACTS.max}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-3xl border-2 border-purple-200 p-8 hover:shadow-2xl hover:border-purple-400 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image src="/images/svg/max-messenger-sign-logo2.svg" alt="Max" width={40} height={40} className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Max Messenger</h3>
                      <p className="text-sm text-gray-500">Современный мессенджер</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Удобный и безопасный мессенджер для связи с нами. Быстро и конфиденциально.
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-semibold">
                    <span>Написать</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </ScaleIn>

              {/* Email */}
              <ScaleIn delay={300}>
                <a
                  href={CONTACTS.email}
                  className="group block bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-2xl hover:border-primary-light hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image src="/images/svg/email-icon.svg" alt="Email" width={40} height={40} className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">Email</h3>
                      <p className="text-sm text-gray-500">Для подробных вопросов</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Напишите на почту — подойдёт для подробных вопросов и прикрепления документов.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span>{EMAIL}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </ScaleIn>
            </div>
          </FadeIn>

          {/* Телефон */}
          <FadeIn delay={400}>
            <div className="bg-white rounded-3xl border-2 border-primary-light p-8 mb-16">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Позвонить нам</h3>
                    <p className="text-gray-600">Рабочее время: Пн-Пт 9:00-18:00</p>
                  </div>
                </div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-2xl hover:bg-green-600 hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Призыв к действию */}
          <FadeIn delay={600}>
            <div className="bg-gradient-to-br from-primary-light to-white rounded-3xl p-8 md:p-12 text-center border-2 border-primary-light">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Остались вопросы?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Мы поможем подобрать специалиста и ответим на все вопросы о наших услугах
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                  style={{ color: '#FFFFFF' }}
                >
                  Посмотреть услуги
                </Link>
                <Link
                  href="/doctors"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                >
                  Наши специалисты
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
