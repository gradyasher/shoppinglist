// make sure existing code lines up w html/css files
// make the check button put a line thru text
// make the remove button remove the item


var state = {
	items: [{
    
      'name': 'cheese',
      'checked': false
  }]
};

function addItem(state, name) {
  var item = {
    name: name,
    checked: false
  }
	state.items.push(item);
};

function renderList(state, element) {
  var itemsHTML = state.items.map(function(item, index) {
    return `<li data-id=${index}><span class="shopping-item"> ${item.name} </span><div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
  });
  element.html(itemsHTML);
};

var renderList = function (state, element) {
  var itemsHTML = state.items.map(function (item, index) {
    if (item.checked === false) {
      return `<li data-id=${index}><span class="shopping-item">${item.name}</span>
                <div class="shopping-item-controls">
                  <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                  </button> 
                  <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                  </button>
                </div>
              </li>`;
    } else {
      return `<li data-id=${index}><span class="shopping-item shopping-item__checked">${item.name}</span>
                <div class="shopping-item-controls">
                  <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                  </button> 
                  <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                  </button>
                </div>
              </li>`;
    }
  });
  element.html(itemsHTML);
};

function deleteItem(state, id) {
  state.items.splice(id, 1)
}


function checker(state, item){
  if(state.items[item].checked === false){
    state.items[item].checked = true;
  }
  else {
    state.items[item].checked = false;
  }
}

$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

// renderList(state, $('.shopping-list'));

$('.shopping-list').on('click', '.shopping-item-delete', function(event){
    event.preventDefault();
    var id = $(this).closest('li').data('id')
    deleteItem(state, id);
    renderList(state, $('.shopping-list'));
})

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    event.preventDefault();
    var itemId = $(this.closest('li')).attr('data-id');
    // var currentItem = getStateItem(state, itemId);
    checker(state, itemId);
    renderList(state, $('.shopping-list'))
    // console.log(state.items[itemId].checked)
})




