'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const elementBlock = document.createElement('div');
  const elementDesc = document.createElement('p');
  const elementTitle = document.createElement('h2');

  const classBlock = 'notification ' + type;
  const classtTitle = 'title';

  elementDesc.textContent = description;
  elementTitle.textContent = title;
  elementBlock.setAttribute('class', classBlock);
  elementTitle.setAttribute('class', classtTitle);
  elementBlock.style.top = posTop + 'px';
  elementBlock.style.right = posRight + 'px';
  elementBlock.append(elementTitle);
  elementBlock.append(elementDesc);
  document.getElementsByTagName('body')[0].append(elementBlock);

  setTimeout(() => {
    document.getElementsByClassName(type)[0].style.visibility = 'hidden';
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
