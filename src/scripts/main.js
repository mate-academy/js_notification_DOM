'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const position = document.querySelector('body');
  const elementToAdd = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  elementToAdd.classList = `notification ${type}`;

  titleElement.innerText = title;
  titleElement.classList = 'title';
  titleElement.style.fontSize = '18px';
  descriptionElement.innerText = description;

  elementToAdd.append(titleElement);
  elementToAdd.append(descriptionElement);
  position.append(elementToAdd);

  elementToAdd.style.right = `${posRight}px`;
  elementToAdd.style.top = `${posTop}px`;

  setTimeout(() => {
    elementToAdd.style.transition = 'transform 2s ease-out';
    elementToAdd.style.transform = 'translateY(-400%)';

    setTimeout(() => {
      elementToAdd.remove();
    }, 2000);
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
