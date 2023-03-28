AFRAME.registerComponent('track-enter-vr', {
    init: function() {
        this.el.addEventListener('enter-vr', () => {
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

            var triangle = document.querySelector("#nextVideoButton")
            var text = document.querySelector("#nextText")
            var portal = document.querySelector("#portal")
            var portalLander = document.querySelector("#portalLander")

            portal.setAttribute('position', "-1 0 -1" )
            portalLander.setAttribute('position', "-1 0 -0.9" )
            triangle.setAttribute('position', "1 0.3 -1" )
            text.setAttribute('position', "1 0 -1" )
        });
        this.el.addEventListener('exit-vr', () => {
            leftHand.parentNode.removeChild(leftHand);
            rightHand.parentNode.removeChild(rightHand);

            portal.setAttribute('position', "-1 1 -1" )
            portalLander.setAttribute('position', "-1 1 -0.9" )
            triangle.setAttribute('position', "-1 1.3 -1" )
            text.setAttribute('position', "1 1 -1" )
        });
    }
});