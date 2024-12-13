'use strict';

function hideDiv(div) {
  div.style.display = 'none';
}

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const mess = document.createElement('div');

  mess.setAttribute('class', `notification ${type}`);

  // mess.style.position = 'absolute';
  mess.style.top = posTop + 'px';
  mess.style.right = posRight + 'px';

  const titleEl = document.createElement('h2');

  titleEl.textContent = title;
  titleEl.setAttribute('class', 'title');
  mess.appendChild(titleEl);

  const desc = document.createElement('p');

  desc.textContent = description;
  mess.appendChild(desc);

  const body = document.querySelector('body');

  body.appendChild(mess);

  setTimeout(hideDiv, 2000, mess);
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
