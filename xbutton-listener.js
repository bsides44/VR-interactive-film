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

    // change colour of button on hover 
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

    // Make 3D model invisible when chacters walk 'in front' of it
    if (videoEl.components.material.data.src.currentTime >= 7.5 && videoEl.components.material.data.src.currentTime <= 9.6) {
        document.querySelector("#animModel").object3D.visible = false;
    }
    if (videoEl.components.material.data.src.currentTime >= 20.3 && videoEl.components.material.data.src.currentTime <= 20.8) {
      document.querySelector("#animModel").object3D.visible = false;
    }
    if (videoEl.components.material.data.src.currentTime >= 9.6 && videoEl.components.material.data.src.currentTime <= 20.3 || videoEl.components.material.data.src.currentTime >= 20.8 ) {
      document.querySelector("#animModel").object3D.visible = true;
    }

    // Make triangle button appear when video playback is at 5 of 23 seconds
    if (videoEl.components.material.data.src.currentTime >= 5) {
        triangle.object3D.visible = true;
        text.object3D.visible = true;
    }

    // autoplay next video at end of first video
    if (videoEl.components.material.data.src.currentTime >= 23) {
      this.playNextVideo()
  }
}
})