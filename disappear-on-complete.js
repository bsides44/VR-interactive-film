AFRAME.registerComponent('disappear-on-complete', {
    init: function() {
        this.el.addEventListener('animationcomplete', () => {
            this.el.object3D.visible = false
            this.el.components.sound.stopSound();
        });
    },
    tick: function () {  
        var secondVid = document.querySelector("#secondVideo")
        var secondModel = document.querySelector("#secondModel")
        if (secondVid) {
            var currentTime = secondVid.components.material.data.src.currentTime
        
            // In second video, Make 3D model invisible when it goes behind the tree
            if (currentTime >= 10.85 ){
                secondModel.object3D.visible = false;
            }
        }
    }
});