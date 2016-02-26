
var btn = document.createElement('button');
// Create a button labeled "Moar Boxes" on page load
document.addEventListener('DOMContentLoaded', function () {
    btn.style.color = 'white';
    btn.style.backgroundColor = 'black';
    btn.style.marginBottom = "15px";
    btn.style.position = 'fixed';
    btn.id = "button";
    var text = document.createTextNode("Moar Boxes");
    btn.appendChild(text);
    document.body.appendChild(btn);
    var container = document.createElement('div');
    container.id = 'bucket'
    document.body.appendChild(container);
});
//Create boxes on click
btn.onclick = function boxes() {
    var markers = document.getElementsByClassName('mark');
    var newBox = document.createElement('div');
    newBox.style.height = "150px";
    newBox.style.width = "150px";
    newBox.style.backgroundColor = "black";
    newBox.style.padding = "15px 15px";
    newBox.style.cssFloat = "left";
    newBox.style.marginRight = "5px";
    newBox.style.marginTop = '35px';
    newBox.className = 'mark';
    newBox.id = String(markers.length);
    document.getElementById('bucket').appendChild(newBox);
// change box on mouseover to reveal ID number
    newBox.onmouseover = function reveal() {
        var para = document.createElement('p');
        var text = document.createTextNode(newBox.id);
        para.style.color = 'white';
        para.style.textAlign = 'center';
        para.style.fontSize = '25px';
        para.style.paddingBottom = '100px';
        para.style.paddingTop = "40px";
        para.appendChild(text);
        newBox.appendChild(para);
    }
// change box color on single click
    newBox.onclick = function color() {
        var colorArray = ['red', 'blue', 'green', 'orange', 'yellow', 'purple', 'pink', 'gray', 'lime'];
        newBox.style.backgroundColor = colorArray[Math.floor((Math.random() * colorArray.length))];
    }
// on Double click, remove previous element if  Odd, remove next element if even
    newBox.ondblclick = function remove() {
        var choice = parseInt(newBox.id);
        if (choice % 2 == 1) {
            var removeBox = choice
            var reBox = removeBox.toString();
            var child = document.getElementById(reBox).previousElementSibling;
            child.parentNode.removeChild(child);
        }
        else {
            var removeEven = choice
            var reEven = removeEven.toString();
            var evenchild = document.getElementById(reEven).nextElementSibling;
            evenchild.parentNode.removeChild(evenchild);
        }
    }
// if on double click the element selected to be removed does not exists, show error message
    window.onerror = function () {
        alert("You can't do that!");
    }
}
   
