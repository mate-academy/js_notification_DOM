'use strict';

const pushNotification = (top, right, title, description, type = 'warning') => {
  const body = document.body;
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');
  const showWhile = 2000;
  const showafter = 1000;

  const displayContent = () => {
    body.append(message);
    message.append(messageTitle);
    message.append(messageDescription);
  };

  setTimeout(() => displayContent(), showafter);

  setTimeout(() => {
    message.style.display = 'none';
  }, showafter + showWhile);

  message.classList.add('.notification');
  message.style.position = 'absolute';
  message.style.maxWidth = '230px';
  message.style.top = top;
  message.style.right = right;
  message.style.padding = '15px';
  message.style.borderRadius = '10px';

  type === 'success'
    ? message.style.backgroundColor = '#8BE78C'
    : type === 'error'
      ? message.style.backgroundColor = '#F8655E'
      : message.style.backgroundColor = '#F4E5BA';

  messageTitle.classList.add('.title');
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
  Notofication should contain title and description.`,
  'success');
