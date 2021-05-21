function inputHTML(element , data){
    element.innerHTML = data;
    document.body.appendChild(element);
}

var box = document.getElementById('box');
var html = "<tr><td>number</td></tr>";

inputHTML(box,html);