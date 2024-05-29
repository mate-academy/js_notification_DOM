'use strict';

const pageBody = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const notify = document.createElement('div');

  pageBody.append(notify);

  const notifyTitle = document.createElement('h2');
  const notifyText = document.createElement('p');

  notifyTitle.textContent = title;
  notifyText.textContent = description;

  notify.append(notifyTitle);
  notify.append(notifyText);

  notify.setAttribute('class', 'notification');
  notify.classList.add(type);
  notify.style.display = 'block';
  notify.style.position = 'fixed';
  notify.style.top = posTop.toString() + 'px';
  notify.style.right = posRight.toString() + 'px';

  notifyTitle.setAttribute('class', 'title');

  setTimeout(() => notify.remove(), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  165,
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
