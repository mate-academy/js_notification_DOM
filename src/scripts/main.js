'use strict';

const content = document.querySelector('body');

// eslint-disable-next-line max-len
const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.classList.add('notification');
  element.classList.add(type);
  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  element.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;
  content.append(element);
  setTimeout(removing, 2000);

  function removing() {
    content.children[2].remove();
  }
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success', content);

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error', content);

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning', content);
