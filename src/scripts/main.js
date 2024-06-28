'use strict';

const DONE = 'success';
const ERROR = 'error';
const WARNING = 'warning';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.getElementsByTagName('body')[0];
  const mainBlock = document.createElement('div');
  const mainTitle = document.createElement('h4');
  const mainDescription = document.createElement('p');

  mainTitle.textContent = title;
  mainTitle.style.marginBottom = '10px';
  mainDescription.textContent = description;

  mainBlock.appendChild(mainTitle);
  mainBlock.appendChild(mainDescription);

  mainBlock.style.position = 'absolute';
  mainBlock.style.bottom = `${posTop}px`;
  mainBlock.style.right = `${posRight}px`;
  mainBlock.style.width = '300px';
  mainBlock.style.height = '120px';
  mainBlock.style.padding = '10px';
  mainBlock.style.boxSizing = 'border-box';
  mainBlock.style.borderRadius = '10px';

  switch (type) {
    case ERROR:
      mainBlock.style.backgroundColor = 'red';
      break;

    case DONE:
      mainBlock.style.backgroundColor = 'green';
      break;

    case WARNING:
      mainBlock.style.backgroundColor = 'yellow';
      break;
  }

  body.appendChild(mainBlock);

  setTimeout(() => {
    mainBlock.remove();
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
