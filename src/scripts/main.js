'use strict';

// Объявление функции pushNotification с четырьмя параметрами
// posTop и posRight - координаты уведомления на экране
// title - заголовок уведомления
// description - сообщение уведомления
// type - тип уведомления (например, 'success', 'warning', 'error')

const pushNotification = (posTop, posRight, title, description, type) => {
  // Создание нового элемента div
  const notification = document.createElement('div');

  // Добавление классов 'notification' и типа уведомления к элементу
  notification.classList.add('notification');
  notification.classList.add(type);

  // Вставка заголовка и сообщения уведомления в элемент
  notification.innerHTML = `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
  `;

  // Установка позиции уведомления на экране
  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;

   // Добавление элемента уведомления на страницу
   document.body.appendChild(notification);

   // Автоматическое скрытие уведомления через 5 секунд
   setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
