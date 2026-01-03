'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  titleElement.textContent = title;
  descriptionElement.textContent = description;
  titleElement.setAttribute('class', 'title');

  switch (type) {
    case 'success':
      div.setAttribute('class', 'notification success');
      break;
    case 'error':
      div.setAttribute('class', 'notification error');
      break;
    case 'warning':
      div.setAttribute('class', 'notification warning');
      break;
  }

  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  div.appendChild(titleElement);
  div.appendChild(descriptionElement);
  document.body.prepend(div);

  setTimeout(() => {
    div.style.display = 'none';
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
