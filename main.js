const output = document.getElementById("output");
const input = document.getElementById("cmd");

const promise = new Promise((resolve, reject) => {
    resolve('done')
});

function scrollOutputToBottom() {
    const output = document.getElementById('output');
    output.scrollTop = output.scrollHeight;
}

promise.then(() => {
    output.innerHTML += '<span class="moderator">{[Moderator]}</span> Пользователь Mems добавил вас в чат<br>';
    scrollOutputToBottom();
    return new Promise(resolve => setTimeout(resolve, 1000));
})
    .then(() => {
        output.innerHTML += 'Введите свое имя: <br>';
        scrollOutputToBottom()
        input.placeholder = 'Введите свое имя...';
        return new Promise(resolve => {
            input.addEventListener('keydown', function enterCommand(e) {

                if (e.key === 'Enter') {
                    output.innerHTML += `<span class="user">${input.value.trim()}</span><br>`;
                    input.removeEventListener('keydown', enterCommand);
                    scrollOutputToBottom(); // Удаляем обработчик события
                    resolve(input.value.trim());
                }
            });
        });
    })
    .then((username) => {
        input.placeholder = 'Command panel';
        input.value = ''
        output.innerHTML += `<span class="mems">{[Mems]}</span> ${username}! Я написал тебе не случайно. Слышал, тебе можно доверять<br>`;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Я из Anonims. Мы хакеры, которые хотим делать в сети, все что нам хочется. Меня обнаружили, помоги мне, срочно. Я не останусь в дол###<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {
        output.innerHTML += '<span class="moderator">{[Moderator]}</span> Пользователь Mems не в сети<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {
        output.innerHTML += '<span class="moderator">{[Moderator]}</span> Пользователь Mems вошел в чат<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Они меня почти нашли. Подключись к их серверу и отправь их по ложному следу. Иструкцию я тебе кинул. У меня осталось мало времени! Потом я свяжусь с тобой<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += '<span class="moderator">{[Moderator]}</span> Пользователь Mems не в сети<br><br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {
        output.innerHTML += '<span class="alert">{[Alert]}</span> Вам пришло сообщение<br><br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        output.innerHTML += `
                <span class="mems">{[Mems]}</span> Это Mems. Подключись к северу местной полиции и выведи им сообщениие:
                <br><br>
                "Хакер Иван Загорский, известный под ником Mems обнаружен в Химках, район Заводской улицы"
                <br><br>
                Только не ошибись, прошу тебя. Надо написать именно это слово в слово, а то не поверят!
                <br><br><br>
                Чтобы подключится к их серверу, введи коману connect пробел и ip адрес сервера. Если не ошибешься в адресе, то у тебя запросят пароль.
                <br><br>
                Айпишник 77.199.88.101, пароль PoliceBoss<br><br>
                `;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        output.innerHTML += 'Попробуй<br>';
        input.placeholder = 'Введите команду для подключения...';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            output.innerHTML += 'Введите команду для подключения: <br>';
            scrollOutputToBottom()
            input.addEventListener('keydown', function enterCommand(e) {
                input.placeholder = 'Command panel';
                if (e.key === 'Enter') {
                    if (input.value.trim().includes('connect 77.199.88.101')) {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        output.innerHTML += '<span class="police">{[PoliceServer]}</span> Подключение...<br>';
                        scrollOutputToBottom()
                        input.removeEventListener('keydown', enterCommand); // Удаляем обработчик события
                        resolve(input.value.trim());
                    } else {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        input.value = '';
                        output.innerHTML += 'Команда не найдена. Попробуй еще раз<br>';
                        scrollOutputToBottom();
                    }
                }
            });
        });
    })
    .then(() => {
        input.value = '';
        output.innerHTML += '<div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then((command) => {
        const loaderElement = document.querySelector('.loader');
        if (loaderElement) {
            loaderElement.remove();
        }
        return new Promise((resolve, reject) => {
            input.value = '';
            output.innerHTML += 'Введите пароль: <br>';
            scrollOutputToBottom()
            input.placeholder = 'Введите пароль...';
            input.addEventListener('keydown', function enterPassword(e) {
                if (e.key === 'Enter') {
                    if (input.value.trim() === 'PoliceBoss') {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        // output.innerHTML += '<span class="police">{[PoliceServer]}</span> Доступ разрешен<br>';
                        scrollOutputToBottom()
                        input.removeEventListener('keydown', enterPassword); // Удаляем обработчик события
                        resolve(input.value.trim());
                    } else {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        input.value = '';
                        output.innerHTML += 'Пароль не верен. Будьте внимательнее<br>';
                        scrollOutputToBottom();
                    }
                }
            });
        });
    })
    .then(() => {
        input.value = '';
        input.placeholder = 'Command panel';
        // Удаление предыдущего элемента с анимацией, если он существует
        const loaderElement = document.querySelector('.loader');
        if (loaderElement) {
            loaderElement.remove();
        }
        output.innerHTML += '<div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        const loaderElement = document.querySelector('.loader');
        if (loaderElement) {
            loaderElement.remove();
        }
        input.value = '';
        output.innerHTML += '<span class="police">{[PoliceServer]}</span> Доступ разрешен<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        input.value = '';
        output.innerHTML += '<span class="alert">{[Alert]}</span> У вас сообщение от Mems<br><br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Молодец! Ты на сервере полиции<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Не сложно, правда?<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> А теперь спасай меня. Или ты забыл, зачем ты здесь?<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += `
        <span class="moderator">{[Moderator]}</span> Чтобы спасти Mems тебе надо вывести его сообщение на все устройства полиции.<br><br>

        Для этого воспользуйся лучшим языком для хакеров Python<br><br>

        В нем есть фукция вывода - print()<br><br>

        Обрати внимание, она пишется с маленькой буквы, без пробелов и со скобками.<br><br>

        Внутри, в таких кавычках  ' ' нужно указать, что ты хочешь вывести,
        например print('Привет')<br><br>

        В ковычках функции print('твой текст внутри') напиши сообщение, которое уведет их от меня по ложному следу.<br><br>

        Текст сообщения:<br>
        Хакер Иван Загорский, известный под ником Mems обнаружен в Химках, район Заводской улицы<br><br>
        `;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        output.innerHTML += '<span class="moderator">{[Moderator]}</span> А теперь спаси Mems, а то его скоро схватят. Нельзя этого допустить. Вспомни, что он тебя просил и выведи это при помощи фукции print()<br>Только не ошибись. Это очень важно!<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then((command) => {
        return new Promise((resolve, reject) => {
            input.value = '';
            output.innerHTML += 'Введите команду: <br>';
            scrollOutputToBottom()
            input.addEventListener('keydown', function enterPassword(e) {
                input.placeholder = 'Введите команду...';
                if (e.key === 'Enter') {
                    if (input.value.trim().includes("print('") && input.value.trim().includes("')") && input.value.trim().includes("Хакер Иван Загорский, известный под ником Mems обнаружен в Химках, район Заводской улицы")) {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        output.innerHTML += 'Проверка...<br>';
                        scrollOutputToBottom()
                        input.removeEventListener('keydown', enterPassword); // Удаляем обработчик события
                        let inputValue = input.value.trim()
                        input.value = ''
                        setTimeout(() => {
                            output.innerHTML += '<span class="police">{[PoliceServer]}</span> Внимание всем сотрудникам! Внимание! Хакер Иван Загорский, известный под ником Mems обнаружен в Химках, район Заводской улицы. Прекратить поиски, всем туда!<br>';
                            scrollOutputToBottom();
                            resolve(inputValue);
                        }, 3000); // Задержка в 3 секунды
                    } else {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        input.value = '';
                        output.innerHTML += 'Что-то не так, полиция не купилась. Быстро попробуй еще раз!<br>';
                        scrollOutputToBottom();
                    }
                }
            });
        });
    })
    .then(() => {
        input.placeholder = 'Command panel';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        output.innerHTML += '<span class="moderator">{[Moderator]}</span> Пользователь Mems вошел в чат<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {
        output.innerHTML += `
            <span class="mems">{[Mems]}</span> Спасибо тебе, бро! Ты меня спас. Я уж думал, все, фароны меня зажали.<br>
            А я всего лишь хотел помочь бабушке всего друга.<br>
            Их местное отделение банка Пенькоф не хочет выплачивать ей пенсию.<br> 
            А баба Зина очень классная.<br>
            Давай вместе ей поможем! Зато, что ты меня спас, я тебя сейчас научу паре хакерских штучек.<br> 
            А потом, если норм справишся, я замолвлю за тебя словечко в Anons. У нас круто.<br> 
            Мы с тобой таких дел наделаем :)<br><br>
        `;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Хм... Подожди, ты еще на сервере полиции. Так делать не надо! Вдруг они тебя отследят. Тогда уже мне придется тебя спасать. Быстро отключись от них командой disconnect<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then((command) => {
        return new Promise((resolve, reject) => {
            input.value = '';
            output.innerHTML += 'Введите команду: <br>';
            scrollOutputToBottom()
            input.addEventListener('keydown', function enterPassword(e) {
                input.placeholder = 'Введите команду...';
                if (e.key === 'Enter') {
                    if (input.value.trim().includes('disconnect')) {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        output.innerHTML += 'Проверка...<br>';
                        scrollOutputToBottom()
                        input.removeEventListener('keydown', enterPassword); // Удаляем обработчик события
                        let inputValue = input.value.trim()
                        input.value = ''
                        // setTimeout(() => {
                        //     output.innerHTML += '<span class="police">{[PoliceServer]}</span> Вы отключились от сервера<br>';
                        resolve(inputValue);
                        // }, 3000); // Задержка в 3 секунды
                    } else {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        input.value = '';
                        output.innerHTML += 'Команда не найдена, попробуйте снова!<br>';
                        scrollOutputToBottom();
                    }
                }
            });
        });
    })

    .then(() => {
        input.value = '';
        output.innerHTML += '<div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        const loaderElement = document.querySelector('.loader');
        if (loaderElement) {
            loaderElement.remove();
        }
        input.value = '';
        output.innerHTML += '<span class="police">{[PoliceServer]}</span> Вы отключились от сервера<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Теперь, когда я, то есть мы, в относительной безопасности, давай закончим дело. Банк Пенькоф нужно наказать. Сейчас покажу тебе несколько новых фичей!<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Я предлагаю уронить сервер местного отделения банка, чтобы они выплатили все пенсии, которые задолжали, в том числе и бабе Зине.<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 4000));
    })
    .then(() => {
        output.innerHTML += `
        <span class="mems">{[Mems]}</span> Их ip - 177.201.7.21.<br>
        Я пытался их DoSнуть. Смотри, есть 2 вида атак чтобы вывести сервер - DoS и DDoS.<br>
        Их суть в том, что мы отправляем сразу много запросов к серверу, он не выдерживает и падает:)<br>
        Разница лишь в том, что при DoS атаке отправляем запросы с одного компьютера, а DDoS - со многих.<br>
        Чтобы ты понял, это как очередь в кассу магазина. Когда мало людей (запросов), магазин работает хорошо.<br> 
        А тут вдруг резко на кассу приходит 10 человек. Естесвенно, кассир не справится.<br>
        А если придет 100 человек? А 1 000 000 человек? Кассиру станет плохо, и магазин закроется.<br> 
        Так вот сейчас мы как раз им и устроим это плохо<br><br>
        `;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Для DDoS атаки нам понадобится 2 вещи: софт и помощь других хакеров. Пацанов я приведу, а ты пока настрой софт. Не бойся, это не сложно. Мануал я тебе скину. Давай, скоро буду!<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        output.innerHTML += '<span class="alert">{[Alert]}</span> Вам пришло сообщение<br><br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += `
        <span class="moderator">{[Moderator]}</span> Для того, чтобы провеcти DDoS атаку нам понадобится программа hping3.<br><br>
        Чтобы скачать и установить ее в терминале используется команада apt install.<br><br>
        Для установки hping3 введи команду "apt install hping3"<br><br>
        Установи hping3<br><br>`;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then((command) => {
        return new Promise((resolve, reject) => {
            input.value = '';
            output.innerHTML += 'Введите команду: <br>';
            scrollOutputToBottom()
            input.addEventListener('keydown', function enterPassword(e) {
                input.placeholder = 'Введите команду...';
                if (e.key === 'Enter') {
                    if (input.value.trim().includes('apt install hping3')) {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        scrollOutputToBottom();
                        output.innerHTML += 'Идет установка...<br>';
                        scrollOutputToBottom()
                        input.removeEventListener('keydown', enterPassword); // Удаляем обработчик события
                        let inputValue = input.value.trim()
                        input.value = ''
                        // setTimeout(() => {
                        //     output.innerHTML += 'Install completed<br>';
                        resolve(inputValue);
                        // }, 3000); // Задержка в 3 секунды
                    } else {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        scrollOutputToBottom();
                        input.value = '';
                        output.innerHTML += 'Команда не найдена, попробуйте снова!<br>';
                        scrollOutputToBottom();
                    }
                }
            });
        });
    })
    .then(() => {
        input.value = '';
        output.innerHTML += '<div class="loader"><span id="loader_count"></span>%<div id="loader_line" style="background-color: yellow;"></div></div>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        const loaderElement = document.querySelector('.loader');
        if (loaderElement) {
            loaderElement.remove();
        }
        input.value = '';
        output.innerHTML += 'Install completed<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        output.innerHTML += `
        <span class="moderator">{[Moderator]}</span> Поздравляю! Ты установил настоящую хакерскую программу для DDoS ping-flood атак!<br><br>
        А теперь давай ее применим. Запусти программу, написав hping3.<br>
        Потом введи параметры атаки:<br>
        -1 - ddos атака<br>
        --flood - тип атаки ping-flood<br>
        177.201.7.21 - ip атакуемого сервера<br><br>

        В итоге у тебя должно получится<br><br>

        hping3 -1 --flood 177.201.7.21<br>
        Попробуй! Запусти hping3 и введи команду.<br><br>
           `;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += 'hping3 starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then((command) => {
        return new Promise((resolve, reject) => {
            input.value = '';
            output.innerHTML += 'Введите команду: <br>';
            scrollOutputToBottom()
            input.addEventListener('keydown', function enterPassword(e) {
                input.placeholder = 'Введите команду...';
                if (e.key === 'Enter') {
                    if (input.value.trim().includes('hping3 -1 --flood 177.201.7.21')) {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        input.removeEventListener('keydown', enterPassword); // Удаляем обработчик события
                        let inputValue = input.value.trim()
                        input.value = ''
                        setTimeout(() => {
                            output.innerHTML += 'Command correct. Connections... .<br>';
                            scrollOutputToBottom();
                            resolve(inputValue);
                        }, 3000); // Задержка в 3 секунды
                    } else {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        input.value = '';
                        output.innerHTML += 'Не все параметры указаны! Введите команду снова!<br>';
                        scrollOutputToBottom();
                    }
                }
            });
        });
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack starting... <br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        output.innerHTML += 'Attack completed. Server is not responding. Timed out request.<br><br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Получилось! Атака завершена, сервер банка упал и не отвечает!<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Друг! Ты молодец!<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += `
        <span class="mems">{[Mems]}</span> А теперь пошли сообщение главе филиала на почту penkof_bobrovo@penkof.inbox сообщение при помощи команды sendmessage_to:,<br>
        чтобы они выплатили все пенсии, которые задолжали!<br>
        Право выразить общественное мнение и написать текст я оставляю за тобой :) Скажи им все, что ты думаешь!<br>
        Чтобы вывести сообщение, вспомни команду print() Текст в кавычках.<br><br>

        Например<br><br>
        sendmessage_to: penkof_bobrovo@penkof.inbox<br>
        print('ЧУШПАНЫ! Немедленно выплатите все пенсии, а не то мы будем ронять ваш севере каждый день!')><br><br>
           `;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            input.value = '';
            output.innerHTML += 'Введите команду sendmessage_to: и через пробел email получателя <br>';
            scrollOutputToBottom()
            input.addEventListener('keydown', function enterPassword(e) {
                input.placeholder = 'Введите команду...';
                if (e.key === 'Enter') {
                    if (input.value.trim().includes('sendmessage_to: penkof_bobrovo@penkof.inbox')) {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        scrollOutputToBottom();
                        input.removeEventListener('keydown', enterPassword); // Удаляем обработчик события
                        input.value = ''
                        resolve(input.value.trim()); // Задержка в 3 секунды
                    } else {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        scrollOutputToBottom();
                        input.value = '';
                        output.innerHTML += 'Команда не найдена или указан не корректный адрес электронной почты.<br>Попробуйте снова';
                        scrollOutputToBottom();
                    }
                }
            });
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            input.value = '';
            output.innerHTML += 'Введите сообщение для пользователя penkof_bobrovo@penkof.inbox:<br>';
            scrollOutputToBottom();
            input.addEventListener('keydown', function enterPassword(e) {
                input.placeholder = 'Введите сообщение для пользователя...';
                if (e.key === 'Enter') {
                    if (input.value.trim().includes("print('") && input.value.trim().includes("')")) {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        scrollOutputToBottom();
                        input.removeEventListener('keydown', enterPassword); // Удаляем обработчик события
                        input.value = ''
                        resolve(input.value.trim()); // Задержка в 3 секунды
                    } else {
                        output.innerHTML += `<span class="user">${input.value}</span><br>`;
                        scrollOutputToBottom();
                        input.value = '';
                        output.innerHTML += 'Ожидается команда print().<br>Попробуйте снова<br>';
                        scrollOutputToBottom();
                    }
                }
            });
        });
    })
    .then(() => {
        output.innerHTML += 'Message sent<br><br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Отлично! Супер! Будут знать!<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Ты сегодня прям супер герой! Спасибо тебе, за то, что спас меня!<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Сейчас я возьму паузу, пообщаюсь со своими из Anonims, расскажу, как ты меня спас, и как сегодня помог уронить сервак банка.<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        output.innerHTML += '<span class="mems">{[Mems]}</span> Они это уважают. Я думаю, мы возьмем тебя в клан.<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += `<span class="mems">{[Mems]}</span> Давай уясним, что я тебе себе сегодня рассказал. Это важно.<br>
        Если олды согласятся взять тебя к нам, то тебе придутся показать им, что умеешь.<br>
        Я тебе сейчас скину мануал по сегодняшнему дню,<br>
        запомни или заскринь его. Будешь дальше юзать.<br>
        Завтра я выйду на связь с решением. Бывай, бро<br><br>`;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {
        output.innerHTML += '<span class="alert">{[Alert]}</span> Вам пришло сообщение<br><br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += `<span class="mems">{[Mems]}</span> <br><br>
        
        1. print() - команда для вывода. Текст пишем внутри скобок в кавычках<br>
        2. connect - подключиться к серверу. Нужно указать ip<br>
        3. disconnect - отключиться от сервера. Ничего указывать больше не надо<br>
        4. apt install - установка программ в Linux системах. Надо указать название программы<br>
        5. hping3 -1 --flood 177.201.7.21 - DoS ping flood атака на сервер 177.201.7.21
                                            Вместо 177.201.7.21 вводим нужный ip.
                                            Перед использованием надо запустить hping3<br>
        6. sendmessage_to - отправить емаил. Указать адрес.<br><br>
        
        Еще раз спасибо тебе. Я рад, что не ошибся в тебе!<br>`;
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        output.innerHTML += '<span class="moderator">{[Moderator]}</span> Пользователь Mems не в сети<br>';
        scrollOutputToBottom();
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .catch((error) => {
        console.error(error);
    });