'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import ScaleIn from '@/components/ScaleIn';
import Carousel from '@/components/Carousel';

export default function DoctorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn delay={0}>
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Наши специалисты
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">Our Team</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Квалифицированные{' '}
                <span className="text-primary">ветеринарные врачи</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                В нашей команде работают опытные специалисты различных профилей.
                Каждый врач имеет высшее образование и регулярно повышает квалификацию.
              </p>
            </FadeIn>

            {/* Статистика */}
            <FadeIn delay={600}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-gray-600 font-medium">Специализаций</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-sm text-gray-600 font-medium">Консультаций</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5.0</div>
                  <div className="text-sm text-gray-600 font-medium">Рейтинг</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg transform hover:-translate-y-1"
                  style={{ color: '#FFFFFF' }}
                >
                  <span className="mr-2">📝</span>
                  Записаться на консультацию
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
                >
                  <span className="mr-2">ℹ️</span>
                  Посмотреть услуги
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Преимущества нашей команды */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Экспертиза, которой доверяют
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Наши специалисты обладают знаниями и опытом для решения самых сложных задач
              </p>
            </div>
          </FadeIn>

          <Carousel itemsPerPage={3} autoPlay autoPlayInterval={5000}>
            <ScaleIn delay={0}>
              <div className="p-8 bg-gradient-to-br from-primary-light/50 to-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl text-center">Дипломированные специалисты</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Все врачи окончили аккредитованные ветеринарные вузы и имеют действующие сертификаты
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={100}>
              <div className="p-8 bg-gradient-to-br from-primary-light/50 to-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl text-center">Постоянное развитие</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Регулярное повышение квалификации, участие в международных конференциях и изучение современных протоколов
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={200}>
              <div className="p-8 bg-gradient-to-br from-primary-light/50 to-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">💼</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl text-center">Тысячи успешных случаев</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Каждый специалист провёл тысячи консультаций и помог пациентам со сложными заболеваниями
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={300}>
              <div className="p-8 bg-gradient-to-br from-primary-light/50 to-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">❤️</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl text-center">Забота о каждом пациенте</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Искренняя любовь к животным и внимательное отношение к проблемам каждого владельца
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={400}>
              <div className="p-8 bg-gradient-to-br from-primary-light/50 to-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">🔬</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl text-center">Научный подход</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Рекомендации основаны на доказательной медицине и международных клинических протоколах
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={500}>
              <div className="p-8 bg-gradient-to-br from-primary-light/50 to-white rounded-3xl border-2 border-primary-light hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl text-center">Признанная репутация</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Специалисты с многолетним опытом и множеством положительных отзывов от благодарных клиентов
                </p>
              </div>
            </ScaleIn>
          </Carousel>
        </div>
      </section>

      {/* Специальности в ветеринарии */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Специальности в ветеринарии
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ветеринарная медицина — это множество различных направлений.
                Каждый специалист обладает уникальными знаниями и навыками в своей области.
              </p>
            </div>
          </FadeIn>

          {/* Карусель специальностей — адаптивная */}
          <Carousel itemsPerPage={3} autoPlay autoPlayInterval={5000}>
            {/* Терапевт */}
            <ScaleIn delay={0}>
              <div className="bg-white rounded-3xl border-2 border-primary-light p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary flex items-center justify-center mb-6">
                  <span className="text-3xl lg:text-4xl">🩺</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Ветеринарный терапевт</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                  Специалисты первичного приёма. Проводят осмотр, ставят предварительный диагноз, назначают лечение и при необходимости направляют к узким специалистам.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Первичный осмотр и сбор анамнеза</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Диагностика и лечение заболеваний</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Ведение хронических пациентов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Профилактические осмотры</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Диагност */}
            <ScaleIn delay={100}>
              <div className="bg-white rounded-3xl border-2 border-blue-200 p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-500 flex items-center justify-center mb-6">
                  <span className="text-3xl lg:text-4xl">🔬</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Ветеринарный диагност</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                  Специалисты лабораторной и инструментальной диагностики. Расшифровывают анализы, проводят УЗИ и другие исследования.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Анализы крови и мочи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>УЗИ внутренних органов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Рентгенография</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Контроль динамики лечения</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Хирург */}
            <ScaleIn delay={200}>
              <div className="bg-white rounded-3xl border-2 border-red-200 p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-red-500 flex items-center justify-center mb-6">
                  <span className="text-3xl lg:text-4xl">🔪</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Ветеринарный хирург</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                  Оперативные вмешательства любой сложности. Травматология, ортопедия, мягкотканные операции.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Плановые и экстренные операции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Лечение переломов и вывихов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Артроскопические операции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Постоперационное ведение</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Дерматолог */}
            <ScaleIn delay={300}>
              <div className="bg-white rounded-3xl border-2 border-green-200 p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-green-500 flex items-center justify-center mb-6">
                  <span className="text-3xl lg:text-4xl">🌿</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Ветеринарный дерматолог</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                  Диагностика и лечение заболеваний кожи, шерсти, когтей. Аллергология и иммунология.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Лечение дерматитов и экзем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Диагностика аллергий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Подбор гипоаллергенных диет</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Лечение ушных инфекций</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Кардиолог */}
            <ScaleIn delay={400}>
              <div className="bg-white rounded-3xl border-2 border-pink-200 p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-pink-500 flex items-center justify-center mb-6">
                  <span className="text-3xl lg:text-4xl">❤️</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Ветеринарный кардиолог</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                  Диагностика и лечение заболеваний сердечно-сосудистой системы. Функциональная диагностика.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>ЭКГ и ЭхоКГ (УЗИ сердца)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Лечение аритмий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Сердечная недостаточность</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Предоперационное обследование</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            {/* Невролог */}
            <ScaleIn delay={500}>
              <div className="bg-white rounded-3xl border-2 border-purple-200 p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-purple-500 flex items-center justify-center mb-6">
                  <span className="text-3xl lg:text-4xl">🧠</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Ветеринарный невролог</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                  Диагностика и лечение заболеваний нервной системы: головного и спинного мозга, периферических нервов.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Лечение эпилепсии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Нарушения координации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Заболевания позвоночника</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Парезы и параличи</span>
                  </li>
                </ul>
              </div>
            </ScaleIn>
          </Carousel>

          {/* Преимущества онлайн-консультаций */}
          <FadeIn delay={600}>
            <div className="mt-16 bg-gradient-to-br from-primary-light to-white rounded-3xl p-8 md:p-12 text-center border-2 border-primary-light">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Почему онлайн-консультация — это удобно?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl mb-3">🏠</div>
                  <h4 className="font-bold text-gray-900 mb-2">Не нужно ехать</h4>
                  <p className="text-gray-600 text-sm">
                    Консультация из дома в комфортной обстановке
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⏰</div>
                  <h4 className="font-bold text-gray-900 mb-2">Экономия времени</h4>
                  <p className="text-gray-600 text-sm">
                    Без ожидания в очереди и дороги до клиники
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <h4 className="font-bold text-gray-900 mb-2">Доступная цена</h4>
                  <p className="text-gray-600 text-sm">
                    Стоимость ниже очного приёма на 30-50%
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Как мы работаем */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Как мы работаем
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Простой и понятный процесс консультации
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ScaleIn delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Оставьте заявку</h3>
                <p className="text-gray-600 text-sm">
                  Заполните форму на сайте, выбрав специалиста или услугу
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Прикрепите материалы</h3>
                <p className="text-gray-600 text-sm">
                  Анализы, выписки, фото — всё, что поможет врачу
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Получите консультацию</h3>
                <p className="text-gray-600 text-sm">
                  Врач изучит информацию и проведёт видеовстречу
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Письменное заключение</h3>
                <p className="text-gray-600 text-sm">
                  Рекомендации и план действий в удобном формате
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Финальный призыв к действию с социальным доказательством */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light via-white to-secondary-light/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="mb-8">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-3xl">⭐</span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Готовы записаться на консультацию?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Более 2000 довольных владельцев уже получили квалифицированную помощь для своих питомцев.
                Присоединяйтесь к нам!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg transform hover:-translate-y-1"
                style={{ color: '#FFFFFF' }}
              >
                <span className="mr-2">📝</span>
                Записаться сейчас
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
              >
                <span className="mr-2">📋</span>
                Узнать стоимость
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              🔒 Безопасная оплата • 📄 Письменное заключение • ⚡ Быстрая запись
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
