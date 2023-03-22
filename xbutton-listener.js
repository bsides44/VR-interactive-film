AFRAME.registerComponent('xbutton-listener', {
  init: function () {
    var videoEl = document.querySelector("#video")
    var triangle = document.querySelector("#nextVideoButton")
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];

    window.addEventListener('xbuttondown', function() {
      videoEl.getAttribute('material').src.play()
      document.querySelector("#debugger").object3D.visible = false;
    } )
    window.addEventListener('abuttondown', function() {
      videoEl.getAttribute('material').src.play()
      document.querySelector("#debugger").object3D.visible = false;
    } )
    window.addEventListener('triggerdown', function() {
      videoEl.getAttribute('material').src.play()
      document.querySelector("#debugger").object3D.visible = false;
    } )
    window.addEventListener('gripdown', function() {
      videoEl.getAttribute('material').src.play()
      document.querySelector("#debugger").object3D.visible = false;
    } )

    triangle.addEventListener('click', function (evt) {
      // change colour of button on click 
      lastIndex = (lastIndex + 1) % COLORS.length;
      triangle.setAttribute('material', 'color', COLORS[lastIndex]);

      // hide video 
     videoEl.object3D.visible = false;

      // make second video appear
      var secVideoEl = document.querySelector("#secondVideo")
      secVideoEl.object3D.visible = true;
      secVideoEl.getAttribute('material').src.play()
    });
  },
  tick: function () {  
    // Make triangle button visible when video playback is at 20 seconds
    var videoEl = document.querySelector("#video")
    var triangle = document.querySelector("#nextVideoButton")
    var text = document.querySelector("#nextText")

    if (videoEl.components.material.data.src.currentTime >= 5) {
        triangle.object3D.visible = true;
        text.object3D.visible = true;
    }
}
})