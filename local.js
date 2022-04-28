const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e){

  let addText = this.querySelector('[name="item"]').value;

  const text = {
    text: addText,
    done: false
  };

  items.push(text);
  createChecklist(items);

  e.preventDefault();
  this.reset();

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


addItems.addEventListener('submit', addItem);