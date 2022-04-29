const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('item')) || [];

function addItem(e){

  e.preventDefault();
  let addText = this.querySelector('[name="item"]').value;

  const text = {
    text: addText,
    done: false
  };

  items.push(text);
  createChecklist(items);
  
  this.reset();
  localStorage.setItem('item', JSON.stringify(items));
}

function createChecklist(plates=[],platesList ){
  itemsList.innerHTML = items.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" id="item${i}" data-index=${i} ${plate.done ? "checked" : " "}>
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('');
}

function toggleDone(e){
  if(!e.target.matches('input')) return; // only takes the input element not the lable
  const el = e.target;
  const index = el.dataset.index; //check the array item index
  items[index].done = !items[index].done; // reverse it due to the click
  localStorage.setItem('item', JSON.stringify(items));
  createChecklist(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
createChecklist(items, itemsList);