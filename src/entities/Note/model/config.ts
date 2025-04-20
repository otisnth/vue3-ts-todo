export const MIN_DISPLAYED_TASKS = 3;

export const STUB_NOTES = [
  {
    id: 1,
    title: "Покупки на неделю",
    createdAt: "1740983760374",
    tasks: [
      { title: "Купить молоко", isDone: false, createdAt: "1740983760374" },
      { title: "Купить хлеб", isDone: true, createdAt: "1740983760374" },
      { title: "Купить сыр", isDone: false, createdAt: "1740983760374" },
      { title: "Купить овощи", isDone: false, createdAt: "1740983760374" },
    ],
  },
  {
    id: 2,
    title: "Рабочие задачи",
    createdAt: "1740983900900",
    tasks: [
      { title: "Созвон с командой", isDone: true, createdAt: "1740983900900" },
      { title: "Отправить отчёт", isDone: false, createdAt: "1740983900900" },
      { title: "Проверить почту", isDone: true, createdAt: "1740983900900" },
      { title: "Запланировать встречу", isDone: false, createdAt: "1740983900900" },
      { title: "Обновить документацию", isDone: false, createdAt: "1740983900900" },
    ],
  },
  {
    id: 3,
    title: "Планы на выходные",
    createdAt: "1740984000000",
    tasks: [
      { title: "Сходить в кино", isDone: false, createdAt: "1740984000000" },
      { title: "Погулять в парке", isDone: false, createdAt: "1740984000000" },
      { title: "Встретиться с друзьями", isDone: false, createdAt: "1740984000000" },
    ],
  },
  {
    id: 4,
    title: "Изучить Vue 3",
    createdAt: "1740984100000",
    tasks: [
      { title: "Прочитать документацию", isDone: true, createdAt: "1740984100000" },
      { title: "Сделать мини-проект", isDone: false, createdAt: "1740984100000" },
      { title: "Посмотреть видеоуроки", isDone: false, createdAt: "1740984100000" },
      { title: "Изучить Composition API", isDone: false, createdAt: "1740984100000" },
    ],
  },
  {
    id: 5,
    title: "Финансы",
    createdAt: "1740984200000",
    tasks: [
      { title: "Оплатить интернет", isDone: true, createdAt: "1740984200000" },
      { title: "Оплатить телефон", isDone: false, createdAt: "1740984200000" },
      { title: "Проверить баланс карты", isDone: true, createdAt: "1740984200000" },
      { title: "Сделать перевод", isDone: false, createdAt: "1740984200000" },
      { title: "Записать расходы", isDone: false, createdAt: "1740984200000" },
    ],
  },
  {
    id: 6,
    title: "Подарки",
    createdAt: "1740984300000",
    tasks: [
      { title: "Купить подарок маме", isDone: false, createdAt: "1740984300000" },
      { title: "Купить подарок другу", isDone: true, createdAt: "1740984300000" },
      { title: "Упаковать подарки", isDone: false, createdAt: "1740984300000" },
    ],
  },
  {
    id: 7,
    title: "Здоровье",
    createdAt: "1740984400000",
    tasks: [
      { title: "Записаться к стоматологу", isDone: false, createdAt: "1740984400000" },
      { title: "Сделать зарядку", isDone: true, createdAt: "1740984400000" },
      { title: "Пройти обследование", isDone: false, createdAt: "1740984400000" },
      { title: "Купить витамины", isDone: false, createdAt: "1740984400000" },
    ],
  },
  {
    id: 8,
    title: "Книги для чтения",
    createdAt: "1740984500000",
    tasks: [
      { title: "Прочитать 'Чистый код'", isDone: false, createdAt: "1740984500000" },
      { title: "Прочитать 'Atomic Habits'", isDone: false, createdAt: "1740984500000" },
      { title: "Прочитать 'Думай медленно...'", isDone: false, createdAt: "1740984500000" },
      { title: "Прочитать 'Властелин колец'", isDone: false, createdAt: "1740984500000" },
      { title: "Прочитать '1984'", isDone: false, createdAt: "1740984500000" },
    ],
  },
  {
    id: 9,
    title: "Фильмы для просмотра",
    createdAt: "1740984600000",
    tasks: [
      { title: "Посмотреть 'Интерстеллар'", isDone: true, createdAt: "1740984600000" },
      { title: "Посмотреть 'Начало'", isDone: false, createdAt: "1740984600000" },
      { title: "Посмотреть 'Матрица'", isDone: false, createdAt: "1740984600000" },
      { title: "Посмотреть 'Дюна'", isDone: false, createdAt: "1740984600000" },
    ],
  },
  {
    id: 10,
    title: "Учёба",
    createdAt: "1740984700000",
    tasks: [
      { title: "Сдать домашнее задание", isDone: false, createdAt: "1740984700000" },
      { title: "Подготовиться к экзамену", isDone: false, createdAt: "1740984700000" },
      { title: "Прочитать лекции", isDone: false, createdAt: "1740984700000" },
      { title: "Сделать конспект", isDone: false, createdAt: "1740984700000" },
      { title: "Посетить семинар", isDone: false, createdAt: "1740984700000" },
    ],
  },
  {
    id: 11,
    title: "Путешествия",
    createdAt: "1740984800000",
    tasks: [
      { title: "Купить билеты", isDone: false, createdAt: "1740984800000" },
      { title: "Забронировать отель", isDone: false, createdAt: "1740984800000" },
      { title: "Составить маршрут", isDone: false, createdAt: "1740984800000" },
      { title: "Собрать вещи", isDone: false, createdAt: "1740984800000" },
    ],
  },
  {
    id: 12,
    title: "Домашние дела",
    createdAt: "1740984900000",
    tasks: [
      { title: "Помыть посуду", isDone: true, createdAt: "1740984900000" },
      { title: "Пропылесосить", isDone: false, createdAt: "1740984900000" },
      { title: "Постирать бельё", isDone: false, createdAt: "1740984900000" },
      { title: "Полить цветы", isDone: false, createdAt: "1740984900000" },
      { title: "Вынести мусор", isDone: false, createdAt: "1740984900000" },
    ],
  },
  {
    id: 13,
    title: "Автомобиль",
    createdAt: "1740985000000",
    tasks: [
      { title: "Поменять масло", isDone: false, createdAt: "1740985000000" },
      { title: "Помыть машину", isDone: true, createdAt: "1740985000000" },
      { title: "Проверить давление в шинах", isDone: false, createdAt: "1740985000000" },
      { title: "Заправить бак", isDone: false, createdAt: "1740985000000" },
    ],
  },
  {
    id: 14,
    title: "Друзья",
    createdAt: "1740985100000",
    tasks: [
      { title: "Позвонить Саше", isDone: false, createdAt: "1740985100000" },
      { title: "Встретиться с Петей", isDone: true, createdAt: "1740985100000" },
      { title: "Поздравить Машу", isDone: false, createdAt: "1740985100000" },
      { title: "Организовать встречу", isDone: false, createdAt: "1740985100000" },
    ],
  },
  {
    id: 15,
    title: "Идеи для проектов",
    createdAt: "1740985200000",
    tasks: [
      { title: "Todo-приложение", isDone: true, createdAt: "1740985200000" },
      { title: "Пет-проект на Vue", isDone: false, createdAt: "1740985200000" },
      { title: "Блог на Nuxt", isDone: false, createdAt: "1740985200000" },
      { title: "Telegram-бот", isDone: false, createdAt: "1740985200000" },
      { title: "Парсер новостей", isDone: false, createdAt: "1740985200000" },
      { title: "Мини-игра", isDone: false, createdAt: "1740985200000" },
    ],
  },
];
