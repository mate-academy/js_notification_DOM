'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const header = document.createElement('h2');
  const text = document.createElement('p');

  block.setAttribute('class', `nonfication_${type}`);
  header.setAttribute('class', title);
  text.textContent = description;

  nonfication(block, type, posTop, posRight);

  document.body.append(block);
  block.append(header, text);

  setTimeout(() => {
    block.remove();
  }, 2000);

  function nonfication(element, typeS, posTopS, posRightS) {
    element.style.position = 'fixed';
    element.style.top = `${posTop}vh`;
    element.style.right = `${posRight}vh`;
    element.style.borderRadius = '16px';
    element.style.padding = '10px';

    if (type === 'success') {
      element.style.backgroundColor = 'green';
    } else if (type === 'error') {
      element.style.backgroundColor = 'yelow';
    } else if (type === 'warning') {
      element.style.backgroundColor = 'red';
    }
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
