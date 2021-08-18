function showCardList(request) {

    var data =request;

    var reply = {
        "type": "raw",
        "body": {
            "emotion": null,
            "items": [{
                "card": {
                    "type": "list_card",
                    "cells": [
                        {
                            "type":"image_cell_view",
                            "content": {
                                "url": "https://content.sberdevices.ru/smartmarket-smide-prod/225583/225582/yd9ak7aehfSkuOVF.png",
                                "width": "small",
                                "aspect_ratio": 1
                            }
                        },
                        {
                            "type": "text_cell_view",
                            "content": {
                                "text": "По вашему запросу найдено:",
                                "typeface": "body1",
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
                                "text": data.count + make_agree_with_number(data.count, [" автомобиль", " автомобиля", " автомобилей"]) + ' в ценовом диапазоне \nот ' + makeFriendly(data.min_price) + ' до ' + makeFriendly(data.max_price) + ' ₽.' + '\n\nПодробнее о предложениях на сайте СберАвто.',
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
                                "text": "Перейти на сайт",
                                "typeface": "button1",
                                "style": "default",
                                "type": "accept",
                                "actions": [
                                    {
                                        "type": "deep_link",
                                        "text": "Перейти на сайт",
                                        "deep_link": data.url
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

    answerPush(reply);
}