const cube = document.querySelector('.cube');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {

  console.log(e);
  

  yDeg = e.clientX;
  zdeg = e.clientY;

  cube.style.transform = 'rotateY(' + yDeg + 'deg) rotateZ(' + zdeg + 'deg) ' ;
  cube.style.animation = 'none';

  
});

