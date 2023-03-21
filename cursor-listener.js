AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var lastIndex = -1;
        var COLORS = ['red', 'green', 'blue'];

        this.el.addEventListener('click', function (evt) {
            // change colour of button on click 
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.setAttribute('material', 'color', COLORS[lastIndex]);

            // hide video 
            document.querySelector("#video").object3D.visible = false;

            // make second video visible when triangle button is clicked
            var secVideoEl = document.querySelector("#secondVideo")
            secVideoEl.object3D.visible = true;
            secVideoEl.getAttribute('material').src.play()
        });
    },
    tick: function () {
        // Make triangle button visible when video playback is at 20 seconds
        var videoEl = document.querySelector("#video")

        if (videoEl.components.material.data.src.currentTime >= 20) {
            this.el.object3D.visible = true;
        }
    }
});