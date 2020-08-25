'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.className = `notification ${type}`;
  div.style.top = `${top}px`;
  div.style.right = `${right}px`;
  body.children[0].after(div);

  const h2 = document.createElement('h2');

  h2.textContent = title;
  h2.className = 'title';
  div.append(h2);

  const p = document.createElement('p');

  p.textContent = description;
  div.append(p);
  setTimeout(() => div.remove(), 2000);
};

pushNotification(10, 10, 'Title',
  `This is example of result.
  Notification should contain title and description.`,
  'error');
