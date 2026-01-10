'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  if (
    typeof title === 'string' &&
    typeof description === 'string' &&
    typeof type === 'string' &&
    typeof posTop === 'number' &&
    typeof posRight === 'number'
  ) {
    const div = document.createElement('div');

    const titleMessage = document.createElement('h2');

    titleMessage.classList.add('title');
    titleMessage.textContent = title;
    titleMessage.style.fontSize = '18px';

    const p = document.createElement('p');

    p.style.whiteSpace = 'pre-line';
    p.textContent = description;

    div.classList.add('notification', type);
    div.style.top = posTop + 'px';
    div.style.right = posRight + 'px';

    div.append(titleMessage, p);
    document.body.append(div);

    setTimeout(() => {
      div.style.display = 'none';
    }, 2000);
  }
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
