// Product database with history and prices
const productDatabase = {
    'jager-classic': {
        name: 'Jägermeister Classic',
        icon: '🦌',
        price: 1299,
        priceDisplay: 'от 1 299 ₽',
        description: 'Классический травяной ликер крепостью 35%. 56 ингредиентов, выдержка 12 месяцев.',
        history: 'Jägermeister был создан в 1934 году Куртом Мастом в Вольфенбюттеле, Германия. Рецепт содержит 56 натуральных ингредиентов — травы, коренья, цветы и фрукты из разных уголков мира. Название переводится как "мастер охоты".'
    },
    'jager-coldbrew': {
        name: 'Jägermeister Cold Brew',
        icon: '☕',
        price: 1499,
        priceDisplay: '1 499 ₽',
        description: 'Кофейный ликер крепостью 33%. Сочетание классического рецепта с холодным кофе.',
        history: 'Новинка 2019 года — результат смелого эксперимента. Холодный кофе из отборных зерен арабики соединился с классическим Jägermeister.'
    },
    'jager-manifest': {
        name: 'Jägermeister Manifest',
        icon: '👑',
        price: 2999,
        priceDisplay: '2 999 ₽',
        description: 'Премиальный ликер крепостью 38%. Выдержка в бочках с нотками ванили.',
        history: 'Премиальная линейка, представленная в 2016 году. Более высокая крепость и уникальный процесс выдержки придают Manifest более насыщенный вкус.'
    },
    'jack-daniels': {
        name: "Jack Daniel's",
        icon: '🥃',
        price: 2448,
        priceDisplay: '2 448 ₽',
        description: 'Легендарный американский виски. Крепость 40%. Выдержка в дубовых бочках.',
        history: 'Основан в 1875 году в Линчбурге, Теннесси. Единственный виски в мире, который проходит фильтрацию через слой кленового угля толщиной 3 метра.'
    },
    'jameson': {
        name: 'Jameson',
        icon: '🥃',
        price: 3221,
        priceDisplay: '3 221 ₽',
        description: 'Ирландский виски тройной дистилляции. Мягкий вкус с нотками ванили.',
        history: 'Создан в 1780 году Джоном Джеймсоном в Дублине. Тройная дистилляция делает его исключительно мягким и чистым.'
    },
    'chivas': {
        name: 'Chivas Regal 12 Years',
        icon: '🍸',
        price: 3817,
        priceDisplay: '3 817 ₽',
        description: 'Шотландский купажированный виски. 12 лет выдержки.',
        history: 'История начинается в 1801 году в Абердине. Братья Джеймс и Джон Чивас создали первый роскошный купажированный виски.'
    },
    'jim-beam': {
        name: 'Jim Beam',
        icon: '🌶️',
        price: 1352,
        priceDisplay: '1 352 ₽',
        description: 'Классический американский бурбон. Насыщенный вкус с нотками карамели.',
        history: 'Семейная традиция с 1795 года. Якоб Бим начал производство в Кентукки, используя местную кукурузу и чистую известняковую воду.'
    },
    'macallan': {
        name: 'Macallan 12 Years',
        icon: '🍇',
        price: 3528,
        priceDisplay: '3 528 ₽',
        description: 'Премиальный шотландский односолодовый виски.',
        history: 'Основан в 1824 году в Крейгеллахи, Шотландия. Легендарная дистиллерия, известная своими маленькими медными перегонными кубами.'
    },
    'ballantines': {
        name: "Ballantine's Finest",
        icon: '🥃',
        price: 757,
        priceDisplay: '757 ₽',
        description: 'Шотландский бленд. Мягкий вкус с ароматом верескового меда.',
        history: 'Создан Джорджем Баллантайном в 1827 году в Эдинбурге. Сначала это был небольшой гастроном, который вырос в империю.'
    },
    'belvedere': {
        name: 'Belvedere Vodka',
        icon: '💎',
        price: 2890,
        priceDisplay: '2 890 ₽',
        description: 'Премиальная польская водка из ржи.',
        history: 'Названа в честь президентского дворца в Варшаве. Производится с 1993 года в городе Жирардув из 100% польской ржи.'
    },
    'grey-goose': {
        name: 'Grey Goose',
        icon: '🦢',
        price: 3150,
        priceDisplay: '3 150 ₽',
        description: 'Французская премиум-водка. Мягкий вкус с нотками миндаля.',
        history: 'Создана в 1997 году Сидни Франком в Когнаке, Франция. Используется пшеница из региона Пикардия.'
    },
    'absolut': {
        name: 'Absolut Vodka',
        icon: '❄️',
        price: 1190,
        priceDisplay: '1 190 ₽',
        description: 'Шведская водка. Крепость 40%, идеальна для коктейлей.',
        history: 'История начинается в 1879 году в Охусе, Швеция. Производится из зимней пшеницы и воды из собственного артезианского источника.'
    },
    'moet': {
        name: 'Moët & Chandon Impérial',
        icon: '🥂',
        price: 4890,
        priceDisplay: '4 890 ₽',
        description: 'Легендарное французское шампанское.',
        history: 'Основано в 1743 году Клодом Моэтом в Эперне. Самый большой производитель шампанского в мире. Императорский дом Наполеона.'
    },
    'prosecco': {
        name: 'Prosecco DOC',
        icon: '🍾',
        price: 1290,
        priceDisplay: '1 290 ₽',
        description: 'Итальянское игристое вино.',
        history: 'Производится в регионе Венето с XVIII века. Сорт винограда Глера дает легкий, фруктовый вкус.'
    },
    'barolo': {
        name: 'Barolo DOCG',
        icon: '🍷',
        price: 3450,
        priceDisplay: '3 450 ₽',
        description: 'Король итальянских вин.',
        history: 'Производится в Пьемонте с XIX века из винограда Неббиоло. Называется "королем вин и вином королей".'
    },
    'chianti': {
        name: 'Chianti Classico',
        icon: '🍷',
        price: 1890,
        priceDisplay: '1 890 ₽',
        description: 'Классическое тосканское вино.',
        history: 'Один из старейших винодельческих регионов Италии, документы упоминают его с 1398 года.'
    },
    'heineken': {
        name: 'Heineken',
        icon: '🍺',
        price: 129,
        priceDisplay: '129 ₽',
        description: 'Голландский лагер премиум-класса.',
        history: 'Основана в 1864 году в Амстердаме Джерардом Адрианом Хайнекеном. Уникальный дрожжевой штамм A-yeast используется до сих пор.'
    },
    'guinness': {
        name: 'Guinness Draught',
        icon: '🍺',
        price: 189,
        priceDisplay: '189 ₽',
        description: 'Ирландский стаут с кремовой пенкой.',
        history: 'Артур Гиннесс начал пивоварение в 1759 году в Дублине, подписав аренду на 9000 лет!'
    },
    'paulaner': {
        name: 'Paulaner Weissbier',
        icon: '🍺',
        price: 159,
        priceDisplay: '159 ₽',
        description: 'Немецкая пшеничное пиво.',
        history: 'Монастырская пивоварня, основанная в 1634 году в Мюнхене монахами ордена минимов.'
    },
    'corona': {
        name: 'Corona Extra',
        icon: '🍺',
        price: 149,
        priceDisplay: '149 ₽',
        description: 'Мексиканское светлое пиво.',
        history: 'Создана в 1925 году в Мехико. Самое продаваемое мексиканское пиво в мире.'
    },
    'marlboro-red': {
        name: 'Marlboro Red',
        icon: '🚬',
        price: 209,
        priceDisplay: '209 ₽',
        description: 'Классические американские сигареты.',
        history: 'Бренд запущен в 1924 году как сигареты для женщин. В 1950-х repositioned как мужской бренд с ковбоем в рекламе. Сегодня — самая продаваемая марка в мире.'
    },
    'marlboro-blue': {
        name: 'Marlboro Blue',
        icon: '🚬',
        price: 209,
        priceDisplay: '209 ₽',
        description: 'Более лёгкая версия.',
        history: 'Линейка Marlboro Lights/Blue появилась в 1970-х как ответ на растущую обеспокоенность здоровьем.'
    },
    'winston': {
        name: 'Winston Classic',
        icon: '🚬',
        price: 180,
        priceDisplay: '180 ₽',
        description: 'Классические сигареты премиум-класса.',
        history: 'Введены на рынок в 1954 году компанией R.J. Reynolds. Первые сигареты с фильтром, которые стали массовыми.'
    },
    'parliament': {
        name: 'Parliament',
        icon: '🚬',
        price: 280,
        priceDisplay: '280 ₽',
        description: 'Премиальные сигареты с фильтром-вставкой.',
        history: 'Представлены в 1931 году. Уникальный рецессивный фильтр создает дополнительную камеру для охлаждения дыма.'
    },
    'chesterfield': {
        name: 'Chesterfield Red',
        icon: '🚬',
        price: 170,
        priceDisplay: '170 ₽',
        description: 'Популярная марка с насыщенным ароматом.',
        history: 'Один из старейших брендов, основан в 1873 году. Назван в честь графа Честерфилда.'
    },
    'bond': {
        name: 'Bond Street',
        icon: '🚬',
        price: 169,
        priceDisplay: '169 ₽',
        description: 'Сбалансированный вкус, оптимальная цена.',
        history: 'Бренд Philip Morris, запущенный в 1902 году. Назван в честь улицы Бонд-стрит в Лондоне.'
    },
    'lm': {
        name: 'L&M Blue Label',
        icon: '🚬',
        price: 130,
        priceDisplay: '130 ₽',
        description: 'Двойной ацетатный фильтр.',
        history: 'Создан в 1953 году как "Liggett & Myers". Революционизировали рынок, сделав фильтрованные сигареты массовым продуктом.'
    },
    'rothmans': {
        name: 'Rothmans Royals',
        icon: '🚬',
        price: 150,
        priceDisplay: '150 ₽',
        description: 'Богатый выбор вкусов.',
        history: 'Основан в 1890 году в Лондоне. Долгое время был поставщиком британской королевской семьи.'
    },
    'camel': {
        name: 'Camel Filters',
        icon: '🚬',
        price: 170,
        priceDisplay: '170 ₽',
        description: 'Оригинальный аромат.',
        history: 'Введены в 1913 году как первая массовая марка сигарет из смешанного табака. Знаменитая реклама с верблюдом.'
    },
    'kent': {
        name: 'Kent Nanotek',
        icon: '🚬',
        price: 200,
        priceDisplay: '200 ₽',
        description: 'Угольный фильтр.',
        history: 'Представлен в 1952 году как первые сигареты с микронитовым фильтром. Названы в честь героя Кента.'
    },
    'dunhill': {
        name: 'Dunhill International',
        icon: '🚬',
        price: 240,
        priceDisplay: '240 ₽',
        description: 'Премиум-класс.',
        history: 'Создан Альфредом Данхиллом в 1907 году. Символ британской роскоши и элегантности.'
    },
    'vogue': {
        name: 'Vogue Superslims',
        icon: '🚬',
        price: 200,
        priceDisplay: '200 ₽',
        description: 'Элегантные сигареты для женщин.',
        history: 'Запущены в 1987 году как первые ультратонкие сигареты для женщин. Ассоциируется с модой и французским шиком.'
    },
    'cohiba': {
        name: 'Cohiba Behike 52',
        icon: '🚬',
        price: 3500,
        priceDisplay: '3 500 ₽',
        description: 'Премиальные кубинские сигары.',
        history: 'Создана в 1966 году исключительно для Фиделя Кастро и высокопоставленных чиновников Кубы.'
    },
    'montecristo': {
        name: 'Montecristo No. 2',
        icon: '🚬',
        price: 2800,
        priceDisplay: '2 800 ₽',
        description: 'Легендарные кубинские сигары.',
        history: 'Создана в 1935 году. Названа в честь графа Монте-Кристо из романа Дюма. Самая продаваемая кубинская сигара.'
    },
    'romeo': {
        name: 'Romeo y Julieta',
        icon: '🚬',
        price: 1900,
        priceDisplay: '1 900 ₽',
        description: 'Классические кубинские сигары.',
        history: 'Основана в 1875 году. Названа в честь трагедии Шекспира. Уинстон Черчилль был поклонником бренда.'
    },
    'davidoff': {
        name: 'Davidoff Aniversario',
        icon: '🚬',
        price: 4200,
        priceDisplay: '4 200 ₽',
        description: 'Швейцарские сигары премиум-класса.',
        history: 'Зино Давидофф, "король сигар", открыл свой первый бутик в Женеве в 1911 году.'
    },
    'musthave': {
        name: 'Must Have Barberry',
        icon: '🌿',
        price: 450,
        priceDisplay: '450 ₽',
        description: 'Российский табак премиум-класса.',
        history: 'Бренд появился в 2017 году и быстро завоевал популярность благодаря насыщенным вкусам.'
    },
    'darkside': {
        name: 'Dark Side Supernova',
        icon: '🌿',
        price: 520,
        priceDisplay: '520 ₽',
        description: 'Крепкий табак для насыщенного вкуса.',
        history: 'Российский бренд, ориентированный на опытных курильщиков. Высокая крепость и долгое время курения.'
    },
    'alfakher': {
        name: 'Al Fakher Mint',
        icon: '🌿',
        price: 380,
        priceDisplay: '380 ₽',
        description: 'Классический арабский табак.',
        history: 'Основан в 1999 году в ОАЭ. Один из самых известных брендов табака для кальяна в мире.'
    },
    'tangiers': {
        name: 'Tangiers Cane Mint',
        icon: '🌿',
        price: 890,
        priceDisplay: '890 ₽',
        description: 'Американский табак премиум-класса.',
        history: 'Создан в 2000-х в Сан-Диего. Уникальный метод производства — темная упаковка для сохранения свежести.'
    },
    'iqos': {
        name: 'IQOS ILUMA',
        icon: '💨',
        price: 4990,
        priceDisplay: '4 990 ₽',
        description: 'Нагреватель табака нового поколения.',
        history: 'Разработан Philip Morris International. ILUMA — четвертое поколение, представленное в 2022 году.'
    },
    'vthru': {
        name: 'Voopoo V.THRU Pro',
        icon: '💨',
        price: 2500,
        priceDisplay: '2 500 ₽',
        description: 'Компактный POD с OLED-дисплеем.',
        history: 'Voopoo — китайский бренд, основанный в 2014 году. V.THRU Pro — популярная модель 2021 года.'
    },
    'xros3': {
        name: 'Vaporesso XROS 3',
        icon: '💨',
        price: 2400,
        priceDisplay: '2 400 ₽',
        description: 'Популярная POD-система.',
        history: 'Vaporesso — подразделение китайской компании SMOORE. XROS 3 — обновленная версия с улучшенной батареей.'
    },
    'vmate': {
        name: 'Voopoo VMATE E',
        icon: '💨',
        price: 2900,
        priceDisplay: '2 900 ₽',
        description: 'Стильный POD с технологией ITO.',
        history: 'Представлен в 2022 году. VMATE E отличается элегантным дизайном с кожаными вставками.'
    },
    'aegis': {
        name: 'GeekVape Aegis Boost 2',
        icon: '💨',
        price: 3800,
        priceDisplay: '3 800 ₽',
        description: 'Защищенный POD до 60W.',
        history: 'GeekVape — один из ведущих брендов. Линейка Aegis известна защитой от воды, пыли и ударов.'
    },
    'hero2': {
        name: 'GeekVape H45 Hero 2',
        icon: '💨',
        price: 3500,
        priceDisplay: '3 500 ₽',
        description: 'Мощный POD до 45W.',
        history: 'Hero 2 — обновление популярной линейки 2022 года. Компактный форм-фактор, защита Tri-Proof.'
    },
    'luxexr': {
        name: 'Vaporesso Luxe XR Max',
        icon: '💨',
        price: 4200,
        priceDisplay: '4 200 ₽',
        description: 'Мощная система до 80W.',
        history: 'Флагман линейки Luxe 2023 года. Батарея 2800 мАч, мощность до 80W.'
    },
    'elfbar': {
        name: 'Elf Bar 1500',
        icon: '💨',
        price: 890,
        priceDisplay: '890 ₽',
        description: 'Популярная одноразовая система.',
        history: 'Elf Bar — бренд, который стал синонимом одноразовых POD-систем. Модель 1500 предлагает до 1500 затяжек.'
    },
    'ivg': {
        name: 'IVG Pink Lemonade',
        icon: '🧪',
        price: 650,
        priceDisplay: '650 ₽',
        description: 'Освежающий лимонад с ягодами.',
        history: 'IVG (I Vape Great) — британский бренд, основанный в 2016 году. Многократный победитель премий.'
    },
    'nasty': {
        name: 'Nasty Juice Cush Man',
        icon: '🧪',
        price: 720,
        priceDisplay: '720 ₽',
        description: 'Сочное манго с мятой.',
        history: 'Малазийский бренд, завоевавший мировую популярность. Cush Man — легендарный вкус манго.'
    },
    'dinner': {
        name: 'Dinner Lady Lemon Tart',
        icon: '🧪',
        price: 680,
        priceDisplay: '680 ₽',
        description: 'Лимонный тарт с меренгой.',
        history: 'Британский бренд, созданный в 2016 году. Lemon Tart — флагманский вкус, получивший множество наград.'
    },
    'jam': {
        name: 'Jam Monster Strawberry',
        icon: '🧪',
        price: 750,
        priceDisplay: '750 ₽',
        description: 'Тост с клубничным джемом.',
        history: 'Американский бренд из Флориды. Уникальная концепция — вкусы тостов с джемом.'
    },
    'coils': {
        name: 'Испарители SMOK RPM',
        icon: '🔧',
        price: 450,
        priceDisplay: '450 ₽',
        description: 'Сменные испарители.',
        history: 'SMOK — один из старейших и крупнейших производителей вейп-оборудования из Китая.'
    },
    'battery': {
        name: 'Аккумуляторы 18650',
        icon: '🔧',
        price: 890,
        priceDisplay: '890 ₽',
        description: 'Высокотоковые, 3000mAh.',
        history: 'Формат 18650 — стандарт для мощных вейп-устройств. Используются в ноутбуках, электроинструментах и вейпах.'
    },
    'charger': {
        name: 'Зарядное Nitecore',
        icon: '🔧',
        price: 1290,
        priceDisplay: '1 290 ₽',
        description: 'Умное зарядное устройство.',
        history: 'Nitecore — тайваньский бренд, специализирующийся на зарядных устройствах и фонарях.'
    },
    'case': {
        name: 'Чехлы для вейпа',
        icon: '🔧',
        price: 350,
        priceDisplay: '350 ₽',
        description: 'Защитные чехлы.',
        history: 'Аксессуары для защиты устройств от падений, царапин и загрязнений.'
    }
};

// Shopping Cart
let cart = {};

// Theme configurations for each tab (light and dark variants)
const tabThemeConfigs = {
    'home': {
        light: {
            '--bg-color': 'linear-gradient(135deg, #f0fff4 0%, #e6ffe6 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #006633 0%, #00AA44 50%, #FF6600 100%)',
            '--text-color': '#1a1a1a',
            '--heading-color': '#006633',
            '--card-bg': 'rgba(255, 255, 255, 0.95)',
            '--border-color': '#00FF66',
            '--hover-bg': 'rgba(0, 255, 102, 0.15)',
            '--shadow-color': 'rgba(0, 255, 102, 0.4)',
            '--neon-text': '#00FF66',
            '--button-bg': '#FF6600',
            '--button-hover': '#006633',
            '--link-color': '#FF6600',
            '--accent-color': '#00FF66',
            '--glass-bg': 'rgba(255, 255, 255, 0.8)'
        },
        dark: {
            '--bg-color': 'linear-gradient(135deg, #0a1f0a 0%, #051405 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #00331a 0%, #004d26 50%, #331100 100%)',
            '--text-color': '#e0ffe0',
            '--heading-color': '#FF8800',
            '--card-bg': 'rgba(10, 30, 15, 0.95)',
            '--border-color': '#00AA44',
            '--hover-bg': 'rgba(0, 170, 68, 0.2)',
            '--shadow-color': 'rgba(0, 170, 68, 0.3)',
            '--neon-text': '#00FF66',
            '--button-bg': '#FF6600',
            '--button-hover': '#00AA44',
            '--link-color': '#00FF66',
            '--accent-color': '#FF8800',
            '--glass-bg': 'rgba(10, 30, 15, 0.9)'
        }
    },
    'about': {
        light: {
            '--bg-color': 'linear-gradient(135deg, #f0fff4 0%, #e6ffe6 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #006633 0%, #00AA44 50%, #FF6600 100%)',
            '--text-color': '#1a1a1a',
            '--heading-color': '#006633',
            '--card-bg': 'rgba(255, 255, 255, 0.95)',
            '--border-color': '#00FF66',
            '--hover-bg': 'rgba(0, 255, 102, 0.15)',
            '--shadow-color': 'rgba(0, 255, 102, 0.4)',
            '--neon-text': '#00FF66',
            '--button-bg': '#FF6600',
            '--button-hover': '#006633',
            '--link-color': '#FF6600',
            '--accent-color': '#00FF66',
            '--glass-bg': 'rgba(255, 255, 255, 0.8)'
        },
        dark: {
            '--bg-color': 'linear-gradient(135deg, #0a1f0a 0%, #051405 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #00331a 0%, #004d26 50%, #331100 100%)',
            '--text-color': '#e0ffe0',
            '--heading-color': '#FF8800',
            '--card-bg': 'rgba(10, 30, 15, 0.95)',
            '--border-color': '#00AA44',
            '--hover-bg': 'rgba(0, 170, 68, 0.2)',
            '--shadow-color': 'rgba(0, 170, 68, 0.3)',
            '--neon-text': '#00FF66',
            '--button-bg': '#FF6600',
            '--button-hover': '#00AA44',
            '--link-color': '#00FF66',
            '--accent-color': '#FF8800',
            '--glass-bg': 'rgba(10, 30, 15, 0.9)'
        }
    },
    'products': {
        light: {
            '--bg-color': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
            '--text-color': '#e0e0e0',
            '--heading-color': '#FFD700',
            '--card-bg': 'rgba(30, 60, 114, 0.95)',
            '--border-color': '#FFD700',
            '--hover-bg': 'rgba(255, 215, 0, 0.2)',
            '--shadow-color': 'rgba(255, 215, 0, 0.4)',
            '--neon-text': '#FFD700',
            '--button-bg': '#FFD700',
            '--button-hover': '#B8860B',
            '--link-color': '#FFD700',
            '--accent-color': '#FFD700',
            '--glass-bg': 'rgba(30, 60, 114, 0.9)'
        },
        dark: {
            '--bg-color': 'linear-gradient(135deg, #0a1628 0%, #0f1f3d 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #0a1a2e 0%, #162238 50%, #1a2d4d 100%)',
            '--text-color': '#e8e8e8',
            '--heading-color': '#FFA500',
            '--card-bg': 'rgba(15, 31, 61, 0.98)',
            '--border-color': '#FFA500',
            '--hover-bg': 'rgba(255, 165, 0, 0.2)',
            '--shadow-color': 'rgba(255, 165, 0, 0.3)',
            '--neon-text': '#FFA500',
            '--button-bg': '#FFA500',
            '--button-hover': '#CC8400',
            '--link-color': '#FFA500',
            '--accent-color': '#FFA500',
            '--glass-bg': 'rgba(15, 31, 61, 0.95)'
        }
    },
    'tobacco': {
        light: {
            '--bg-color': 'linear-gradient(135deg, #2d1b0e 0%, #1a0f08 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #4a3728 0%, #2d1b0e 50%, #8B4513 100%)',
            '--text-color': '#f5e6d3',
            '--heading-color': '#D2691E',
            '--card-bg': 'rgba(45, 27, 14, 0.95)',
            '--border-color': '#D2691E',
            '--hover-bg': 'rgba(210, 105, 30, 0.2)',
            '--shadow-color': 'rgba(210, 105, 30, 0.4)',
            '--neon-text': '#D2691E',
            '--button-bg': '#8B4513',
            '--button-hover': '#D2691E',
            '--link-color': '#D2691E',
            '--accent-color': '#D2691E',
            '--glass-bg': 'rgba(45, 27, 14, 0.9)'
        },
        dark: {
            '--bg-color': 'linear-gradient(135deg, #1a0f08 0%, #0d0704 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #2d1b0e 0%, #1a0f08 50%, #5c3a1e 100%)',
            '--text-color': '#e8d4c4',
            '--heading-color': '#CD853F',
            '--card-bg': 'rgba(30, 18, 10, 0.98)',
            '--border-color': '#CD853F',
            '--hover-bg': 'rgba(205, 133, 63, 0.2)',
            '--shadow-color': 'rgba(205, 133, 63, 0.3)',
            '--neon-text': '#CD853F',
            '--button-bg': '#CD853F',
            '--button-hover': '#8B4513',
            '--link-color': '#CD853F',
            '--accent-color': '#CD853F',
            '--glass-bg': 'rgba(30, 18, 10, 0.95)'
        }
    },
    'vape': {
        light: {
            '--bg-color': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #0f3460 0%, #533483 50%, #e94560 100%)',
            '--text-color': '#eaeaea',
            '--heading-color': '#e94560',
            '--card-bg': 'rgba(22, 33, 62, 0.95)',
            '--border-color': '#e94560',
            '--hover-bg': 'rgba(233, 69, 96, 0.2)',
            '--shadow-color': 'rgba(233, 69, 96, 0.4)',
            '--neon-text': '#e94560',
            '--button-bg': '#e94560',
            '--button-hover': '#533483',
            '--link-color': '#e94560',
            '--accent-color': '#e94560',
            '--glass-bg': 'rgba(22, 33, 62, 0.9)'
        },
        dark: {
            '--bg-color': 'linear-gradient(135deg, #0d0d1a 0%, #0a0f1f 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #0a1a3d 0%, #3d2666 50%, #b82d42 100%)',
            '--text-color': '#f0f0f0',
            '--heading-color': '#ff6b6b',
            '--card-bg': 'rgba(15, 23, 42, 0.98)',
            '--border-color': '#ff6b6b',
            '--hover-bg': 'rgba(255, 107, 107, 0.2)',
            '--shadow-color': 'rgba(255, 107, 107, 0.3)',
            '--neon-text': '#ff6b6b',
            '--button-bg': '#ff6b6b',
            '--button-hover': '#9b4dca',
            '--link-color': '#ff6b6b',
            '--accent-color': '#ff6b6b',
            '--glass-bg': 'rgba(15, 23, 42, 0.95)'
        }
    },
    'recipes': {
        light: {
            '--bg-color': 'linear-gradient(135deg, #fff8f0 0%, #ffeedd 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #8B4513 0%, #D2691E 50%, #FF8C00 100%)',
            '--text-color': '#2d2d2d',
            '--heading-color': '#FF8C00',
            '--card-bg': 'rgba(255, 248, 240, 0.95)',
            '--border-color': '#FF8C00',
            '--hover-bg': 'rgba(255, 140, 0, 0.15)',
            '--shadow-color': 'rgba(255, 140, 0, 0.3)',
            '--neon-text': '#FF8C00',
            '--button-bg': '#FF8C00',
            '--button-hover': '#8B4513',
            '--link-color': '#FF8C00',
            '--accent-color': '#FF8C00',
            '--glass-bg': 'rgba(255, 248, 240, 0.8)'
        },
        dark: {
            '--bg-color': 'linear-gradient(135deg, #1a120b 0%, #0d0906 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #4a3018 0%, #6b4423 50%, #8b4513 100%)',
            '--text-color': '#f5e6d3',
            '--heading-color': '#FFA54F',
            '--card-bg': 'rgba(45, 30, 15, 0.98)',
            '--border-color': '#FFA54F',
            '--hover-bg': 'rgba(255, 165, 79, 0.2)',
            '--shadow-color': 'rgba(255, 165, 79, 0.3)',
            '--neon-text': '#FFA54F',
            '--button-bg': '#FFA54F',
            '--button-hover': '#8B4513',
            '--link-color': '#FFA54F',
            '--accent-color': '#FFA54F',
            '--glass-bg': 'rgba(45, 30, 15, 0.9)'
        }
    },
    'cart': {
        light: {
            '--bg-color': 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #2c5aa0 0%, #4a90e2 50%, #87ceeb 100%)',
            '--text-color': '#1a1a2e',
            '--heading-color': '#2c5aa0',
            '--card-bg': 'rgba(255, 255, 255, 0.95)',
            '--border-color': '#4a90e2',
            '--hover-bg': 'rgba(74, 144, 226, 0.15)',
            '--shadow-color': 'rgba(74, 144, 226, 0.3)',
            '--neon-text': '#4a90e2',
            '--button-bg': '#4a90e2',
            '--button-hover': '#2c5aa0',
            '--link-color': '#4a90e2',
            '--accent-color': '#4a90e2',
            '--glass-bg': 'rgba(255, 255, 255, 0.85)'
        },
        dark: {
            '--bg-color': 'linear-gradient(135deg, #0a1628 0%, #0d1f3d 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #1a3a6e 0%, #2a5a9e 50%, #4a7abe 100%)',
            '--text-color': '#e8f0ff',
            '--heading-color': '#7eb8ff',
            '--card-bg': 'rgba(20, 35, 60, 0.98)',
            '--border-color': '#7eb8ff',
            '--hover-bg': 'rgba(126, 184, 255, 0.2)',
            '--shadow-color': 'rgba(126, 184, 255, 0.3)',
            '--neon-text': '#7eb8ff',
            '--button-bg': '#7eb8ff',
            '--button-hover': '#4a90e2',
            '--link-color': '#7eb8ff',
            '--accent-color': '#7eb8ff',
            '--glass-bg': 'rgba(20, 35, 60, 0.95)'
        }
    },
    'contacts': {
        light: {
            '--bg-color': 'linear-gradient(135deg, #f5f0ff 0%, #e8e0ff 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #4a0080 0%, #6b2c91 50%, #9b59b6 100%)',
            '--text-color': '#1a1a2e',
            '--heading-color': '#6b2c91',
            '--card-bg': 'rgba(255, 255, 255, 0.95)',
            '--border-color': '#9b59b6',
            '--hover-bg': 'rgba(155, 89, 182, 0.15)',
            '--shadow-color': 'rgba(155, 89, 182, 0.3)',
            '--neon-text': '#9b59b6',
            '--button-bg': '#9b59b6',
            '--button-hover': '#6b2c91',
            '--link-color': '#9b59b6',
            '--accent-color': '#9b59b6',
            '--glass-bg': 'rgba(255, 255, 255, 0.85)'
        },
        dark: {
            '--bg-color': 'linear-gradient(135deg, #1a0a2e 0%, #0d051a 100%)',
            '--sidebar-bg': 'linear-gradient(180deg, #2d004d 0%, #4a1a6b 50%, #6b3a8b 100%)',
            '--text-color': '#f0e8ff',
            '--heading-color': '#c39bd3',
            '--card-bg': 'rgba(35, 20, 50, 0.98)',
            '--border-color': '#c39bd3',
            '--hover-bg': 'rgba(195, 155, 211, 0.2)',
            '--shadow-color': 'rgba(195, 155, 211, 0.3)',
            '--neon-text': '#c39bd3',
            '--button-bg': '#c39bd3',
            '--button-hover': '#9b59b6',
            '--link-color': '#c39bd3',
            '--accent-color': '#c39bd3',
            '--glass-bg': 'rgba(35, 20, 50, 0.95)'
        }
    }
};

// CART FUNCTIONS
function addToCart(productId) {
    const product = productDatabase[productId];
    if (!product) return false;

    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = {
            name: product.name,
            icon: product.icon,
            price: product.price,
            priceDisplay: product.priceDisplay,
            quantity: 1
        };
    }

    saveCart();
    updateCartBadge();
    showToast('✅ ' + product.name + ' добавлен в корзину!', 'success', 3000);
    return false;
}

function removeFromCart(productId) {
    if (cart[productId]) {
        delete cart[productId];
        saveCart();
        updateCartBadge();
        renderCart();
        showToast('🗑️ Товар удален из корзины', 'info', 2000);
    }
    return false;
}

function updateQuantity(productId, change) {
    if (cart[productId]) {
        cart[productId].quantity += change;
        if (cart[productId].quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
    return false;
}

function clearCart() {
    cart = {};
    saveCart();
    updateCartBadge();
    renderCart();
    showToast('🗑️ Корзина очищена', 'info', 2000);
    return false;
}

function saveCart() {
    localStorage.setItem('jagerCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('jagerCart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            badge.textContent = totalItems;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartSummary = document.getElementById('cartSummary');

    if (!cartItems || !emptyCart || !cartSummary) return;

    const items = Object.values(cart);

    if (items.length === 0) {
        emptyCart.style.display = 'block';
        cartItems.style.display = 'none';
        cartSummary.style.display = 'none';
        return;
    }

    emptyCart.style.display = 'none';
    cartItems.style.display = 'block';
    cartSummary.style.display = 'block';

    let totalPrice = 0;
    let totalCount = 0;

    cartItems.innerHTML = items.map(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        totalCount += item.quantity;

        // Find productId by name
        const productId = Object.keys(cart).find(key => cart[key].name === item.name);

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-icon">${item.icon}</div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.priceDisplay} за шт.</p>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="btn-quantity" onclick="return updateQuantity('${productId}', -1)">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="btn-quantity" onclick="return updateQuantity('${productId}', 1)">+</button>
                    </div>
                    <div class="cart-item-total">${itemTotal.toLocaleString('ru-RU')} ₽</div>
                    <button class="btn-remove" onclick="return removeFromCart('${productId}')">🗑️</button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('totalPrice').textContent = totalPrice.toLocaleString('ru-RU') + ' ₽';
    document.getElementById('totalItems').textContent = `Товаров: ${totalCount}`;
}

function checkout() {
    const items = Object.values(cart);
    if (items.length === 0) {
        showToast('❌ Корзина пуста!', 'error', 3000);
        return false;
    }

    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showToast(`🎉 Заказ на сумму ${totalPrice.toLocaleString('ru-RU')} ₽ оформлен!`, 'success', 5000);
    clearCart();
    return false;
}

// THEME FUNCTIONS
function applyTheme(tabId, isDark) {
    const theme = isDark ? 'dark' : 'light';
    const config = tabThemeConfigs[tabId] || tabThemeConfigs['home'];
    const colors = config[theme];

    const root = document.documentElement;

    Object.keys(colors).forEach(key => {
        root.style.setProperty(key, colors[key]);
    });
}

function getCurrentTab() {
    const activeTab = document.querySelector('.tab-content.active');
    return activeTab ? activeTab.id : 'home';
}

function switchTheme(e) {
    const currentTab = getCurrentTab();
    const isDark = e.target.checked;

    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    applyTheme(currentTab, isDark);

    showToast(isDark ? '🌙 Темная тема активирована' : '☀️ Светлая тема активирована', 'info');
}

// TAB NAVIGATION
function switchTab(tabId) {
    // Prevent default link behavior
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const allLinks = document.querySelectorAll('.nav-link');
    allLinks.forEach(link => {
        link.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    const selectedLink = document.querySelector('[data-tab="' + tabId + '"]');
    if (selectedLink) {
        selectedLink.classList.add('active');
    }

    updatePageTitle(tabId);

    document.documentElement.setAttribute('data-tab-theme', tabId);

    // Apply appropriate theme colors for the new tab
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(tabId, isDark);

    // Render cart if switching to cart tab
    if (tabId === 'cart') {
        renderCart();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
}

function updatePageTitle(tabId) {
    const titles = {
        'home': 'Jägermeister Russia',
        'about': 'О компании',
        'products': 'Наша продукция',
        'recipes': 'Коктейли',
        'contacts': 'Контакты',
        'tobacco': 'Табачная продукция',
        'vape': 'Вейп-продукция',
        'cart': 'Корзина'
    };

    const titleElement = document.getElementById('pageTitle');
    if (titleElement && titles[tabId]) {
        titleElement.textContent = titles[tabId];
    }
}

// TOAST NOTIFICATIONS
function showToast(message, type, duration) {
    type = type || 'info';
    duration = duration || 5000;

    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast ' + type;

    const icons = {
        'success': '✅',
        'error': '❌',
        'warning': '⚠️',
        'info': 'ℹ️'
    };

    toast.innerHTML = '<span style="font-size: 24px;">' + (icons[type] || 'ℹ️') + '</span><span>' + message + '</span>';

    container.appendChild(toast);

    setTimeout(function() {
        toast.classList.add('hide');
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, duration);
}

// AUTH MODAL
function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        showRegisterForm();
    }
    return false;
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    return false;
}

function showRegisterForm() {
    const regForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    if (regForm) regForm.style.display = 'block';
    if (loginForm) loginForm.style.display = 'none';
}

function showLoginForm() {
    const regForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    if (regForm) regForm.style.display = 'none';
    if (loginForm) loginForm.style.display = 'block';
    return false;
}

// PRODUCT MODAL
function showProductDetail(productId) {
    const product = productDatabase[productId];
    if (!product) return false;

    const modal = document.getElementById('productModal');
    const content = document.getElementById('productDetailContent');
    if (!modal || !content) return false;

    content.innerHTML = '<div class="product-detail-image">' + product.icon + '</div>' +
        '<div class="product-detail-info">' +
        '<h3>' + product.name + '</h3>' +
        '<div class="price">' + product.priceDisplay + '</div>' +
        '<p>' + product.description + '</p>' +
        '<div class="product-history">' +
        '<h4>📜 История бренда</h4>' +
        '<p>' + product.history + '</p>' +
        '</div></div>' +
        '<div style="text-align: center; margin-top: 30px;">' +
        '<button class="btn" onclick="return addToCart(' + "'" + productId + "'" + ')">🛒 Добавить в корзину</button>' +
        '<button class="btn btn-secondary" onclick="return closeProductModal()">Закрыть</button>' +
        '</div>';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    return false;
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    return false;
}

// REGISTRATION
function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('regName');
    const email = document.getElementById('regEmail');
    const phone = document.getElementById('regPhone');
    const password = document.getElementById('regPassword');
    const confirm = document.getElementById('regConfirm');
    const agree = document.getElementById('regAgree');

    if (name) name.classList.remove('error-shake');
    if (email) email.classList.remove('error-shake');
    if (password) password.classList.remove('error-shake');
    if (confirm) confirm.classList.remove('error-shake');

    const errors = [];
    let firstErrorField = null;

    if (!name || name.value.trim().length < 2) {
        errors.push('Имя должно содержать минимум 2 символа');
        if (name) name.classList.add('error-shake');
        if (!firstErrorField) firstErrorField = name;
    }

    if (!email || !validateEmail(email.value.trim())) {
        errors.push('Введите корректный email адрес');
        if (email) email.classList.add('error-shake');
        if (!firstErrorField) firstErrorField = email;
    }

    if (!password || password.value.length < 8) {
        errors.push('Пароль должен содержать минимум 8 символов');
        if (password) password.classList.add('error-shake');
        if (!firstErrorField) firstErrorField = password;
    }

    if (!confirm || !password || confirm.value !== password.value) {
        errors.push('Пароли не совпадают');
        if (confirm) confirm.classList.add('error-shake');
        if (!firstErrorField) firstErrorField = confirm;
    }

    if (!agree || !agree.checked) {
        errors.push('Необходимо согласиться с условиями использования');
    }

    if (errors.length > 0) {
        if (firstErrorField) {
            firstErrorField.focus();
            setTimeout(function() {
                firstErrorField.classList.remove('error-shake');
            }, 600);
        }

        errors.forEach(function(error, index) {
            setTimeout(function() {
                showToast(error, 'error', 4000);
            }, index * 300);
        });
    } else {
        const userData = {
            name: name.value.trim(),
            email: email.value.trim(),
            phone: phone ? phone.value.trim() : '',
            password: password.value,
            registeredAt: new Date().toISOString(),
            id: 'user_' + Date.now()
        };

        localStorage.setItem('jagerUser', JSON.stringify(userData));

        showToast('🎉 Регистрация успешно завершена! Добро пожаловать, ' + name.value.trim() + '! 🦌', 'success', 6000);

        closeAuthModal();
        document.getElementById('regForm').reset();
        updateUserUI(userData);
    }
    return false;
}

// LOGIN
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');

    if (email) email.classList.remove('error-shake');
    if (password) password.classList.remove('error-shake');

    const userData = localStorage.getItem('jagerUser');

    if (!userData) {
        showToast('❌ Пользователь не найден. Зарегистрируйтесь!', 'error', 4000);
        if (email) email.classList.add('error-shake');
        return false;
    }

    const user = JSON.parse(userData);

    if (!email || user.email !== email.value.trim()) {
        showToast('❌ Пользователь с таким email не найден', 'error', 4000);
        if (email) email.classList.add('error-shake');
        return false;
    }

    if (!password || user.password !== password.value) {
        showToast('❌ Неверный пароль', 'error', 4000);
        if (password) password.classList.add('error-shake');
        return false;
    }

    showToast('👋 С возвращением, ' + user.name + '!', 'success', 4000);
    closeAuthModal();
    document.getElementById('loginFormElement').reset();
    updateUserUI(user);
    return false;
}

function updateUserUI(user) {
    const userSection = document.getElementById('userSection');
    if (userSection) {
        userSection.innerHTML = '<div class="user-badge"><div class="avatar">👤</div><span class="name">' + user.name + '</span></div>' +
            '<button class="btn btn-secondary" onclick="return logout()" style="width: 100%;">🚪 Выйти</button>';
    }
}

function logout() {
    localStorage.removeItem('jagerUser');
    const userSection = document.getElementById('userSection');
    if (userSection) {
        userSection.innerHTML = '<button class="btn" onclick="return openAuthModal()" style="margin-bottom: 15px; width: 100%;">👤 Войти / Регистрация</button>';
    }
    showToast('👋 Вы вышли из аккаунта', 'info', 3000);
    return false;
}

function checkUserLogin() {
    const userData = localStorage.getItem('jagerUser');
    if (userData) {
        const user = JSON.parse(userData);
        updateUserUI(user);
        setTimeout(function() {
            showToast('👋 С возвращением, ' + user.name + '!', 'info', 4000);
        }, 1000);
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// CONTACT FORM
function handleContact(event) {
    event.preventDefault();

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const subject = document.getElementById('contactSubject');
    const message = document.getElementById('contactMessage');

    if (name) name.classList.remove('error-shake');
    if (email) email.classList.remove('error-shake');
    if (message) message.classList.remove('error-shake');

    const errors = [];
    let firstErrorField = null;

    if (!name || name.value.trim().length < 2) {
        errors.push('Введите корректное имя (минимум 2 символа)');
        if (name) name.classList.add('error-shake');
        if (!firstErrorField) firstErrorField = name;
    }

    if (!email || !validateEmail(email.value.trim())) {
        errors.push('Введите корректный email адрес');
        if (email) email.classList.add('error-shake');
        if (!firstErrorField) firstErrorField = email;
    }

    if (!message || message.value.trim().length < 10) {
        errors.push('Сообщение должно содержать минимум 10 символов');
        if (message) message.classList.add('error-shake');
        if (!firstErrorField) firstErrorField = message;
    }

    if (errors.length > 0) {
        if (firstErrorField) {
            firstErrorField.focus();
            setTimeout(function() {
                firstErrorField.classList.remove('error-shake');
            }, 600);
        }

        errors.forEach(function(error, index) {
            setTimeout(function() {
                showToast(error, 'error', 4000);
            }, index * 300);
        });
    } else {
        showToast('✅ Спасибо, ' + name.value.trim() + '! Ваше сообщение по теме "' + (subject ? subject.value : '') + '" успешно отправлено.', 'success', 6000);
        document.getElementById('contactForm').reset();
    }
    return false;
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage
    loadCart();

    // Setup nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
            return false;
        });
    });

    // Setup theme switcher
    const toggleSwitch = document.querySelector('#checkbox');
    if (toggleSwitch) {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        const isDark = savedTheme === 'dark';

        document.documentElement.setAttribute('data-theme', savedTheme);
        toggleSwitch.checked = isDark;

        // Apply theme for current tab
        const currentTab = getCurrentTab();
        applyTheme(currentTab, isDark);

        // Add event listener
        toggleSwitch.addEventListener('change', switchTheme, false);
    }

    // Check for logged in user
    checkUserLogin();

    // Update cart badge
    updateCartBadge();

    // Welcome message
    const hasVisited = localStorage.getItem('jagerVisited');
    if (!hasVisited) {
        setTimeout(function() {
            showToast('🦌 Добро пожаловать на официальный сайт Jägermeister Russia!', 'info', 6000);
            localStorage.setItem('jagerVisited', 'true');
        }, 1000);
    }
});

// Click outside modal
window.onclick = function(event) {
    const authModal = document.getElementById('authModal');
    const productModal = document.getElementById('productModal');

    if (event.target === authModal) {
        closeAuthModal();
    }
    if (event.target === productModal) {
        closeProductModal();
    }
};

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAuthModal();
        closeProductModal();
    }
});