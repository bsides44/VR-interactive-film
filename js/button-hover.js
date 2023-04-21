AFRAME.registerComponent('button-hover', {
  schema: {
    button: {type: 'string', default: '#nextButton'},
  },
    init: function () {
      var button = document.querySelector(this.data.button)
    
      // change colour of button on controller hover 
      button.addEventListener('raycaster-intersected', function () {
        button.setAttribute('scale', '1 0.5 1"');
      })
      button.addEventListener('raycaster-intersected-cleared', function () { 
        button.setAttribute('scale', '0.8 0.4 0.8"');
      })
    },
})