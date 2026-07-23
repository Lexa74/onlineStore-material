const special = [
    {
        "_id": "6a4613c7be2fbbbe25c5d59f",
        "name": "Кровать TATRAN",
        "description": "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
        "price": 120000,
        "oldPrice": 140000,
        "image": "https://i.postimg.cc/Y0rKy7pn/Rectangle-22-1.jpg",
        "colors": [
            "Серый",
            "Оранжевый",
            "Черный"
        ],
        "roomTypes": [
            "Кухня и столовая"
        ],
        "deliveryDays": 7,
        "popularity": 628,
        "createdAt": "2026-07-02T07:31:19.905Z",
        "isSpecial": true,
        "__v": 0
    },
    {
        "_id": "6a4613c7be2fbbbe25c5d5a0",
        "name": "Кресло VILORA",
        "description": "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
        "price": 21000,
        "oldPrice": 28000,
        "image": "https://i.postimg.cc/tJqQmbXr/Rectangle-22-2.jpg",
        "colors": [
            "Красный"
        ],
        "roomTypes": [
            "Свет"
        ],
        "deliveryDays": 13,
        "popularity": 955,
        "createdAt": "2026-07-02T07:31:19.905Z",
        "isSpecial": true,
        "__v": 0
    },
    {
        "_id": "6a4613c7be2fbbbe25c5d5a1",
        "name": "Стол MENU",
        "description": "Европейский дуб - отличается особой прочностью и стабильностью.",
        "price": 34000,
        "oldPrice": 45000,
        "image": "https://i.postimg.cc/j2x0kTsX/Rectangle-24-2.jpg",
        "colors": [
            "Фиолетовый",
            "Голубой",
            "Черный",
            "Серый"
        ],
        "roomTypes": [
            "Дача",
            "Кухня и столовая"
        ],
        "deliveryDays": 18,
        "popularity": 208,
        "createdAt": "2026-07-02T07:31:19.905Z",
        "isSpecial": true,
        "__v": 0
    }
]

const catalog = [
    {
        "_id": "6a4613c7be2fbbbe25c5d5aa",
        "name": "Табурет",
        "description": "Деревянный табурет с мягким сиденьем, подходит для кухни.",
        "price": 9000,
        "oldPrice": null,
        "image": "https://i.postimg.cc/tJqQmbXr/Rectangle-22-2.jpg",
        "colors": [
            "Лавандовый"
        ],
        "roomTypes": [
            "Гардероб",
            "Спальня"
        ],
        "deliveryDays": 9,
        "popularity": 923,
        "createdAt": "2026-07-02T07:31:19.906Z",
        "isSpecial": false,
        "__v": 0
    },
    {
        "_id": "6a4613c7be2fbbbe25c5d5ab",
        "name": "Вешалка напольная",
        "description": "Металлическая вешалка с крючками и полкой для обуви.",
        "price": 22000,
        "oldPrice": null,
        "image": "https://i.postimg.cc/tJqQmbXr/Rectangle-22-2.jpg",
        "colors": [
            "Синий"
        ],
        "roomTypes": [
            "Гардероб"
        ],
        "deliveryDays": 6,
        "popularity": 632,
        "createdAt": "2026-07-02T07:31:19.906Z",
        "isSpecial": false,
        "__v": 0
    },
    {
        "_id": "6a4613c7be2fbbbe25c5d5ad",
        "name": "Журнальный столик",
        "description": "Стеклянный столик на металлическом каркасе с полкой для журналов.",
        "price": 32000,
        "oldPrice": null,
        "image": "https://i.postimg.cc/wMq8bz6b/Rectangle-24-1.jpg",
        "colors": [
            "Белый",
            "Голубой",
            "Лавандовый",
            "Черный"
        ],
        "roomTypes": [
            "Гардероб"
        ],
        "deliveryDays": 18,
        "popularity": 603,
        "createdAt": "2026-07-02T07:31:19.906Z",
        "isSpecial": false,
        "__v": 0
    },
    {
        "_id": "6a4613c7be2fbbbe25c5d5a9",
        "name": "Люстра VILORA",
        "description": "Современная люстра с уникальным дизайном.",
        "price": 15000,
        "oldPrice": null,
        "image": "https://i.postimg.cc/RhS5bmMy/Rectangle-22.jpg",
        "colors": [
            "Зеленый",
            "Красный",
            "Черный",
            "Фиолетовый"
        ],
        "roomTypes": [
            "Ванная комната"
        ],
        "deliveryDays": 17,
        "popularity": 56,
        "createdAt": "2026-07-02T07:31:19.906Z",
        "isSpecial": false,
        "__v": 0
    },
    {
        "_id": "6a4613c7be2fbbbe25c5d5a7",
        "name": "Полка настенная",
        "description": "Надёжная полка для книг и декора, выдерживает до 30 кг.",
        "price": 12000,
        "oldPrice": null,
        "image": "https://i.postimg.cc/d3sPSFqz/Rectangle-23.jpg",
        "colors": [
            "Белый",
            "Сиреневый",
            "Лавандовый",
            "Салатовый"
        ],
        "roomTypes": [
            "Прихожая",
            "Кухня и столовая"
        ],
        "deliveryDays": 3,
        "popularity": 508,
        "createdAt": "2026-07-02T07:31:19.906Z",
        "isSpecial": false,
        "__v": 0
    },
    {
        "_id": "6a4613c7be2fbbbe25c5d5ac",
        "name": "Пуф мягкий",
        "description": "Круглый пуф с велюровой обивкой, используется как сиденье или подставка.",
        "price": 11000,
        "oldPrice": null,
        "image": "https://i.postimg.cc/tJqQmbXr/Rectangle-22-2.jpg",
        "colors": [
            "Белый"
        ],
        "roomTypes": [
            "Свет"
        ],
        "deliveryDays": 21,
        "popularity": 698,
        "createdAt": "2026-07-02T07:31:19.906Z",
        "isSpecial": false,
        "__v": 0
    }
]

const checkoutProducts = [
    {
        "_id": "6a60a755eb25b4b1844ae73d",
        "name": "Кресло VILORA",
        "description": "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
        "price": 21000,
        "oldPrice": 28000,
        "image": "https://i.postimg.cc/tJqQmbXr/Rectangle-22-2.jpg",
        "colors": [
            "Синий",
            "Салатовый",
            "Желтый",
            "Лавандовый"
        ],
        "roomTypes": [
            "Кухня и столовая",
            "Гостиная"
        ],
        "deliveryDays": 9,
        "popularity": 515,
        "createdAt": "2026-07-17T13:20:59.682Z",
        "isSpecial": true,
        "__v": 0,
        "quantity": 1
    },
    {
        "_id": "6a60a755eb25b4b1844ae73e",
        "name": "Стол MENU",
        "description": "Европейский дуб - отличается особой прочностью и стабильностью.",
        "price": 34000,
        "oldPrice": 45000,
        "image": "https://i.postimg.cc/j2x0kTsX/Rectangle-24-2.jpg",
        "colors": [
            "Желтый",
            "Салатовый"
        ],
        "roomTypes": [
            "Детская комната"
        ],
        "deliveryDays": 7,
        "popularity": 877,
        "createdAt": "2026-07-18T17:21:03.866Z",
        "isSpecial": true,
        "__v": 0,
        "quantity": 1
    }
]