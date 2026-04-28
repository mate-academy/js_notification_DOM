'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const titleElem = document.createElement('h2');
  const descriptionElem = document.createElement('p');

  div.classList.add('notification');
  div.classList.add(type);
  titleElem.classList.add('title');
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  descriptionElem.textContent = description;
  titleElem.textContent = title;

  div.appendChild(titleElem);
  div.appendChild(descriptionElem);
  document.body.appendChild(div);

  setTimeout(() => {
    div.style.opacity = '0';
    div.style.transition = 'opacity 0.5s ease-out';
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
