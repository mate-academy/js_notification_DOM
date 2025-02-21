'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const createdElement = document.createElement('div');
  const someTitle = document.createElement('h2');
  const message = document.createElement('p');

  someTitle.setAttribute('class', 'title');
  createdElement.append(someTitle);
  createdElement.append(message);
  document.body.append(createdElement);

  switch (type) {
    case 'success':
      someTitle.textContent = title;
      message.textContent = description;
      createdElement.setAttribute('class', 'notification success');
      createdElement.style.top = posTop + 'px';
      createdElement.style.right = posRight + 'px';

      break;

    case 'error':
      someTitle.textContent = title;
      message.textContent = description;
      createdElement.setAttribute('class', 'notification error');
      createdElement.style.top = posTop + 'px';
      createdElement.style.right = posRight + 'px';

      break;

    case 'warning':
      someTitle.textContent = title;
      message.textContent = description;
      createdElement.setAttribute('class', 'notification warning');
      createdElement.style.top = posTop + 'px';
      createdElement.style.right = posRight + 'px';

      break;
  }

  setTimeout(() => {
    createdElement.remove();
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
