'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const element = document.createElement('div');

  element.style.cssText = `
  box-sizing: border-box;
  width: 350px;
  height: 130px;
  padding: 0 15px;
  position: absolute;
  border-radius: 10px;
  `;

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  const titleElem = document.createElement('h2');

  titleElem.textContent = `${title}`;
  titleElem.style.fontSize = '20px';
  titleElem.style.fontWeight = '800';

  const descriptionElem = document.createElement('p');

  descriptionElem.textContent = `${description}`;

  element.append(titleElem);
  element.append(descriptionElem);

  const body = document.querySelector('body');

  body.append(element);

  if (type === 'success') {
    element.style.backgroundColor = '#BFDDB6';
  } else if (type === 'error') {
    element.style.backgroundColor = '#ECB5B1';
  } else {
    element.style.backgroundColor = '#F1E4BF';
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
