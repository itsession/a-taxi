const micro = require('micro');
// const server = micro(async (req, res) => {
//     return 'Running';
// });

let tabelNumber = '';
let from = '';
let to = '';
let comment = '';

let tabelNumberA = '';
let fromA = '';
let toA = '';
let commentA = '';


let flagSession = false;

const server = micro(async (req, res) => {
    const { request, session } = await micro.json(req);
    return {
        response: {
            text: session.new
                ? hello()
                : (tabelNumber === '') ? tabelNumberText(request.command)
                    : (from === '') ? fromText(request.command)
                        : (to === '') ? toText(request.command)
                            : commentText(request.command),
            tts: session.new
                ? helloA()
                : (tabelNumberA === '') ? tabelNumberAudio(request.command)
                    : (fromA === '') ? fromAudio(request.command)
                        : (toA === '') ? toAudio(request.command)
                            : commentAudio(request.command),

            end_session: flagSession
        },
        version: '1.0'
    };
})

// command.match(/[0-9]+/) можно попробовать использование регулярного выражения 

function hello() {
    flagSession = false;
    tabelNumber = '';
    from = '';
    to = '';
    comment = '';
    return 'Привет, я ваш голосовой помощник А такси. Назовите свой табельный номер.'
}

function helloA() {
    flagSession = false;
    tabelNumberA = '';
    fromA = '';
    toA = '';
    commentA = '';
    return '<speaker audio="alice-sounds-things-car-1.opus">Привет, я ваш голосовой помощник А такси. Назовите свой табельный номер.'
}

function tabelNumberText(command) {

    tabelNumber = command;
    console.log(command)
    console.log(tabelNumber, from, to, comment)
    return 'Хорошо. Назовите место откуда собираетесь ехать.'

}

function fromText(command) {
    if (command === 'ангар 5' || command === 'кпп 12' || command === 'кпп 8' || command === 'кпп 6' || command === 'кпп 5' || command === 'зона д' || command === 'зона е' || command === 'зона ф' || command === 'зона б2' || command === 'зона ш2' || command === 'зона ш1' || command === 'зона б' || command === 'зона ц' || command === 'зона б1' || command === 'западная зона' || command === 'берлин ш1' || command === 'берлин ш2' || command === 'ангар аэрофлот' || command === 'склад ак россии') {
        from = command;
        console.log(command)
        console.log(tabelNumber, from, to, comment)

        return `Ваш табельный номер ${tabelNumber}. Точка отправки ${from}. Теперь назовите место куда хотите поехать`
    } else {
        return 'Такой точки отправления не существует. Назовите действующую точку отправления А такси'
    }


}

function toText(command) {

    if (command === 'ангар 5' || command === 'кпп 12' || command === 'кпп 8' || command === 'кпп 6' || command === 'кпп 5' || command === 'зона д' || command === 'зона е' || command === 'зона ф' || command === 'зона б2' || command === 'зона ш2' || command === 'зона ш1' || command === 'зона б' || command === 'зона ц' || command === 'зона б1' || command === 'западная зона' || command === 'берлин ш1' || command === 'берлин ш2' || command === 'ангар аэрофлот' || command === 'склад ак россии') {
        to = command;
        console.log(command)
        console.log(tabelNumber, from, to, comment)

        return `Ваш табельный номер ${tabelNumber}. Маршрут ${from}-${to}. Теперь добавьте комментарий с номером стоянки и количеством человек с Вами`
    } else {
        return 'Такой точки отправления не существует. Назовите действующую точку отправления А такси'
    }

}

function commentText(command) {
    comment = command;
    tabelNumber = '';
    from = '';
    to = '';
    comment = '';
    console.log(command)
    console.log(tabelNumber, from, to, comment)

    flagSession = true
    return `Здорово. Заявка создана. Ожидайте Ваше такси. Спасибо за использование голосового помощника А такси`

}

function tabelNumberAudio(command) {


    tabelNumberA = command;
    console.log("A", command)
    console.log("A", tabelNumberA, fromA, toA, commentA)

    return 'Хорошо. Назовите место откуда собираетесь ехать.'

}

function fromAudio(command) {
    // console.log(command)
    // fromA = command;
    // console.log("A", command)
    // console.log("A", tabelNumberA, fromA, toA, commentA)
    // return `Ваш табельный номер ${tabelNumber}. Точка отправки ${from}. Теперь назовите место куда хотите поехать`
    if (command === 'ангар 5' || command === 'кпп 12' || command === 'кпп 8' || command === 'кпп 6' || command === 'кпп 5' || command === 'зона д' || command === 'зона е' || command === 'зона ф' || command === 'зона б2' || command === 'зона ш2' || command === 'зона ш1' || command === 'зона б' || command === 'зона ц' || command === 'зона б1' || command === 'западная зона' || command === 'берлин ш1' || command === 'берлин ш2' || command === 'ангар аэрофлот' || command === 'склад ак россии') {
        fromA = command;
        return `Ваш табельный номер ${tabelNumber}. Точка отправки ${from}. Теперь назовите место куда хотите поехать`
    } else {
        return 'Такой точки отправления не существует. Назовите действующую точку отправления А такси'
    }

}

function toAudio(command) {
    if (command === 'ангар 5' || command === 'кпп 12' || command === 'кпп 8' || command === 'кпп 6' || command === 'кпп 5' || command === 'зона д' || command === 'зона е' || command === 'зона ф' || command === 'зона б2' || command === 'зона ш2' || command === 'зона ш1' || command === 'зона б' || command === 'зона ц' || command === 'зона б1' || command === 'западная зона' || command === 'берлин ш1' || command === 'берлин ш2' || command === 'ангар аэрофлот' || command === 'склад ак россии') {
        toA = command;
        console.log(command)
        console.log(tabelNumber, from, to, comment)

        return `Ваш табельный номер ${tabelNumber}. Маршрут ${from}-${to}. Теперь добавьте комментарий с номером стоянки и количеством человек с Вами`
    } else {
        return 'Такой точки отправления не существует. Назовите действующую точку отправления А такси'
    }
}

function commentAudio(command) {
    commentA = command;
    tabelNumberA = '';
    fromA = '';
    toA = '';
    commentA = '';
    console.log("A", command)
    console.log("A", tabelNumberA, fromA, toA, commentA)
    flagSession = true
    return `Здорово. Заявка создана. Ожидайте Ваше такси. Спасибо за использование голосового помощника А такси`

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