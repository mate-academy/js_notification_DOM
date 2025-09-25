'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Присвоєння або створення елементів
  const body = document.body;
  const box = document.createElement('div');
  const titleBox = document.createElement('h2');
  const descriptionBox = document.createElement('p');

  // Додавання класу
  box.classList.add('notification');

  // Фарбування box
  if (type === 'success') {
    box.classList.add('success');
  } else if (type === 'warning') {
    box.classList.add('warning');
  } else {
    box.classList.add('error');
  }

  // Додати клас зі стилями і присвоїти контент загаловку
  titleBox.classList.add('title');
  titleBox.textContent = title;

  // Присвоїти контент опису
  descriptionBox.textContent = description;

  // Додати стилі позиціонування
  box.style.position = 'absolute';
  box.style.top = posTop + 'px';
  box.style.right = posRight + 'px';

  // Метод який робить щось через 2 секунди
  setTimeout(() => {
    box.style.display = 'none';
  }, 2000);

  // Складання
  box.append(titleBox);
  box.append(descriptionBox);
  body.append(box);
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
