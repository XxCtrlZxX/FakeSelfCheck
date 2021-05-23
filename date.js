window.onload = () => {
    let date = new Date();
    let y = date.getFullYear();
    let M = date.getMonth() + 1;
    if (M < 10) M = '0' + M;
    let d = date.getDate();

    document.getElementById("date_").innerHTML = y + '-' + M + '-' + d;
}