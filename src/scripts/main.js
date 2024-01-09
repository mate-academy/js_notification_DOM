'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notificationElem = document.createElement('div');

  notificationElem.classList.add('notification');
  notificationElem.classList.add(type);

  notificationElem.style.top = posTop + 'px';
  notificationElem.style.right = posRight + 'px';

  const titleElem = document.createElement('h2');

  titleElem.classList.add('title');

  titleElem.textContent = title;

  const descriptionElem = document.createElement('p');

  descriptionElem.innerHTML = description.replace('\n', '<br>');

  notificationElem.append(titleElem);
  notificationElem.append(descriptionElem);
  body.append(notificationElem);

  setTimeout(() => {
    notificationElem.style.display = 'none';
  }, 2000);
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
