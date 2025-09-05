'use strict';

class CustomNotification {
  static baseClass = 'notification';
  static notificationTypes = ['success', 'error', 'warning'];

  /**
   * Constructor
   *
   * @param type
   * @param parentElement
   * @param timeout
   */
  constructor(type = 'success', parentElement = 'body', timeout = 2000) {
    if (CustomNotification.notificationTypes.indexOf(type) === -1) {
      throw new Error(`Notification type ${type} is not supported`);
    }

    this.class = type;
    this.parentElement = parentElement;
    this.timeout = timeout;
  }

  /**
   * Push notification of class type
   *
   * @param posTop
   * @param posRight
   * @param title
   * @param description
   */
  pushNotification(posTop, posRight, title, description) {
    const container = document.querySelector(this.parentElement);

    if (!container) {
      throw new Error('Notification container is not found');
    }

    // create notification element
    const notificationEl = document.createElement('div');

    notificationEl.classList.add(CustomNotification.baseClass);
    notificationEl.classList.add(this.class);

    // create title element
    const titleEl = document.createElement('h2');

    titleEl.classList.add('title');
    titleEl.textContent = title;

    // create description element
    const descriptionEl = document.createElement('p');

    descriptionEl.textContent = description;

    // append all children to notification element
    notificationEl.appendChild(titleEl);
    notificationEl.appendChild(descriptionEl);

    // position notification inside container
    container.append(notificationEl);

    // add positioning of notification element
    notificationEl.style.top = `${posTop}px`;
    notificationEl.style.right = `${posRight}px`;

    // add timeout to hide notification
    setTimeout(() => {
      notificationEl.style.display = 'none';
    }, this.timeout);
  }
}

const pushNotification = (y, x, title, description, type) => {
  const newNotification = new CustomNotification(type);

  newNotification.pushNotification(y, x, title, description);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
