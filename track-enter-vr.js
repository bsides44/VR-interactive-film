AFRAME.registerComponent('track-enter-vr', {
    schema: {
        once: {default: true},
      },
    init: function() {
        this.playPortalVideo = this.playPortalVideo.bind(this);

        this.el.addEventListener('enter-vr', () => {
            // add VR controllers
            var sceneEl = document.querySelector('a-scene');
            var leftHand = document.createElement('a-entity');
            leftHand.setAttribute('id', 'leftHand');
            leftHand.setAttribute('laser-controls', 'hand: left');
            leftHand.setAttribute('raycaster', 'objects: #nextVideoButton');

            sceneEl.appendChild(leftHand);

            var rightHand = document.createElement('a-entity');
            rightHand.setAttribute('id', 'rightHand');
            rightHand.setAttribute('laser-controls', 'hand: right');
            rightHand.setAttribute('raycaster', 'objects: #nextVideoButton');

            sceneEl.appendChild(rightHand);

            // Move buttons into view
            var triangle = document.querySelector("#nextVideoButton")
            var nextText = document.querySelector("#nextText")
            var secondModel = document.querySelector("#secondModel")
            var portal = document.querySelector("#portal")
            var portalVisible = portal.getAttribute('visible')
            var vrPortal = document.querySelector("#portalVR")
            var videoEl = document.querySelector("#video")
            var firstVideoVisible = videoEl.getAttribute('visible')
            var welcomeText = document.querySelector("#welcomeText")

            portal.setAttribute('visible', "false" )
            if (portalVisible) vrPortal.setAttribute('visible', "true" )
            if (secondModel) secondModel.setAttribute('position', "-40 10 -10" )
            if (secondModel) secondModel.setAttribute('animation', "property: position; to: 60 14 -12; dur: 14000; easing: linear; loop: false; startEvents: startanim002" )
            triangle.setAttribute('position', "1 0.3 -1" )
            nextText.setAttribute('position', "1 0 -1" )
            if (welcomeText) {
                welcomeText.setAttribute('position', "0.45 0 -1" )
                welcomeText.setAttribute('value', "Press any button\nTo start" )
            }

            // Add button control for portal
            if (firstVideoVisible) {
                window.addEventListener('xbuttondown', this.playPortalVideo)
                window.addEventListener('abuttondown', function() {
                    vrPortal.setAttribute('scale', '1 1 1')
                })
                window.addEventListener('abuttonup', function() {
                    vrPortal.setAttribute('scale', '0.2 0.2 0.2')
                })
            }

        });
        this.el.addEventListener('exit-vr', () => {
            leftHand.parentNode.removeChild(leftHand);
            rightHand.parentNode.removeChild(rightHand);

            portal.setAttribute('visible', "true" )
            vrPortal.setAttribute('visible', "false" )
            triangle.setAttribute('position', "-1 1.3 -1" )
            text.setAttribute('position', "1 1 -1" )

            window.removeEventListener('xbuttondown', this.playPortalVideo)
            window.removeEventListener('abuttondown', function() {
                vrPortal.setAttribute('scale', '1 1 1')
            })
            window.removeEventListener('abuttonup', function() {
                vrPortal.setAttribute('scale', '0.2 0.2 0.2')
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
        document.querySelector("#portalVR").object3D.visible = false 
    },
    tick: function() {
        var videoEl = document.querySelector("#video")
        var firstVideoVisible = videoEl.getAttribute('visible')
        var currentTime = videoEl.components.material.data.src.currentTime
        var vrPortal = document.querySelector("#portalVR")
        var portal = document.querySelector("#portal")

        if (!firstVideoVisible) {
            window.removeEventListener('xbuttondown', this.playPortalVideo)
            window.removeEventListener('abuttondown', function() {
                vrPortal.setAttribute('scale', '1 1 1')
            })
            window.removeEventListener('abuttonup', function() {
                vrPortal.setAttribute('scale', '0.2 0.2 0.2')
            })
        }

        if (firstVideoVisible && currentTime >= 8 && this.data.once) {
            vrPortal.object3D.visible = true;
            if (portal) portal.object3D.visible = false;
            this.data.once = false
        }
    }
});