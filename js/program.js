const listOfCrypts = [['Bitcoin', 'BTC', 2022, 129861691081863, 6569045.38, 19768731, 3687362966, 0.48],
    ['Ethereum', 'ETH', 2023, 30923183094653, 256864.03, 120387363, 1696928729, 0.74],
    ['Tether USDt', 'USDT', 2023, 11694956240894, 97.48, 119973576282, 6099902140, -0.01],
    ['BNB', 'BNB', 2009, 8567876695699, 58711.54, 145931721, 193741612, 1.76],
    ['Solana', 'SOL', 2017, 7030219875380, 14962.65, 469851246, 233268936, -0.38],
    ['USDC', 'USDC', 2021, 3393838391966, 97.49, 34811964931, 654693883, -0.01],
    ['XRP', 'XRP', 2018, 3103888487482, 54.80, 56645058199, 124582468, 3.94],
    ['Dogecoin', 'DOGE', 2014, 1772433914709, 12.11, 146399666384, 228476754, 5.84],
    ['TRON', 'TRX', 2018, 1349662868121, 15.60, 86531028693, 29919598, 0.51],
    ['Toncoin', 'TON', 2018, 1289614269002, 507.88, 2539203201, 16155244, 0.07],
    ['Cardano', 'ADA', 2010, 1202645062764, 34.39, 34974248104, 26863217, -0.63],
    ['Avalanche', 'AVAX', 2020, 1103699193892, 2713.77, 406702833, 31417830, 0.44],
    ['Shiba Inu', 'SHIB', 2020, 1050444750900, 0.001783, 589267122310732, 57203953, 0.70],
    ['Bitcoin Cash', 'BCH', 2011, 702300887608, 35514.06, 19775291, 36243268, 1.42],
    ['Chainlink', 'LINK', 2015, 687162907277, 1096.22, 626849970, 22160521, -0.13],
    ['Polkadot', 'DOT', 2014, 632782619300, 419.95, 1506806205, 11355508, -1.19],
    ['NEAR Protocol', 'NEAR', 2016, 585295142254, 481.74, 1214967546, 29704710, -1.70],
    ['Sui', 'SUI', 2010, 575903795518, 208.37, 2763841373, 93256892, 4.62],
    ['UNUS SED LEO', 'LEO', 2010, 550898146005, 595.42, 925218990, 1011044, -0.02],
    ['Dai', 'DAI', 2011, 523021643194, 97.48, 5365382703, 8268910, -0.02],
    ['Litecoin', 'LTC', 2009, 518871319897, 6909.84, 75091656, 39276695, -0.80],
    ['Aptos', 'APT', 2019, 510992596717, 990.49, 515899024, 28436581, -1.00],
    ['Uniswap', 'UNI', 2009, 445042207858, 741.37, 600294744, 14395917, -3.86],
    ['Pepe', 'PEPE', 2008, 425846455629, 0.001012, 420689899999995, 89630851, 0.35],
    ['Bittensor', 'TAO', 2022, 415236021654, 56257.91, 7380936, 15695011, -7.52],
    ['Internet Computer', 'ICP', 2014, 363479452532, 769.16, 472565633, 6636382, -1.49],
    ['Artificial Superintelligence Alliance', 'FET', 2011, 346339224622, 137.44, 2520000000, 13416654, -3.62],
    ['Kaspa', 'KAS', 2022, 312272390071, 12.53, 24931778828, 3319786, -3.60],
    ['Monero', 'XMR', 2021, 284525422368, 15424.15, 18446744, 6330000, 2.86],
    ['Ethereum Classic', 'ETC', 2022, 282558496475, 1894.21, 149169331, 9810809, 0.48],
    ['Stellar', 'XLM', 2023, 279444603921, 9.40, 29714440696, 6237912, 3.80],
    ['First Digital USD', 'FDUSD', 2013, 277437576047, 97.42, 2847807369, 543998009, 0.04],
    ['POL (ex-MATIC)', 'POL', 2014, 273236222017, 36.06, 7577568212, 6525433, 0.03],
    ['Render', 'RENDER', 2017, 266849486529, 515.46, 517690747, 21047821, -3.79],
    ['Stacks', 'STX', 2018, 265352562846, 177.66, 1493634921, 11591193, -0.35],
    ['Algorand', 'ALGO', 2019, 250983456123, 25.67, 9786543210, 4567890, 0.25],
    ['VeChain', 'VET', 2018, 242678901234, 9.23, 15098765432, 1234567, -1.10],
    ['Tezos', 'XTZ', 2020, 237654321098, 92.76, 2567890123, 6789012, -2.34],
    ['Theta Network', 'THETA', 2017, 229876543210, 105.78, 2178901234, 456789, 1.23],
    ['EOS', 'EOS', 2018, 217654321098, 15.32, 14234567890, 789012, -0.87],
    ['Hedera', 'HBAR', 2021, 205678901234, 5.67, 36234567890, 678901, 0.98],
    ['Quant', 'QNT', 2019, 198765432109, 130.45, 152345678, 45678, 2.45]]

let currentList = [];

document.addEventListener("DOMContentLoaded", () => {
    let dataForm = document.getElementById('sort');

    buildTbody(listOfCrypts);
    setSortSelects(dataForm);
    let allSelect = dataForm.getElementsByTagName('select');

    for (let i = 0; i < allSelect.length - 1; i++) {
        allSelect[i].addEventListener("change",function() {
            changeNextSelect(allSelect[i+1].id, this);
        });
    }
});

function checkFilterEdits() {
    let yearStartElem = document.getElementById("year-start");
    let yearEndElem = document.getElementById("year-end");
    let priceStartElem = document.getElementById("price-start");
    let priceEndElem = document.getElementById("price-end");

    let yearStart = yearStartElem.value;
    let yearEnd = yearEndElem.value;
    let priceStart = priceStartElem.value;
    let priceEnd = priceEndElem.value;

    let yearSB = yearStart=='' || (!isNaN(yearStart) && isFinite(yearStart));
    let yearEB = yearEnd=='' || (!isNaN(yearEnd) && isFinite(yearEnd));
    let priceSB = priceStart=='' || (!isNaN(priceStart) && isFinite(priceStart));
    let priceEB = priceEnd=='' || (!isNaN(priceEnd) && isFinite(priceEnd));

    if (!yearSB) {
        yearStartElem.classList.add("error");
    } else {
        yearStartElem.classList.remove("error");
    }

    if (!yearEB) {
        yearEndElem.classList.add("error");
    } else {
        yearEndElem.classList.remove("error");
    }

    if (!priceSB) {
        priceStartElem.classList.add("error");
    } else {
        priceStartElem.classList.remove("error");
    }

    if (!priceEB) {
        priceEndElem.classList.add("error");
    } else {
        priceEndElem.classList.remove("error");
    }

    return yearSB && yearEB && priceSB && priceEB;
}

function applyFilter(){

    if (checkFilterEdits()){

        currentList = getFilteredList();
        buildTbody(currentList);

    }
}

function buildTbody(items) {
    let table = document.getElementById("tableCrypto");
    let tbody = table.getElementsByTagName("tbody")[0];

    tbody.innerHTML = "";

    for (let i in items) {
        let row = items[i];
        let tr = document.createElement("tr");
        row.forEach( cell => {
            let td = document.createElement("td");
            td.innerHTML = cell;
            tr.appendChild(td);
        })
        tbody.appendChild(tr);
    }
}

function getFilteredList() {
    let nameInput = document.getElementById("name-input").value;

    let yearStart = document.getElementById("year-start").value;
    let yearEnd = document.getElementById("year-end").value;

    let priceStart = document.getElementById("price-start").value;
    let priceEnd = document.getElementById("price-end").value;

    let list = listOfCrypts.slice();

    if (nameInput !== '') {
        list = list.filter(item => item[0].toLowerCase().indexOf(nameInput.toLowerCase()) !== -1);
    }
    if (yearStart !== '') {
        list = list.filter(item => +item[2] >= +yearStart);
    }
    if (yearEnd !== '') {
        list = list.filter(item => +item[2] <= +yearEnd);
    }
    if (priceStart !== '') {
        list = list.filter(item => parseFloat(item[4].slice(1).replaceAll(",", '')) >= +priceStart);
    }
    if (priceEnd !== '') {
        list = list.filter(item => parseFloat(item[4].slice(1).replaceAll(",", '')) <= +priceEnd);
    }
    return list;
}

let createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}

let setSortSelect = (arr, sortSelect) => {
    sortSelect.append(createOption('Нет', 0));
    let offset = 1;
    for (let i in arr) {
        if (i > 4) offset = 2;
        sortSelect.append(createOption(arr[i], Number(i) + offset));
    }
}

let setSortSelects = (dataForm) => {

    let head = ['Наименование', 'Символ', 'Год','Рыночная капитализация','Цена', 'Объем', '%, за 24 часа'];
    let allSelect = dataForm.getElementsByTagName('select');

    for(let j = 0; j < allSelect.length; j++) {
        setSortSelect(head, allSelect[j]);
        if (j!==0){
            allSelect[j].disabled = true;
        }
    }
}

let changeNextSelect = (nextSelectId, curSelect) => {

    let nextSelect = document.getElementById(nextSelectId);
    nextSelect.disabled = false;

    // в следующем SELECT выводим те же option, что и в текущем
    nextSelect.innerHTML = curSelect.innerHTML;

    // удаляем в следующем SELECT уже выбранную в текущем опцию
    // если это не первая опция - отсутствие сортировки
    if (curSelect.value != 0) {
        nextSelect.remove(curSelect.selectedIndex);
    } else {
        nextSelect.disabled = true;
    }
}

function resetSortForm(dataForm) {
    let allSelect = dataForm.getElementsByTagName('select');

    for(let j = 0; j < allSelect.length; j++) {
        allSelect[j].selectedIndex = 0;
        if (j > 0) allSelect[j].disabled = true;

        let desc = document.getElementById(allSelect[j].id + '-desc');
        desc.checked = false;
    }
}