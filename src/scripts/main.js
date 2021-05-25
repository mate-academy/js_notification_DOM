'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  // console.log(posRight, posTop, title, description, type);
  const element = document.querySelector('body');
  const notification = document.createElement('div');

  notification.classList = 'notification';
  notification.classList.add(type);
  notification.style.marginTop = posTop + 'px';
  notification.style.marginRight = posRight + 'px';

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';

  messageTitle.innerText = title;
  notification.appendChild(messageTitle);

  const messageDescription = document.createElement('p');

  messageDescription.innerText = description;
  notification.appendChild(messageDescription);

  element.appendChild(notification);
};

setTimeout(() =>
  pushNotification(10, 10, 'Title of Success message',
    'Message example.\n '
  + 'Notification should contain title and description.', 'success'), 1000);

setTimeout(() =>
  pushNotification(150, 10, 'Title of Error message',
    'Message example.\n '
+ 'Notification should contain title and description.', 'error'), 2000);

setTimeout(() =>
  pushNotification(290, 10, 'Title of Warning message',
    'Message example.\n '
  + 'Notification should contain title and description.', 'warning'),
3000);
