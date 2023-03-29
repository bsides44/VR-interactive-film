AFRAME.registerComponent('portal-controller', {
    init: function() {
        this.playPortalVideo = this.playPortalVideo.bind(this);

        // X button not working and portal still visible in next video
        window.addEventListener('enter-vr', () => {
            var vrPortal = document.querySelector("#portalVR")
            
            window.addEventListener('xbuttondown', function () {
                var vrPortalVisible = vrPortal.getAttribute('visible')
                if (vrPortalVisible) this.playPortalVideo  
            })
        });
        window.addEventListener('exit-vr', () => {
            window.removeEventListener('xbuttondown', function () {
                var vrPortalVisible = vrPortal.getAttribute('visible')
                if (vrPortalVisible) this.playPortalVideo  
            })
        });
    },
    playPortalVideo: function() {
        // make portal video appear
        var portalVid = document.querySelector("#portalVideo")
        portalVid.object3D.visible = true;
        portalVid.getAttribute('material').src.play()
        
        // remove first video 
        var videoEl = document.querySelector("#video")
        videoEl.getAttribute('material').src.pause()
        videoEl.object3D.visible = false;      
  
        // move plane 
        var planeModel = document.querySelector("#animModel")
        if (planeModel) planeModel.parentNode.removeChild(planeModel);
        var portalModel = document.querySelector("#portalModel")
        portalModel.object3D.visible = true
        portalModel.emit(`startanim003`, null, false);
  
        // make triangle and portal disappear
        var triangle = document.querySelector("#nextVideoButton")
        triangle.removeEventListener('click', this.playNextVideo);
        triangle.object3D.visible = false;
        document.querySelector("#nextText").object3D.visible = false
        var vrPortal = document.querySelector("#portalVR")
        vrPortal.object3D.visible = false 

        // remove listeners
        window.removeEventListener('xbuttondown', this.playPortalVideo)
        window.removeEventListener('abuttondown', function() {
            vrPortal.setAttribute('scale', '1 1 1')
        })
        window.removeEventListener('abuttonup', function() {
            vrPortal.setAttribute('scale', '0.2 0.2 0.2')
        })
    }
})