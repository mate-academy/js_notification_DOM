'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const article = document.createElement('div');

  article.classList.add('notification', `${type}`);
  article.style.top = `${posTop}px`;
  article.style.right = `${posRight}px`;

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = title;
  article.append(h2);

  const p = document.createElement('p');

  p.textContent = description;
  article.append(p);

  document.body.append(article);

  setTimeout(() => {
    article.remove();
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
