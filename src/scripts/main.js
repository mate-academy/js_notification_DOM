'use strict';

// write code here
const pushNotification = (top, right, title, description, type) => {
  const list = document.querySelector('body');

  const notification = document.createElement('p');

  list.append(notification);

  const list2 = document.querySelector('p');

  const h2 = document.createElement('h2');

  h2.className = 'notification';

  h2.innerHTML = `<h2>${title}</h2>` + `<p>${description}</p>` + type;
  h2.style.top = top + 'px';
  h2.style.right = right + 'px';

  list2.append(h2);

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(100, 100, 'Title', 'Description', 'Warning');
