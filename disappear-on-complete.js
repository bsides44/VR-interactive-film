AFRAME.registerComponent('disappear-on-complete', {
    init: function() {
        this.el.addEventListener('animationcomplete', () => {
            this.el.object3D.visible = false
        });
    },
    tick: function () {  
        var secondVid = document.querySelector("#secondVideo")
        var planeModel = document.querySelector("#secondModel")
        var currentTime = secondVid.components.material.data.src.currentTime
    
        // In second video, Make 3D model invisible when it goes behind the tree
        if (secondVid && currentTime >= 10.85 ){
          planeModel.object3D.visible = false;
        }
    }
});