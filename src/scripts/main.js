'use strict';

const content = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.classList.add('notification', type);
  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  element.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;
  content.append(element);

  setTimeout(function() {
    content.children[2].remove();
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
