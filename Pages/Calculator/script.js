const tariffs = [
    [
        "Пункт отправления",
        "Пункт назначения",
        "способ доставки",
        "Новый тариф с 01.08.23\r\n( с НДС) ж/д",
        "Новый тариф с 01.08.23\r\n(с НДС) авиа от 25 до 50 кг",
        "Новый тариф с 01.08.23\r\nот 50 до 100 кг\r\n(сумма с ндс)"
    ],
    [
        "Москва",
        "Абакан",
        null,
        43.39,
        187.5,
        187.5
    ],
    [
        "Москва",
        "Анадырь",
        null,
        364.59,
        425,
        562.5
    ],
    [
        "Москва",
        "Апатиты",
        null,
        32.16,
        null,
        null
    ],
    [
        "Москва",
        "Архангельск",
        "дмд/шрм аэропорт",
        31.39,
        "171,25/153,75",
        "165/153,75"
    ],
    [
        "Москва",
        "Астрахань",
        null,
        30.03,
        135,
        135
    ],
    [
        "Москва",
        "Барнаул",
        null,
        38.68,
        218.75,
        218.75
    ],
    [
        "Москва",
        "Белгород",
        null,
        29.86,
        null,
        null
    ],
    [
        "Москва",
        "Белогорск",
        null,
        53.08,
        null,
        null
    ],
    [
        "Москва",
        "Биробиджан",
        null,
        50.53,
        null,
        null
    ],
    [
        "Москва",
        "Благовещенск",
        "обычная",
        60,
        235,
        235
    ],
    [
        "Москва",
        "Благовещенск",
        "экспресс",
        66.25,
        235,
        235
    ],
    [
        "Москва",
        "Брянск",
        null,
        29.11,
        null,
        null
    ],
    [
        "Москва",
        "Великий Новгород",
        null,
        29.86,
        null,
        null
    ],
    [
        "Москва",
        "Владивосток",
        "обычная",
        62.5,
        190,
        190
    ],
    [
        "Москва",
        "Владивосток",
        "экспресс",
        67.5,
        208.75,
        208.75
    ],
    [
        "Москва",
        "Владикавказ",
        null,
        33.06,
        null,
        null
    ],
    [
        "Москва",
        "Владимир",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Волгоград",
        null,
        31.39,
        143.75,
        143.75
    ],
    [
        "Москва",
        "Вологда",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Воркута",
        null,
        38.84,
        null,
        null
    ],
    [
        "Москва",
        "Воронеж",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Горно-Алтайск",
        null,
        44.15,
        231.25,
        231.25
    ],
    [
        "Москва",
        "Грозный",
        null,
        33.06,
        null,
        null
    ],
    [
        "Москва",
        "Донецк",
        null,
        40,
        null,
        null
    ],
    [
        "Москва",
        "Екатеринбург",
        null,
        31.85,
        153.75,
        153.75
    ],
    [
        "Москва",
        "Екатеринбург",
        null,
        52.2,
        153.75,
        153.75
    ],
    [
        "Москва",
        "Елецкий",
        null,
        40.64,
        null,
        null
    ],
    [
        "Москва",
        "Зима",
        null,
        49.14,
        null,
        null
    ],
    [
        "Москва",
        "Иваново",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Ижевск",
        null,
        30.16,
        null,
        null
    ],
    [
        "Москва",
        "Инта",
        null,
        38.84,
        null,
        null
    ],
    [
        "Москва",
        "Иркутск",
        null,
        47.04,
        287.5,
        287.5
    ],
    [
        "Москва",
        "Иркутск",
        null,
        52.35,
        287.5,
        287.5
    ],
    [
        "Москва",
        "Иркутск",
        null,
        188.54,
        287.5,
        287.5
    ],
    [
        "Москва",
        "Йошкар-Ола",
        null,
        29.79,
        null,
        null
    ],
    [
        "Москва",
        "Казань",
        "СУ,ДР",
        29.11,
        "141,25/128,25",
        "141,25/128,25"
    ],
    [
        "Москва",
        "Калининград",
        "СУ,ДР,5Н",
        40.629999999999995,
        "168,75/155/140",
        "168,75/155/140"
    ],
    [
        "Москва",
        "Калуга",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Кемерово",
        null,
        39.59,
        268.75,
        268.75
    ],
    [
        null,
        "Киров",
        null,
        31.69,
        null,
        null
    ],
    [
        "Москва",
        "Комсомольск-на-Амуре",
        null,
        61.78,
        null,
        null
    ],
    [
        "Москва",
        "Коноша",
        null,
        31.99,
        null,
        null
    ],
    [
        "Москва",
        "Кострома",
        null,
        29.79,
        null,
        null
    ],
    [
        "Москва",
        "Котлас",
        null,
        38.84,
        null,
        null
    ],
    [
        "Москва",
        "Краснодар",
        null,
        31.85,
        null,
        null
    ],
    [
        "Москва",
        "Красноярск",
        "5Н",
        42.56,
        147.5,
        147.5
    ],
    [
        "Москва",
        "Красноярск",
        "СУ",
        52.2,
        161.25,
        161.25
    ],
    [
        "Москва",
        "Курган",
        null,
        33.81,
        null,
        null
    ],
    [
        "Москва",
        "Курск",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Кызыл",
        null,
        44.75,
        null,
        null
    ],
    [
        "Москва",
        "Лабытнанги",
        null,
        39.29,
        null,
        null
    ],
    [
        "Москва",
        "Липецк",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Луганск",
        null,
        40,
        null,
        null
    ],
    [
        "Москва",
        "Магадан",
        null,
        91.85,
        381.25,
        381.25
    ],
    [
        "Москва",
        "Магнитогорск",
        null,
        10,
        175,
        175
    ],
    [
        "Москва",
        "Майкоп",
        null,
        37.489999999999995,
        null,
        null
    ],
    [
        "Москва",
        "Махачкала",
        "5Н/СУ",
        34.58,
        "117,5/133,75",
        "117,5/133,75"
    ],
    [
        "Москва",
        "Микунь",
        null,
        38.84,
        null,
        null
    ],
    [
        "Москва",
        "Минеральные воды",
        null,
        30.63,
        131.25,
        131.25
    ],
    [
        "Москва",
        "Мирный",
        null,
        217.71,
        null,
        null
    ],
    [
        "Москва",
        "Могоча",
        null,
        50.53,
        null,
        null
    ],
    [
        "Москва",
        "Муравленко",
        null,
        39.29,
        null,
        null
    ],
    [
        "Москва",
        "Мурманск",
        "СУ,5Н",
        31.54,
        "147,5/133,75",
        "147,5/133,75"
    ],
    [
        "Москва",
        "Набережные Челны",
        null,
        32.129999999999995,
        null,
        6.25
    ],
    [
        "Москва",
        "Назрань",
        null,
        33.83,
        175,
        175
    ],
    [
        "Москва",
        "Нальчик",
        null,
        33.06,
        141.25,
        141.25
    ],
    [
        "Москва",
        "Нерюнгри",
        null,
        52.65,
        null,
        null
    ],
    [
        "Москва",
        "Нижневартовск",
        null,
        37.760000000000005,
        185,
        185
    ],
    [
        "Москва",
        "Нижнекамск",
        null,
        10,
        143.75,
        143.75
    ],
    [
        "Москва",
        "Нижнеудинск",
        null,
        48.75,
        null,
        null
    ],
    [
        "Москва",
        "Нижний Новгород",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Новокузнецк",
        null,
        44.15,
        225,
        225
    ],
    [
        "Москва",
        "Новосибирск",
        "5Н",
        37.65,
        183.75,
        183.75
    ],
    [
        "Москва",
        "Новосибирск",
        "СУ",
        52.2,
        193.75,
        193.75
    ],
    [
        "Москва",
        "Новый Уренгой",
        null,
        41.41,
        181.25,
        181.25
    ],
    [
        "Москва",
        "Норильск",
        null,
        243.75,
        null,
        null
    ],
    [
        "Москва",
        "Няндома",
        null,
        31.99,
        null,
        null
    ],
    [
        "Москва",
        "Оленегорск",
        null,
        32.16,
        null,
        null
    ],
    [
        "Москва",
        "Омск",
        null,
        35.19,
        191.25,
        191.25
    ],
    [
        "Москва",
        "Омск",
        null,
        52.2,
        191.25,
        191.25
    ],
    [
        "Москва",
        "Орел",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Оренбург",
        "СУ,5Н,КЛ",
        30.48,
        "146,25/128,75/145",
        "146,25/128,75/145"
    ],
    [
        "Москва",
        "Орск",
        null,
        35.989999999999995,
        null,
        null
    ],
    [
        "Москва",
        "Пенза",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Пермь",
        null,
        31.39,
        150,
        150
    ],
    [
        "Москва",
        "Петровский Завод",
        null,
        53.8,
        null,
        null
    ],
    [
        "Москва",
        "Петрозаводск",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Петропавловск-Камчатский",
        "обычная",
        10,
        305,
        305
    ],
    [
        "Москва",
        "Петропавловск-Камчатский",
        "экспресс",
        94.89,
        325,
        325
    ],
    [
        "Москва",
        "Печора",
        null,
        38.84,
        null,
        null
    ],
    [
        "Москва",
        "Плесецк",
        null,
        31.99,
        null,
        null
    ],
    [
        "Москва",
        "Псков",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Пыть-Ях",
        null,
        41.41,
        null,
        null
    ],
    [
        "Москва",
        "Ростов-на-Дону",
        null,
        29.71,
        null,
        null
    ],
    [
        "Москва",
        "Ружино",
        null,
        53.11,
        null,
        null
    ],
    [
        "Москва",
        "Рязань",
        null,
        28.2,
        null,
        null
    ],
    [
        "Москва",
        "Салехард",
        null,
        39.29,
        null,
        null
    ],
    [
        "Москва",
        "Самара",
        null,
        29.56,
        123.75,
        123.75
    ],
    [
        "Москва",
        "Санкт-Петербург",
        null,
        28.75,
        null,
        null
    ],
    [
        "Москва",
        "Саранск",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Саратов",
        null,
        29.11,
        null,
        null
    ],
    [
        "Москва",
        "Свободный",
        null,
        50.53,
        null,
        null
    ],
    [
        "Москва",
        "Сивая Маска",
        null,
        40.15,
        null,
        null
    ],
    [
        "Москва",
        "Симферополь",
        null,
        40.96,
        null,
        null
    ],
    [
        "Москва",
        "Сковородино",
        null,
        48.1,
        null,
        null
    ],
    [
        "Москва",
        "Смоленск",
        null,
        28.2,
        null,
        null
    ],
    [
        "Москва",
        "Советская Гавань",
        null,
        61.78,
        null,
        null
    ],
    [
        "Москва",
        "Сочи",
        null,
        10,
        123.75,
        123.75
    ],
    [
        "Москва",
        "Ставрополь",
        null,
        30.03,
        122.5,
        122.5
    ],
    [
        "Москва",
        "Сургут",
        null,
        41.41,
        176.25,
        176.25
    ],
    [
        "Москва",
        "Сыктывкар",
        null,
        33.510000000000005,
        141.25,
        141.25
    ],
    [
        "Москва",
        "Тайшет",
        null,
        47.04,
        null,
        null
    ],
    [
        "Москва",
        "Тамбов",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Тверь",
        null,
        28.2,
        null,
        null
    ],
    [
        "Москва",
        "Томск",
        "5Н,СУ",
        39.44,
        "152,5/171,25",
        "152,5/171,25"
    ],
    [
        "Москва",
        "Тула",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Тында",
        null,
        52.35,
        null,
        null
    ],
    [
        "Москва",
        "Тюмень",
        null,
        34.28,
        142.5,
        142.5
    ],
    [
        "Москва",
        "Тюмень",
        null,
        52.2,
        142.5,
        142.5
    ],
    [
        "Москва",
        "Улан-Удэ",
        null,
        52.59,
        275,
        275
    ],
    [
        "Москва",
        "Улан-Удэ",
        null,
        52.35,
        275,
        275
    ],
    [
        "Москва",
        "Ульяновск",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Усинск",
        null,
        38.84,
        null,
        null
    ],
    [
        "Москва",
        "Уссурийск",
        null,
        53.11,
        null,
        null
    ],
    [
        "Москва",
        "Уфа",
        null,
        30.48,
        133.75,
        133.75
    ],
    [
        "Москва",
        "Ухта",
        null,
        38.84,
        null,
        null
    ],
    [
        "Москва",
        "Февральск",
        null,
        67.44,
        null,
        null
    ],
    [
        "Москва",
        "Хабаровск",
        "обычная",
        62.5,
        200,
        200
    ],
    [
        "Москва",
        "Хабаровск",
        "экспресс",
        67.5,
        220,
        220
    ],
    [
        "Москва",
        "Ханты-Мансийск",
        null,
        47.79,
        167.5,
        167.5
    ],
    [
        "Москва",
        "Хилок",
        null,
        53.8,
        null,
        null
    ],
    [
        "Москва",
        "Чебоксары",
        null,
        28.95,
        null,
        null
    ],
    [
        "Москва",
        "Чегдомын",
        null,
        65.28,
        null,
        null
    ],
    [
        "Москва",
        "Челябинск",
        null,
        32.9,
        137.5,
        137.5
    ],
    [
        "Москва",
        "Черкесск",
        null,
        33.83,
        null,
        null
    ],
    [
        "Москва",
        "Чернышевск",
        null,
        53.08,
        null,
        null
    ],
    [
        "Москва",
        "Чита",
        null,
        53.93,
        null,
        null
    ],
    [
        "Москва",
        "Чита",
        null,
        52.35,
        null,
        null
    ],
    [
        "Москва",
        "Элиста",
        null,
        33.83,
        null,
        null
    ],
    [
        "Москва",
        "Южно-Сахалинск",
        "обычная",
        93.38,
        317.5,
        317.5
    ],
    [
        "Москва",
        "Южно-Сахалинск",
        "экспресс",
        10,
        362.5,
        362.5
    ],
    [
        "Москва",
        "Якутск",
        null,
        65.11,
        368.75,
        368.75
    ],
    [
        "Москва",
        "Якутск",
        null,
        228.13,
        368.75,
        368.75
    ],
    [
        "Москва",
        "Ярославль",
        null,
        28.2,
        null,
        null
    ]
]

const toInput = document.getElementById('where')
const weightInput = document.getElementById('weight')
const typeInput = document.getElementById('type')
const resultBlock = document.getElementById('result')
const costEl = document.getElementById('cost')
const costLabel = document.getElementById('costLabel')
console.log()

document.getElementById('calcButton').addEventListener('click', () => {
    if(!(toInput.value && weightInput.value !== '' && +weightInput.value)) {
        costLabel.innerText = 'Неверные данные'
        costEl.innerText  = ''
        resultBlock.style.display = 'flex'

        return
    }


    let isFound = false
    let transportData = [null, null, null, null]
    for (let i = 0; i < tariffs.length; i++) {
        if (tariffs[i][1] === toInput.value) {
            isFound = true
            transportData = [tariffs[i][2], tariffs[i][3], tariffs[i][4], tariffs[i][5]]
            break
        }
    }

    if (transportData[0] === null) {
        costLabel.innerText = 'Доставка не осуществляется'
        costEl.innerText  = ''
        resultBlock.style.display = 'flex'
        return
    }



    const cost = Math.floor(transportData[1] * +(weightInput.value))

    costEl.innerText = `${cost}₽`
    resultBlock.style.display = 'flex'

})

const menuIcon = document.getElementById('mobileHeaderBurgerSvg')
const firstLine = document.getElementById('firstLine')
const secondLine = document.getElementById('secondLine')
const thirdLine = document.getElementById('thirdLine')
const navMenu = document.getElementById('navMenu')
let isActive = false

menuIcon.addEventListener('click', () => {
    menuIcon.style.transition = '.2s'
    if (!isActive) {
        menuIcon.style.rotate = '45deg'
        firstLine.style.display = 'none'
        navMenu.style.display = 'block'
        navMenu.style.transition = '.2s'
        document.body.style.overflowY = 'hidden'
        setTimeout(() => {
            navMenu.style.transform = 'translateX(-3vw)'
        }, 1)

        thirdLine.setAttribute('y', '-2')
        thirdLine.setAttribute('x', '13')
        thirdLine.setAttribute('width', '2')
        thirdLine.setAttribute('height', '27')


        isActive = true

    } else {
        menuIcon.style.rotate = '0deg'
        firstLine.style.display = 'block'
        navMenu.style.transition = '.2s'
        navMenu.style.transform = 'translateX(100vw)'
        document.body.style.overflowY = 'auto'

        setTimeout(() => {
            navMenu.style.display = 'none'
        }, 200)
        thirdLine.setAttribute('y', '20')
        thirdLine.removeAttribute('x')
        thirdLine.setAttribute('width', '27')
        thirdLine.setAttribute('height', '2')


        isActive = false


    }
})


