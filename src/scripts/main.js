'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const data = {
    parent: {
      tag: 'div',
      class: `notification ${type}`,
    },
    title: {
      tag: 'h2',
      class: 'title',
      text: title,
    },
    description: {
      tag: 'p',
      class: '',
      text: description,
    },
  };

  const parentElement = createElement(data?.parent);
  const titleElement = createElement(data?.title);
  const descriptionElement = createElement(data?.description);

  parentElement.append(titleElement, descriptionElement);

  parentElement.style.top = `${posTop}px`;
  parentElement.style.right = `${posRight}px`;

  body.append(parentElement);

  setTimeout(() => {
    parentElement.style.visibility = 'hidden';
  }, 2000);
};

const createElement = (config) => {
  const element = document.createElement(config?.tag);

  if (config?.class) {
    element.className = config?.class;
  }

  if (config?.text) {
    element.textContent = config?.text;
  }

  return element;
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
