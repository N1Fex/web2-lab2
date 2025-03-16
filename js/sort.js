let createSortArr = (data) => {
    let sortArr = [];

    let sortSelects = data.getElementsByTagName('select');

    for (let i = 0; i < sortSelects.length; i++) {
        let keySort = sortSelects[i].value;
        if (keySort == 0) {
            break;
        }

        let desc = document.getElementById(sortSelects[i].id + '-desc').checked;
        sortArr.push(
            {
                column: keySort - 1,
                order: desc
            }
        );
    }
    return sortArr;
};

let sortTable = (idTable, data) => {

    // формируем управляющий массив для сортировки
    let sortArr = createSortArr(data);

    // сортировать таблицу не нужно, во всех полях выбрана опция Нет
    if (sortArr.length === 0) {
        return false;
    }
    //находим нужную таблицу
    let table = document.getElementById(idTable);

    // преобразуем строки таблицы в массив
    let rowData = Array.from(table.rows);
    // удаляем элемент с заголовками таблицы
    rowData.shift();

    //сортируем данные по возрастанию по всем уровням сортировки
    // используется массив sortArr
    rowData.sort((first, second) => {
        for(let i in sortArr) {
            let key = sortArr[i].column;
            let order = sortArr[i].order;

            let firstPar = first.cells[key].innerHTML.toLowerCase();
            let secondPar = second.cells[key].innerHTML.toLowerCase();
            if (isFinite(firstPar)) firstPar = Number(firstPar);
            if (isFinite(secondPar)) secondPar = Number(secondPar);

            if (firstPar > secondPar) {
                return order ? -1 : 1;
            } else if (firstPar < secondPar){
                return order ? 1 : -1;
            }
        }
        return 0;
    });

    updateRows(table, rowData);
    return true;
}

function updateRows(table, arr) {
    let tbody = table.getElementsByTagName("tbody")[0];

    tbody.innerHTML = "";
    arr.forEach(row => tbody.innerHTML += row.innerHTML);
}