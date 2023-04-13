AFRAME.registerComponent('portal-controller', {
    init: function() {
        window.addEventListener('enter-vr', () => {

            window.addEventListener('xbuttondown', function () {
                var vrPortal = document.querySelector("#portalVR")
                var vrPortalVisible = vrPortal.getAttribute('visible')

                if (vrPortalVisible) {
                    // make portal video appear
                    var portalVid = document.querySelector("#fourthVideo")
                    portalVid.object3D.visible = true;
                    portalVid.getAttribute('material').src.play()
                    
                    // remove current video 
                    var videoEl = document.querySelector("#secondVideo")
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