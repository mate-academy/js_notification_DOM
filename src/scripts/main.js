'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const body = document.getElementsByTagName('body');
  const descriptionAd = document.createElement('p');

  descriptionAd.textContent = description;
  block.classList.add('notification');

  switch (type) {
    case 'success':
      block.classList.add('success');
      block.style.top = `${posTop}px`;
      block.style.right = `${posRight}px`;
      break;

    case 'error':
      block.classList.add('error');
      block.style.top = `${posTop}px`;
      block.style.right = `${posRight}px`;
      break;

    case 'warning':
      block.classList.add('warning');
      block.style.top = `${posTop}px`;
      block.style.right = `${posRight}px`;
      break;

    default:
      break;
  }

  const titleEl = document.createElement('h2');

  titleEl.textContent = title;
  titleEl.classList.add('title');

  block.appendChild(titleEl);
  block.appendChild(descriptionAd);
  body[0].appendChild(block);

  setTimeout(() => {
    block.style.display = 'none';
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
