'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const div = document.createElement('div');
  const titleText = document.createElement('h2');
  const text = document.createElement('p');

  div.classList.add('notification', type);
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';
  div.style.width = 'fit-content';

  titleText.classList.add('title');
  titleText.innerText = title;

  text.innerText = description;

  body.append(div);
  div.append(titleText);
  div.append(text);

  setTimeout(() => div.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
