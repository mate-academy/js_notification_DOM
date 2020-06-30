### Task: Create a notification

To inform the user about the success of the operation, or any errors, websites usually use messages that appear for a while on the screen.

Your task: Create function function `pushNotification`, which takes coords of future message, title, description and type (warning, success or error), appends it to the document and remove it after 2 seconds.
You no need to write any styles or HTML code in this task. Change only `main.js` file.

Implementation tips:
- The message is block element with class `notification` + class which depends on the input parameter type (`success`, `error`, `warning`). 
- The message should have a title with class `title` (prefer `h2` element)
- The message should have description (prefer tag `p`)
- Set coordinates of the message (top and right) rely on values from parameters.

Hint: use [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) for execute a function or specified piece of code once the timer expires.

It's an expected result of your job:
![Result](./src/images/result.png)
