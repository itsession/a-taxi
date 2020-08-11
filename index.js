const micro = require('micro');
// const server = micro(async (req, res) => {
//     return 'Running';
// });

let tabelNumber = '';
let from = '';
let to = '';
let comment = '';



const server = micro(async (req, res) => {
    const { request, session } = await micro.json(req);
    return {
        response: {
            text: session.new
                ? 'Привет, я ваш голосовой помощник А такси. Назовите свой табельный номер.'
                : (tabelNumber = '') ? tabelNumberText(request.command)
                    : (from = '') ? fromText(request.command)
                        : (to = '') ? toText(request.command)
                            : commentText(request.command),
            tts: session.new
                ? '<speaker audio="alice-sounds-things-car-1.opus">Привет, я ваш голосовой помощник А такси. Назовите свой табельный номер.'
                : (tabelNumber = '') ? tabelNumberAudio(request.command)
                    : (from = '') ? fromAudio(request.command)
                        : (to = '') ? toAudio(request.command)
                            : commentAudio(request.command),
            buttons: [
                { title: 'Хватит', hide: true },

            ],
            end_session: false
        },
        version: '1.0'
    };
})

// command.match(/[0-9]+/) можно попробовать использование регулярного выражения 

function tabelNumberText(command) {
    console.log(command)
    if (command === "1607") {
        tabelNumber = command;
        return 'Хорошо. Назовите место откуда собираетесь ехать.'
    }
}

function fromText(command) {
    console.log(command)
    from = command;

    return `Ваш табельный номер ${tabelNumber}. Точка отправки ${from}. Теперь назовите место куда хотите поехать`

}

function toText(command) {
    to = command;
    return `Ваш табельный номер ${tabelNumber}. Маршрут ${from}-${to}. Теперь скажите номер стоянки и количество человек с Вами, либо скажите без комментариев`

}

function commentText(command) {
    comment = command;
    tabelNumber = '';
    from = '';
    to = '';
    comment = '';
    return `Здорово. Заявка создана. Ожидайте Ваше такси`

}

function tabelNumberAudio(command) {
    console.log(command)
    if (command === "1607") {
        tabelNumber = command;
        return 'Хорошо. Назовите место откуда собираетесь ехать.'
    }
}

function fromAudio(command) {
    console.log(command)
    from = command;

    return `Ваш табельный номер ${tabelNumber}. Точка отправки ${from}. Теперь назовите место куда хотите поехать`

}

function toAudio(command) {
    to = command;
    return `Ваш табельный номер ${tabelNumber}. Маршрут ${from}-${to}. Теперь скажите номер стоянки и количество человек с Вами, либо скажите без комментариев`

}

function commentAudio(command) {
    comment = command;
    comment = command;
    tabelNumber = '';
    from = '';
    to = '';
    comment = '';
    return `Здорово. Заявка создана. Ожидайте Ваше такси`

}


// if (command === "кпп 12") {
//     return 'Здорово. Заявка создана. Ожидайте Ваше такси'
// }
// if (command === "Ангар 5" || command === "Ангар пять" || command === "Ангар 5." || command === "ангар 5") {
//     return 'Точка отправки Ангар 5 создана. Теперь назовите место куда хотите поехать'
// } else {
//     return 'Такой точки отправления не существует. Назовите действующую точку отправления А такси'
// }


// function numberPostAudio(command) {
//     console.log(command);
//     if (command === "1607") {
//         return 'Хорошо. Назовите место откуда собираетесь ехать.'
//     }

//     if (command === "кпп 12") {
//         return 'Здорово. Заявка создана. Ожидайте Ваше такси'
//     }
//     if (command === "Ангар 5" || command === "Ангар пять" || command === "Ангар 5." || command === "ангар 5") {
//         return 'Точка отправки Ангар 5 создана. Теперь назовите место куда хотите поехать'
//     } else {
//         return 'Такой точки отправления не существует. Назовите действующую точку отправления А такси'
//     }
// }

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));