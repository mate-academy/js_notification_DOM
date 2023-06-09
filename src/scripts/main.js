'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const page = document.querySelector('body');
  const blockElem = document.createElement('div');
  const titleElem = document.createElement('h2');
  const descriptionElem = document.createElement('p');

  titleElem.textContent = title;
  descriptionElem.textContent = description;

  blockElem.className = `notification ${type}`;
  titleElem.className = 'title';

  blockElem.style.cssText = `position: absolute;`
   + `top: ${posTop}px; right: ${posRight}px`;

  blockElem.append(titleElem, descriptionElem);
  page.append(blockElem);

  setTimeout(() => {
    page.remove(blockElem);
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
