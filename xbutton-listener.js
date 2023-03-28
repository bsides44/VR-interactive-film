AFRAME.registerComponent('xbutton-listener', {
  schema: {
    planeVisible: {default: true}
  },
  init: function () {
    this.playNextVideo = this.playNextVideo.bind(this);
    this.tick = this.tick.bind(this);

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
      var videoEl = document.querySelector("#video")
      videoEl.getAttribute('material').src.pause()
      videoEl.object3D.visible = false;

      // make second video appear
      var secVideoEl = document.querySelector("#secondVideo")
      secVideoEl.getAttribute('material').src.play()
      secVideoEl.object3D.visible = true;

      // make first plane disappear
      var planeModel = document.querySelector("#animModel")
      if (planeModel) planeModel.parentNode.removeChild(planeModel);

      // make triangle and animated model disappear
      var triangle = document.querySelector("#nextVideoButton")
      triangle.removeEventListener('click', this.playNextVideo);
      triangle.object3D.visible = false;
      document.querySelector("#nextText").object3D.visible = false;
      
  },
  tick: function () {  
    var videoEl = document.querySelector("#video")
    var triangle = document.querySelector("#nextVideoButton")
    var text = document.querySelector("#nextText")
    var planeModel = document.querySelector("#animModel")
    var currentTime = videoEl.components.material.data.src.currentTime

    // Make 3D model invisible at moments when people "walk in front" of it
    if (planeModel){
     if (currentTime >= 8.3 ) {
      planeModel.object3D.visible = false;
    }
    if (currentTime >= 9.61 ) {
      planeModel.object3D.visible = true;
    }
    if (currentTime >= 19  && this.data.planeVisible) {
      planeModel.object3D.visible = false;
    }
  }

    // Make triangle button appear when video playback is at 5 of 23 seconds
    if (videoEl && currentTime >= 5) {
        triangle.object3D.visible = true;
        text.object3D.visible = true;
    }

    // autoplay next video at end of first video
    if (videoEl && currentTime >= 23) {
      this.playNextVideo()
  }
}
})