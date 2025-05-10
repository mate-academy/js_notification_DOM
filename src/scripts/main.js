'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const element = document.createElement('div');

  element.classList.add('notification');
  element.classList.add(type);
  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  const titleText = document.createElement('h2');
  const descriptionText = document.createElement('p');

  titleText.classList.add('title');
  titleText.textContent = title;
  descriptionText.textContent = description;
  element.append(titleText);
  element.append(descriptionText);

  body.append(element);

  setTimeout(() => {
    if (element) {
      element.remove();
    }
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
