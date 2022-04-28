# Building the Intuition -

1. Add the submit event listenter on the addItems form, pass in the function
2. Pass in the e in the callback function and use ```e.preventDefault``` to prevent the page from refreshing upon submission
3. select the input item value and create an object
	```const item = { text: text, done: false}```
4. push the item object into the array & reset the form
5. Create a function to populate the list items with 2 params ```poplulateList(plates=[], platesList)```
6. set the platesList to the plates.map function returning the html ```li```, using ```join(' ')```
7. map with the plate and i params