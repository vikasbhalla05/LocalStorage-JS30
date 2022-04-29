# Building the Intuition -

1. Add the submit event listenter on the addItems form, pass in the function
2. Pass in the e in the callback function and use ```e.preventDefault``` to prevent the page from refreshing upon submission
3. select the input item value and create an object
	```const item = { text: text, done: false}```
4. push the item object into the array & reset the form
5. Create a function to populate the list items with 2 params ```poplulateList(plates=[], platesList)```
6. set the platesList to the plates.map function returning the html ```li```, using ```join(' ')```
7. map with the plate and i params
8. Use the localStorage to use the browser storage
	with ```localStorage.setItem('item', JSON.stringify(item))``` or ```.getItem``` & ```.removeItem```
9. change the items array to getItem from localStorage with JSON.parse || []
10. populate list after every submit
11. We can't listen for the click event on the checkboxex because they are populated every time.
12. Event Deligation is to attach event to the parents of the element for which we have to listen event for /  the negligent children
13. Run toggle function for the items list
	- ```if(!e.target.matches('input')) return;``` // only takes the input element not the lable
	- ```const index = el.dataset.index;``` //check the array item index
	- ```items[index].done = !items[index].done;``` // reverse it due to the click
	- setItem to the localStorage
	- createChecklist again