function showCardExample() {
    // https://developer.sberdevices.ru/docs/ru/developer_tools/ide/bot_answers/message_types#card
    // описываем поля карточки типа card:
    var reply = {
        "type": "card",
        "title": "SBER Box",
        "description": "Компактная ТВ-приставка SBER Box – интеллектуальный центр вашего дома",
        "imageUrl": "https://content.sberdevices.ru/smartmarket-smide-prod/721/722/ceMB3FIWtGzrqCcA.png", // ссылка на картинку из раздела Контент
        "hash": "4722af39ef07676661755aad21b4845d", // хэш картинки из раздела Контент
        "button": {
            "text": "Купить",
            "url": "https://spasibosberbank.ru/partners/korporativnyy-magazin-sberbanka"
        },
        "auto_listening": false
    };

    // отправляем карточку в ответ от бота:
    answerPush(reply);
}

function showGridCardExample($request) {
    // Тестовый виджет не поддерживает отображение карточки типа Grid Card, поэтому не выводим её в тестовм виджете.
    var channelType = $request.channelType;
    if (channelType === "chatwidget"){
        var reply = {
            "type": "text",
            "text": "Данный тип карточки не поддерживается тестовым виджетом. Используйте тестирование на устройстве."

        }
        answerPush(reply);
        return;
    }
    else{
        var reply = {
            "type": "text",
            "text": "Вот как выглядят карточки типа grid_card."
        }
        answerPush(reply);
    }


    // https://developer.sberdevices.ru/docs/ru/developer_tools/amp/smartapp_interface_elements#grid-card
    // описываем поля карточки типа grid_card:
    var reply = {
        "type": "raw",
        "body": {
            "emotion": null,
            "items": [{
                "card": {
                    "type": "grid_card",
                    "items": [
                        {
                            "type": "greeting_grid_item",
                            "top_text": {
                                "type": "text_cell_view",
                                "text": "SBER Box",
                                "typeface": "caption",
                                "text_color": "default",
                                "max_lines": 3
                            },
                            "bottom_text": {
                                "type": "text_cell_view",
                                "text": "Компактная ТВ-приставка SBER Box – интеллектуальный центр вашего дома",
                                "typeface": "body3",
                                "text_color": "default",
                                "max_lines": 3,
                                "margins": {
                                    "top": "4x"
                                }
                            },
                            "paddings": {
                                "top": "6x",
                                "left": "6x",
                                "right": "6x",
                                "bottom": "6x"
                            },
                            "actions": [
                                {
                                    "text": "Подписка Okko в подарок."
                                }
                            ]
                        },
                        {
                            "type": "greeting_grid_item",
                            "top_text": {
                                "type": "text_cell_view",
                                "text": "SberPortal",
                                "typeface": "caption",
                                "text_color": "default",
                                "max_lines": 3
                            },
                            "bottom_text": {
                                "type": "text_cell_view",
                                "text": "Смарт-дисплей с премиальной акустикой и функцией видеозвонков",
                                "typeface": "body3",
                                "text_color": "default",
                                "max_lines": 3,
                                "margins": {
                                    "top": "4x"
                                }
                            },
                            "paddings": {
                                "top": "6x",
                                "left": "6x",
                                "right": "6x",
                                "bottom": "6x"
                            },
                            "actions": [
                                {
                                    "type": "deep_link",
                                    "text": "Узнать больше",
                                    "deep_link": "https://spasibosberbank.ru/partners/korporativnyy-magazin-sberbanka"
                                }
                            ]
                        }
                    ],
                    "columns": 2,
                    "item_width": "small"
                }
            }]
        },
        "messageName": "ANSWER_TO_USER"
    };

    // отправляем карточку в ответ от бота:
    answerPush(reply);
}

function showGalleryCardExample($request) {
    // Тестовый виджет не поддерживает отображение карточки типа Gallary Card, поэтому не выводим её в тестовм виджете.
    var channelType = $request.channelType;
    if (channelType === "chatwidget"){
        var reply = {
            "type": "text",
            "text": "Данный тип карточки не поддерживается тестовым виджетом. Используйте тестирование на устройстве."

        }
        answerPush(reply);
        return;
    }
    else{
        var reply = {
            "type": "text",
            "text": "Вот как выглядят карточки типа gallery_card."
        }
        answerPush(reply);
    }

    // https://developer.sberdevices.ru/docs/ru/developer_tools/amp/smartapp_interface_elements#gallery-card
    // описываем поля карточки типа gallery_card:
    var reply = {
        "type": "raw",
        "body": {
            "emotion": null,
            "items": [{
                "card": {
                    "type": "gallery_card",
                    "items": [
                        {
                            "type": "media_gallery_item",
                            "image": {
                                "url": "https://content.sberdevices.ru/smartmarket-smide-prod/721/722/ceMB3FIWtGzrqCcA.png",
                                "size": {
                                    "width": "medium",
                                    "aspect_ratio": 1.42
                                }
                            },
                            "margins": {
                                "top": "4x",
                                "left": "6x",
                                "right": "6x",
                                "bottom": "5x"
                            },
                            "bottom_text": {
                                "text": "SBER Box",
                                "typeface": "caption",
                                "text_color": "secondary",
                                "max_lines": 1,
                                "margins": {
                                    "top": "2x"
                                }
                            },
                            "top_text": {
                                "text": "Подписка Okko в подарок",
                                "typeface": "footnote1",
                                "text_color": "default",
                                "max_lines": 2
                            }
                        }]
                }
            }]
        },
        "messageName": "ANSWER_TO_USER"
    };

    // отправляем карточку в ответ от бота:
    answerPush(reply);
}

function showCardListExample() {
    // https://developer.sberdevices.ru/docs/ru/developer_tools/ide/bot_answers/message_types#card-list
    // описываем поля карточки типа cardList:
    var reply = {
        "type": "cardList",
        "title": "SberDevices",
        "subtitle": "B2B- и B2C-девайсы для экосистемы с применением речевых технологий и виртуальным ассистентом на борту",
        "cells": [
            {
                "title": "Подписка Okko в подарок",
                "subtitle": "Компактная ТВ-приставка SBER Box – интеллектуальный центр вашего дома",
                "value": " SBER Box",
                "iconUrl": "https://content.sberdevices.ru/smartmarket-smide-prod/721/722/ceMB3FIWtGzrqCcA.png", //ссылка на картинку из раздела Контент
                "hash": "4722af39ef07676661755aad21b4845d", // хэш картинки из раздела Контент
                "action": {
                    "url": "https://sbershop.ru/catalog/gadzhety/pristavka_tv_sber_box_model_sbdv_00001/"
                }
            },
            {
                "title": "Смарт-дисплей с премиальной акустикой и функцией видеозвонков",
                "subtitle": "SberPortal",
                "value": "Чистый звук 360°",
                "iconUrl": "https://content.sberdevices.ru/smartmarket-smide-prod/721/722/Acsds6uYKcz7GqKm.png", //ссылка на картинку из раздела Контент
                "hash": "ca727c229f81db99ab6250056dba1559", // хэш картинки из раздела Контент
                "action": {
                    "url": "https://sbershop.ru/catalog/gadzhety/pristavka_tv_sber_box_model_sbdv_00001/"
                }
            }
        ],
        "buttons": [
            {
                "text": "Купить",
                "url": "https://sbershop.ru/"
            }],
        "auto_listening": false
    };

    // отправляем карточку в ответ от бота:
    answerPush(reply);
}

function showTextCellViewCardExample() {
    // https://developer.sberdevices.ru/docs/ru/developer_tools/amp/smartapp_interface_elements#list-card
    // пример оформления карточки типа  cardList с вертикальным списком ячеек:
    var reply = {
        "type": "raw",
        "body": {
            "emotion": null,
            "items": [{
                "card": {
                    "type": "list_card",
                    "cells": [
                        {
                            "type": "text_cell_view",
                            "content": {
                                "text": "40 миллионов треков",
                                "typeface": "headline3",
                                "text_color": "default",
                                "max_lines": 0
                            },
                            "paddings": {
                                "left": "8x",
                                "top": "10x",
                                "right": "8x"
                            }
                        },
                        {
                            "type": "text_cell_view",
                            "content": {
                                "text": "СберЗвук",
                                "typeface": "headline1",
                                "text_color": "default",
                                "max_lines": 0
                            },
                            "paddings": {
                                "left": "8x",
                                "top": "9x",
                                "right": "8x"
                            }
                        },
                        {
                            "type": "text_cell_view",
                            "content": {
                                "text": "Бесплатно и без рекламы\nХорошая музыка всегда с вами",
                                "typeface": "footnote1",
                                "text_color": "secondary",
                                "max_lines": 0
                            },
                            "paddings": {
                                "left": "8x",
                                "top": "10x",
                                "right": "8x"
                            }
                        },
                        {
                            "type": "button_cell_view",
                            "content": {
                                "text": "Оформить подписку",
                                "typeface": "button1",
                                "style": "default",
                                "type": "accept",
                                "actions": [
                                    {
                                        "type": "text",
                                        "text": "Оформить подписку"
                                    }
                                ],
                                "margins": {
                                    "left": "10x",
                                    "top": "5x",
                                    "right": "10x",
                                    "bottom": "5x"
                                }
                            },
                            "paddings": {
                                "left": "6x",
                                "top": "12x",
                                "right": "6x",
                                "bottom": "8x"
                            }
                        }
                    ]
                }
            }]
        },
        "messageName": "ANSWER_TO_USER"
    };

    // отправляем карточку в ответ от бота:
    answerPush(reply);
}

function showLeftRightCellViewCardExample() {
    // https://developer.sberdevices.ru/docs/ru/developer_tools/amp/smartapp_interface_elements#list-card
    // пример оформления карточки типа  cardList с горизонтальным списком ячеек:
    var reply = {
        "type": "raw",
        "body": {
            "emotion": null,
            "items": [{
                "card": {
                    "type": "list_card",
                    "cells": [
                        {
                            "type": "left_right_cell_view",
                            "paddings": {
                                "left": "8x",
                                "top": "16x",
                                "right": "4x",
                                "bottom": "16x"
                            },
                            "left": {
                                "type": "simple_left_view",
                                "icon": {
                                    "address": {
                                        "type": "url",
                                        "url": "https://static.ict.moscow/files/productcard/logo/120006667_3578074695550632_5171692812773839524_o.png"
                                    },
                                    "size": {
                                        "width": "medium",
                                        "height": "medium"
                                    },
                                    "margins": {
                                        "right": "6x"
                                    }
                                },
                                "icon_vertical_gravity": "top",
                                "texts": {
                                    "title": {
                                        "text": "СберЗвук",
                                        "typeface": "headline2",
                                        "text_color": "default",
                                        "max_lines": 0
                                    }
                                }
                            },
                            "right": {
                                "type": "detail_right_view",
                                "info_and_icon": {
                                    "icon": {
                                        "address": {
                                            "type": "url",
                                            "url": "https://static.ict.moscow/files/productcard/logo/120006667_3578074695550632_5171692812773839524_o.png"
                                        },
                                        "size": {
                                            "width": "xlarge",
                                            "height": "xlarge"
                                        },
                                        "margins": {
                                            "left": "8x",
                                            "right": "12x"
                                        }
                                    }
                                }
                            },
                            "actions": [
                                {
                                    "type": "text",
                                    "text": "Вы нажали на карточку"
                                }
                            ]
                        }
                    ]
                }
            }]
        },
        "messageName": "ANSWER_TO_USER"
    };

    // отправляем карточку в ответ от бота:
    answerPush(reply);
}
