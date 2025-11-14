'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {

  const divElem = document.createElement('div');

  divElem.classList.add('notification', type);
  document.body.append(divElem);

  divElem.style.top = posTop + 'px';
  divElem.style.right = posRight + 'px';

  const titleElem = document.createElement('h2');

  titleElem.classList.add('title');
  titleElem.textContent = title;

  divElem.append(titleElem);

  const descriptionElem = document.createElement('p');

  descriptionElem.classList.add('description');
  descriptionElem.textContent = description;

  divElem.append(descriptionElem);

  setTimeout(() => {
    divElem.style.display = 'none';
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
