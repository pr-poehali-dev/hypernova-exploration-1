import { useState } from "react";

const slides = [
  {
    id: "01",
    label: "Титульный слайд",
    title: "МОДА В СССР",
    subtitle: "1945–1991",
    description: "Основные тенденции развития",
    meta: "История России · 11 класс",
    type: "hero",
  },
  {
    id: "02",
    label: "Введение",
    title: "КОНТЕКСТ ЭПОХИ",
    description:
      "После Великой Отечественной войны СССР восстанавливал страну. Мода отражала идеологию: коллективизм важнее личного стиля. Государство контролировало производство одежды через плановую экономику.",
    accent: "1945 год",
    type: "text",
  },
  {
    id: "03",
    label: "Послевоенный период",
    title: "ПОСЛЕВОЕННЫЙ СТИЛЬ",
    subtitle: "1945–1953",
    items: [
      "Строгие силуэты — пальто, костюмы, платья до колена",
      "Дефицит ткани — минимализм из необходимости",
      "Образцом служили трофейные вещи и западные журналы",
      "«Трофейная мода» — влияние Европы через трофеи войны",
    ],
    accent: "Скромность и практичность",
    type: "list",
  },
  {
    id: "04",
    label: "Оттепель",
    title: "ХРУЩЁВСКАЯ ОТТЕПЕЛЬ",
    subtitle: "1953–1964",
    description:
      "Смерть Сталина открыла «железный занавес». СССР участвует в международных выставках моды. В 1959 году Dior показал коллекцию в Москве — это стало сенсацией.",
    accent: "Перелом в советской моде",
    type: "text",
  },
  {
    id: "05",
    label: "Стиляги",
    title: "СТИЛЯГИ",
    subtitle: "Первый советский субкультурный стиль",
    items: [
      "Узкие брюки-дудочки и яркие пиджаки",
      "Начёс, кок, туфли на толстой подошве",
      "Преследовались властью и комсомолом",
      "Слушали джаз, подражали западной моде",
    ],
    accent: "1950-е — символ протеста",
    type: "list",
  },
  {
    id: "06",
    label: "ОДМО",
    title: "СОВЕТСКАЯ МОДА: СИСТЕМА",
    description:
      "В 1944 году создан Общесоюзный Дом Моделей Одежды (ОДМО) в Москве. Государственные художники разрабатывали «правильные» модели. Но между показами и прилавками — пропасть.",
    items: [
      "ОДМО — официальный центр советской моды",
      "Журналы «Работница» и «Крестьянка»",
      "«Силуэт» — главный журнал мод СССР",
      "Плановое производство ≠ реальный спрос",
    ],
    accent: "Мода по плану",
    type: "mixed",
  },
  {
    id: "07",
    label: "1960-е",
    title: "ШЕСТИДЕСЯТЫЕ",
    subtitle: "1960–1969",
    description:
      "Эпоха мини-юбок и космоса. Космические успехи СССР отразились в моде — футуристические силуэты, синтетика, геометрические узоры. Мода становится моложе и смелее.",
    accent: "Юрий Гагарин полетел в космос — мода взлетела тоже",
    type: "text",
  },
  {
    id: "08",
    label: "Дефицит",
    title: "ДЕФИЦИТ И САМОШИВ",
    items: [
      "Магазинный дефицит — шили сами по выкройкам из журналов",
      "«Достать» импортную вещь — особый статус",
      "Фарцовщики — нелегальная торговля западными товарами",
      "Выкройки из журнала «Бурда» (ГДР) — на вес золота",
      "Комиссионные магазины — элитная альтернатива",
    ],
    accent: "Советская смекалка против дефицита",
    type: "list",
  },
  {
    id: "09",
    label: "1970-е",
    title: "ЗАСТОЙ В МОДЕ",
    subtitle: "1970–1979",
    description:
      "Период «застоя» — мода консервативна. Популярны джинсы как символ Запада. Вьетнамские куртки, дублёнки, сапоги на каблуке. Расцвет трикотажа и синтетики.",
    items: [
      "Джинсы Wrangler и Levi's — мечта советского человека",
      "Цена джинсов = зарплата за месяц",
      "Расцвет трикотажных фабрик",
    ],
    accent: "«Фирменная» вещь = успех",
    type: "mixed",
  },
  {
    id: "10",
    label: "Вячеслав Зайцев",
    title: "СОВЕТСКИЙ КУТЮРЬЕ",
    subtitle: "Вячеслав Зайцев",
    description:
      "Главный модельер СССР. Создал узнаваемый советский стиль с народными мотивами. Работал в Доме Моды на Проспекте Мира. Признан на Западе как «красный Диор».",
    accent: "«Красный Диор» — гордость советской моды",
    type: "text",
  },
  {
    id: "11",
    label: "1980-е",
    title: "ВОСЬМИДЕСЯТЫЕ",
    subtitle: "1980–1991",
    items: [
      "Широкие плечи, яркие цвета, леггинсы",
      "Влияние западной поп-культуры — MTV, видеомагнитофоны",
      "Кооперативная торговля — первые частные магазины",
      "Молодёжные субкультуры: рокеры, металлисты, брейкеры",
      "Появление первой советской рекламы одежды",
    ],
    accent: "Гласность открыла Запад",
    type: "list",
  },
  {
    id: "12",
    label: "Перестройка",
    title: "ПЕРЕСТРОЙКА И МОДА",
    subtitle: "1985–1991",
    description:
      "Горбачёв открыл страну. Западные бренды входят на советский рынок. В 1989 году в СССР появился первый McDonald's — символ новой эпохи. Мода перестала быть государственным делом.",
    accent: "Конец советской моды — начало российской",
    type: "text",
  },
  {
    id: "13",
    label: "Итоги",
    title: "ТЕНДЕНЦИИ: ИТОГ",
    items: [
      "1945–53: Послевоенный аскетизм и практичность",
      "1953–64: Оттепель — открытие миру, стиляги",
      "1960-е: Космический стиль, мини, синтетика",
      "1970-е: Джинсомания, дефицит, самошив",
      "1980-е: Западное влияние, субкультуры",
      "1985–91: Перестройка — конец советской моды",
    ],
    accent: "46 лет эволюции стиля",
    type: "list",
  },
  {
    id: "14",
    label: "Вывод",
    title: "ВЫВОД",
    description:
      "Советская мода — зеркало идеологии. Она менялась вместе со страной: от аскетизма через оттепель к открытости. Несмотря на дефицит и государственный контроль, советские люди находили способ выражать себя через одежду.",
    accent: "Мода не останавливается даже за железным занавесом",
    type: "conclusion",
  },
  {
    id: "15",
    label: "Источники",
    title: "ИСТОЧНИКИ",
    items: [
      "Васильев А. «Судьбы моды» — М.: Альпина нон-фикшн, 2009",
      "Журнал «Силуэт», подшивки 1945–1991 гг.",
      "Стриженова Т. «Из истории советского костюма» — М., 1972",
      "Гурова О. «Советское нижнее бельё» — НЛО, 2008",
      "Архив ОДМО — Российская государственная библиотека",
    ],
    accent: "История · 11 класс",
    type: "sources",
  },
];

export default function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const current = slides[activeSlide];

  const goNext = () => setActiveSlide((p) => Math.min(p + 1, slides.length - 1));
  const goPrev = () => setActiveSlide((p) => Math.max(p - 1, 0));

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="px-6 py-3 flex justify-between items-center">
          <span className="text-xs font-bold tracking-tighter uppercase">
            Мода в СССР · 1945–1991
          </span>
          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              {activeSlide + 1} / {slides.length}
            </span>
            <div className="hidden md:flex gap-1">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(i)}
                  className={`w-6 h-1.5 transition-colors ${
                    i === activeSlide ? "bg-red-600" : "bg-neutral-200 hover:bg-neutral-400"
                  }`}
                  title={s.label}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Slide Area */}
      <div className="flex-1 flex flex-col pt-14">
        {/* Main slide */}
        <div className="flex-1 flex flex-col min-h-[85vh]">
          {current.type === "hero" && (
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-16 bg-white">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6">{current.meta}</p>
                <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none text-black mb-4">
                  {current.title}
                  <br />
                  <span className="text-red-600">{current.subtitle}</span>
                </h1>
                <p className="text-xl md:text-2xl uppercase tracking-widest mt-6 text-neutral-600">
                  {current.description}
                </p>
              </div>
              <div className="md:w-72 bg-black flex flex-col justify-between p-8">
                <div className="text-white">
                  <div className="w-16 h-1 bg-red-600 mb-8"></div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Слайд</p>
                  <p className="text-7xl font-bold text-white leading-none">01</p>
                </div>
                <div className="space-y-1">
                  {slides.map((s, i) => (
                    <div
                      key={s.id}
                      className={`text-xs py-1 border-b border-neutral-800 text-neutral-400 cursor-pointer hover:text-white transition-colors ${
                        i === 0 ? "text-white" : ""
                      }`}
                      onClick={() => setActiveSlide(i)}
                    >
                      {s.id} {s.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {current.type === "text" && (
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="md:w-16 bg-red-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-widest rotate-90 whitespace-nowrap">
                  {current.label?.toUpperCase()}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-16">
                <p className="text-7xl md:text-8xl font-bold text-neutral-100 tracking-tighter leading-none mb-0 select-none">
                  {current.id}
                </p>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-black -mt-6 mb-2">
                  {current.title}
                </h2>
                {current.subtitle && (
                  <p className="text-sm uppercase tracking-widest text-red-600 mb-8">{current.subtitle}</p>
                )}
                <p className="text-xl md:text-2xl text-neutral-700 max-w-2xl leading-relaxed mt-6">
                  {current.description}
                </p>
                {current.accent && (
                  <div className="mt-10 border-l-4 border-red-600 pl-6">
                    <p className="text-sm uppercase tracking-widest text-neutral-500">{current.accent}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {current.type === "list" && (
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-16">
                <p className="text-7xl md:text-8xl font-bold text-neutral-100 tracking-tighter leading-none select-none">
                  {current.id}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black -mt-6 mb-2">
                  {current.title}
                </h2>
                {current.subtitle && (
                  <p className="text-sm uppercase tracking-widest text-red-600 mb-8">{current.subtitle}</p>
                )}
                <ul className="mt-6 space-y-4">
                  {current.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-lg text-neutral-800">
                      <span className="text-red-600 font-bold text-sm mt-1 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-60 bg-black flex flex-col justify-end p-8">
                {current.accent && (
                  <div>
                    <div className="w-8 h-1 bg-red-600 mb-4"></div>
                    <p className="text-white text-sm leading-relaxed">{current.accent}</p>
                  </div>
                )}
                <p className="text-neutral-600 text-xs mt-8 uppercase tracking-widest">{current.id}</p>
              </div>
            </div>
          )}

          {current.type === "mixed" && (
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-16">
                <p className="text-7xl md:text-8xl font-bold text-neutral-100 tracking-tighter leading-none select-none">
                  {current.id}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black -mt-6 mb-4">
                  {current.title}
                </h2>
                {current.description && (
                  <p className="text-lg text-neutral-700 max-w-xl mb-8 leading-relaxed">
                    {current.description}
                  </p>
                )}
                <ul className="space-y-3">
                  {current.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-base text-neutral-800">
                      <span className="text-red-600 font-bold shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {current.accent && (
                  <div className="mt-8 border-l-4 border-red-600 pl-6">
                    <p className="text-sm uppercase tracking-widest text-neutral-500">{current.accent}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {current.type === "conclusion" && (
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="flex-1 bg-black flex flex-col justify-center px-10 md:px-20 py-16">
                <p className="text-7xl md:text-8xl font-bold text-neutral-800 tracking-tighter leading-none select-none">
                  {current.id}
                </p>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white -mt-6 mb-8">
                  {current.title}
                </h2>
                <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl leading-relaxed">
                  {current.description}
                </p>
                {current.accent && (
                  <div className="mt-10 border-l-4 border-red-600 pl-6">
                    <p className="text-red-400 text-sm uppercase tracking-widest">{current.accent}</p>
                  </div>
                )}
              </div>
              <div className="md:w-72 bg-red-600 flex flex-col justify-center items-center p-8">
                <p className="text-white text-9xl font-bold leading-none">{current.id}</p>
              </div>
            </div>
          )}

          {current.type === "sources" && (
            <div className="flex-1 flex flex-col px-10 md:px-20 py-16">
              <p className="text-7xl font-bold text-neutral-100 tracking-tighter leading-none select-none">
                {current.id}
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black -mt-6 mb-10">
                {current.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
                {current.items?.map((item, i) => (
                  <div key={i} className="border border-neutral-200 p-4">
                    <span className="text-red-600 text-xs font-bold block mb-1">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t border-black pt-6 flex gap-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400">Предмет</p>
                  <p className="font-bold">История России</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400">Класс</p>
                  <p className="font-bold">11 класс</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400">Год</p>
                  <p className="font-bold">2026</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Controls */}
        <div className="border-t border-black bg-white px-6 py-4 flex items-center justify-between">
          <button
            onClick={goPrev}
            disabled={activeSlide === 0}
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold disabled:opacity-20 hover:text-red-600 transition-colors"
          >
            ← Назад
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`rounded-full transition-all ${
                  i === activeSlide
                    ? "w-6 h-2 bg-red-600 rounded"
                    : "w-2 h-2 bg-neutral-300 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={activeSlide === slides.length - 1}
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold disabled:opacity-20 hover:text-red-600 transition-colors"
          >
            Далее →
          </button>
        </div>
      </div>
    </main>
  );
}
