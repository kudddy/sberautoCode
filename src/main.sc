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
        q!: $regex</start>
        script:
            // Начало новой сессии: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/built_in_services/jsapi/startSession
            if ($parseTree.value === "start") { $jsapi.startSession() };
            // Переменные JS API – $session: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/variables/session
            $session.character = getCharacterId($request);
            // реплика из answers.yaml, в зависимости от персонажа:
            $reactions.answer($Answers["Start"][$session.character]);

    state: Car
        q!: *
        script:
            $session.request = $request.rawRequest.payload.message.human_normalized_text;
            var CheckStatus = get_data($session.request)
            if (CheckStatus) {
                showCardList(CheckStatus);
                $jsapi.log(toPrettyString(CheckStatus));
            } else {
                $temp.resText = false
                $session.CheckStatus = CheckStatus.url
                $jsapi.log(CheckStatus);
            }

        if: $temp.resText == false
            a: Машина не найдена попробуйте поискать самостоятельно на https://sberauto.com