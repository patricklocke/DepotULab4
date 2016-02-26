
var btn = document.createElement('button');

document.addEventListener('DOMContentLoaded', function () {
    btn.style.color = 'white';
    btn.style.backgroundColor = 'black';
    btn.style.marginBottom = "15px";
    btn.style.position = 'fixed';
    var text = document.createTextNode("Moar Boxes");
    btn.appendChild(text);
    document.body.appendChild(btn);
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
    newBox.id = markers.length;
    document.body.appendChild(newBox);
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
// supposed to remove box to left if odd, right if even (could be backwards)
// currently broken for even numbers
    newBox.ondblclick = function remove() {
        var choice = parseInt(newBox.id);
        if (choice % 2 === 1) {
            var removeBox = (choice - 1)
            var reBox = removeBox.toString();
            var child = document.getElementById(reBox);
            child.parentNode.removeChild(child);
        }
        else {
            
            var removeEven = (choice + 1)
            var reEven = removeEven.toString();
            var evenchild = document.getElementById(reEven);
            evenchild.parentNode.removeChild(evenchild);
        }
        
    }
  
}   
