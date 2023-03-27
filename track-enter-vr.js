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

            sceneEl.setAttribute('xbutton-listener')
        });
        
        this.el.addEventListener('exit-vr', () => {
            leftHand.parentNode.removeChild(leftHand);
            rightHand.parentNode.removeChild(rightHand);
        });
    }
});