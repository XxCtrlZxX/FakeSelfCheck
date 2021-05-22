let date = new Date();
let y = date.getFullYear();
let M = date.getMonth() + 1;
if (M < 10) M = '0' + M;
let d = date.getDate();

let fullDate = y + '-' + M + '-' + d;
console.log(fullDate);

document.getElementById("#date_").innerHTML = fullDate;