'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const element = document.createElement('div');

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  const titleElem = document.createElement('h2');

  titleElem.textContent = `${title}`;
  titleElem.className = 'title';

  const descriptionElem = document.createElement('p');

  descriptionElem.textContent = `${description}`;

  element.append(titleElem);
  element.append(descriptionElem);

  const body = document.querySelector('body');

  body.append(element);

  if (type === 'success') {
    element.className = 'success notification';
  } else if (type === 'error') {
    element.className = 'error notification';
  } else {
    element.className = 'warning notification';
  }

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
