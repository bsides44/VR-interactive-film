AFRAME.registerComponent('xbutton-listener', {
  schema: {
    onceSecVideo: {default: true},
    onceTriangle: {default: true},
  },
  init: function () {
    this.playNextVideo = this.playNextVideo.bind(this);
    this.tick = this.tick.bind(this);

    var videoEl = document.querySelector("#video")
    var triangle = document.querySelector("#nextVideoButton")
    var text = document.querySelector("#nextText")
    var portal = document.querySelector("#portal")
    var portalLander = document.querySelector("#portalLander")
    
    // play movie on controller button push 
    window.addEventListener('xbuttondown', this.playFirstVideo )
    window.addEventListener('abuttondown', this.playFirstVideo)
    window.addEventListener('triggerdown', this.playFirstVideo )
    window.addEventListener('gripdown', this.playFirstVideo)

    // peek portal on hover 
    portalLander.addEventListener('raycaster-intersected', function () {
        portal.setAttribute('scale', '1 1 1')
    })
    portalLander.addEventListener('raycaster-intersected-cleared', function () { 
      portal.setAttribute('scale', "0.2 0.2 0.2")
    })

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
    portalLander.addEventListener('click', this.playNextVideo);
  },
  playFirstVideo: function() {
    videoEl.getAttribute('material').src.play()
    window.removeEventListener('xbuttondown', this.playFirstVideo )
    window.removeEventListener('abuttondown', this.playFirstVideo)
    window.removeEventListener('triggerdown', this.playFirstVideo )
    window.removeEventListener('gripdown', this.playFirstVideo)
  },
  playNextVideo: function() {
      // remove video 
      var videoEl = document.querySelector("#video")
      videoEl.getAttribute('material').src.pause()
      videoEl.object3D.visible = false;

      // make second video appear
      var secVideoEl = document.querySelector("#secondVideo")
      secVideoEl.getAttribute('material').src.play()
      secVideoEl.object3D.visible = true;

      // move plane 
      var planeModel = document.querySelector("#animModel")
      if (planeModel) planeModel.parentNode.removeChild(planeModel);
      var secondModel = document.querySelector("#secondModel")
      secondModel.object3D.visible = true
      secondModel.emit(`startanim002`, null, false);

      // make triangle and portal disappear
      var triangle = document.querySelector("#nextVideoButton")
      var portalLander = document.querySelector("#portalLander")
      triangle.removeEventListener('click', this.playNextVideo);
      triangle.object3D.visible = false;
      document.querySelector("#nextText").object3D.visible = false
      document.querySelector("#portal").object3D.visible = false
      portalLander.removeEventListener('click', this.playNextVideo);
      portalLander.object3D.visible = false
      
  },
  tick: function () {  
    var videoEl = document.querySelector("#video")
    var triangle = document.querySelector("#nextVideoButton")
    var text = document.querySelector("#nextText")
    var currentTime = videoEl.components.material.data.src.currentTime
    var firstVideoVisible = videoEl.getAttribute('visible')

    // Make triangle button appear when video playback is at 5 of 23 seconds
    if (firstVideoVisible && currentTime >= 5 && this.data.onceTriangle) {
        triangle.object3D.visible = true;
        text.object3D.visible = true;
        this.data.onceTriangle = false
    }

    // autoplay next video at end of first video
    if (videoEl && currentTime >= 23 && this.data.onceSecVideo) {
      this.playNextVideo()
      this.data.onceSecVideo = false
  }
}
})