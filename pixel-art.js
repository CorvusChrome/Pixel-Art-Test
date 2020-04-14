let canvas = document.getElementsByClassName('canvas')[0];
for (var q = 1; q < 45; q++) {
  for (var w = 1; w < 80; w++) {
    var myDiv = document.createElement('div');
    myDiv.classList.add('qwe');
    myDiv.style.gridColumn = q;
    myDiv.style.gridRow = w;
    canvas.appendChild(myDiv);
  }
}

let color = '';
function qwe(q) {
  color = document.getElementsByClassName(q)[0].style.backgroundColor;
}

const divs = document.getElementsByClassName('qwe');

for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function (e) {
    e.target.style.backgroundColor = color;
  }
}



function randomColor() {
  const rndCol = 'rgb(' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256)
    + ')';
  return rndCol;
}

function circle() {

  for (var q = 10; q < 21; q++) {
    for (var w = 10; w < 20; w++) {
      let c = q * 79 + 10; let c1 = q * 79 + 20;
      let d = q + 79 * 10; let d1 = q + 79 * 20;
      divs[d].style.backgroundColor = randomColor(); 
      divs[d1].style.backgroundColor = randomColor();
      divs[c].style.backgroundColor = randomColor();
      divs[c1].style.backgroundColor = randomColor();

    }
  }

}


