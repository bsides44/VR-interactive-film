AFRAME.registerComponent('button-hover', {
  schema: {
    button: {type: 'string', default: '#nextButton'},
    text: {type: 'string', default: '#nextText'}
  },
    init: function () {
      var button = document.querySelector(this.data.button)
      var text = document.querySelector(this.data.text)
    
      // change colour of button on controller hover 
      button.addEventListener('raycaster-intersected', function () {
        button.setAttribute('material', 'color', 'green');
        text.setAttribute('scale', '1.2 1.2 1.2');
      })
      button.addEventListener('raycaster-intersected-cleared', function () { 
        button.setAttribute('material', 'color', 'blue');
        text.setAttribute('scale', '1 1 1');
      })
    },
})