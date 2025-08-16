'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notBlock = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const descriptionMessage = document.createElement('p');
  let typeMessage = '';

  if (type === 'success') {
    typeMessage = 'success';
  }

  if (type === 'error') {
    typeMessage = 'error';
  }

  if (type === 'warning') {
    typeMessage = 'warning';
  }

  notBlock.style.top = posTop + 'px';
  notBlock.style.right = posRight + 'px';
  notBlock.classList.add('notification');
  notBlock.classList.add(typeMessage);

  titleMessage.classList.add('title');
  titleMessage.innerText = title;

  descriptionMessage.innerText = description;

  body.appendChild(notBlock);
  notBlock.appendChild(titleMessage);

  notBlock.appendChild(descriptionMessage);

  setTimeout(() => {
    notBlock.style.display = 'none';
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
