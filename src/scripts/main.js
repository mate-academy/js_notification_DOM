'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  // console.log(posTop, posRight, title, description, type);
  const place = document.querySelector('body');
  const element = document.createElement('div');
  const titleText = document.createElement('h2');
  const messageText = document.createElement('p');

  element.classList.add('notification');
  element.classList.add(type);
  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  titleText.classList.add('title');
  titleText.textContent = `${title}`;

  messageText.textContent = `${description}`;

  place.append(element);
  element.append(titleText);
  element.append(messageText);

  setTimeout(() => {
    element.remove();
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
