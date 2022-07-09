'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElem = document.querySelector('body');
  const divElem = document.createElement('div');
  const h2Elem = document.createElement('h2');
  const pElem = document.createElement('p');

  divElem.style.top = `${posTop}px`;
  divElem.style.right = `${posRight}px`;
  divElem.className = `notification ${type}`;
  h2Elem.className = 'title';
  h2Elem.innerText = title;
  pElem.innerText = description;
  bodyElem.append(divElem);
  divElem.append(h2Elem);
  divElem.append(pElem);

  setTimeout(() => {
    divElem.hidden = true;
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
