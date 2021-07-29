require: scripts/scripts.js
require: scripts/cards.js

require: answers.yaml
  var = $Answers

init:
    bind("onAnyError", function($context) {
        // выбор формулировки для ошибки, в зависимости от режима тестирования:
        if (!testMode()) {
            log("ERROR! " + $context.exception.message);
            $reactions.answer($Answers.Error);
        } else {
            throw "ERROR! " + $context.exception.message;
        }
    });

theme: /

    state: Start
        q!: * *start
        q!: * {(как*/шаблон*) (карт*/кард*/card*) * [есть/имеется/созда*/запусти*]} *
        q!: * (что * умее*/меню/помо*) *
        q!: Подписка Okko в подарок
        script:
            // Начало новой сессии: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/built_in_services/jsapi/startSession
            if ($parseTree.value === "start") { $jsapi.startSession() };
            // Переменные JS API – $session: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/variables/session
            $session.character = getCharacterId($request);
            // реплика из answers.yaml, в зависимости от персонажа:
            $reactions.answer($Answers["Start"][$session.character]);
        buttons:
            "Кредит"
            "Тачку"
            "Колонку"

    state: cars
        q!: * (Тачк*) *
        script:
            $jsapi.log("Лололоо");
            $jsapi.log(toPrettyString($session.values));

        a: Окей, вот что у нас есть, но пока тут будет пусто
        go!: /Start

    state: credit
        q!: * (Кредит*) *
        script:
            var url = "https://iseeyou.spb.ru/getfeedback/"
            var response = $http.post(url);
            $jsapi.log("Лололоо");
            $jsapi.log(toPrettyString(response));

            if (response.isOk){
                $temp.status = response.data.STATUS;
                $session.values = response.data
            }
        if: $temp.status
            a: Окей, если хочешь быть рабом, будешь рабом, твой кредитный статус ок
        else:
            a: Сори, но нет, твой кредитный рейтинг очень низкий
    state: AmazonkaState
        q!: *(Колонк*) *
        a: Это колонка, Какую именно ты хочешь?;
        buttons:
            "От яндекса"
            "От Сбера"

    state: ChoseYoutStateOne
        q!: *(От яндекс*/От Сбер*) *
        if: $request.query === "От яндекса"
            a: Окей, мы поняли что тебе требуется супер колонка, скоро будет
        else:
            a: Окей, мы поняли что тебе требуется сберколонка, скоро будет
            a: {{$request.data}}

        script:
            var obj = $request.query
            $jsapi.log("Лололоо");
            $jsapi.log(toPrettyString(obj));
        go!: /Start



    # raw ответы используются для для передачи кастомного типа ответа:
    # https://developer.sberdevices.ru/docs/ru/developer_tools/ide/bot_answers/message_types/#raw
    # state: text_cell_view
    #     q!: * (text_cell_view/text/вертикаль*/столбик) *
    #     a: Вот карточка типа  cardList с вертикальным списком ячеек:
    #     script:
    #         showTextCellViewCardExample();

    # подробнее о работе с карточками данного типа можно почитать тут:
    # https://developer.sberdevices.ru/docs/ru/developer_tools/amp/smartapp_interface_elements/#list-card
    # state: left_right_cell_view
    #     q!: * (left_right_cell_view/left_right/горизонт*/карусель*) *
    #     a: Вот карточка типа  cardList с горизонтальным списком ячеек:
    #     script:
    #         showLeftRightCellViewCardExample();

    # Если мы не распознали запрос:
    state: CatchAll
        q!: *
        event!: noMatch
        script:
            // реплика из answers.yaml, в зависимости от персонажа:
            $reactions.answer($Answers.CatchAll[$session.character]);
        buttons:
            "Кредит"
            "Тачку"
            "Колонка"
