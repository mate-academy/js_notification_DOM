'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const element = document.createElement('div');
  const itemTitle = document.createElement('h2');
  const itemText = document.createElement('p');

  setTimeout(() => {
    itemTitle.textContent = title;
    itemTitle.className = 'title';

    itemText.textContent = description;

    element.classList.add('notification', type);

    element.style.top = `${parseFloat(posTop)}px`;
    element.style.right = `${parseFloat(posRight)}px`;

    element.append(itemTitle);
    element.append(itemText);
    body.append(element);

    element.style.boxSizing = `content-box`;

    itemText.style.whiteSpace = 'pre-line';
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
