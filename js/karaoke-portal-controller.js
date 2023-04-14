AFRAME.registerComponent('karaoke-portal-controller', {
    init: function() {
        // on desktop
        var portal = document.querySelector("#karaokePortal")
        if (portal) var portalVisible = portal.getAttribute('visible')

        if (portalVisible) {
            // make portal video appear
            var portalVid = document.querySelector("#fifthVideo")
            portalVid.object3D.visible = true;
            portalVid.getAttribute('material').src.play()

            // make escape button appear
            document.querySelector("#escapeButton").object3D.visible = true;
            
            // remove current video 
            var videoEl = document.querySelector("#thirdVideo")
            videoEl.getAttribute('material').src.pause()
            videoEl.object3D.visible = false;      
    
            // make portal disappear
            var portal = document.querySelector("#portalVR")
            portal.object3D.visible = false 
        }
        
        // in vr
        window.addEventListener('enter-vr', () => {

            window.addEventListener('xbuttondown', function () {
                var vrPortal = document.querySelector("#karaokePortalVR")
                if (vrPortal) var vrPortalVisible = vrPortal.getAttribute('visible')

                if (vrPortalVisible) {
                    // make portal video appear
                    var portalVid = document.querySelector("#fifthVideo")
                    portalVid.object3D.visible = true;
                    portalVid.getAttribute('material').src.play()

                    // make escape button appear
                    document.querySelector("#escapeButton").object3D.visible = true;
                    
                    // remove current video 
                    var videoEl = document.querySelector("#thirdVideo")
                    videoEl.getAttribute('material').src.pause()
                    videoEl.object3D.visible = false;      
            
                    // make portal disappear
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
        });
    },
})