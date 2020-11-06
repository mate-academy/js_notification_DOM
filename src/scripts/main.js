'use strict';

const body = document.querySelector('body');

const h2 = document.createElement('h2');
const p = document.createElement('p');

const titleTxt = 'Title';
const descriptionTxt = `
  This is an example of a result.
  Notification should contain title and description.
`;

h2.append(titleTxt);
p.append(descriptionTxt);

// --------------------------------------------------------------

const pushNotification = (top, right, title, description, type) => {
  const notificationHtml = document.createElement('div');

  notificationHtml.classList.add('notification');

  notificationHtml.append(title, description);

  notificationHtml.style.top = top + 'px';
  notificationHtml.style.right = right + 'px';

  switch (type.toLowerCase()) {
    case 'success':
      notificationHtml.classList.add('success');
      break;
    case 'warning':
      notificationHtml.classList.add('warning');
      break;
    case 'error':
      notificationHtml.classList.add('error');
  }

  const notificationJs = body.insertAdjacentElement(
    'afterbegin', notificationHtml
  );

  setTimeout(() => {
    notificationJs.style.display = 'none';
  }, 2000);
};

pushNotification(50, 50, h2, p, 'Warning');
