// Belajar DOM
document.title = `Nura Syah Ilma`
const body = document.body


// Jika menggunakan id ketika pemanggilanya menggunakan "#"
const btn1 = document.getElementById('btn1');
// Jika menggunakan class ketika pemanggilanya menggunakan "."
const btn2 = document.querySelector('.btn2');
let defaultText = "Klik Cuy";
btn1.textContent = defaultText;

function clickButton() {
    btn1.style.background = 'aqua';
    const newText = document.createElement('p');
    newText.textContent = 'Hallo Apa kabar cuy';
    body.append(newText);
}
function ubahText() {
    btn1.textContent = 'uhuuy bisa berubah';
}

function oriText() {
    btn1.textContent;
}
btn1.style.border = 'none';
btn1.style.padding = '8px';
btn1.style.background = 'green';
btn1.style.fontSize = '10px';
btn1.style.color = 'white';