'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.body;
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  body.append(message);
  message.append(messageTitle);
  message.append(messageDescription);

  message.style.position = 'absolute';
  message.style.maxWidth = '230px';
  message.style.top = top;
  message.style.right = right;
  message.style.backgroundColor = '#F4E5BA';
  message.style.padding = '15px';
  message.style.borderRadius = '10px';

  messageTitle.style.margin = '0';
  messageTitle.style.fontSize = '16px';
  messageTitle.textContent = title;

  messageDescription.textContent = description;
  messageDescription.style.fontSize = '14px';
  messageDescription.style.margin = '15px 0 0 0';
  messageDescription.style.lineHeight = '1.3rem';
};

pushNotification('10px',
  '10px',
  'Title',
  `This is example of result. 
  Notofication should contain title and description.`
);
