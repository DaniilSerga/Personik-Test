const CITIES = [
	{id: 0, name: 'Абакан'},
	{id: 1, name: 'Азов'},
	{id: 2, name: 'Александров'},
	{id: 3, name: 'Алексин'},
	{id: 4, name: 'Альметьевск'},
	{id: 5, name: 'Анапа'},
	{id: 6, name: 'Ангарск'},
	{id: 7, name: 'Анжеро-Судженск'},
	{id: 8, name: 'Апатиты'},
	{id: 9, name: 'Арзамас'},
	{id: 10, name: 'Армавир'},
	{id: 11, name: 'Арсеньев'},
	{id: 12, name: 'Артем'},
	{id: 13, name: 'Архангельск'},
	{id: 14, name: 'Асбест'},
	{id: 15, name: 'Астрахань'},
	{id: 16, name: 'Ачинск'},
	{id: 17, name: 'Балаково'},
	{id: 18, name: 'Балахна'},
	{id: 19, name: 'Балашиха'},
	{id: 20, name: 'Балашов'},
	{id: 21, name: 'Барнаул'},
	{id: 22, name: 'Батайск'},
	{id: 23, name: 'Белгород'},
	{id: 24, name: 'Белебей'},
	{id: 25, name: 'Белово'},
	{id: 26, name: 'Белогорск'},
	{id: 27, name: 'Белорецк'},
	{id: 28, name: 'Белореченск'},
	{id: 29, name: 'Бердск'},
	{id: 30, name: 'Березники'},
	{id: 31, name: 'Березовский'},
	{id: 32, name: 'Бийск'},
	{id: 33, name: 'Биробиджан'},
	{id: 34, name: 'Благовещенск'},
	{id: 35, name: 'Бор'},
	{id: 36, name: 'Борисоглебск'},
	{id: 37, name: 'Боровичи'},
	{id: 38, name: 'Братск'},
	{id: 39, name: 'Брянск'},
	{id: 40, name: 'Бугульма'},
	{id: 41, name: 'Буденновск'},
	{id: 42, name: 'Бузулук'},
	{id: 43, name: 'Буйнакск'},
	{id: 44, name: 'Великие Луки'},
	{id: 45, name: 'Великий Новгород'},
	{id: 46, name: 'Верхняя Пышма'},
	{id: 47, name: 'Видное'},
	{id: 48, name: 'Владивосток'},
	{id: 49, name: 'Владикавказ'},
	{id: 50, name: 'Владимир'},
	{id: 51, name: 'Волгоград'},
	{id: 52, name: 'Волгодонск'},
	{id: 53, name: 'Волжск'},
	{id: 54, name: 'Волжский'},
	{id: 55, name: 'Вологда'},
	{id: 56, name: 'Вольск'},
	{id: 57, name: 'Воркута'},
	{id: 58, name: 'Воронеж'},
	{id: 59, name: 'Воскресенск'},
	{id: 60, name: 'Воткинск'},
	{id: 61, name: 'Всеволожск'},
	{id: 62, name: 'Выборг'},
	{id: 63, name: 'Выкса'},
	{id: 64, name: 'Вязьма'},
	{id: 65, name: 'Гатчина'},
	{id: 66, name: 'Геленджик'},
	{id: 67, name: 'Георгиевск'},
	{id: 68, name: 'Глазов'},
	{id: 69, name: 'Горно-Алтайск'},
	{id: 70, name: 'Грозный'},
	{id: 71, name: 'Губкин'},
	{id: 72, name: 'Гудермес'},
	{id: 73, name: 'Гуково'},
	{id: 74, name: 'Гусь-Хрустальный'},
	{id: 75, name: 'Дербент'},
	{id: 76, name: 'Дзержинск'},
	{id: 77, name: 'Димитровград'},
	{id: 78, name: 'Дмитров'},
	{id: 79, name: 'Долгопрудный'},
	{id: 80, name: 'Домодедово'},
	{id: 81, name: 'Донской'},
	{id: 82, name: 'Дубна'},
	{id: 83, name: 'Евпатория'},
	{id: 84, name: 'Егорьевск'},
	{id: 85, name: 'Ейск'},
	{id: 86, name: 'Екатеринбург'},
	{id: 87, name: 'Елабуга'},
	{id: 88, name: 'Елец'},
	{id: 89, name: 'Ессентуки'},
	{id: 90, name: 'Железногорск'},
	{id: 91, name: 'Жигулевск'},
	{id: 92, name: 'Жуковский'},
	{id: 93, name: 'Заречный'},
	{id: 94, name: 'Зеленогорск'},
	{id: 95, name: 'Зеленодольск'},
	{id: 96, name: 'Златоуст'},
	{id: 97, name: 'Иваново'},
	{id: 98, name: 'Ивантеевка'},
	{id: 99, name: 'Ижевск'},
	{id: 100, name: 'Избербаш'},
	{id: 101, name: 'Иркутск'},
	{id: 102, name: 'Искитим'},
	{id: 103, name: 'Ишим'},
	{id: 104, name: 'Ишимбай'},
	{id: 105, name: 'Йошкар-Ола'},
	{id: 106, name: 'Казань'},
	{id: 107, name: 'Калининград'},
	{id: 108, name: 'Калуга'},
	{id: 109, name: 'Каменск-Уральский'},
	{id: 110, name: 'Каменск-Шахтинский'},
	{id: 111, name: 'Камышин'},
	{id: 112, name: 'Канск'},
	{id: 113, name: 'Каспийск'},
	{id: 114, name: 'Кемерово'},
	{id: 115, name: 'Керчь'},
	{id: 116, name: 'Кинешма'},
	{id: 117, name: 'Кириши'},
	{id: 118, name: 'Киров'},
	{id: 119, name: 'Кирово-Чепецк'},
	{id: 120, name: 'Киселевск'},
	{id: 121, name: 'Кисловодск'},
	{id: 122, name: 'Клин'},
	{id: 123, name: 'Клинцы'},
	{id: 124, name: 'Ковров'},
	{id: 125, name: 'Когалым'},
	{id: 126, name: 'Коломна'},
	{id: 127, name: 'Комсомольск-на-Амуре'},
	{id: 128, name: 'Копейск'},
	{id: 129, name: 'Королев'},
	{id: 130, name: 'Кострома'},
	{id: 131, name: 'Котлас'},
	{id: 132, name: 'Красногорск'},
	{id: 133, name: 'Краснодар'},
	{id: 134, name: 'Краснокаменск'},
	{id: 135, name: 'Краснокамск'},
	{id: 136, name: 'Краснотурьинск'},
	{id: 137, name: 'Красноярск'},
	{id: 138, name: 'Кропоткин'},
	{id: 139, name: 'Крымск'},
	{id: 140, name: 'Кстово'},
	{id: 141, name: 'Кузнецк'},
	{id: 142, name: 'Кумертау'},
	{id: 143, name: 'Кунгур'},
	{id: 144, name: 'Курган'},
	{id: 145, name: 'Курск'},
	{id: 146, name: 'Кызыл'},
	{id: 147, name: 'Лабинск'},
	{id: 148, name: 'Лениногорск'},
	{id: 149, name: 'Ленинск-Кузнецкий'},
	{id: 150, name: 'Лесосибирск'},
	{id: 151, name: 'Липецк'},
	{id: 152, name: 'Лиски'},
	{id: 153, name: 'Лобня'},
	{id: 154, name: 'Лысьва'},
	{id: 155, name: 'Лыткарино'},
	{id: 156, name: 'Люберцы'},
	{id: 157, name: 'Магадан'},
	{id: 158, name: 'Магнитогорск'},
	{id: 159, name: 'Майкоп'},
	{id: 160, name: 'Махачкала'},
	{id: 161, name: 'Междуреченск'},
	{id: 162, name: 'Мелеуз'},
	{id: 163, name: 'Миасс'},
	{id: 164, name: 'Минеральные Воды'},
	{id: 165, name: 'Минусинск'},
	{id: 166, name: 'Михайловка'},
	{id: 167, name: 'Михайловск'},
	{id: 168, name: 'Мичуринск'},
	{id: 169, name: 'Москва'},
	{id: 170, name: 'Мурманск'},
	{id: 171, name: 'Муром'},
	{id: 172, name: 'Мытищи'},
	{id: 173, name: 'Набережные Челны'},
	{id: 174, name: 'Назарово'},
	{id: 175, name: 'Назрань'},
	{id: 176, name: 'Нальчик'},
	{id: 177, name: 'Наро-Фоминск'},
	{id: 178, name: 'Находка'},
	{id: 179, name: 'Невинномысск'},
	{id: 180, name: 'Нерюнгри'},
	{id: 181, name: 'Нефтекамск'},
	{id: 182, name: 'Нефтеюганск'},
	{id: 183, name: 'Нижневартовск'},
	{id: 184, name: 'Нижнекамск'},
	{id: 185, name: 'Нижний Новгород'},
	{id: 186, name: 'Нижний Тагил'},
	{id: 187, name: 'Новоалтайск'},
	{id: 188, name: 'Новокузнецк'},
	{id: 189, name: 'Новокуйбышевск'},
	{id: 190, name: 'Новомосковск'},
	{id: 191, name: 'Новороссийск'},
	{id: 192, name: 'Новосибирск'},
	{id: 193, name: 'Новотроицк'},
	{id: 194, name: 'Новоуральск'},
	{id: 195, name: 'Новочебоксарск'},
	{id: 196, name: 'Новочеркасск'},
	{id: 197, name: 'Новошахтинск'},
	{id: 198, name: 'Новый Уренгой'},
	{id: 199, name: 'Ногинск'},
	{id: 200, name: 'Норильск'},
	{id: 201, name: 'Ноябрьск'},
	{id: 202, name: 'Нягань'},
	{id: 203, name: 'Обнинск'},
	{id: 204, name: 'Одинцово'},
	{id: 205, name: 'Озерск'},
	{id: 206, name: 'Октябрьский'},
	{id: 207, name: 'Омск'},
	{id: 208, name: 'Орел'},
	{id: 209, name: 'Оренбург'},
	{id: 210, name: 'Орехово-Зуево'},
	{id: 211, name: 'Орск'},
	{id: 212, name: 'Павлово'},
	{id: 213, name: 'Павловский Посад'},
	{id: 214, name: 'Пенза'},
	{id: 215, name: 'Первоуральск'},
	{id: 216, name: 'Пермь'},
	{id: 217, name: 'Петрозаводск'},
	{id: 218, name: 'Петропавловск-Камчатский'},
	{id: 219, name: 'Подольск'},
	{id: 220, name: 'Полевской'},
	{id: 221, name: 'Прокопьевск'},
	{id: 222, name: 'Прохладный'},
	{id: 223, name: 'Псков'},
	{id: 224, name: 'Пушкино'},
	{id: 225, name: 'Пятигорск'},
	{id: 226, name: 'Раменское'},
	{id: 227, name: 'Ревда'},
	{id: 228, name: 'Реутов'},
	{id: 229, name: 'Ржев'},
	{id: 230, name: 'Рославль'},
	{id: 231, name: 'Россошь'},
	{id: 232, name: 'Ростов-на-Дону'},
	{id: 233, name: 'Рубцовск'},
	{id: 234, name: 'Рыбинск'},
	{id: 235, name: 'Рязань'},
	{id: 236, name: 'Салават'},
	{id: 237, name: 'Сальск'},
	{id: 238, name: 'Самара'},
	{id: 239, name: 'Санкт-Петербург'},
	{id: 240, name: 'Саранск'},
	{id: 241, name: 'Сарапул'},
	{id: 242, name: 'Саратов'},
	{id: 243, name: 'Саров'},
	{id: 244, name: 'Свободный'},
	{id: 245, name: 'Севастополь'},
	{id: 246, name: 'Северодвинск'},
	{id: 247, name: 'Северск'},
	{id: 248, name: 'Сергиев Посад'},
	{id: 249, name: 'Серов'},
	{id: 250, name: 'Серпухов'},
	{id: 251, name: 'Сертолово'},
	{id: 252, name: 'Сибай'},
	{id: 253, name: 'Симферополь'},
	{id: 254, name: 'Славянск-на-Кубани'},
	{id: 255, name: 'Смоленск'},
	{id: 256, name: 'Соликамск'},
	{id: 257, name: 'Солнечногорск'},
	{id: 258, name: 'Сосновый Бор'},
	{id: 259, name: 'Сочи'},
	{id: 260, name: 'Ставрополь'},
	{id: 261, name: 'Старый Оскол'},
	{id: 262, name: 'Стерлитамак'},
	{id: 263, name: 'Ступино'},
	{id: 264, name: 'Сургут'},
	{id: 265, name: 'Сызрань'},
	{id: 266, name: 'Сыктывкар'},
	{id: 267, name: 'Таганрог'},
	{id: 268, name: 'Тамбов'},
	{id: 269, name: 'Тверь'},
	{id: 270, name: 'Тимашевск'},
	{id: 271, name: 'Тихвин'},
	{id: 272, name: 'Тихорецк'},
	{id: 273, name: 'Тобольск'},
	{id: 274, name: 'Тольятти'},
	{id: 275, name: 'Томск'},
	{id: 276, name: 'Троицк'},
	{id: 277, name: 'Туапсе'},
	{id: 278, name: 'Туймазы'},
	{id: 279, name: 'Тула'},
	{id: 280, name: 'Тюмень'},
	{id: 281, name: 'Узловая'},
	{id: 282, name: 'Улан-Удэ'},
	{id: 283, name: 'Ульяновск'},
	{id: 284, name: 'Урус-Мартан'},
	{id: 285, name: 'Усолье-Сибирское'},
	{id: 286, name: 'Уссурийск'},
	{id: 287, name: 'Усть-Илимск'},
	{id: 288, name: 'Уфа'},
	{id: 289, name: 'Ухта'},
	{id: 290, name: 'Феодосия'},
	{id: 291, name: 'Фрязино'},
	{id: 292, name: 'Хабаровск'},
	{id: 293, name: 'Ханты-Мансийск'},
	{id: 294, name: 'Хасавюрт'},
	{id: 295, name: 'Химки'},
	{id: 296, name: 'Чайковский'},
	{id: 297, name: 'Чапаевск'},
	{id: 298, name: 'Чебоксары'},
	{id: 299, name: 'Челябинск'},
	{id: 300, name: 'Черемхово'},
	{id: 301, name: 'Череповец'},
	{id: 302, name: 'Черкесск'},
	{id: 303, name: 'Черногорск'},
	{id: 304, name: 'Чехов'},
	{id: 305, name: 'Чистополь'},
	{id: 306, name: 'Чита'},
	{id: 307, name: 'Шадринск'},
	{id: 308, name: 'Шали'},
	{id: 309, name: 'Шахты'},
	{id: 310, name: 'Шуя'},
	{id: 311, name: 'Щекино'},
	{id: 312, name: 'Щелково'},
	{id: 313, name: 'Электросталь'},
	{id: 314, name: 'Элиста'},
	{id: 315, name: 'Энгельс'},
	{id: 316, name: 'Южно-Сахалинск'},
	{id: 317, name: 'Юрга'},
	{id: 318, name: 'Якутск'},
	{id: 319, name: 'Ялта'},
	{id: 320, name: 'Ярославль'},
];

export default CITIES;