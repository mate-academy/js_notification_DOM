'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.querySelector('body')
  if (type === 'success') {
    element.insertAdjacentHTML('beforeend',`
    <div class="notification success">
    <h2 class="title">${title}<h2/>
    <p>${description}</p>
    </div>
    `);
  
    const suc = document.querySelector('.success')
    suc.style.top = posTop.toString() + 'px'
    suc.style.right = posRight.toString() + 'px'

  } 
  else if (type === 'error') {
    element.insertAdjacentHTML('beforeend',`
    <div class="notification error">
    <h2 class="title">${title}<h2/>
    <p>${description}</p>
    </div>
    `);
  
    const suc = document.querySelector('.error')
    suc.style.top = posTop.toString() + 'px'
    suc.style.right = posRight.toString() + 'px'

  } else{
    element.insertAdjacentHTML('beforeend',`
    <div class="notification warning">
    <h2 class="title">${title}<h2/>
    <p>${description}</p>
    </div>
    `);
  
    const suc = document.querySelector('.warning')
    suc.style.top = posTop.toString() + 'px'
    suc.style.right = posRight.toString() + 'px'
  }

  setTimeout(()=>{
    const elementForRemove = document.querySelector('.notification')
    elementForRemove.remove()
  }, 2000
  );
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(250, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(460, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
