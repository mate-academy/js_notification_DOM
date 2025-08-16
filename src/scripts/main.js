'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const parentElem = document.body;
  const newDiv = document.createElement('div');
  const titleElem = document.createElement('h2');
  const descriptionELem = document.createElement('p');

  newDiv.className = 'notification';
  titleElem.className = 'title';
  descriptionELem.className = 'description';
  descriptionELem.textContent = description;
  descriptionELem.style.whiteSpace = 'pre-wrap';
  titleElem.textContent = title;

  parentElem.prepend(newDiv);
  newDiv.append(titleElem);
  newDiv.append(descriptionELem);

  if (type === 'success') {
    newDiv.classList.add('success');
  }

  if (type === 'error') {
    newDiv.classList.add('error');
  }

  if (type === 'warning') {
    newDiv.classList.add('warning');
  }

  newDiv.style.top = `${posTop}px`;
  newDiv.style.right = `${posRight}px`;

  setTimeout(() => {
    newDiv.style.display = 'none';
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
