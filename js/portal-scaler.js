AFRAME.registerComponent('portal-scaler', {
    init: function() {
        // Peek portal on mouse hover 
        portal.addEventListener('raycaster-intersected', function () {
            portal.setAttribute('scale', '1 1 1')
        })
        portal.addEventListener('raycaster-intersected-cleared', function () { 
        portal.setAttribute('scale', "0.2 0.2 0.2")
        })

        window.addEventListener('enter-vr', () => {
            var vrPortal = document.querySelector("#portalVR")
            
            console.log('enter vr for scaler')

            // Peek portal on A button hover 
            window.addEventListener('abuttondown', function() {
                var vrPortalVisible = vrPortal.getAttribute('visible')
                if (vrPortalVisible) vrPortal.setAttribute('scale', '1 1 1')
            })
            window.addEventListener('abuttonup', function() {
                var vrPortalVisible = vrPortal.getAttribute('visible')
                if (vrPortalVisible) vrPortal.setAttribute('scale', '0.2 0.2 0.2')
            })

        });
        window.addEventListener('exit-vr', () => {
            window.removeEventListener('abuttondown', function() {
                vrPortal.setAttribute('scale', '1 1 1')
            })
            window.removeEventListener('abuttonup', function() {
                vrPortal.setAttribute('scale', '0.2 0.2 0.2')
            })
        });
    }
})