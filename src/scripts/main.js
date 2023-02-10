'use strict';

function pushNotification(posTop, posRight, title, description, type) {
  const notification = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  titleElement.classList.add('title');
  titleElement.innerText = title;
  notification.append(titleElement);

  descriptionElement.innerText = description;
  notification.append(descriptionElement);

  document.body.append(notification);

  setTimeout(function() {
    notification.remove();
  }, 2000);
}

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
