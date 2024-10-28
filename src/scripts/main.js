'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.classList.add('notification');
  element.style.position = 'absolute';
  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  const elementTitle = document.createElement('h2');

  elementTitle.textContent = title;

  const elementContent = document.createElement('p');

  elementContent.innerHTML = description.replace(/\n/g, '<br>');

  element.appendChild(elementTitle);
  element.appendChild(elementContent);

  if (type === 'success') {
    element.classList.add('success');
    element.style.backgroundColor = 'green';
  }

  if (type === 'error') {
    element.classList.add('error');
    element.style.backgroundColor = 'red';
  }

  if (type === 'warning') {
    element.classList.add('warning');
    element.style.backgroundColor = 'yellow';
  }

  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
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
