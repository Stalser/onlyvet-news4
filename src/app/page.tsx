import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';
import Carousel from '@/components/Carousel';
import FadeIn from '@/components/FadeIn';
import ScaleIn from '@/components/ScaleIn';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';

// Контакты
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'consult@onlyvet.ru';
const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+7 900 000-00-00';
const PHONE_TEL = process.env.NEXT_PUBLIC_PHONE_TEL || '+79000000000';

const whenSuitable = [
  { icon: '🔍', title: 'Разобраться в симптомах', description: 'Понять, насколько серьёзна ситуация' },
  { icon: '📊', title: 'Интерпретировать анализы', description: 'Получить расшифровку исследований' },
  { icon: '🩺', title: 'Получить второе мнение', description: 'Убедиться в правильности диагноза' },
  { icon: '📋', title: 'Сопровождение заболеваний', description: 'Корректировка терапии' },
];

const consultationSteps = [
  { step: '01', title: 'Опишите ситуацию', description: 'Заполните форму и приложите документы' },
  { step: '02', title: 'Врач изучает информацию', description: 'Анализирует данные и готовит вопросы' },
  { step: '03', title: 'Онлайн-консультация', description: 'Видеозвонок или чат с врачом' },
  { step: '04', title: 'Письменное заключение', description: 'Рекомендации и план действий' },
];

const safetyPoints = [
  { icon: '👨‍⚕️', title: 'Квалифицированные врачи', description: 'Высшее образование и сертификаты' },
  { icon: '📚', title: 'Доказательная медицина', description: 'Научные данные и протоколы' },
  { icon: '🔒', title: 'Конфиденциальность', description: 'Защита ваших данных' },
  { icon: '⚖️', title: 'Прозрачность', description: 'Чёткие правила сервиса' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок — главный экран */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-light/50 to-secondary-light/50 rounded-full filter blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Логотип/Слоган — главный заголовок */}
            <FadeIn delay={0}>
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    За пределами заботы
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">Beyond Care</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            {/* Подзаголовок */}
            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Профессиональные онлайн-консультации{' '}
                <span className="text-primary">ветеринарного врача</span>
              </h2>
            </FadeIn>

            {/* Описание */}
            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Экспертная помощь для кошек и собак дистанционно. 
                Без стресса для вашего питомца и потери времени на поездку в клинику.
              </p>
            </FadeIn>

            {/* Иллюстрация с питомцами */}
            <FadeIn delay={500}>
              <div className="flex justify-center items-center gap-8 mb-10">
                <div className="text-center">
                  <div className="text-7xl mb-2 animate-float">🐱</div>
                  <p className="text-sm text-gray-500 font-medium">Кошки</p>
                </div>
                <div className="text-4xl text-gray-300">&</div>
                <div className="text-center">
                  <div className="text-7xl mb-2 animate-float" style={{ animationDelay: '0.5s' }}>🐶</div>
                  <p className="text-sm text-gray-500 font-medium">Собаки</p>
                </div>
              </div>
            </FadeIn>

            {/* Кнопки */}
            <FadeIn delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg transform hover:-translate-y-1"
                  style={{ color: '#FFFFFF' }}
                >
                  <span className="mr-2">📝</span>
                  Записаться на консультацию
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
                >
                  <span className="mr-2">ℹ️</span>
                  Узнать больше об услугах
                </Link>
              </div>
            </FadeIn>

            {/* Преимущества */}
            <FadeIn delay={800}>
              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-sm font-medium">Без стресса для питомца</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-sm font-medium">Опытные врачи</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-sm font-medium">Письменное заключение</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-sm font-medium">Доказательная медицина</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Когда онлайн-консультация подходит */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Когда подходит онлайн-консультация
              </h2>
              <p className="text-lg text-gray-600">Онлайн-формат эффективен для многих неэкстренных ситуаций</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whenSuitable.map((item, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-primary-light transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Специалисты — карусель */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Специалисты различных профилей
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                В нашей команде работают опытные ветеринарные врачи всех основных специальностей
              </p>
            </div>
          </FadeIn>

          <Carousel itemsPerPage={3} autoPlay autoPlayInterval={7000}>
            {/* Терапевт */}
            <ScaleIn delay={0}>
              <div className="bg-gradient-to-br from-primary-light/50 to-white p-8 rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
                  <span className="text-4xl">🩺</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Терапевты</h3>
                <p className="text-gray-600 mb-4">
                  Первичный приём, диагностика заболеваний, назначение лечения, ведение хронических пациентов.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Общий осмотр</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Диагностика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Хронические заболевания</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Диагност */}
            <ScaleIn delay={100}>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mb-6">
                  <span className="text-4xl">🔬</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Диагносты</h3>
                <p className="text-gray-600 mb-4">
                  Интерпретация анализов, УЗИ-диагностика, контроль динамики лечения.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Анализы крови</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>УЗИ органов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Контроль лечения</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Хирург */}
            <ScaleIn delay={200}>
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border-2 border-red-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center mb-6">
                  <span className="text-4xl">🔪</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Хирурги</h3>
                <p className="text-gray-600 mb-4">
                  Оперативные вмешательства, травматология, ортопедия.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Операции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Переломы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Артроскопия</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Дерматолог */}
            <ScaleIn delay={300}>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border-2 border-green-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6">
                  <span className="text-4xl">🌿</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Дерматологи</h3>
                <p className="text-gray-600 mb-4">
                  Диагностика и лечение заболеваний кожи, аллергии.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Дерматиты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Аллергии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Ушные инфекции</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Кардиолог */}
            <ScaleIn delay={400}>
              <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl border-2 border-pink-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center mb-6">
                  <span className="text-4xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Кардиологи</h3>
                <p className="text-gray-600 mb-4">
                  Диагностика и лечение заболеваний сердца.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>ЭКГ и ЭхоКГ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Аритмии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Обследование</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Невролог */}
            <ScaleIn delay={500}>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center mb-6">
                  <span className="text-4xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Неврологи</h3>
                <p className="text-gray-600 mb-4">
                  Диагностика и лечение заболеваний нервной системы.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Эпилепсия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Координация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Позвоночник</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>
          </Carousel>

          <FadeIn delay={600}>
            <div className="text-center mt-12">
              <Link href="/doctors" className="text-primary hover:text-primary-dark font-medium text-lg">
                Подробнее о специалистах →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Как проходит консультация */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Как проходит консультация
              </h2>
              <p className="text-base md:text-lg text-gray-600">Простой процесс из четырёх шагов</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {consultationSteps.map((item, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="relative">
                  <div className="text-5xl font-bold text-primary mb-4 drop-shadow-sm">{item.step}</div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
              <p className="text-lg text-gray-600">Профессиональные ветеринарные консультации дистанционно</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScaleIn key={service.id} delay={index * 100}>
                <ServiceCard service={service} />
              </ScaleIn>
            ))}
          </div>
          <FadeIn delay={600}>
            <div className="text-center mt-12">
              <Link href="/services" className="text-primary hover:text-primary-dark font-medium">
                Все услуги →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Безопасность */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Почему сервис безопасен
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyPoints.map((item, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="p-6 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Почему наши специалисты — лучшие */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Почему наши специалисты — лучшие
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Профессионализм, опыт и искренняя забота о каждом пациенте
              </p>
            </div>
          </FadeIn>

          <Carousel itemsPerPage={3} autoPlay autoPlayInterval={5000}>
            <ScaleIn delay={0}>
              <div className="text-center p-8 bg-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Высшее образование</h3>
                <p className="text-gray-600 leading-relaxed">
                  Все врачи имеют дипломы престижных ветеринарных вузов и действующие сертификаты специалистов
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={100}>
              <div className="text-center p-8 bg-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Непрерывное обучение</h3>
                <p className="text-gray-600 leading-relaxed">
                  Регулярное повышение квалификации, участие в конференциях и изучение современных протоколов
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={200}>
              <div className="text-center p-8 bg-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Любовь к животным</h3>
                <p className="text-gray-600 leading-relaxed">
                  Искренняя забота о каждом пациенте и внимательное отношение к проблемам владельцев
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={300}>
              <div className="text-center p-8 bg-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Большой опыт</h3>
                <p className="text-gray-600 leading-relaxed">
                  Тысячи проведённых консультаций и успешных случаев лечения различных заболеваний
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={400}>
              <div className="text-center p-8 bg-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Доказательная медицина</h3>
                <p className="text-gray-600 leading-relaxed">
                  Рекомендации основаны на современных научных данных и международных протоколах
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={500}>
              <div className="text-center p-8 bg-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Признанная экспертиза</h3>
                <p className="text-gray-600 leading-relaxed">
                  Специалисты с репутацией экспертов в своих областях и множеством положительных отзывов
                </p>
              </div>
            </ScaleIn>
          </Carousel>
        </div>
      </section>

      {/* Мы в социальных сетях */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light/40 via-white to-secondary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Мы в социальных сетях
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Подписывайтесь на OnlyVet — делимся историями пациентов, рекомендациями и полезными подсказками.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* ВКонтакте */}
            <ScaleIn delay={0}>
              <a
                href="https://vk.com/onlyvet_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-blue-100 hover:border-blue-400 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  <Image src="/images/svg/vk-logo2.svg" alt="VK" width={64} height={64} loading="lazy" decoding="async" className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">ВКонтакте</h3>
                <p className="text-gray-600 text-sm">Новости и разборы анализов.</p>
              </a>
            </ScaleIn>

            {/* Telegram */}
            <ScaleIn delay={100}>
              <a
                href="https://t.me/onlyvet_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-sky-100 hover:border-sky-400 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-sky-50 rounded-2xl group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-300">
                  <Image src="/images/svg/telegram-logo2.svg" alt="Telegram" width={64} height={64} loading="lazy" decoding="async" className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">Telegram</h3>
                <p className="text-gray-600 text-sm">Разборы сложных случаев и ответы на вопросы.</p>
              </a>
            </ScaleIn>

            {/* Instagram */}
            <ScaleIn delay={200}>
              <a
                href="https://instagram.com/onlyvet_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-purple-100 hover:border-purple-400 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-purple-50 rounded-2xl group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300">
                  <Image src="/images/svg/instagram-sign-logo2.svg" alt="Instagram" width={64} height={64} loading="lazy" decoding="async" className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Instagram*</h3>
                <p className="text-gray-600 text-sm">Истории пациентов и визуальные схемы.</p>
              </a>
            </ScaleIn>

            {/* Одноклассники */}
            <ScaleIn delay={300}>
              <a
                href="https://ok.ru/onlyvet"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-orange-100 hover:border-orange-400 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-orange-50 rounded-2xl group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
                  <Image src="/images/svg/ok-sign-logo2.svg" alt="OK" width={64} height={64} loading="lazy" decoding="async" className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Одноклассники</h3>
                <p className="text-gray-600 text-sm">Полезные советы и материалы.</p>
              </a>
            </ScaleIn>
          </div>
          <FadeIn delay={400}>
            <p className="text-xs text-gray-400 mt-8 text-center">
              * Instagram принадлежит компании Meta Platforms Inc., деятельность которой запрещена на территории РФ как экстремистская организация.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Финальный призыв к действию */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Здоровье питомца начинается с{' '}
                <span className="text-primary">правильного решения</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Не откладывайте заботу на потом. Ранняя диагностика и профессиональный взгляд врача могут спасти жизнь вашему другу.
              </p>
            </div>
          </FadeIn>

          {/* Карточки преимуществ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <ScaleIn delay={0}>
              <div className="text-center p-8 bg-gradient-to-br from-primary-light/30 to-white rounded-2xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ответ в течение 2 часов</h3>
                <p className="text-gray-600 text-sm">
                  Быстрая реакция на вашу заявку в рабочее время
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={100}>
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Письменное заключение</h3>
                <p className="text-gray-600 text-sm">
                  Подробные рекомендации с планом лечения и дозировками
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={200}>
              <div className="text-center p-8 bg-gradient-to-br from-primary-light/30 to-white rounded-2xl border-2 border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary-light rounded-full">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Без поездок в клинику</h3>
                <p className="text-gray-600 text-sm">
                  Консультация из дома в комфортной обстановке
                </p>
              </div>
            </ScaleIn>
          </div>

          {/* Кнопки */}
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg transform hover:-translate-y-1"
                style={{ color: '#FFFFFF' }}
              >
                <span className="mr-2">📝</span>
                Записаться на консультацию
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
              >
                <span className="mr-2">ℹ️</span>
                Узнать стоимость
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
