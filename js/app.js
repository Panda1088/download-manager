var convertBTN = document.querySelector('.convertBTN')
var URLinput = document.querySelector('.URL-input')

convertBTN.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}


