const listOfCrypts = [['Bitcoin', 'BTC', '2022', '₽129,861,691,081,863', '₽6,569,045.38', '19 768 731 BTC', '$36 873 629 66', '0,48%'],
    ['Ethereum', 'ETH', '2023', '₽30,923,183,094,653', '₽256,864.03', '120 387 363 ETH *', '$16 969 287 29', '0,74%'],
    ['Tether USDt', 'USDT', '2023', '₽11,694,956,240,894', '₽97.48', '119 973 576 282 USDT *', '$60 999 021 40', '-0,01%'],
    ['BNB', 'BNB', '2009', '₽8,567,876,695,699', '₽58,711.54', '145 931 721 BNB *', '$1 937 416 12', '1,76%'],
    ['Solana', 'SOL', '2017', '₽7,030,219,875,380', '₽14,962.65', '469 851 246 SOL *', '$2 332 689 36', '-0,38%'],
    ['USDC', 'USDC', '2021', '₽3,393,838,391,966', '₽97.49', '34 811 964 931 USDC *', '$6 546 938 83', '-0,01%'],
    ['XRP', 'XRP', '2018', '₽3,103,888,487,482', '₽54.80', '56 645 058 199 XRP *', '$1 245 824 68', '3,94%'],
    ['Dogecoin', 'DOGE', '2014', '₽1,772,433,914,709', '₽12.11', '146 399 666 384 DOGE', '$2 284 767 54', '5,84%'],
    ['TRON', 'TRX', '2018', '₽1,349,662,868,121', '₽15.60', '86 531 028 693 TRX *', '$299 195 98', '0,51%'],
    ['Toncoin', 'TON', '2018', '₽1,289,614,269,002', '₽507.88', '2 539 203 201 TON *', '$161 552 44', '0,07%'],
    ['Cardano', 'ADA', '2010', '₽1,202,645,062,764', '₽34.39', '34 974 248 104 ADA *', '$268 632 17', '-0,63%'],
    ['Avalanche', 'AVAX', '2020', '₽1,103,699,193,892', '₽2,713.77', '406 702 833 AVAX *', '$314 178 30', '0,44%'],
    ['Shiba Inu', 'SHIB', '2020', '₽1,050,444,750,900', '₽0.001783', '589 267 122 310 732 SHIB *', '$572 039 53', '0,70%'],
    ['Bitcoin Cash', 'BCH', '2011', '₽702,300,887,608', '₽35,514.06', '19 775 291 BCH', '$362 432 68', '1,42%'],
    ['Chainlink', 'LINK', '2015', '₽687,162,907,277', '₽1,096.22', '626 849 970 LINK *', '$221 605 21', '-0,13%'],
    ['Polkadot', 'DOT', '2014', '₽632,782,619,300', '₽419.95', '1 506 806 205 DOT *', '$113 555 08', '-1,19%'],
    ['NEAR Protocol', 'NEAR', '2016', '₽585,295,142,254', '₽481.74', '1 214 967 546 NEAR *', '$297 047 10', '-1,70%'],
    ['Sui', 'SUI', '2010', '₽575,903,795,518', '₽208.37', '2 763 841 373 SUI *', '$932 568 92', '4,62%'],
    ['UNUS SED LEO', 'LEO', '2010', '₽550,898,146,005', '₽595.42', '925 218 990 LEO *', '$10 110 44', '-0,02%'],
    ['Dai', 'DAI', '2011', '₽523,021,643,194', '₽97.48', '5 365 382 703 DAI *', '$82 689 10', '-0,02%'],
    ['Litecoin', 'LTC', '2009', '₽518,871,319,897', '₽6,909.84', '75 091 656 LTC', '$392 766 95', '-0,80%'],
    ['Aptos', 'APT', '2019', '₽510,992,596,717', '₽990.49', '515 899 024 APT *', '$284 365 81', '-1,00%'],
    ['Uniswap', 'UNI', '2009', '₽445,042,207,858', '₽741.37', '600 294 744 UNI *', '$143 959 17', '-3,86%'],
    ['Pepe', 'PEPE', '2008', '₽425,846,455,629', '₽0.001012', '420 689 899 999 995 PEPE *', '$896 308 51', '0,35%'],
    ['Bittensor', 'TAO', '2022', '₽415,236,021,654', '₽56,257.91', '7 380 936 TAO *', '$156 950 11', '-7,52%'],
    ['Internet Computer', 'ICP', '2014', '₽363,479,452,532', '₽769.16', '472 565 633 ICP *', '$66 363 82', '-1,49%'],
    ['Artificial Superintelligence Alliance', 'FET', '2011', '₽346,339,224,622', '₽137.44', '2 520 000 000 FET *', '$134 166 54', '-3,62%'],
    ['Kaspa', 'KAS', '2022', '₽312,272,390,071', '₽12.53', '24 931 778 828 KAS', '$33 197 86', '-3,60%'],
    ['Monero', 'XMR', '2021', '₽284,525,422,368', '₽15,424.15', '18 446 744 XMR', '$63 300 00', '2,86%'],
    ['Ethereum Classic', 'ETC', '2022', '₽282,558,496,475', '₽1,894.21', '149 169 331 ETC', '$98 108 09', '0,32%'],
    ['Stellar', 'XLM', '2023', '₽279,444,603,921', '₽9.40', '29 714 440 696 XLM *', '$62 379 12', '3,80%'],
    ['First Digital USD', 'FDUSD', '2013', '₽277,437,576,047', '₽97.42', '2 847 807 369 FDUSD *', '$5 439 980 09', '0,04%'],
    ['POL (ex-MATIC)', 'POL', '2014', '₽273,236,222,017', '₽36.06', '7 577 568 212 POL *', '$65 254 33', '0,03%'],
    ['Render', 'RENDER', '2017', '₽266,849,486,529', '₽515.46', '517 690 747 RENDER *', '$210 478 21', '-3,79%'],
    ['Stacks', 'STX', '2018', '₽265,352,562,846', '₽177.66', '1 493 634 921 STX', '$115 911 93', '-0,35%'],
    ['dogwifhat', 'WIF', '2016', '₽256,762,627,504', '₽257.06', '998 845 374 WIF *', '$498 546 16', '1,54%'],
    ['Immutable', 'IMX', '2022', '₽245,096,205,318', '₽149.65', '1 637 774 045 IMX *', '$38 625 71', '-2,08%'],
    ['OKB', 'OKB', '2017', '₽241,116,031,267', '₽4,018.60', '60 000 000 OKB *', '$2 721 85', '-0,25%'],
    ['Aave', 'AAVE', '2016', '₽227,786,063,834', '₽15,231.01', '14 955 418 AAVE *', '$155 147 27', '0,46%'],
    ['Filecoin', 'FIL', '2019', '₽214,896,610,417', '₽362.83', '592 271 896 FIL', '$99 310 48', '-1,60%'],
    ['Optimism', 'OP', '2021', '₽211,630,035,448', '₽168.62', '1 255 070 491 OP *', '$160 802 79', '-0,28%'],
    ['Fantom', 'FTM', '2011', '₽208,901,515,117', '₽74.51', '2 803 634 836 FTM *', '$196 067 75', '0,55%'],
    ['Mantle', 'MNT', '2010', '₽205,354,981,806', '₽60.99', '3 366 841 708 MNT *', '$70 390 43', '0,49%'],
    ['Cronos', 'CRO', '2011', '₽204,967,965,832', '₽7.71', '26 571 560 696 CRO *', '$6 661 97', '1,68%'],
    ['Injective', 'INJ', '2010', '₽199,026,397,261', '₽2,037.16', '97 698 022 INJ *', '$75 874 54', '-0,72%'],
    ['Arbitrum', 'ARB', '2021', '₽196,771,486,288', '₽54.40', '3 617 088 312 ARB *', '$271 347 31', '-2,92%'],
    ['Hedera', 'HBAR', '2017', '₽193,192,276,920', '₽5.13', '37 665 440 794 HBAR *', '$57 082 71', '-4,99%'],
    ['VeChain', 'VET', '2022', '₽180,627,695,877', '₽2.23', '80 985 041 177 VET *', '$28 559 68', '-1,95%'],
    ['Bonk', 'BONK', '2013', '₽174,948,753,962', '₽0.002361', '74 087 724 727 461 BONK *', '$370 984 14', '8,06%'],
    ['Cosmos', 'ATOM', '2021', '₽168,435,291,277', '₽430.85', '390 934 204 ATOM *', '$80 109 40', '-0,70%'],
    ['THORChain', 'RUNE', '2018', '₽166,093,248,925', '₽492.45', '337 282 001 RUNE *', '$197 880 61', '-2,37%'],
    ['Sei', 'SEI', '2011', '₽162,934,193,860', '₽43.45', '3 749 722 222 SEI *', '$176 815 79', '-1,24%'],
    ['The Graph', 'GRT', '2021', '₽155,235,878,225', '₽16.26', '9 548 531 509 GRT *', '$93 273 08', '-3,38%'],
    ['Bitget Token', 'BGB', '2008', '₽151,478,005,817', '₽108.20', '1 400 000 000 BGB *', '$28 457 44', '-0,07%'],
    ['FLOKI', 'FLOKI', '2011', '₽137,291,916,060', '₽0.0143', '9 599 115 287 779 FLOKI *', '$226 391 62', '1,36%'],
    ['MANTRA', 'OM', '2018', '₽128,021,409,690', '₽150.71', '849 473 306 OM *', '$59 488 63', '-0,96%'],
    ['Theta Network', 'THETA', '2011', '₽125,447,695,828', '₽125.45', '1 000 000 000 THETA *', '$23 196 52', '-2,38%'],
    ['Theta Network', 'THETA', '2017', '₽125,447,695,828', '₽125.45', '1 000 000 000 THETA *', '$23 196 52', '-2,38%']]

let currentList = [];

document.addEventListener("DOMContentLoaded", () => {
    setSortSelects(document.getElementById('sort'))
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
    for (let i in arr) {
        sortSelect.append(createOption(arr[i], Number(i) + 1));
    }
}

let setSortSelects = (dataForm) => {

    let head = ['Наименование','Год','Рыночная капитализацмя','Цена', 'Объем', '%, за 24 часа'];
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
        nextSelect.remove(curSelect.value);
    } else {
        nextSelect.disabled = true;
    }
}