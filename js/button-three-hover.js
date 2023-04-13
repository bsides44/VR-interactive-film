AFRAME.registerComponent('button-three-hover', {
    init: function () {
      var button = document.querySelector("#buttonThree")
      var nextText = document.querySelector("#textThree")
    
      // change colour of button on controller hover 
      button.addEventListener('raycaster-intersected', function () {
        button.setAttribute('material', 'color', 'green');
        nextText.setAttribute('scale', '1.2 1.2 1.2');
      })
      button.addEventListener('raycaster-intersected-cleared', function () { 
        button.setAttribute('material', 'color', 'blue');
        nextText.setAttribute('scale', '1 1 1');
      })
    },
})