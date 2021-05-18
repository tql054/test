var inputElement = document.querySelector('input[type="text"]');
var liElements = document.querySelectorAll('li');
for(var i = 0; i < liElements.length; i++) {
    liElements[i].onclick = function(e) {
        inputElement.value = e.target.innerText;
    }
}