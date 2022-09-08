'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const blockElem = document.createElement('div');
  const descriptionElem = document.createElement('p');
  const titleElem = document.createElement('h2');

  blockElem.classList = `notification ${type}`;

  titleElem.className = 'title';
  titleElem.textContent = title;

  descriptionElem.textContent = description;

  blockElem.insertAdjacentElement('afterbegin', titleElem);
  blockElem.insertAdjacentElement('beforeend', descriptionElem);

  document.body.children[0].after(blockElem);
  blockElem.style.top = `${posTop}px`;
  blockElem.style.right = `${posRight}px`;

  setTimeout(() => {
    blockElem.remove();
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
