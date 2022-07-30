function addItem() {
    const itemBox = document.getElementById('ul');
    const item = document.createElement('li');
    const valuta = document.querySelectorAll('input')[1].value;

    item.id = 'itemBox';
    item.className = 'itemBoxStyle';

    item.appendChild(document.createTextNode(`${valuta}`));
    itemBox.appendChild(item);
}