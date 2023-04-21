AFRAME.registerComponent('move-into-vr', {
    init: function() {
        var leftHand = document.createElement('a-entity');
        var rightHand = document.createElement('a-entity');
        
        window.addEventListener('enter-vr', () => {
            // move text and buttons down
            var sceneEl = document.querySelector('a-scene');
            var boxArr = sceneEl.querySelectorAll('a-box')
            var imageArr = sceneEl.querySelectorAll('a-image')
            var entityArr = sceneEl.querySelectorAll('a-entity')
            var welcomeText = document.querySelector('#welcomeText');
            var loadedText = document.querySelector('#loadedText');


            boxArr.forEach(box => this.moveDown(box, 1))
            imageArr.forEach(image => this.moveDown(image, 0.5))
            this.moveUp(document.querySelector('#eggCount'), 1.1)
            entityArr.forEach(entity => this.moveDown(entity, 1.6))

            this.moveDown(welcomeText, 1.6)
            
            if (welcomeText.getAttribute('visible') || loaded.getAttribute('visible')) {
                welcome.object3D.visible = false
                loadedText.object3D.visible = false
            document.querySelector('#vrText').object3D.visible = true
            }
            // add VR controllers
            leftHand.setAttribute('id', 'leftHand');
            leftHand.setAttribute('laser-controls', 'hand: left');
            leftHand.setAttribute('raycaster', 'objects: .cursor-listener');

            sceneEl.appendChild(leftHand);

            rightHand.setAttribute('id', 'rightHand');
            rightHand.setAttribute('laser-controls', 'hand: right');
            rightHand.setAttribute('raycaster', 'objects: .cursor-listener');

            sceneEl.appendChild(rightHand);
        })
        window.addEventListener('exit-vr', () => {
            // move text and buttons back up
            var sceneEl = document.querySelector('a-scene');
            var boxArr = sceneEl.querySelectorAll('a-box')
            var imageArr = sceneEl.querySelectorAll('a-image')
            var entityArr = sceneEl.querySelectorAll('a-entity')

            boxArr.forEach(box => this.moveUp(box, 1))
            imageArr.forEach(image => this.moveUp(image, 0.5))
            entityArr.forEach(entity => this.moveUp(entity, 1))

            welcomeText.setAttribute('position', "0 1.6 -1" )
            welcomeText.setAttribute('value', "Sound on\nWait for background\nimage to load\n\nPhone/ Computer:\nDrag to explore\nClick or press\nto start\n\nFor VR\nClick VR\nThen press any button" )

            // remove VR controllers
            leftHand.parentNode.removeChild(leftHand);
            rightHand.parentNode.removeChild(rightHand);
        })
    },
    moveDown: function(element, yMove) {
        var oldPosition =  element.getAttribute('position')
        element.setAttribute('position', {x: oldPosition.x, y: oldPosition.y - yMove, z: oldPosition.z})
    },
    moveUp: function(element, yMove) {
        var newPosition =  element.getAttribute('position')
        element.setAttribute('position', {x: newPosition.x, y: newPosition.y + yMove, z: newPosition.z})
    }
})