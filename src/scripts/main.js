'use strict';

class NotificationMessage {
  constructor(type, positionTop, positionRight) {
    const newNotification = document.createElement('div');

    newNotification.classList.add('notification', type);
    newNotification.style.top = `${positionTop}px`;
    newNotification.style.right = `${positionRight}px`;

    this.content = newNotification;

    return this;
  }

  addElement(tagName, classOfElement, textValue) {
    const createdElement = document.createElement(tagName);

    createdElement.className = classOfElement;
    createdElement.innerText = textValue;

    if (classOfElement === 'title') {
      createdElement.style.fontSize = '16px';
    }

    this.content.append(createdElement);
  }
}

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = new NotificationMessage(type, posTop, posRight);

  notification.addElement('h2', 'title', title);
  notification.addElement('p', 'description', description);

  document.body.append(notification.content);

  setTimeout(() => notification.content.remove(), 2000);
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
