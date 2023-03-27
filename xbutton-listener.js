AFRAME.registerComponent('xbutton-listener', {
  init: function () {
    var videoEl = document.querySelector("#video")
    var triangle = document.querySelector("#nextVideoButton")
    var text = document.querySelector("#nextText")

    // play movie on controller button push 
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

    // change colour of button on controller hover 
    triangle.addEventListener('raycaster-intersected', function () {
      triangle.setAttribute('material', 'color', 'green');
      text.setAttribute('color', 'green');
    })
    triangle.addEventListener('raycaster-intersected-cleared', function () { 
      triangle.setAttribute('material', 'color', 'blue');
      text.setAttribute('color', 'black');
    })

    triangle.addEventListener('click', this.playNextVideo);
  },
  playNextVideo: function() {
      // hide video 
      document.querySelector("#video").object3D.visible = false;

      // make second video appear
      var secVideoEl = document.querySelector("#secondVideo")
      secVideoEl.getAttribute('material').src.play()
      secVideoEl.object3D.visible = true;

      // make triangle and animated model disappear
      document.querySelector("#nextVideoButton").object3D.visible = false;
      document.querySelector("#nextText").object3D.visible = false;
      document.querySelector("#animModel").object3D.visible = false;
  },
  tick: function () {  
    var videoEl = document.querySelector("#video")
    var triangle = document.querySelector("#nextVideoButton")
    var text = document.querySelector("#nextText")
    var meModel = document.querySelector("#animModel")
    var currentTime = videoEl.components.material.data.src.currentTime

    // Make 3D model invisible when chacters walk 'in front' of it
    if (currentTime >= 0.6 && currentTime <= 1.2) {
        meModel.object3D.visible = false;
     }
    if (currentTime >= 7.3 && currentTime <= 9.5) {
       meModel.object3D.visible = false;
    }
    if (currentTime >= 20.1 && currentTime <= 20.8) {
        meModel.object3D.visible = false;
    }
    if (currentTime >= 1.3 || currentTime >= 9.6 && currentTime <= 20 || currentTime >= 20.9 ) {
        meModel.object3D.visible = true;
    }

    // Make triangle button appear when video playback is at 5 of 23 seconds
    if (currentTime >= 5) {
        triangle.object3D.visible = true;
        text.object3D.visible = true;
    }

    // autoplay next video at end of first video
    if (currentTime >= 23) {
      this.playNextVideo()
  }
}
})