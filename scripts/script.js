const cards = [
    // водный спорт
    {
        category: "water-sports",
        id: 1,
        price: 1200,
        title: "Детская доска для плавания",
        description: "Отличный помощник для начинающих пловцов и профессионалов.",
        src: "./img/water_sports/board-kids.png",
        rating: 4.9,
    },
    {
        category: "water-sports",
        id: 2,
        price: 1000,
        title: "Доска для плавания",
        description: "Помогает сосредоточиться на работе ног. Не тонет в воде.",
        src: "./img/water_sports/board-1.png",
        rating: 4.6,
    },
    {
        category: "water-sports",
        id: 3,
        price: 1500,
        title: "Доска для плавания",
        description:
            "Используется для тренировки ног и улучшения техники. Лёгкая и удобная.",
        src: "./img/water_sports/board-2.png",
        rating: 4.8,
    },
    {
        category: "water-sports",
        id: 4,
        price: 12550,
        title: "Женский гидрокостюм",
        description:
            "Сохраняет тепло и комфорт даже в холодной воде. Подходит для разных водных видов спорта.",
        src: "./img/water_sports/costume-wom.png",
        rating: 4.9,
    },
    {
        category: "water-sports",
        id: 5,
        price: 12550,
        title: "Мужской гидрокостюм",
        description: "Обеспечивает свободу движений и надёжную защиту.",
        src: "./img/water_sports/costume-man.png",
        rating: 4.5,
    },
    {
        category: "water-sports",
        id: 6,
        price: 1021,
        title: "Ласты Pooljet",
        description:
            "Лёгкие и прочные ласты для бассейна и открытой воды. Помогают плыть быстрее без лишних усилий.",
        src: "./img/water_sports/flippers-1.png",
        rating: 4.7,
    },
    {
        category: "water-sports",
        id: 7,
        price: 1350,
        title: "Ласты для плавания",
        description:
            "Удобные ласты для тренировок и активного плавания. Увеличивают скорость и манёвренность в воде.",
        src: "./img/water_sports/flippers-2.png",
        rating: 4.9,
    },
    {
        category: "water-sports",
        id: 8,
        price: 1231,
        title: "Ласты Pooljet",
        description:
            "Лёгкие и прочные ласты для бассейна и открытой воды. Помогают плыть быстрее без лишних усилий.",
        src: "./img/water_sports/flippers-3.png",
        rating: 4.7,
    },
    {
        category: "water-sports",
        id: 9,
        price: 850,
        title: "Очки для плавания",
        description:
            "Комфортная посадка и надёжная фиксация во время плавания. Подходят для бассейна и моря.",
        src: "./img/water_sports/glasses-1.png",
        rating: 4.9,
    },
    {
        category: "water-sports",
        id: 10,
        price: 1230,
        title: "Очки для плавания",
        description:
            "Практичный аксессуар для комфортного плавания без раздражения глаз.",
        src: "./img/water_sports/glasses-2.png",
        rating: 4.4,
    },
    {
        category: "water-sports",
        id: 11,
        price: 1970,
        title: "Очки для плавания",
        description:
            "Очки с плотным прилеганием и защитой от запотевания. Удобны для длительных тренировок.",
        src: "./img/water_sports/glasses-3.png",
        rating: 5.0,
    },
    {
        category: "water-sports",
        id: 12,
        price: 1500,
        title: "Колобашка для аквааэробики",
        description:
            "Помогает развивать силу рук и правильную технику плавания. Удобно фиксируется между ног.",
        src: "./img/water_sports/kolobashka-1.png",
        rating: 4.7,
    },

    {
        category: "water-sports",
        id: 13,
        price: 1250,
        title: "Колобашка для аквааэробики",
        description:
            "Аксессуар для эффективных тренировок в бассейне. Улучшает баланс тела на воде.",
        src: "./img/water_sports/kolobashka-2.png",
        rating: 4.8,
    },
    {
        category: "water-sports",
        id: 14,
        price: 5500,
        title: "Маска для плавания",
        description: "Обеспечивает широкий обзор и защиту глаз.",
        src: "./img/water_sports/mask-1.png",
        rating: 4.9,
    },
    {
        category: "water-sports",
        id: 15,
        price: 9500,
        title: "Маска для плавания",
        description: "Комфортная маска для длительного использования.",
        src: "./img/water_sports/mask-2.png",
        rating: 4.9,
    },
    {
        category: "water-sports",
        id: 16,
        price: 2700,
        title: "Вёсла",
        description: "Удобны в использовании и не скользят в руках.",
        src: "./img/water_sports/oars.png",
        rating: 4.6,
    },
    {
        category: "water-sports",
        id: 17,
        price: 3900,
        title: "Вёсла",
        description: "Лёгкие и прочные весла для сапборда и лодок.",
        src: "./img/water_sports/oars-black.png",
        rating: 4.8,
    },
    {
        category: "water-sports",
        id: 18,
        price: 1500,
        title: "Вёсла",
        description: "Надёжный аксессуар для комфортного управления на воде.",
        src: "./img/water_sports/oars-3.png",
        rating: 4.7,
    },
    {
        category: "water-sports",
        id: 19,
        price: 15500,
        title: "Сапборд",
        description:
            "Отличный выбор для тренировок на воде и семейного отдыха. Прочный и надёжный.",
        src: "./img/water_sports/sub-board-black.png",
        rating: 5.0,
    },
    {
        category: "water-sports",
        id: 20,
        price: 10999,
        title: "Сапборд",
        description:
            "Устойчивая доска для прогулок и активного отдыха на воде. Подойдёт для новичков и опытных райдеров.",
        src: "./img/water_sports/sub-board-yellow.png",
        rating: 4.8,
    },
    {
        category: "water-sports",
        id: 21,
        price: 12200,
        title: "Сапборд",
        description:
            "Надувной сапборд для путешествий, спорта и релакса. Лёгкий в транспортировке.",
        src: "./img/water_sports/sup-bord-red.png",
        rating: 4.7,
    },
    {
        category: "water-sports",
        id: 22,
        price: 1690,
        title: "Плавки мужские",
        description: "Удобные плавки для спорта и отдыха. Не сковывают движения.",
        src: "./img/water_sports/swimming-trunks-1.png",
        rating: 4.8,
    },
    {
        category: "water-sports",
        id: 23,
        price: 3200,
        title: "Мужские плавки",
        description: "Лёгкие и практичные для ежедневных тренировок.",
        src: "./img/water_sports/swimming-trunks-2.png",
        rating: 4.9,
    },
    {
        category: "water-sports",
        id: 24,
        price: 2768,
        title: "Купальник раздельный",
        description:
            "Стильный купальник для пляжа и бассейна. Подчёркивает фигуру.",
        src: "./img/water_sports/swimsuit.png",
        rating: 4.6,
    },
    {
        category: "water-sports",
        id: 25,
        price: 3946,
        title: "Цельный купальник",
        description:
            "Удобный слитный купальник для бассейна и пляжа. Обеспечивает комфортную посадку и свободу движений.",
        src: "./img/water_sports/swimsuit-all.png",
        rating: 4.7,
    },

    // зимний спорт

    {
        category: "winter-sports",
        id: 26,
        price: 10950,
        title: "Защитный шлем для горнолыжного спорта",
        description:
            "Защищает голову от ударов и холода во время катания. Удобная посадка.",
        src: "./img/winter_sports/helmet-1.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 27,
        price: 9950,
        title: "Горнолыжный шлем",
        description: "Лёгкий и прочный шлем для безопасного отдыха на склоне.",
        src: "./img/winter_sports/helmet-2.png",
        rating: 4.8,
    },
    {
        category: "winter-sports",
        id: 28,
        price: 7500,
        title: "Защитный горнолыжный шлеим",
        description: "Надёжная защита при катании на лыжах и сноуборде.",
        src: "./img/winter_sports/helmet-3.png",
        rating: 4.8,
    },
    {
        category: "winter-sports",
        id: 29,
        price: 4890,
        title: "Горнолыжная маска",
        description: "Защищает глаза от ветра, снега и яркого солнца.",
        src: "./img/winter_sports/mask-1.png",
        rating: 4.6,
    },
    {
        category: "winter-sports",
        id: 30,
        price: 3500,
        title: "Горнолыжные очки",
        description: "Не запотевает и плотно прилегает к лицу.",
        src: "./img/winter_sports/mask-2.png",
        rating: 4.5,
    },
    {
        category: "winter-sports",
        id: 31,
        price: 5789,
        title: "Защитная горнолыжная маска",
        description: "Удобная маска для безопасного катания в любых условиях.",
        src: "./img/winter_sports/mask-3.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 32,
        price: 4600,
        title: "Раздвижные детские коньки",
        description: "Удобные коньки для катания на катке и улице.",
        src: "./img/winter_sports/skates-children.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 33,
        price: 5975,
        title: "Мужские хоккейные коньки",
        description: "Комфортные для длительного катания.",
        src: "./img/winter_sports/skates-man.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 34,
        price: 1000,
        title: "Чехол для беговых лыж",
        description: "Защищает лыжи при хранении и перевозке.",
        src: "./img/winter_sports/ski-bag-1.png",
        rating: 4.7,
    },
    {
        category: "winter-sports",
        id: 35,
        price: 1850,
        title: "Чехол для лыж",
        description: "Удобен для транспортировки и путешествий.",
        src: "./img/winter_sports/ski-bag-2.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 36,
        price: 1200,
        title: "Чехол для лыж",
        description: "Практичное решение для сохранности снаряжения.",
        src: "./img/winter_sports/ski-bag-3.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 37,
        price: 4970,
        title: "Лыжные ботинки",
        description: "Надёжно фиксируют ногу и обеспечивают комфорт при катании.",
        src: "./img/winter_sports/ski-boots-1.png",
        rating: 4.8,
    },

    {
        category: "winter-sports",
        id: 38,
        price: 6990,
        title: "Мужские лыжные ботинки",
        description: "Подходят для длительных тренировок на склоне.",
        src: "./img/winter_sports/ski-boots-2.png",
        rating: 4.8,
    },
    {
        category: "winter-sports",
        id: 39,
        price: 2800,
        title: "Детские лыжные ботинки",
        description: "Отличный выбор для уверенного и безопасного катания.",
        src: "./img/winter_sports/ski-boots-3.png",
        rating: 4.7,
    },
    {
        category: "winter-sports",
        id: 40,
        price: 3500,
        title: "Лыжные палки детские ",
        description: "Помогают держать баланс и ритм движения.",
        src: "./img/winter_sports/ski-poles-1.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 41,
        price: 5289,
        title: "Лыжные палки",
        description: "Лёгкие и прочные палки для устойчивости на склоне.",
        src: "./img/winter_sports/ski-poles-2.png",
        rating: 4.7,
    },
    {
        category: "winter-sports",
        id: 42,
        price: 10000,
        title: "Беговые лыжи",
        description:
            "Подходят для начинающих и опытных спортсменов. Лёгкие и манёвренные.",
        src: "./img/winter_sports/skis.png",
        rating: 4.8,
    },
    {
        category: "winter-sports",
        id: 43,
        price: 19000,
        title: "Лыжный комплект",
        description:
            "Универсальные лыжи для трасс и активного отдыха. Устойчивы на скорости.",
        src: "./img/winter_sports/skis-1.png",
        rating: 4.8,
    },
    {
        category: "winter-sports",
        id: 44,
        price: 21500,
        title: "Лыжный комплект",
        description:
            "Надёжные лыжи для активного катания и тренировок на склонах. Обеспечивают устойчивость и контроль.",
        src: "./img/winter_sports/skis-2.png",
        rating: 5.0,
    },
    {
        category: "winter-sports",
        id: 45,
        price: 31300,
        title: "Сноуборд",
        description:
            "Доска для динамичного и стабильного катания. Подходит для разных уровней подготовки.",
        src: "./img/winter_sports/snowboard-1.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 46,
        price: 29500,
        title: "Сноуборд",
        description: "Подходит для трюков и свободного катания.",
        src: "./img/winter_sports/snowboard-2.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 47,
        price: 18900,
        title: "Сноуборд",
        description: "Отличная управляемость и устойчивость на трассе.",
        src: "./img/winter_sports/snowboard-3.png",
        rating: 4.8,
    },
    {
        category: "winter-sports",
        id: 48,
        price: 3200,
        title: "Тюбинг",
        description: "Надувные санки для весёлого зимнего катания.",
        src: "./img/winter_sports/tubing-1.png",
        rating: 4.9,
    },
    {
        category: "winter-sports",
        id: 49,
        price: 2768,
        title: "Тюбинг",
        description: "Подходят для детей и взрослых.",
        src: "./img/winter_sports/tubing-2.png",
        rating: 4.5,
    },
    {
        category: "winter-sports",
        id: 50,
        price: 3946,
        title: "тюбинг",
        description: "Отличный вариант для активного отдыха с семьёй.",
        src: "./img/winter_sports/tubing-3.png",
        rating: 4.7,
    },

    // фитнес и йога

    {
        category: "fitness-yoga",
        id: 51,
        price: 530,
        title: "Массажный мяч",
        description:
            "Помогает снять мышечное напряжение и усталость после тренировок.",
        src: "./img/fitness_and_yoga/ball-1.png",
        rating: 4.8,
    },
    {
        category: "fitness-yoga",
        id: 52,
        price: 530,
        title: "Массажный мяч",
        description: "Компактный и удобный для дома и зала.",
        src: "./img/fitness_and_yoga/ball-2.png",
        rating: 4.8,
    },
    {
        category: "fitness-yoga",
        id: 53,
        price: 350,
        title: "Массажный мяч",
        description: "Практичный аксессуар для расслабления и реабилитации.",
        src: "./img/fitness_and_yoga/ball-3.png",
        rating: 4.6,
    },
    {
        category: "fitness-yoga",
        id: 54,
        price: 450,
        title: "Блок для йоги",
        description: "Лёгкий и удобный в использовании.",
        src: "./img/fitness_and_yoga/block-1.png",
        rating: 4.7,
    },
    {
        category: "fitness-yoga",
        id: 55,
        price: 774,
        title: "Комплект из 2-х блоков для йоги",
        description: "Подходит для начинающих и опытных практиков.",
        src: "./img/fitness_and_yoga/block-2.png",
        rating: 4.8,
    },
    {
        category: "fitness-yoga",
        id: 56,
        price: 986,
        title: "Блоки для йоги. Комплект из 2-х штук",
        description: "Помогает улучшить баланс и растяжку.",
        src: "./img/fitness_and_yoga/block-3.png",
        rating: 4.9,
    },
    {
        category: "fitness-yoga",
        id: 57,
        price: 880,
        title: "Гантели",
        description: "Практичный инвентарь для регулярных занятий.",
        src: "./img/fitness_and_yoga/dumbbells-1.png",
        rating: 4.9,
    },
    {
        category: "fitness-yoga",
        id: 58,
        price: 1350,
        title: "Гантели",
        description: "Подходят для силовых тренировок дома и в зале.",
        src: "./img/fitness_and_yoga/dumbbells-2.png",
        rating: 4.9,
    },
    {
        category: "fitness-yoga",
        id: 59,
        price: 786,
        title: "Скакалка для фитнеса и гимнастики",
        description: "Эффективный тренажёр для кардио и сжигания калорий.",
        src: "./img/fitness_and_yoga/jump-rope-1.png",
        rating: 4.7,
    },
    {
        category: "fitness-yoga",
        id: 60,
        price: 854,
        title: "Скакалка",
        description: "Помогает развить выносливость и координацию.",
        src: "./img/fitness_and_yoga/jump-rope-2.png",
        rating: 4.9,
    },
    {
        category: "fitness-yoga",
        id: 61,
        price: 1090,
        title: "Скоростная скакалка",
        description: "Отличный вариант для быстрых и результативных тренировок.",
        src: "./img/fitness_and_yoga/jump-rope-3.png",
        rating: 4.8,
    },
    {
        category: "fitness-yoga",
        id: 62,
        price: 995,
        title: "Массажный ролик",
        description: "Снимает напряжение и ускоряет восстановление мышц.",
        src: "./img/fitness_and_yoga/massage-roller-1.png",
        rating: 4.6,
    },

    {
        category: "fitness-yoga",
        id: 63,
        price: 1100,
        title: "Массажный ролик",
        description: "Подходит для разминки и заминки после тренировки.",
        src: "./img/fitness_and_yoga/massage-roller-2.png",
        rating: 4.8,
    },
    {
        category: "fitness-yoga",
        id: 64,
        price: 850,
        title: "Массажный валик",
        description: "Удобен для домашнего использования.",
        src: "./img/fitness_and_yoga/massage-roller-3.png",
        rating: 4.7,
    },
    {
        category: "fitness-yoga",
        id: 65,
        price: 673,
        title: "Фитнес ленты. Комплект из 3-х штук",
        description: "Универсальный инвентарь для силовых и растяжки.",
        src: "./img/fitness_and_yoga/rubber-bands-1.png",
        rating: 4.8,
    },
    {
        category: "fitness-yoga",
        id: 66,
        price: 1470,
        title: "Фитнес резинки. 4 уровня нагрузки",
        description: "Помогают проработать все группы мышц.",
        src: "./img/fitness_and_yoga/rubber-bands-2.png",
        rating: 4.9,
    },
    {
        category: "fitness-yoga",
        id: 67,
        price: 1276,
        title: "Фитнес резинки. В наборе 5 штук",
        description: "Подходят для тренировок дома и в зале.",
        src: "./img/fitness_and_yoga/rubber-bands-3.png",
        rating: 4.8,
    },
    {
        category: "fitness-yoga",
        id: 68,
        price: 1365,
        title: "Набоор из 3-х фитнес резинок",
        description: "Компактные и лёгкие в хранении.",
        src: "./img/fitness_and_yoga/rubber-bands-4.png",
        rating: 5.0,
    },
    {
        category: "fitness-yoga",
        id: 69,
        price: 865,
        title: "Набор фитнес резинок",
        description: "Эффективны для начинающих и продвинутых.",
        src: "./img/fitness_and_yoga/rubber-bands-5.png",
        rating: 4.7,
    },
    {
        category: "fitness-yoga",
        id: 70,
        price: 1697,
        title: "Коврик для йоги",
        description: "Обеспечивает комфорт и устойчивость во время занятий.",
        src: "./img/fitness_and_yoga/rug-1.png",
        rating: 4.9,
    },
    {
        category: "fitness-yoga",
        id: 71,
        price: 1532,
        title: "Коврик для йоги и фитнеса",
        description: "Лёгкий и удобный для переноски.",
        src: "./img/fitness_and_yoga/rug-2.png",
        rating: 4.9,
    },
    {
        category: "fitness-yoga",
        id: 72,
        price: 1190,
        title: "Коврик для фитнеса и йоги",
        description: "Подходит для йоги, фитнеса и растяжки.",
        src: "./img/fitness_and_yoga/rug-3.png",
        rating: 4.8,
    },
    {
        category: "fitness-yoga",
        id: 73,
        price: 1420,
        title: "Утяжелители. Набор из 2-х штук",
        description: "Увеличивают нагрузку и эффективность упражнений.",
        src: "./img/fitness_and_yoga/weights-1.png",
        rating: 4.7,
    },
    {
        category: "fitness-yoga",
        id: 74,
        price: 1988,
        title: "Набор утяжелителей из 2-х штук",
        description: "Удобно фиксируются и не сползают.",
        src: "./img/fitness_and_yoga/weights-2.png",
        rating: 4.9,
    },
    {
        category: "fitness-yoga",
        id: 75,
        price: 1576,
        title: "Набор утяжелителей. В комплекте 2 штуки",
        description: "Отличное дополнение к домашним тренировкам.",
        src: "./img/fitness_and_yoga/weights-3.png",
        rating: 4.8,
    },

    // туризм

    {
        category: "tourism",
        id: 76,
        price: 15300,
        title: "Ботинки тактические",
        description: "Обеспечивают комфорт и поддержку стопы в походах.",
        src: "./img/tourism/boots-1.png",
        rating: 4.9,
    },
    {
        category: "tourism",
        id: 77,
        price: 10624,
        title: "Тактические ботинки",
        description: "Подходят для длительных прогулок и путешествий.",
        src: "./img/tourism/boots-2.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 78,
        price: 10765,
        title: "Тактические ботинки",
        description: "Прочная подошва и надёжная фиксация.",
        src: "./img/tourism/boots-3.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 79,
        price: 452,
        title: "Горелка",
        description: "Удобна для приготовления пищи в походных условиях.",
        src: "./img/tourism/burner-1.png",
        rating: 4.7,
    },
    {
        category: "tourism",
        id: 80,
        price: 360,
        title: "Газовая горелка",
        description: "Обеспечивает стабильное пламя.",
        src: "./img/tourism/burner-2.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 81,
        price: 390,
        title: "Горелка газовая",
        description: "Незаменима для активного отдыха на природе.",
        src: "./img/tourism/burner-3.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 82,
        price: 530,
        title: "Набор карабинов. 7 штук",
        description: "Используется для крепления снаряжения в походах.",
        src: "./img/tourism/carbine-1.png",
        rating: 4.9,
    },
    {
        category: "tourism",
        id: 83,
        price: 427,
        title: "Карабины 2 штуки",
        description: "Прочный и удобный в использовании.",
        src: "./img/tourism/carbine-2.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 84,
        price: 631,
        title: "Набор из 5 карабинов",
        description: "Подходит для туризма и активного отдыха.",
        src: "./img/tourism/carbine-3.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 85,
        price: 678,
        title: "Тактический компас",
        description: "Помогает ориентироваться на местности.",
        src: "./img/tourism/compass-1.png",
        rating: 4.7,
    },
    {
        category: "tourism",
        id: 86,
        price: 540,
        title: "Компас туристический",
        description: "Незаменим для активного туризма.",
        src: "./img/tourism/compass-2.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 87,
        price: 535,
        title: "Туристический компас",
        description: "Простой и надёжный в использовании.",
        src: "./img/tourism/compass-3.png",
        rating: 4.9,
    },

    {
        category: "tourism",
        id: 88,
        price: 2100,
        title: "Складной нож",
        description: "Компактный нож для туризма и отдыха на природе.",
        src: "./img/tourism/knife-1.png",
        rating: 4.9,
    },
    {
        category: "tourism",
        id: 89,
        price: 1850,
        title: "Складной нож",
        description: "Удобен для походов, кемпинга и рыбалки.",
        src: "./img/tourism/knife-2.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 90,
        price: 1949,
        title: "Складной нож",
        description: "Практичный инструмент для повседневного использования.",
        src: "./img/tourism/knife-3.png",
        rating: 4.7,
    },
    {
        category: "tourism",
        id: 91,
        price: 5400,
        title: "Надувной матрас",
        description: "Обеспечивает комфортный сон в походных условиях.",
        src: "./img/tourism/mattress-1.png",
        rating: 4.9,
    },
    {
        category: "tourism",
        id: 92,
        price: 6352,
        title: "Двуспальный надувной матрас",
        description: "Подходит для кемпинга и путешествий.",
        src: "./img/tourism/mattress-2.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 93,
        price: 3465,
        title: "Односпальный надувной матрас",
        description: "Защищает от холода и неровной поверхности.",
        src: "./img/tourism/mattress-3.png",
        rating: 5.0,
    },
    {
        category: "tourism",
        id: 94,
        price: 2865,
        title: "Дождевик",
        description: "Защищает от дождя и ветра во время походов и прогулок.",
        src: "./img/tourism/raincoat.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 95,
        price: 3697,
        title: "Двухместная однослойная палатка",
        description: "Идеально подходит для отдыха на природе и рыбалки.",
        src: "./img/tourism/tent-1.png",
        rating: 4.9,
    },
    {
        category: "tourism",
        id: 96,
        price: 6532,
        title: "Двухкомнатная двухслойная палатка",
        description: "Ваш надежный помощник в поездках на природу.",
        src: "./img/tourism/tent-2.png",
        rating: 4.9,
    },
    {
        category: "tourism",
        id: 97,
        price: 4190,
        title: "Трехместная палатка",
        description:
            "Подходит для кемпинга, активного отдыха и пикников на природе.",
        src: "./img/tourism/tent-3.png",
        rating: 4.8,
    },
    {
        category: "tourism",
        id: 98,
        price: 1420,
        title: "Термобутылка",
        description: "Сохраняет напитки горячими или холодными длительное время.",
        src: "./img/tourism/thermos-1.png",
        rating: 4.7,
    },
    {
        category: "tourism",
        id: 99,
        price: 1988,
        title: "Термос",
        description: "Идеален для походов, поездок и прогулок.",
        src: "./img/tourism/thermos-2.png",
        rating: 4.9,
    },
    {
        category: "tourism",
        id: 100,
        price: 1576,
        title: "Умный термос",
        description: "Практичное решение для путешествий.",
        src: "./img/tourism/thermos-3.png",
        rating: 4.8,
    },
];

class FavoritesManager {
    constructor() {
        this.storageKey = "favorite";
        this.favorites = this.loadFavorites();
        this.updateFavoritesCount();
        this.setupListeners();
    }

    // Загрузка избранного из localStorage
    loadFavorites() {
        const favorites = localStorage.getItem(this.storageKey);
        return favorites ? JSON.parse(favorites) : [];
    }

    // Сохранение избранного в localStorage
    saveFavorites() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
        this.updateFavoritesCount();
        this.updateHeartIcons();
    }

    // Проверка, есть ли товар в избранном
    isInFavorites(productId) {
        return this.favorites.some((item) => item.id === productId);
    }

    // Добавление товара в избранное
    addToFavorites(product) {
        if (!this.isInFavorites(product.id)) {
            this.favorites.push({
                id: product.id,
                title: product.title,
                price: product.price,
                src: product.src,
                category: product.category,
                rating: product.rating,
                description: product.description,
                addedAt: new Date().toISOString(),
            });
            this.saveFavorites();
            this.showNotification("Товар добавлен в избранное!", "success");
            return true;
        }
        return false;
    }

    // Удаление товара из избранного
    removeFromFavorites(productId) {
        const initialLength = this.favorites.length;
        this.favorites = this.favorites.filter((item) => item.id !== productId);

        if (this.favorites.length !== initialLength) {
            this.saveFavorites();
            this.showNotification("Товар удален из избранного", "info");
            return true;
        }
        return false;
    }

    // Переключение состояния избранного
    toggleFavorite(product) {
        if (this.isInFavorites(product.id)) {
            this.removeFromFavorites(product.id);
            return false;
        } else {
            this.addToFavorites(product);
            return true;
        }
    }

    // Получение всех избранных товаров
    getAllFavorites() {
        return this.favorites;
    }

    // Очистка всех избранных товаров
    clearAllFavorites() {
        this.favorites = [];
        this.saveFavorites();
        this.showNotification("Все товары удалены из избранного", "info");
    }

    // Обновление счетчика в шапке
    updateFavoritesCount() {
        const count = this.favorites.length;

        // Обновляем индикатор в шапке
        const favoritesLink = document.querySelector('a[href="favourites.html"]');
        if (favoritesLink) {
            let indicator = favoritesLink.querySelector(".favorites-indicator");

            if (count > 0) {
                if (!indicator) {
                    indicator = document.createElement("span");
                    indicator.className = "favorites-indicator";
                    favoritesLink.appendChild(indicator);
                }
                indicator.textContent = count;
                indicator.style.display = "flex";
            } else if (indicator) {
                indicator.style.display = "none";
            }
        }

        // Обновляем количество на странице избранного
        const favoritesCountElement = document.getElementById("favorites-count");
        if (favoritesCountElement) {
            favoritesCountElement.textContent = count;

            // Показываем/скрываем сообщение о пустом избранном
            const emptyMessage = document.getElementById("favorites-empty-message");
            const favoritesContainer = document.getElementById("products-container");

            if (count === 0 && emptyMessage) {
                emptyMessage.style.display = "block";
                if (favoritesContainer) {
                    favoritesContainer.style.display = "none";
                }
            } else if (emptyMessage) {
                emptyMessage.style.display = "none";
                if (favoritesContainer) {
                    favoritesContainer.style.display = "grid";
                }
            }
        }

        return count;
    }

    // Обновление иконок сердечек на всех страницах
    updateHeartIcons() {
        document.querySelectorAll(".fav-btn").forEach((button) => {
            const productId = parseInt(button.dataset.id);
            const heartIcon = button.querySelector("i");

            if (this.isInFavorites(productId)) {
                button.classList.add("active");
                if (heartIcon) {
                    heartIcon.classList.remove("fa-heart");
                    heartIcon.classList.add("fa-heart", "fas");
                }
            } else {
                button.classList.remove("active");
                if (heartIcon) {
                    heartIcon.classList.remove("fa-heart");
                    heartIcon.classList.add("fa-heart", "far");
                }
            }
        });
    }

    // Обработка нажатия на кнопку избранного
    handleFavoriteClick(event, button) {
        event.preventDefault();
        event.stopPropagation();

        const productId = parseInt(button.dataset.id);

        // Находим товар в массиве cards (глобальном или из data-атрибутов)
        let product = null;

        if (typeof cards !== "undefined") {
            product = cards.find((p) => p.id === productId);
        } else {
            // Если cards не определен, берем данные из data-атрибутов кнопки
            const cardElement = button.closest(".product-card");
            if (cardElement) {
                product = {
                    id: productId,
                    title: cardElement.querySelector(".product-title")?.textContent,
                    price: parseFloat(cardElement.dataset.price),
                    src: cardElement.querySelector("img")?.src,
                    category: cardElement.dataset.category,
                };
            }
        }

        if (product) {
            const isNowFavorite = this.toggleFavorite(product);

            // Анимация сердечка
            button.classList.add("pulse");
            setTimeout(() => {
                button.classList.remove("pulse");
            }, 300);

            // Обновляем состояние кнопки
            const heartIcon = button.querySelector("i");
            if (heartIcon) {
                if (isNowFavorite) {
                    heartIcon.classList.remove("far");
                    heartIcon.classList.add("fas");
                } else {
                    heartIcon.classList.remove("fas");
                    heartIcon.classList.add("far");
                }
            }
        }
    }

    // Показать уведомление
    showNotification(message, type = "info") {
        const notification = document.createElement("div");
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add("show");
        }, 10);

        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Настройка слушателей событий
    setupListeners() {
        // Делегирование событий для динамически добавляемых кнопок
        document.addEventListener("click", (event) => {
            const favButton = event.target.closest(".fav-btn");
            if (favButton) {
                this.handleFavoriteClick(event, favButton);
            }

            // Очистка всех избранных
            const clearAllBtn = event.target.closest("#clear-all-favorites");
            if (clearAllBtn) {
                event.preventDefault();
                if (
                    confirm("Вы уверены, что хотите удалить все товары из избранного?")
                ) {
                    this.clearAllFavorites();
                    this.renderFavoritesPage(); // Перерисовываем страницу избранного
                }
            }
        });
    }

    // Рендеринг страницы избранного
    renderFavoritesPage() {
        const container = document.getElementById("products-container");
        if (!container) return;

        const favorites = this.getAllFavorites();

        if (favorites.length === 0) {
            container.innerHTML = `
                <div class="favorites-empty">
                    <i class="fas fa-heart"></i>
                    <h3>В избранном пока пусто</h3>
                    <p>Добавляйте товары, нажимая на сердечко ♥</p>
                    <a href="catalog.html" class="btn btn-primary">
                        <i class="fas fa-shopping-bag"></i> Перейти в каталог
                    </a>
                </div>
            `;
            return;
        }

        container.innerHTML = "";

        favorites.forEach((item) => {
            const card = this.createFavoriteCard(item);
            container.appendChild(card);
        });

        this.updateHeartIcons();
    }

    // Создание карточки для страницы избранного
    createFavoriteCard(item) {
        const card = document.createElement("div");
        card.className = "product-card";
        card.dataset.id = item.id;

        const formattedPrice = item.price.toLocaleString("ru-RU") + " руб.";
        const ratingStars = this.createStars(item.rating || 4.5);

        card.innerHTML = `
            <div class="product-image">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${this.getCategoryName(item.category)}</span>
                <div class="product-brand">${item.brand || "SportZone"}</div>
                <h3 class="product-title">${item.title}</h3>
                <div class="product-details">${item.description || ""}</div>
                <div class="product-rating">
                    <span class="rating-stars">${ratingStars}</span>
                    <span class="rating-count">${(item.rating || 4.5).toFixed(1)}</span>
                </div>
                <div class="product-price-section">
                    <div class="product-price">${formattedPrice}</div>
                    <div class="product-actions">
                        <button class="btn btn-primary add-to-cart" data-id="${item.id}">В корзину</button>
                        <button class="fav-btn active" data-id="${item.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn btn-remove" data-id="${item.id}" title="Удалить">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Добавляем обработчик удаления
        const removeBtn = card.querySelector(".btn-remove");
        if (removeBtn) {
            removeBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                this.removeFromFavorites(item.id);
                card.remove();
                this.updateFavoritesCount();
            });
        }

        return card;
    }

    // Вспомогательные функции
    createStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        let stars = "★".repeat(fullStars);
        if (halfStar) stars += "☆";
        stars += "☆".repeat(emptyStars);

        return stars;
    }

    getCategoryName(category) {
        const names = {
            "vodn-sport": "Водный спорт",
            "zimni-sport": "Зимний спорт",
            "fitness-yoga": "Фитнес и йога",
            tourism: "Туризм",
            "water-sports": "Водный спорт",
            "winter-sports": "Зимний спорт",
        };
        return names[category] || category;
    }
}

const Cart = {
    // Получить корзину из localStorage
    getCart() {
        return JSON.parse(localStorage.getItem("shoppingCart")) || [];
    },

    // Сохранить корзину в localStorage
    saveCart(cart) {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
        this.updateCartIndicator();
    },

    // Добавить товар в корзину
    addToCart(product) {
        let cart = this.getCart();
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1,
            });
        }

        this.saveCart(cart);
        showNotification("Товар добавлен в корзину!", "success");
        return cart;
    },

    // Удалить товар из корзины
    removeFromCart(productId) {
        let cart = this.getCart();
        cart = cart.filter((item) => item.id !== productId);
        this.saveCart(cart);
        showNotification("Товар удалён из корзины", "info");
        return cart;
    },

    // Изменить количество товара
    updateQuantity(productId, newQuantity) {
        if (newQuantity < 1) return this.removeFromCart(productId);

        let cart = this.getCart();
        const item = cart.find((item) => item.id === productId);

        if (item) {
            item.quantity = newQuantity;
            this.saveCart(cart);
        }

        return cart;
    },

    // Очистить корзину
    clearCart() {
        localStorage.removeItem("shoppingCart");
        this.updateCartIndicator();
        return [];
    },

    // Получить общую сумму
    getTotalPrice() {
        const cart = this.getCart();
        return cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    },

    // Получить общее количество товаров
    getTotalItems() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + item.quantity, 0);
    },

    // Обновить индикатор корзины (можно вызвать из других страниц)
    updateCartIndicator() {
        const totalItems = this.getTotalItems();
        const cartIndicator = document.querySelector(".cart-indicator");

        if (cartIndicator) {
            if (totalItems > 0) {
                cartIndicator.textContent = totalItems;
                cartIndicator.style.display = "flex";
            } else {
                cartIndicator.style.display = "none";
            }
        }
    },

    // Инициализировать корзину
    init() {
        this.renderCart();
        this.setupEventListeners();
        this.updateCartIndicator();
    },

    // Рендеринг корзины
    renderCart() {
        const cart = this.getCart();
        const cartItemsContainer = document.getElementById("cart-items");
        const emptyCartElement = document.getElementById("empty-cart");
        const totalItemsCount = document.getElementById("total-items-count");
        const itemsPriceElement = document.getElementById("items-price");
        const totalPriceElement = document.getElementById("total-price");
        const cartSummary = document.querySelector(".cart-summary");

        console.log(cartSummary);

        if (
            !emptyCartElement &&
            !cartItemsContainer &&
            !emptyCartElement &&
            !totalItemsCount &&
            !itemsPriceElement &&
            !totalPriceElement &&
            !cartSummary
        ) {
            return;
        }

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "";
            emptyCartElement.style.display = "flex";

            totalItemsCount.textContent = "0";
            itemsPriceElement.textContent = "0 руб.";
            totalPriceElement.textContent = "0 руб.";
            cartSummary.style.display = "none";
            return;
        }

        emptyCartElement.style.display = "none";
        cartItemsContainer.innerHTML = "";

        // Рендерим каждый товар
        cart.forEach((item) => {
            const cartItemElement = this.createCartItemElement(item);
            cartItemsContainer.appendChild(cartItemElement);
        });

        // Обновляем итоговые значения
        const totalItems = this.getTotalItems();
        const totalPrice = this.getTotalPrice();

        totalItemsCount.textContent = totalItems;
        itemsPriceElement.textContent = this.formatPrice(totalPrice);
        totalPriceElement.textContent = this.formatPrice(totalPrice);
    },

    // Создание элемента товара в корзине
    createCartItemElement(item) {
        const itemTotal = item.price * item.quantity;
        const element = document.createElement("div");
        element.className = "cart-item";
        element.dataset.id = item.id;

        element.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.src}" alt="${item.title}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-price">${this.formatPrice(item.price)}</div>
                <button class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-trash"></i> Удалить
                </button>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <input type="number" 
                       class="quantity-input" 
                       value="${item.quantity}" 
                       min="1" 
                       max="99"
                       data-id="${item.id}">
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-total">
                ${this.formatPrice(itemTotal)}
            </div>
        `;

        return element;
    },

    // Форматирование цены
    formatPrice(price) {
        return price.toLocaleString("ru-RU") + " руб.";
    },

    // Настройка обработчиков событий
    setupEventListeners() {
        // Удаление товара
        document.addEventListener("click", (e) => {
            if (e.target.closest(".cart-item-remove")) {
                const productId = parseInt(
                    e.target.closest(".cart-item-remove").dataset.id,
                );
                this.removeFromCart(productId);
                this.renderCart();
            }
        });

        // Изменение количества через кнопки
        document.addEventListener("click", (e) => {
            if (e.target.closest(".quantity-btn")) {
                const btn = e.target.closest(".quantity-btn");
                const productId = parseInt(btn.dataset.id);
                const input = btn.parentElement.querySelector(".quantity-input");
                let newQuantity = parseInt(input.value);

                if (btn.classList.contains("plus")) {
                    newQuantity++;
                } else if (btn.classList.contains("minus")) {
                    newQuantity--;
                }

                if (newQuantity >= 1) {
                    input.value = newQuantity;
                    this.updateQuantity(productId, newQuantity);
                    this.renderCart();
                }
            }
        });

        // Изменение количества через input
        document.addEventListener("change", (e) => {
            if (e.target.classList.contains("quantity-input")) {
                const input = e.target;
                const productId = parseInt(input.dataset.id);
                const newQuantity = parseInt(input.value);

                if (!isNaN(newQuantity) && newQuantity >= 1) {
                    this.updateQuantity(productId, newQuantity);
                    this.renderCart();
                }
            }
        });

        // Оформление заказа
        const checkoutBtn = document.getElementById("checkout-btn");
        if (checkoutBtn) {
            checkoutBtn.addEventListener("click", () => {
                if (this.getTotalItems() === 0) {
                    showNotification("Добавьте товары в корзину", "info");
                    return;
                }
                showNotification("Заказ оформлен! Спасибо за покупку!", "success");
                this.clearCart();
                this.renderCart();
            });
        }
    },
};

// Универсальная функция для уведомлений
function showNotification(message, type = "info") {
    // Проверяем, есть ли уже уведомления
    let notification = document.querySelector(".notification");

    if (!notification) {
        notification = document.createElement("div");
        notification.className = `notification notification-${type}`;
        document.body.appendChild(notification);
    }

    notification.innerHTML = `
        <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
        <span>${message}</span>
    `;

    // Показываем уведомление
    setTimeout(() => {
        notification.classList.add("show");
    }, 10);

    // Скрываем через 3 секунды
    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Создаем глобальный экземпляр менеджера избранного
const favoritesManager = new FavoritesManager();

function initPage() {
    const path = window.location.pathname;
    const ifCatalog = path.includes("/catalog.html");
    const ifCart = path.includes("/favorite.html");
    const ifFavorite = path.includes("/shopping-cart.html");

    return [ifCatalog || ifCart || ifFavorite, path];
}

// В начале initCatalogPage() добавьте:
function initCatalogPage() {
    // Проверяем параметры URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");

    if (categoryParam && document.getElementById("category-filter")) {
        document.getElementById("category-filter").value = categoryParam;
    }

    renderProducts(filterProducts());

    // Добавляем обработчики для карточек товаров
    setupProductCardClickHandlers();
    setupModalCloseHandlers();
}

// Функции для работы с шаблонами
function cloneTemplate(templateId) {
    const template = document.getElementById(templateId);
    if (!template) return null;

    const clone = template.content.firstElementChild.cloneNode(true);
    const elements = Array.from(clone.querySelectorAll("[data-name]")).reduce(
        (acc, el) => {
            acc[el.dataset.name] = el;
            return acc;
        },
        {},
    );

    return {
        container: clone,
        elements: elements,
    };
}

// Сопоставление категорий
const categoryMapping = {
    "water-sports": "vodn-sport",
    "winter-sports": "zimni-sport",
    "fitness-yoga": "fitness-yoga",
    tourism: "tourism",
};

// Основная функция для рендеринга товаров
function renderProducts(filteredCards = cards) {
    const container = document.getElementById("products-container");
    container.innerHTML = "";

    if (filteredCards.length === 0) {
        container.innerHTML = `
      <div class="no-products">
        <i class="fas fa-search"></i>
        <h3>Товары не найдены</h3>
      </div>
    `;
        return;
    }

    filteredCards.forEach((item) => {
        const productCard = createProductCard(item);
        container.appendChild(productCard);
    });

    addEventListeners();
}

// Функция создания карточки товара
// Функция создания карточки товара (замените старую функцию)
function createProductCard(item) {
    const card = document.createElement("div");
    card.className = "product-card";

    const filterCategory = categoryMapping[item.category] || item.category;

    card.setAttribute("data-category", filterCategory);
    card.setAttribute("data-price", item.price);

    const formattedPrice = item.price.toLocaleString("ru-RU") + " руб.";
    const ratingStars = createStars(item.rating);
    const reviewCount = Math.floor(Math.random() * 100 + 20);

    card.innerHTML = `
    <div class="product-image">
      <img src="${item.src}" alt="${item.title}" loading="lazy">
    </div>
    <div class="product-info">
      <div class="product-category-container">
        <span class="product-category">${getCategoryName(filterCategory)}</span>
        <div class="product-brand">${item.brand || "SportZone"}</div>
      </div>
      <h3 class="product-title">${item.title}</h3>
      <div class="product-details-container">
        <div class="product-rating">
          <span class="rating-stars">${ratingStars}</span>
          <span class="rating-count">${item.rating.toFixed(1)} (${reviewCount})</span>
        </div>
        <div class="product-description">${item.description}</div>
      </div>
      <div class="product-price-section">
        <div class="product-price">${formattedPrice}</div>
        <div class="product-actions">
          <button class="btn btn-primary add-to-cart" data-id="${item.id}">В корзину</button>
          <button class="fav-btn" data-id="${item.id}">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;

    return card;
}

// Вспомогательные функции
function getCategoryName(category) {
    const names = {
        "vodn-sport": "Водный спорт",
        "zimni-sport": "Зимний спорт",
        "fitness-yoga": "Фитнес и йога",
        tourism: "Туризм",
    };
    return names[category] || category;
}

function createStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let stars = "★".repeat(fullStars);
    if (halfStar) stars += "☆";
    stars += "☆".repeat(emptyStars);

    return stars.replace(/★/g, "★").replace(/☆/g, "☆");
}

// Фильтрация товаров
function filterProducts() {
    const categoryFilter = document.getElementById("category-filter").value;
    const priceFilter = document.getElementById("price-filter").value;

    let filtered = [...cards];

    // Фильтрация по категории
    if (categoryFilter !== "all") {
        filtered = filtered.filter((item) => {
            const mappedCategory = categoryMapping[item.category];
            return mappedCategory === categoryFilter;
        });
    }

    // Фильтрация по цене
    if (priceFilter !== "all") {
        const [min, max] = priceFilter.split("-").map(Number);
        filtered = filtered.filter((item) => {
            if (max) {
                return item.price >= min && item.price <= max;
            } else {
                return item.price <= min;
            }
        });
    }

    return filtered;
}

// Обработчики событий
function addEventListeners() {
    // Добавление в корзину
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", addToCart);
    });

    // Добавление в избранное
    document.querySelectorAll(".fav-btn").forEach((button) => {
        button.addEventListener("click", toggleFavorite);
    });
}

function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = cards.find((p) => p.id === productId);

    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    if (!cart.find((item) => item.id === productId)) {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            src: product.src,
            quantity: 1,
        });

        localStorage.setItem("shoppingCart", JSON.stringify(cart));
        showNotification("Товар добавлен в корзину!", "success");
        updateCartIndicator();
    } else {
        showNotification("Товар уже в корзине", "info");
    }
}

function toggleFavorite(event) {
    if (typeof favoritesManager !== "undefined") {
        favoritesManager.handleFavoriteClick(event);
    } else {
        // Fallback на старую логику
        event.currentTarget.classList.toggle("active");
        const productId = parseInt(event.currentTarget.dataset.id);
        let favorites = JSON.parse(localStorage.getItem("favorite")) || [];
        const product = cards.find((p) => p.id === productId);

        if (!product) return;

        if (favorites.find((item) => item.id === productId)) {
            favorites = favorites.filter((item) => item.id !== productId);
            showNotification("Удалено из избранного", "info");
        } else {
            favorites.push({
                id: product.id,
                title: product.title,
                price: product.price,
                src: product.src,
            });
            showNotification("Добавлено в избранное!", "success");
        }

        localStorage.setItem("favorite", JSON.stringify(favorites));
    }
}

// В функции addEventListeners обновите обработчик для fav-btn:
function addEventListeners() {
    // Добавление в корзину
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", addToCart);
    });

    // Добавление в избранное (используем делегирование)
    document.addEventListener("click", (event) => {
        if (event.target.closest(".fav-btn")) {
            toggleFavorite(event);
        }
    });

    // Инициализируем состояние сердечек при загрузке
    if (typeof favoritesManager !== "undefined") {
        favoritesManager.updateHeartIcons();
    } else {
        // Fallback логика
        document.querySelectorAll(".fav-btn").forEach((button) => {
            const productId = parseInt(button.dataset.id);
            let favorites = JSON.parse(localStorage.getItem("favorite")) || [];
            if (favorites.find((item) => item.id === productId)) {
                button.classList.add("active");
            }
        });
    }
}

function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
    <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
    <span>${message}</span>
  `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 10);

    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Менеджер корзины
class CartManager {
    constructor() {
        this.storageKey = "shoppingCart";
        this.cart = this.loadCart();
        this.updateCartIndicator();
    }

    // Загрузка корзины из localStorage
    loadCart() {
        const cart = localStorage.getItem(this.storageKey);
        return cart ? JSON.parse(cart) : [];
    }

    // Сохранение корзины в localStorage
    saveCart() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
        this.updateCartIndicator();
        this.updateCartTotal();
        this.updateCartPage();
    }

    // Проверка наличия товара в корзине
    isInCart(productId) {
        return this.cart.some((item) => item.id === productId);
    }

    // Добавление товара в корзину
    addToCart(product, quantity = 1) {
        const existingItem = this.cart.find((item) => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                src: product.src,
                category: product.category,
                quantity: quantity,
                addedAt: new Date().toISOString(),
            });
        }

        this.saveCart();
        this.showNotification("Товар добавлен в корзину!", "success");
        return true;
    }

    // Удаление товара из корзины
    removeFromCart(productId, removeAll = false) {
        if (removeAll) {
            this.cart = this.cart.filter((item) => item.id !== productId);
        } else {
            const item = this.cart.find((item) => item.id === productId);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    this.cart = this.cart.filter((item) => item.id !== productId);
                }
            }
        }

        this.saveCart();
        this.showNotification("Товар удален из корзины", "info");
        return true;
    }

    // Изменение количества товара
    updateQuantity(productId, newQuantity) {
        const item = this.cart.find((item) => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(productId, true);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
            }
            return true;
        }
        return false;
    }

    // Получение всех товаров в корзине
    getAllCartItems() {
        return this.cart;
    }

    // Очистка корзины
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.showNotification("Корзина очищена", "info");
    }

    // Получение общей суммы
    getTotalPrice() {
        return this.cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
        );
    }

    // Получение общего количества товаров
    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Обновление индикатора корзины в шапке
    updateCartIndicator() {
        const totalItems = this.getTotalItems();
        const cartLink = document.querySelector('a[href="cart.html"]');

        if (cartLink) {
            let indicator = cartLink.querySelector(".cart-indicator");

            if (totalItems > 0) {
                if (!indicator) {
                    indicator = document.createElement("span");
                    indicator.className = "cart-indicator";
                    cartLink.appendChild(indicator);
                }
                indicator.textContent = totalItems > 99 ? "99+" : totalItems;
                indicator.style.display = "flex";
            } else if (indicator) {
                indicator.style.display = "none";
            }
        }

        return totalItems;
    }

    // Обновление общей суммы на странице корзины
    updateCartTotal() {
        const totalElement = document.getElementById("cart-total-price");
        const totalItemsElement = document.getElementById("cart-total-items");

        if (totalElement) {
            const total = this.getTotalPrice();
            totalElement.textContent = total.toLocaleString("ru-RU") + " руб.";
        }

        if (totalItemsElement) {
            const totalItems = this.getTotalItems();
            totalItemsElement.textContent =
                totalItems +
                " " +
                this.getWordForm(totalItems, ["товар", "товара", "товаров"]);
        }
    }

    // Обновление страницы корзины
    updateCartPage() {
        const container = document.getElementById("cart-items-container");
        if (!container) return;

        if (this.cart.length === 0) {
            container.innerHTML = `
        <div class="cart-empty">
          <i class="fas fa-shopping-cart"></i>
          <h3>Корзина пуста</h3>
          <p>Добавляйте товары, нажимая кнопку "В корзину"</p>
          <a href="catalog.html" class="btn btn-primary">
            <i class="fas fa-shopping-bag"></i> Перейти в каталог
          </a>
        </div>
      `;

            const checkoutSection = document.getElementById("cart-checkout");
            if (checkoutSection) {
                checkoutSection.style.display = "none";
            }

            return;
        }

        container.innerHTML = "";

        this.cart.forEach((item) => {
            const cartItem = this.createCartItemElement(item);
            container.appendChild(cartItem);
        });

        const checkoutSection = document.getElementById("cart-checkout");
        if (checkoutSection) {
            checkoutSection.style.display = "block";
        }

        this.updateCartTotal();
    }

    // Создание элемента товара в корзине
    createCartItemElement(item) {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.dataset.id = item.id;

        const totalPrice = item.price * item.quantity;

        itemElement.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.src}" alt="${item.title}">
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-category">${this.getCategoryName(item.category)}</div>
        <div class="cart-item-price">${item.price.toLocaleString("ru-RU")} руб.</div>
      </div>
      <div class="cart-item-quantity">
        <button class="quantity-btn minus" data-id="${item.id}">-</button>
        <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" data-id="${item.id}">
        <button class="quantity-btn plus" data-id="${item.id}">+</button>
      </div>
      <div class="cart-item-total">
        ${totalPrice.toLocaleString("ru-RU")} руб.
      </div>
      <div class="cart-item-actions">
        <button class="btn btn-remove-from-cart" data-id="${item.id}" title="Удалить">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;

        // Добавляем обработчики событий
        const minusBtn = itemElement.querySelector(".minus");
        const plusBtn = itemElement.querySelector(".plus");
        const removeBtn = itemElement.querySelector(".btn-remove-from-cart");
        const quantityInput = itemElement.querySelector(".quantity-input");

        minusBtn.addEventListener("click", () =>
            this.removeFromCart(item.id, false),
        );
        plusBtn.addEventListener("click", () => this.addToCart(item, 1));
        removeBtn.addEventListener("click", () =>
            this.removeFromCart(item.id, true),
        );

        quantityInput.addEventListener("change", (e) => {
            const newQuantity = parseInt(e.target.value);
            if (!isNaN(newQuantity) && newQuantity > 0) {
                this.updateQuantity(item.id, newQuantity);
            }
        });

        quantityInput.addEventListener("blur", (e) => {
            if (e.target.value === "" || parseInt(e.target.value) < 1) {
                e.target.value = 1;
                this.updateQuantity(item.id, 1);
            }
        });

        return itemElement;
    }

    // Вспомогательные методы
    getCategoryName(category) {
        const names = {
            "water-sports": "Водный спорт",
            "winter-sports": "Зимний спорт",
            "fitness-yoga": "Фитнес и йога",
            tourism: "Туризм",
            "vodn-sport": "Водный спорт",
            "zimni-sport": "Зимний спорт",
        };
        return names[category] || category;
    }

    getWordForm(number, forms) {
        const n = Math.abs(number) % 100;
        const n1 = n % 10;

        if (n > 10 && n < 20) return forms[2];
        if (n1 > 1 && n1 < 5) return forms[1];
        if (n1 === 1) return forms[0];
        return forms[2];
    }

    showNotification(message, type = "info") {
        const notification = document.createElement("div");
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
      <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
      <span>${message}</span>
    `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add("show");
        }, 10);

        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Настройка слушателей событий
    setupCartListeners() {
        // Делегирование событий для кнопок корзины
        document.addEventListener("click", (event) => {
            // Обработка кнопок "В корзину" на карточках товаров
            const addToCartBtn = event.target.closest(".add-to-cart");
            if (addToCartBtn) {
                event.preventDefault();
                event.stopPropagation();

                const productId = parseInt(addToCartBtn.dataset.id);
                let product = null;

                if (typeof cards !== "undefined") {
                    product = cards.find((p) => p.id === productId);
                } else {
                    const cardElement = addToCartBtn.closest(".product-card");
                    if (cardElement) {
                        product = {
                            id: productId,
                            title: cardElement.querySelector(".product-title")?.textContent,
                            price: parseFloat(cardElement.dataset.price),
                            src: cardElement.querySelector("img")?.src,
                            category: cardElement.dataset.category,
                        };
                    }
                }

                if (product) {
                    this.addToCart(product);

                    // Анимация кнопки
                    addToCartBtn.classList.add("pulse");
                    setTimeout(() => {
                        addToCartBtn.classList.remove("pulse");
                    }, 300);
                }
            }

            // Очистка корзины
            const clearCartBtn = event.target.closest("#clear-cart");
            if (clearCartBtn) {
                event.preventDefault();
                if (confirm("Вы уверены, что хотите очистить корзину?")) {
                    this.clearCart();
                    this.updateCartPage();
                }
            }

            // Оформление заказа
            const checkoutBtn = event.target.closest("#checkout-btn");
            if (checkoutBtn) {
                event.preventDefault();
                if (this.cart.length === 0) {
                    this.showNotification("Корзина пуста!", "info");
                    return;
                }

                // Здесь можно добавить логику оформления заказа
                this.showNotification("Заказ оформлен! Спасибо за покупку!", "success");
                this.clearCart();
            }
        });
    }
}

// Создаем глобальный экземпляр менеджера корзины
const cartManager = new CartManager();

// Обновление состояния кнопок "В корзину"
function updateCartButtons() {
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        const productId = parseInt(button.dataset.id);
        if (cartManager.isInCart(productId)) {
            button.textContent = "В корзине ✓";
            button.classList.remove("btn-primary");
            button.classList.add("btn-secondary");
        } else {
            button.textContent = "В корзину";
            button.classList.remove("btn-secondary");
            button.classList.add("btn-primary");
        }
    });
}

// Функция инициализации страницы корзины
function initCartPage() {
    if (document.getElementById("cart-items-container")) {
        cartManager.updateCartPage();
        cartManager.setupCartListeners();
    }
}

// Функция для обновления индикатора корзины
function updateCartIndicator() {
    const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Создаем или находим индикатор
    let cartIndicator = document.querySelector(".cart-indicator");
    const cartLink = document.querySelector('a[href="shopping-cart.html"]');

    if (cartLink && !cartIndicator) {
        cartIndicator = document.createElement("span");
        cartIndicator.className = "cart-indicator";
        cartLink.appendChild(cartIndicator);
    }

    if (cartIndicator) {
        if (totalItems > 0) {
            cartIndicator.textContent = totalItems;
            cartIndicator.style.display = "flex";
        } else {
            cartIndicator.style.display = "none";
        }
    }
}
// Инициализация при загрузке страницы
// document.addEventListener("DOMContentLoaded", function () {
// });

// Вызываем обновление индикатора при загрузке страницы
// document.addEventListener("DOMContentLoaded", );

// Функция для открытия модального окна с товаром
function openProductModal(productId) {
    const product = cards.find((p) => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("product-modal");
    const modalImg = document.getElementById("modal-product-img");
    const modalCategory = document.getElementById("modal-product-category");
    const modalTitle = document.getElementById("modal-product-title");
    const modalPrice = document.getElementById("modal-product-price");
    const modalDescription = document.getElementById("modal-product-description");
    const modalStars = document.getElementById("modal-product-stars");
    const modalRating = document.getElementById("modal-product-rating");
    const modalFavBtn = document.getElementById("modal-fav-btn");

    // Заполняем данные
    modalImg.src = product.src;
    modalImg.alt = product.title;

    const filterCategory = categoryMapping[product.category] || product.category;
    modalCategory.textContent = getCategoryName(filterCategory);
    modalTitle.textContent = product.title;
    modalPrice.textContent = product.price.toLocaleString("ru-RU") + " ₽";
    modalDescription.textContent = product.description;

    // Рейтинг
    modalStars.innerHTML = createStars(product.rating);
    modalRating.textContent = product.rating.toFixed(1);
    modalFavBtn.dataset.id = product.id;

    // Генерируем характеристики
    generateProductSpecs(product);

    // Обновляем состояние кнопки избранного
    updateModalFavButton(product.id);

    // Показываем модальное окно
    modal.classList.add("show");
    document.body.style.overflow = "hidden";

    // Добавляем обработчик для кнопки "В корзину" в модальном окне
    const modalCartBtn = document.getElementById("modal-add-to-cart");
    modalCartBtn.onclick = () => {
        addToCartFromModal(product);
    };
}

// Генерация характеристик товара
function generateProductSpecs(product) {
    const specsList = document.getElementById("modal-product-specs-list");
    const filterCategory = categoryMapping[product.category] || product.category;

    // Базовые характеристики для всех товаров
    const baseSpecs = [
        ["Категория", getCategoryName(filterCategory)],
        ["Производитель", "SportZone"],
        ["Артикул", `SPZ-${product.id.toString().padStart(4, "0")}`],
        ["Гарантия", "1 год"],
    ];

    // Дополнительные характеристики в зависимости от категории
    let categorySpecs = [];
    switch (product.category) {
        case "water-sports":
        case "vodn-sport":
            categorySpecs = [
                ["Материал", "Пенопласт EVA"],
                ["Максимальная нагрузка", "100 кг"],
                ["Размер", "150 × 60 × 10 см"],
                ["Цвет", "Синий/зеленый"],
            ];
            break;
        case "winter-sports":
        case "zimni-sport":
            categorySpecs = [
                ["Материал", "Поликарбонат"],
                ["Размер", "Универсальный"],
                ["Вентиляция", "8 отверстий"],
                ["Стандарт безопасности", "CE EN1077"],
            ];
            break;
        case "tourism":
            categorySpecs = [
                ["Материал клинка", "Нержавеющая сталь 440C"],
                ["Длина клинка", "9 см"],
                ["Общая длина", "21 см"],
                ["Вес", "150 г"],
            ];
            break;
        default:
            categorySpecs = [
                ["Материал", "Высококачественный полимер"],
                ["Вес", "1.2 кг"],
                ["Цвет", "Черный"],
            ];
    }

    // Объединяем характеристики
    const allSpecs = [...baseSpecs, ...categorySpecs];

    // Очищаем и заполняем список
    specsList.innerHTML = "";
    allSpecs.forEach(([name, value]) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${name}</span><span>${value}</span>`;
        specsList.appendChild(li);
    });
}

// Обновление состояния кнопки избранного в модальном окне
function updateModalFavButton(productId) {
    const modalFavBtn = document.getElementById("modal-fav-btn");
    const heartIcon = modalFavBtn.querySelector("i");

    if (typeof favoritesManager !== "undefined") {
        if (favoritesManager.isInFavorites(productId)) {
            modalFavBtn.classList.add("active");
            heartIcon.classList.remove("far");
            heartIcon.classList.add("fas");
        } else {
            modalFavBtn.classList.remove("active");
            heartIcon.classList.remove("fas");
            heartIcon.classList.add("far");
        }
    } else {
        // Fallback на localStorage
        const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
        if (favorites.find((item) => item.id === productId)) {
            modalFavBtn.classList.add("active");
            heartIcon.classList.remove("far");
            heartIcon.classList.add("fas");
        } else {
            modalFavBtn.classList.remove("active");
            heartIcon.classList.remove("fas");
            heartIcon.classList.add("far");
        }
    }
}

// Добавление в корзину из модального окна
function addToCartFromModal(product) {
    const quantityInput = document.querySelector(".quantity-input");
    const quantity = parseInt(quantityInput.value) || 1;

    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
        // Увеличиваем количество, если товар уже в корзине
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Добавляем новый товар
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            src: product.src,
            category: product.category,
            quantity: quantity,
        });
    }

    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    showNotification(`Добавлено ${quantity} шт. в корзину!`, "success");

    // Небольшая анимация кнопки
    const cartBtn = document.getElementById("modal-add-to-cart");
    cartBtn.classList.add("pulse");
    setTimeout(() => {
        cartBtn.classList.remove("pulse");
    }, 300);
}

// Закрытие модального окна
function closeProductModal() {
    const modal = document.getElementById("product-modal");
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
}

// Обработчик для клика по карточке товара
function setupProductCardClickHandlers() {
    document.addEventListener("click", (event) => {
        // Проверяем, был ли клик на карточке товара, но не на кнопках
        const productCard = event.target.closest(".product-card");
        const clickedButton = event.target.closest(".add-to-cart, .fav-btn, .btn");

        if (productCard && !clickedButton) {
            const productId = parseInt(
                productCard.querySelector(".add-to-cart")?.dataset.id ||
                productCard.querySelector(".fav-btn")?.dataset.id,
            );
            if (productId) {
                openProductModal(productId);
            }
        }
    });
}

// Добавьте обработчик для закрытия модального окна
function setupModalCloseHandlers() {
    // Кнопка закрытия
    document
        .querySelector(".modal-close")
        .addEventListener("click", closeProductModal);

    // Клик по overlay
    document
        .querySelector(".modal-overlay")
        .addEventListener("click", closeProductModal);

    // Закрытие по Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeProductModal();
        }
    });

    // Обработчик для кнопки избранного в модальном окне
    document
        .getElementById("modal-fav-btn")
        .addEventListener("click", (event) => {
            event.stopPropagation();
            const productId = parseInt(event.currentTarget.dataset.id);
            const product = cards.find((p) => p.id === productId);

            if (product) {
                if (typeof favoritesManager !== "undefined") {
                    favoritesManager.handleFavoriteClick(event, event.currentTarget);
                    updateModalFavButton(productId);
                } else {
                    toggleFavorite(event);
                    updateModalFavButton(productId);
                }
            }
        });

    // Обработчики для селектора количества
    document
        .querySelector(".quantity-btn.minus")
        .addEventListener("click", () => {
            const input = document.querySelector(".quantity-input");
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });

    document.querySelector(".quantity-btn.plus").addEventListener("click", () => {
        const input = document.querySelector(".quantity-input");
        if (parseInt(input.value) < 99) {
            input.value = parseInt(input.value) + 1;
        }
    });

    // Валидация поля ввода количества
    document
        .querySelector(".quantity-input")
        .addEventListener("change", (event) => {
            let value = parseInt(event.target.value);
            if (isNaN(value) || value < 1) {
                event.target.value = 1;
            } else if (value > 99) {
                event.target.value = 99;
            }
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burgerBtn');
    const mainMenu = document.getElementById('mainMenu');
    const header = document.querySelector("header");

    burgerBtn.addEventListener('click', function () {
        header.classList.toggle('active');
        mainMenu.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.menu-list a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            header.classList.remove('active');
            mainMenu.classList.remove('active');
            burgerBtn.classList.remove('active');
        });
    });
});

// Инициализация
document.addEventListener("DOMContentLoaded", function () {
    updateCartIndicator();

    if (!initPage()[0]) {
        return;
    }

    if (initPage()[1].includes("/catalog.html")) {
        // Обработчики фильтров
        const filterElements = ["category-filter", "price-filter"];

        filterElements.forEach((id) => {
            document.getElementById(id).addEventListener("change", function () {
                const filteredProducts = filterProducts();
                renderProducts(filteredProducts);
            });
        });

        // Сброс фильтров
        document
            .getElementById("reset-filters")
            .addEventListener("click", function () {
                document.getElementById("category-filter").value = "all";
                document.getElementById("price-filter").value = "all";

                renderProducts(cards);
            });

        initCatalogPage();
        renderProducts(filterProducts());

        // Пагинация
        let currentPage = 1;
        const productsPerPage = 9;
        let totalPages = 1;

        function updatePagination() {
            const totalProducts = document.querySelectorAll(".product-card").length;
            totalPages = Math.max(1, Math.ceil(totalProducts / productsPerPage));

            // Ограничиваем текущую страницу в допустимых пределах
            if (currentPage < 1) currentPage = 1;
            if (currentPage > totalPages) currentPage = totalPages;

            document.getElementById("page-info").textContent =
                `Страница ${currentPage} из ${totalPages}`;

            const products = Array.from(document.querySelectorAll(".product-card"));

            // Скрываем/показываем товары в зависимости от текущей страницы
            products.forEach((product, index) => {
                const page = Math.floor(index / productsPerPage) + 1;
                product.style.display = page === currentPage ? "flex" : "none";
            });

            // Обновляем состояние кнопок
            updatePaginationButtons();
        }

        function updatePaginationButtons() {
            const firstPageBtn = document.getElementById("first-page");
            const prevPageBtn = document.getElementById("prev-page");
            const nextPageBtn = document.getElementById("next-page");
            const lastPageBtn = document.getElementById("last-page");

            // Кнопка "Первая страница" и "Предыдущая страница"
            firstPageBtn.disabled = currentPage === 1;
            prevPageBtn.disabled = currentPage === 1;

            // Кнопка "Последняя страница" и "Следующая страница"
            lastPageBtn.disabled = currentPage === totalPages;
            nextPageBtn.disabled = currentPage === totalPages;
        }

        // Обработчики для кнопок пагинации
        document.getElementById("first-page").addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage = 1;
                updatePagination();
            }
        });

        document.getElementById("prev-page").addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });

        document.getElementById("next-page").addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });

        document.getElementById("last-page").addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage = totalPages;
                updatePagination();
            }
        });

        updatePagination();
    }
    Cart.init();

    // initCatalogPage();
    // Первоначальный рендеринг
    // renderProducts();
});
