'use strict';

const pushNotification = (top, right, title, description, type) => {
  const banner = document.createElement('div');
  const bannerTitle = document.createElement('h2');
  const bannerText = document.createElement('p');

  bannerTitle.setAttribute('class', 'title');
  bannerTitle.innerText = title;
  bannerText.innerText = description;

  banner.setAttribute('class', `notification ${type}`);
  banner.append(bannerTitle);
  banner.append(bannerText);

  banner.style.top = top + 'px';
  banner.style.right = right + 'px';

  document.body.append(banner);

  setTimeout(() => banner.remove(), 2000);
};

pushNotification(10, 20, 'Some banner',
  'This is example of banner description', 'error');
