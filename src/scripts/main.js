'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');
  const head = document.createElement('h1');
  const text = document.createElement('p');

  message.classList = `notification ${type}`;

  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  head.innerText = title;
  text.innerText = description;

  document.body.append(message);

  message.append(head);
  message.append(text);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(30, 20, 'Error', 'You don\'t send your homework', 'error');
pushNotification(200, 20, 'Все норм', 'Я майже не відстав', 'success');
