let size = 4;
const container = document.querySelector('#container');
container.style.display = 'grid';
container.style.border = 'solid';

const configure = document.querySelector('#configure');
configure.addEventListener('click', (e) => {
  const spaces = document.querySelectorAll('.gridspace');
  spaces.forEach((space) => {
    container.removeChild(space);
  });
  size = prompt("How many squares?");
  container.style['grid-template-columns'] = `repeat(${size}, auto)`;
  for(let i = 0; i < size * size; i++){
    var div = document.createElement('div');
    div.className = 'gridspace';
    div.style.height = `${750 / size}px`;
    div.addEventListener("mouseenter", function(event) {
      event.target.style['background-color'] = "blue";
    });
    container.appendChild(div);
  }
});


