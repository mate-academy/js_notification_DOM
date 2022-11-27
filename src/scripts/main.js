'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElement = document.querySelector('body');
  const divElement = document.createElement('div');

  divElement.classList.add('notification', type);
  divElement.style.top = `${posTop}px`;
  divElement.style.right = `${posRight}px`;
  divElement.style.boxSizing = 'content-box';

  divElement.insertAdjacentHTML('afterbegin', `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `);

  bodyElement.append(divElement);

  setTimeout(() => {
    divElement.remove();
  }, '2000');
};

pushNotification(10, 10, 'Title of Success message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'warning');
