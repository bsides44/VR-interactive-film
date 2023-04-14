AFRAME.registerComponent('portal-visibility', {
    schema: {
        portalsVisible: {default: false},
        inVR: {default: false}
      },
    init: function() {
        this.appearPortal = this.appearPortal.bind(this);

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
            if (firstVideoVisible && this.data.portalsVisible) {
                portal.object3D.visible = true;
                vrPortal.object3D.visible = false;
            }
        });

        setTimeout(() => {
            this.appearPortal()
        }, 8000);
    },
    appearPortal: function() {
        var firstVideoVisible = document.querySelector("#video").getAttribute('visible')
        var portal = document.querySelector("#portal")
        var vrPortal = document.querySelector("#portalVR")

        // appear portal at 8 seconds out of VR
        if (!this.data.inVR && firstVideoVisible) {
            portal.object3D.visible = true;
        }

        // appear VRportal at 8 seconds in VR
        if (this.data.inVR && firstVideoVisible) {
            vrPortal.object3D.visible = true;
        }
        this.data.portalsVisible = true
    }
});
