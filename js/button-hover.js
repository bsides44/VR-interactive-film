AFRAME.registerComponent('button-hover', {
    init: function () {
      var triangle = document.querySelector("#nextVideoButton")
      var nextText = document.querySelector("#nextText")
    
      // change colour of button on controller hover 
      triangle.addEventListener('raycaster-intersected', function () {
        triangle.setAttribute('material', 'color', 'green');
        nextText.setAttribute('color', 'green');
      })
      triangle.addEventListener('raycaster-intersected-cleared', function () { 
        triangle.setAttribute('material', 'color', 'blue');
        nextText.setAttribute('color', 'black');
      })
    },
})