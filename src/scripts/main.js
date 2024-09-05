'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notific = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notific.classList.add('notification');
  notific.classList.add(type);

  notific.style.top = posTop + 'px';
  notific.style.right = posRight + 'px';

  titleElement.classList.add('title');
  titleElement.textContent = title;
  descriptionElement.innerText = description;

  notific.append(titleElement, descriptionElement);
  document.body.append(notific);

  setTimeout(() => {
    notific.style.visibility = 'hidden';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\nNotification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\nNotification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\nNotification should contain title and description.',
  'warning',
);
