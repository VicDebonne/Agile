var items = [];

function guardarNumeros(){
 boxvalue = document.getElementById('box').value;
 items.push(boxvalue);
 console.log(items);
 return false;
}
