const values = [9, 6, 13, 11, 2, 15, 14, 8, 12, 10, 5, 4, 7, 1, 3];

const generatePlayingField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 4; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 4; j += 1) {
      const cell = row.insertCell();
      cell.className = 'p-3';
      if (i === 3 && j === 3) {
        cell.classList.add('table-active');
      } else {
        cell.textContent = values[i + (j * 4)];
      }
    }
  }
  return tableEl;
};

// let div = document.querySelector('.gem-puzzle');
// const tab = generatePlayingField();
// div.append(tab);
// the same in 1 line:
document.querySelector('.gem-puzzle').append(generatePlayingField());
const field = document.querySelector('.table-bordered');
field.onclick = function(e) {
    let target = e.target;
    // console.log(target.cellIndex);
    // console.log(target.parentElement.previousElementSibling.children);
    let prevSib = target.parentElement.previousElementSibling.children;
    prevSib = [...prevSib];
    console.log(element.cellIndex);
    prevSib.forEach(element => {
        if (element.classList.contains('table-active') && element.cellIndex === targetValue.cellIndex) {
            const empty = document.querySelector('.table-active');
            empty.innerHTML = targetValue;
            empty.classList.toggle('table-active');
            target.classList.add('table-active');
            target.innerHTML = '';
        }
    });
    const targetValue = target.innerHTML;
    const targetCell = target.cellIndex;
    const targetRow = target.rowIndex;  
    // console.log(target.nextElementSibling.classList);
    if (target.nextElementSibling.classList.contains('table-active') ||
        target.previousElementSibling.classList.contains('table-active')) { //дописать сюда условия для верх/низ
        const empty = document.querySelector('.table-active');
        empty.innerHTML = targetValue;
        empty.classList.toggle('table-active');
        target.classList.add('table-active');
        target.innerHTML = '';
    } 

}
