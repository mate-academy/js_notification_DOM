'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // 1. Створюємо основний div
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // 2. Встановлюємо позицію через атрибут style
  // Важливо: додаємо 'px', інакше браузер проігнорує числа
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // 3. Створюємо заголовок h2 з класом 'title'
  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  // 4. Створюємо опис через тег p
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  // 5. Збираємо структуру: h2 та p додаємо всередину div
  notification.append(titleElement);
  notification.append(descriptionElement);

  // 6. Додаємо готове сповіщення в body
  document.body.append(notification);

  // 7. Таймер на 2 секунди для приховування
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

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
