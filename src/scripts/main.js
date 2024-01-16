'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageContainer = addElement(
    document.body, 'div', `notification ${type}`
  );

  messageContainer.style.top = `${posTop}px`;
  messageContainer.style.right = `${posRight}px`;

  addElement(messageContainer, 'h2', 'title', title);

  addElement(messageContainer, 'p', '', description);

  setTimeout(() => messageContainer.remove(), 2000);
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

function addElement(elParent, elTag, elClass, elContent) {
  const element = document.createElement(elTag);

  if (elClass) {
    element.className = elClass;
  }

  if (elContent) {
    element.innerText = elContent;
  }

  elParent.insertAdjacentElement('beforeend', element);

  return element;
}
