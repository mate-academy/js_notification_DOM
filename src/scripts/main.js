'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const heading = document.createElement('h2');
  const text = document.createElement('p');

  block.classList.add(`notification`);
  block.classList.add(type);
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  heading.classList.add('title');
  heading.innerText = title;
  text.classList.add('description');
  text.innerText = description;

  block.appendChild(heading);
  block.appendChild(text);
  document.body.appendChild(block);

  setTimeout(() => {
    block.style.display = 'none';
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
