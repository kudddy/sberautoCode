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

function make_agree_with_number(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

function makeFriendly(num) {
    if(num >= 1000000)
        return Math.round(num / 1000000) + " млн.";
    if(num >= 1000)
        return Math.round(num / 1000) + " тыс.";
    return num;
}


function get_data(request) {
    var url = 'https://iseeyou.spb.ru/get-search-res-from-yandex/';
    var options = {
        dataType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            "MESSAGE_NAME": "GET_DUCKLING_RESULT",
            "data": {
                "text": String(request)
            }
        },
    };
    var response = $http.post(url, options);
    $jsapi.log(toPrettyString(response));
    var result = response.data.PAYLOAD.result
    var status = response.isOk && response.data.STATUS ? result : false;
    return status
}