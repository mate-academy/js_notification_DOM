'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const h2 = document.createElement('h2');
  const main = document.createElement('p');

  block.append(h2);
  block.append(main);
  body.firstElementChild.after(block);
  
  block.className = 'notification';

  switch(type) {
    case 'success':
      block.className += ' success';
      break;
    
    case 'error':
      block.className += ' error';
      break;
    
    case 'warning':
      block.className += ' warning';
      break;
  }

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  h2.innerText = title;
  h2.className = 'title';
  main.innerText = description;

  setTimeout(() => block.remove(), 2000);
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
