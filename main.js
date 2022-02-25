var data = {
  keypressArray: [],
  direction: 'east'
};

var $img = document.querySelector('img');
document.addEventListener('keydown', listenKeys);

function listenKeys(event) {
  if (event.code === 'ArrowRight') {
    data.keypressArray.push('right');
  } else if (event.code === 'ArrowLeft') {
    data.keypressArray.push('left');
  } else if (event.code === 'ArrowUp') {
    data.keypressArray.push('down');
  } else if (event.code === 'ArrowDown') {
    data.keypressArray.push('up');
  }
  turnCar();
}

function turnCar() {
  if ((data.keypressArray.length - 2) === (data.keypressArray.length - 1)) {
    $img.style.transform = 'rotate(360deg)';
  } else {
    $img.style.transform = 'rotate(90deg)';
  }
}
