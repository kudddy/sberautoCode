// проверка на режим тестирования
function testMode() {
    if ($jsapi.context().testContext) {
        return true;
    }
    return false;
}

// добавляем карточки (или другой reply) в response.replies
function answerPush(reply) {
    // если response.replies не существует - создаём пустой элемент массива:
    $jsapi.context().response.replies = $jsapi.context().response.replies || [];
    // добавляем reply в ответ response.replies:
    $jsapi.context().response.replies.push(reply);
}

// узнаём, какой персонаж у клиента, чтобы выбирать правильные реплики
function getCharacterId($request) {
    // Информация о текущем персонаже ассистента: https://developer.sberdevices.ru/docs/ru/developer_tools/amp/smartappapi_description_and_guide#объект-character
    try {
        // возможные результаты: sber, athena, joy
        return $request.rawRequest.payload.character.id;
    } catch (e) {
        if ($request.channelType === "chatwidget") {
            return "sber";
        }
        throw e.message;
    }
}
