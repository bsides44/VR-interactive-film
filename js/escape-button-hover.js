AFRAME.registerComponent('escape-button-hover', {
  init: function () {
    var button = document.querySelector("#escapeButton")
    var nextText = document.querySelector("#textTwo")
  
    // change colour of button on controller hover 
    button.addEventListener('raycaster-intersected', function () {
      button.setAttribute('material', 'color', 'red');
      nextText.setAttribute('scale', '1.5 1.5 0');
    })
    button.addEventListener('raycaster-intersected-cleared', function () { 
      button.setAttribute('material', 'color', 'teal');
      nextText.setAttribute('scale', '1 1 1');
    })
  },
})