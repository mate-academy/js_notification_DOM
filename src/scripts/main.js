'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add('notification');
  div.classList.add(type);
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  const titleMessage = document.createElement('h2');

  titleMessage.innerText = title;

  titleMessage.classList.add('title');
  titleMessage.style.fontSize = 16 + 'px';

  const descriptionMessage = document.createElement('p');

  descriptionMessage.innerText = description;

  const h1 = document.querySelector('h1');

  div.append(titleMessage);
  div.append(descriptionMessage);
  h1.after(div);

  setTimeout(hideElement, 2000, div);

  function hideElement(element) {
    element.style.visibility = 'hidden';
  }
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
