//task 1

// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера)
// Створити массив обєктів bank в якому є обєкет в якому є ключі buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua)
// Створити функцію яка опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження

userWallet = {
    amountUsa: prompt("USA"),
    amountEuro: prompt("Euro"),
    amountUa: prompt("Ua")
}

bank =   { 
    buy: [parseInt(userWallet.amountUsa), parseInt(userWallet.amountEuro), parseInt(userWallet.amountUa)],
    sell: [parseInt(userWallet.amountUsa), parseInt(userWallet.amountEuro), parseInt(userWallet.amountUa)],
    name: ["usa", "euro", "ua"]

}


function convert(item,names) {
    let usa = item[0];
    let Euro = item[1]/0.98;
    let Ua = item[2]/36;
    let resUsa = Math.round(usa + Euro + Ua) + names[0] ;
    if(item[0] == 0 && item[1] < 0.98 && item[2]<36 ){
        return "неможливо здійснити покупку"
    }
    else {
        return resUsa
    }
}
console.log(convert(bank.buy,bank.name))

function saves(item,names) {
    let usa = item[0]*36;
    let Euro = item[1]*35;
    let Ua = item[2];
    let res = Math.round(usa + Euro + Ua) + names[2];
    return res;
}
console.log(saves(bank.sell,bank.name))

//task2 

// 2)Створити функцію move(яка повертає на скільки кроків змістився користувач ). Створити функцію moveUser яка отримує напрямок переміщення і функцію move як колбек. 
// moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)

function move() {
    let steps = prompt("Введіть кількість кроків");
    return steps
}


function moveUser(callback) {
    let direction = prompt("Виберіть напрямок");
    switch (direction) {
        case "north":
            direction = "північ";
            break
        case "south":
            direction = "південь";
            break
        case "west":
            direction = "захід";
            break
        case "east":
            direction = "схід";
            break
    }
    return "Юзер перемістився на " + direction + " на " + callback() + " кроків"
}
console.log(moveUser(move))

//task3

//3) Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву

let array = ["Keep", "Remove", "Keep", "Remove", "Keep"];
if (array.length == 0) {
    console.log("error");
}
else {
    array.forEach((element, index) => {
        array.splice(index+1, 1)
        
    });
    console.log(array)
}

//task4

//4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,

let figurs = [
    {
        figure:"circle",
        radius: 10
    },
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]

function sqr(obj) {
    obj0 = obj[0];
    let resCircle = Math.PI*(Math.pow(obj0.radius,2));
    obj1 = obj[1];
    let resSqr = obj1.sizeA * obj1.sizeB;
    obj2 = obj[2];
    let resRec = obj2.sizeA * obj2.sizeB;
    return resCircle + "   " + resSqr + "  " + resRec;
}
console.log(sqr(figurs))

//task5

//5) Свторити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4

let newArr = [2,3,5,4,8,7,9,10];
let newArr1 = newArr.map((num) => num*4);
console.log(newArr, newArr1)

//task6

//6) Створити функцію яка округлює значення массива в більшу сторону [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02]

let arrRound = [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02];

function round(round) {
    for(let i = 0; i<round.length; i++) {
        round[i] = Math.round(round[i])
    }
    return round;
}

console.log(round(arrRound));

//task7

//7)Створити функцію яка повертає массив довжиною 10 в якому всі значення random від 0 до 100

let arrRandom =  [];
function random(arr) {
    arr = new Array(10);
    for(let i = 0; i<arr.length; i++) {
        arr[i] = (Math.ceil(Math.random()*100));
    }
    return arr
}
console.log(random(arrRandom));