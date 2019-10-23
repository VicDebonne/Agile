var items = [];

function guardarNumeros(){
 boxvalue = document.getElementById('box').value;
 items.push(boxvalue);
 console.log(items);
 return false;
}

{
  let quotes = [];

  const init = () => {
    const $addbutton = document.querySelector(`.addbutton`);
    $addbutton.onclick = () => getValue();
  };

  const getValue = () => {
    const $invoerveld = document.querySelector(`.invoerveld`);
    const invoer = $invoerveld.value;

    quotes.push(invoer);
    showResult(quotes);
  };

  const showResult = result => {
    const $resultfield = document.querySelector(`.result`);
    $resultfield.textContent = result;
  };

  init();
}
