AFRAME.registerComponent('portal-visibility', {
    schema: {
        portalOnce: {default: true},
        vrPortalOnce: {default: true},
        playback: {default: 0},
        inVR: {default: false}
      },
    init: function() {
        this.tick = this.tick.bind(this);

        var videoEl = document.querySelector("#video")
        var firstVideoVisible = videoEl.getAttribute('visible')
        var vrPortal = document.querySelector("#portalVR")
        var portal = document.querySelector("#portal")

        // notify in VR
        window.addEventListener('enter-vr', () => {
            this.data.inVR = true
            if (portal) portal.object3D.visible = false;
        });
        window.addEventListener('exit-vr', () => {
            this.data.inVR = false
            if (firstVideoVisible && this.data.playback >= 8) {
                portal.object3D.visible = true;
                vrPortal.object3D.visible = false;
            }
        });
    },

    tick: function() {
        var videoEl = document.querySelector("#video")
        var firstVideoVisible = videoEl.getAttribute('visible')
        this.data.playback = videoEl.components.material.data.src.currentTime
        var portal = document.querySelector("#portal")
        var vrPortal = document.querySelector("#portalVR")

        // appear portal at 8 seconds out of VR
        if (!this.data.inVR && firstVideoVisible && this.data.playback >= 8 && this.data.portalOnce) {
            portal.object3D.visible = true;
            this.data.portalOnce = false
        }

        // appear VRportal at 8 seconds in VR
        if (this.data.inVR && firstVideoVisible && this.data.playback >= 8 && this.data.vrPortalOnce) {
            vrPortal.object3D.visible = true;
            this.data.vrPortalOnce = false
        }
    }
});
