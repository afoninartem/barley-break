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

document.querySelector('.gem-puzzle').append(generatePlayingField()); //отрисовка таблицы и размещение её в нужном диве

const field = document.querySelector('.table-bordered');



field.onclick = function(e) {
  let target = e.target;
  let targetX = target.cellIndex;
  let targetY = target.parentElement.rowIndex;
  let empty = document.querySelector('.table-active');
  let emptyX = empty.cellIndex;
  let emptyY = empty.parentElement.rowIndex;
  const mutate = () => {
    empty.innerHTML = target.innerHTML;
    empty.classList.remove('table-active');
    target.innerHTML = '';
    target.classList.add('table-active');
  }
  if (targetY === emptyY) {
    if (targetX - emptyX === -1) {
      mutate();
    } else if (targetX - emptyX === 1) {
      mutate();
    }
  }
  if (targetX === emptyX) {
    if (targetY - emptyY === -1) {
      mutate();
    } else if (targetY - emptyY === 1) {
      mutate();
    }
  }
}
