AFRAME.registerComponent('play-in-vr', {
    init: function () {  
      var videoEl = document.querySelector("#video")
      var text = document.querySelector("#nextText")
      var planeModel = document.querySelector("#animModel")
      var text = document.querySelector("#welcomeText")
      
      // play movie on controller button push 
      window.addEventListener('xbuttondown', function() {
        if (text) text.parentNode.removeChild(text);
        
        if (planeModel) planeModel.emit(`startanim001`, null, false);
        planeModel.components.sound.playSound();

        if (videoEl) videoEl.getAttribute('material').src.play()

        window.removeEventListener('xbuttondown', this.playFirstVideo )
        window.removeEventListener('abuttondown', this.playFirstVideo)
        window.removeEventListener('triggerdown', this.playFirstVideo )
        window.removeEventListener('gripdown', this.playFirstVideo)
      } )
      window.addEventListener('abuttondown', function() {
        if (text) text.parentNode.removeChild(text);
        
        if (planeModel) planeModel.emit(`startanim001`, null, false);
        planeModel.components.sound.playSound();

        if (videoEl) videoEl.getAttribute('material').src.play()

        window.removeEventListener('xbuttondown', this.playFirstVideo )
        window.removeEventListener('abuttondown', this.playFirstVideo)
        window.removeEventListener('triggerdown', this.playFirstVideo )
        window.removeEventListener('gripdown', this.playFirstVideo)
      } )
      window.addEventListener('triggerdown', function() {
        if (text) text.parentNode.removeChild(text);
        
        if (planeModel) planeModel.emit(`startanim001`, null, false);
        planeModel.components.sound.playSound();

        if (videoEl) videoEl.getAttribute('material').src.play()

        window.removeEventListener('xbuttondown', this.playFirstVideo )
        window.removeEventListener('abuttondown', this.playFirstVideo)
        window.removeEventListener('triggerdown', this.playFirstVideo )
        window.removeEventListener('gripdown', this.playFirstVideo)
      } )
      window.addEventListener('gripdown', function() {
        if (text) text.parentNode.removeChild(text);
        
        if (planeModel) planeModel.emit(`startanim001`, null, false);
        planeModel.components.sound.playSound();

        if (videoEl) videoEl.getAttribute('material').src.play()

        window.removeEventListener('xbuttondown', this.playFirstVideo )
        window.removeEventListener('abuttondown', this.playFirstVideo)
        window.removeEventListener('triggerdown', this.playFirstVideo )
        window.removeEventListener('gripdown', this.playFirstVideo)
      } )

    }
})
  