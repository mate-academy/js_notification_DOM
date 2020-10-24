/* eslint-disable quotes */
"use strict";

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement("div");
  const header = document.createElement("h2");
  const content = document.createElement("p");
  const body = document.body;

  header.innerText = title;
  header.className = "title";
  content.innerText = description;
  notification.append(header);
  notification.append(content);
  notification.style.right = `${right}px`;
  notification.style.top = `${top}px`;
  notification.className = `notification ${type}`;
  body.prepend(notification);

  setTimeout(() => body.removeChild(notification), 2000);
};

pushNotification(50, 100, "Title", "description", "success");
