Please write below, in your own words, a step-by-step guide to what happens in the To-Do app in its current form, from when the user loads the page, to when they start writing in the input, to when they create a "To-Do" item by clicking the button.

Again, you do not need to write a long essay! Just try to include the **key** steps for the user, and what happens in the App at each step. :-)

---

1. When the site first loads it will render the given data from tasks-Array objects through mapping in our ToDosContainer
2. In the ToDosContainer I have created the functionality of creating new tasks by creating two state-hooks that will fetch the value of and input field, every time there is an change event happening. This value will be stored in the variable "newValue" through the setNewValue-method.
3. Now we are using the fetched value, to build up a new ToDo-element, that I called "SelfCreatedItem" through a map-function in "ToDosContainer".
4. The data will be fetched by the Component "CreateNewTodo" which holds the input field and a button. The data will be fetched by SelfCreatedItems through props.