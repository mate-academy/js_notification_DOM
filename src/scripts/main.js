'use strict';

const NOTIFICATION_TYPES = ['success', 'error', 'warning'];

const DEFAULT_TYPE = 'success';

const createElement = (tagName, text, className) => {
  const el = document.createElement(tagName);

  if (className) {
    el.classList.add(className);
  }

  el.textContent = text;

  return el;
};

const appendChildren = (parentEl, ...children) => {
  // children.forEach((el) => parentEl.append(el));
  parentEl.append(...children);
};

const createNotification = (posTop, posRight, title, description, type) => {
  const notif = document.createElement('div');
  const resolvedType = NOTIFICATION_TYPES.includes(type) ? type : DEFAULT_TYPE;

  notif.classList.add('notification', resolvedType);
  notif.style.top = `${posTop}px`;
  notif.style.right = `${posRight}px`;

  const titleEl = createElement('h2', title, 'title');
  const descEl = createElement('p', description);

  appendChildren(notif, titleEl, descEl);

  return notif;
};

const pushNotification = (posTop, posRight, title, description, type) => {
  const notif = createNotification(posTop, posRight, title, description, type);

  document.body.append(notif);

  setTimeout(() => {
    notif.style.display = 'none';
  }, 2000);
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
