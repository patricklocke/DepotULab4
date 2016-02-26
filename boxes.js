
var btn = document.createElement('button');

document.addEventListener('DOMContentLoaded', function() {
    // var btn = document.createElement('button');
    btn.style.color= 'white';
    btn.style.backgroundColor = 'black';
    btn.style.marginBottom = "15px";
    btn.style.position = 'fixed';
    var text = document.createTextNode("Moar Boxes");
    btn.appendChild(text);
    document.body.appendChild(btn);
});
     
// var markers = document.getElementsByClassName('mark');
//     for (var i; i < markers.length; i++) {
//         markers[i].addEventListener('click', boxCount);
//     }
//     function boxCount(event) {
//         console.log(event.id);
//     }

btn.onclick = function boxes() {
    var markers = document.getElementsByClassName('mark');
    var newBox = document.createElement('div');
    newBox.style.height = "75px";
    newBox.style.width = "75px";
    newBox.style.backgroundColor = "black";
    newBox.style.padding = "15px 15px";
    newBox.style.cssFloat = "left";
    newBox.style.marginRight = "5px";
    newBox.style.marginTop = '35px';
    newBox.className='mark';
    newBox.id = markers.length;
    document.body.appendChild(newBox);

newBox.onmouseover = function reveal() { 
var para = document.createElement('p');
var text = document.createTextNode(newBox.id);
para.style.color = 'white';
para.style.textAlign = 'center';
para.style.fontSize = '20px';
para.style.paddingBottom = '25px';
para.appendChild(text);
newBox.appendChild(para);
}
newBox.onclick = function color() {
    var colorArray = ['red', 'blue', 'green', 'orange', 'yellow', 'purple', 'pink', 'gray', 'lime' ];
    newBox.style.backgroundColor = colorArray[Math.floor((Math.random() * colorArray.length))];
}

newBox.ondblclick = function remove () {
    var choice = parseInt(newBox.id);
    if (choice % 2 === 1) {
        var removeBox = (choice- 1)
        var reBox = removeBox.toString();
        var child = document.getElementById(reBox);
        child.parentNode.removeChild(child);
    } 
    else {
        var removeEven = (choice - 1)
        var reEven = removeEven.toString();
        var evenchild = document.getElementById(reEven);
        evenchild.parentNode.removeChild(child);
    }
    
    
}
//  Math.floor((Math.random() * 100) + 1);
}   


// var para = document.createElement('p');
// var text = document.createTextNode(newBox.id);
// para.style.color = 'white';
// para.appendChild(text);
// newBox.appendChild(para);



     // newBox.onmouseover = function display(i) {
    //     t.color= 'white';
    // }

 // var paras = docuemnt.getElementsByClassName('thing');
    // for (var i , i < paras.length; i++) {
    //     paras[i].addEventListener('click', someFunc);
    // }
   
    //    someFunc(e) {
    //        console.log(e.target.id);
    //    }
       
       
    //    var boxyArray = document.createElement('div');
    //    boxyArray.className = 'thing';
    //    document.body.appendChild(boxyArray);
    
    



