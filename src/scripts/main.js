'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const containerElement = document.createElement('div');
  const descriptionElement = document.createElement('p');
  const titleElement = document.createElement('h3');

  titleElement.className = title;
  titleElement.textContent = title;
  containerElement.append(titleElement);
  containerElement.append(descriptionElement);
  descriptionElement.innerText = description;
  containerElement.style.top = posTop + 'px';
  containerElement.style.right = posRight + 'px';
  containerElement.className = 'notification';
  containerElement.classList.add(type);
  document.body.append(containerElement);

  setTimeout(() => {
    containerElement.remove();
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
