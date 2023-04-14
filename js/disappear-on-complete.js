AFRAME.registerComponent('disappear-on-complete', {
    init: function() {
        this.el.addEventListener('animationcomplete', () => {
            this.el.object3D.visible = false
            this.el.components.sound.stopSound();
        });
    }
});