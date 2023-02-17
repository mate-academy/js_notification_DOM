'use strict';

const content = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.classList.add('notification');
  element.classList.add(type);
  element.style.marginTop = posTop + 'px';
  element.style.marginRight = posRight + 'px';

  element.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;
  content.append(element);
  setTimeout(removing, 3000);

  function removing() {
    content.children[2].remove();
  }
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
