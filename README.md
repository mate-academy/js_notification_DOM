1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://pushkalov.github.io/js_notification_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Create a notification

To inform the user about the success of the operation, or any errors, websites usually use messages that appear for a while on the screen.
Для информирования пользователя об успешности операции или каких-либо ошибках веб-сайты обычно используют сообщения, которые на некоторое время появляются на экране.

Your task: Create function `pushNotification`, which takes coordinates of the message, title, description, and type 
(success, error and warning). `pushNotification` creates an element to display the message, appends it to the document, and removes it from the DOM after 2 seconds.
Do not write any CSS styles or HTML code in this task. You should modify only `main.js` file.
Ваша задача: Создать функцию `pushNotification`, которая принимает координаты сообщения, заголовок, описание и тип
(успех, ошибка и предупреждение). `pushNotification` создает элемент для отображения сообщения, добавляет его в документ и удаляет из DOM через 2 секунды.
Не пишите в этой задаче никаких стилей CSS или HTML-кода. Вы должны изменить только файл `main.js`.

Implementation tips:
- Print three messages: `success`, `error`, `warning` (call methods already exist in `main.js` file);
- The message is block element with class `notification` + class which depends on the input parameter type (`success`, `error`, `warning`); 
- The message should have a title with class `title` (prefer `h2` element);
- The message should have description (prefer tag `p`).
Советы по внедрению:
- Вывести три сообщения: `success`, `error`, `warning` (методы вызова уже существуют в файле `main.js`);
- Сообщение представляет собой элемент блока с классом `notification` + класс, который зависит от типа входного параметра (`success`, `error`, `warning`);
- Сообщение должно иметь title класса `title` (предпочтительно элемент `h2`);
- Сообщение должно иметь description (желательно тег `p`).

Hint: use [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) for execute a function or specified piece of code once the timer expires.

для выполнения функции или указанного фрагмента кода по истечении таймера.
It's an expected result of your job:
![Result](./src/images/result.png)
