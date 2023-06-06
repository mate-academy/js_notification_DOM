'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.querySelector('h1');

  element.style.display = 'flex';
  element.style.flexDirection = 'column';

  const elementParent = document.querySelector('body');

  elementParent.style.position = 'relative';

  const successElement = document.createElement('div');

  successElement.classList.add('notification-success');

  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.textContent = titleChange(title);
  successElement.appendChild(titleEl);

  function titleChange(content) {
    let lower = '';

    for (let i = 0; i < content.length; i++) {
      if (i === 0 || i === 9) {
        lower += content[i].toUpperCase();
      } else {
        lower += content[i];
      }
    }

    return lower;
  }

  const paragraph = document.createElement('p');

  paragraph.classList.add('description');
  paragraph.textContent = description;
  successElement.appendChild(paragraph);

  element.appendChild(successElement);

  successElement.style.position = 'absolute';
  successElement.style.width = '200px';
  successElement.style.marginBottom = '10px';
  successElement.style.fontSize = '10px';
  successElement.style.color = 'black';
  successElement.style.borderRadius = '15px';
  successElement.style.padding = '12px';

  if (type === 'success') {
    successElement.style.top = `${posTop}px`;
    successElement.style.right = `${posRight}px`;
    successElement.style.backgroundColor = 'green';
  }

  if (type === 'error') {
    successElement.style.top = `${posTop}px`;
    successElement.style.right = `${posRight}px`;
    successElement.style.backgroundColor = 'red';
  }

  if (type === 'warning') {
    successElement.style.top = `${posTop}px`;
    successElement.style.right = `${posRight}px`;
    successElement.style.backgroundColor = 'yellow';
  }
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
