'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const divElement = document.createElement('div');
  const heading = document.createElement('h2');
  const paragraph = document.createElement('p');

  heading.textContent = title;
  heading.className = 'title';
  paragraph.textContent = description;
  divElement.classList.add('notification', type);

  document.body.append(divElement);
  divElement.append(heading);
  divElement.append(paragraph);

  divElement.style.top = posTop + 'px';
  divElement.style.right = posRight + 'px';

  setTimeout(() => divElement.remove(), 2000);
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
