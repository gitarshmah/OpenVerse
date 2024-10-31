
const itemdiv = document.getElementById('items')

function additems(){
      
      var input_item = document.getElementById('inputitem').value
      const newdiv = document.createElement('div')
      const newbutton = document.createElement('button')
      
      newbutton.onclick = function() {
            deleteitems(newdiv); 
      };
      newbutton.innerHTML = 'Delete'
      const newitem = document.createElement('li')
      const newitemtext = document.createTextNode(input_item)
      newitem.appendChild(newitemtext)
      newitem.insertAdjacentElement('afterend', newbutton)
      newdiv.appendChild(newitem)
      newdiv.appendChild(newbutton)
      itemdiv.appendChild(newdiv)
      
      document.getElementById('inputitem').value = '';
      
}

function deleteitems(itemdiv){
            itemdiv.remove();
            console.log("Item deleted.");
        }

