'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = 'notification';
  message.classList.add(type);

  const titleElem = document.createElement('h2');

  titleElem.className = 'title';
  titleElem.innerHTML = title;

  const descriptionElem = document.createElement('p');

  descriptionElem.className = 'description';
  descriptionElem.innerHTML = description;

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  message.style.boxSizing = 'content-box';

  document.body.append(message);
  message.append(titleElem);
  message.append(descriptionElem);

  setTimeout(() => message.remove(), 2000);
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
