'use strict';
/* eslint-disable */
const pushNotification = (posTop, posRight, title, description, type) => {
  const toSeeMesagge = document.createElement('div');
  document.body.append(toSeeMesagge);
  toSeeMesagge.classList.add('notification');

  const h2 = document.createElement('h2');
  toSeeMesagge.append(h2);
  h2.classList.add('title');
  h2.textContent = title;

  const p = document.createElement('p');
  toSeeMesagge.append(p);
  p.textContent = description;
  console.log(toSeeMesagge);

  toSeeMesagge.style.top = posTop + 'px';
  toSeeMesagge.style.right = posRight + 'px';

  if (type === 'success') {
    toSeeMesagge.classList.add('success');
  }
  if (type === 'error') {
    toSeeMesagge.classList.add('error');
  }
  if (type === 'warning') {
    toSeeMesagge.classList.add('warning');
  }

  setTimeout(() => {
    toSeeMesagge.style.visibility = 'hidden';
  }, 2000);
};
// Чтобы сообщить пользователю об успешной операции или об ошибках, сайты обычно показывают всплывающие уведомления — сообщения, которые появляются на экране на короткое время.

// Твоя задача:

// Создать функцию pushNotification, которая принимает:

//TODO координаты сообщения,

//TODO заголовок,

//TODO описание,

//TODO и тип уведомления (success, error, warning).

// Функция pushNotification должна:

//TODO Создать элемент для отображения сообщения. // СДЕЛАЛ

//TODO Добавить этот элемент в документ (document). СДЕЛАЛ

// Через 2 секунды скрыть сообщение (не удалять из DOM).

// Сообщение — это блочный элемент с классом:

//TODO notification + дополнительный класс в зависимости от типа

// Например:

//TODO notification success

//TODO notification error

//TODO notification warning

//TODO Уведомление должно содержать:

//TODO заголовок (<h2>) с классом title

//TODO описание (<p>)

// Используй setTimeout, чтобы выполнить скрытие элемента через 2 секунды.

// ⚠️ Важно: не удаляй элементы из DOM!
// Просто спрячь их с помощью стиля, например:

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
