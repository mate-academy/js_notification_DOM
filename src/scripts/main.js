'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  let element = document.createElement('div');
  let messageTitle = document.createElement('h2');
  let messageDescription = document.createElement('p');

  element.className = `notification ${type}`;
  document.body.append(element);
  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  messageTitle.className = 'title';
  messageTitle.innerText = title;
  element.append(messageTitle);

  messageDescription.innerText = description;
  element.append(messageDescription);


  setTimeout(() => element.remove(), 2000)
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
