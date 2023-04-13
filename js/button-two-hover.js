AFRAME.registerComponent('button-two-hover', {
  init: function () {
    var button = document.querySelector("#buttonTwo")
    var nextText = document.querySelector("#textTwo")
  
    // change colour of button on controller hover 
    button.addEventListener('raycaster-intersected', function () {
      button.setAttribute('material', 'color', 'green');
      nextText.setAttribute('scale', '1.2 1.2 1.2');
    })
    button.addEventListener('raycaster-intersected-cleared', function () { 
      button.setAttribute('material', 'color', 'red');
      nextText.setAttribute('scale', '1 1 1');
    })
  },
})