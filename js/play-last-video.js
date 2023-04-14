AFRAME.registerComponent('play-last-video', {
    init: function () {
        document.querySelector("#lastVideo").getAttribute('material').src.pause()

        this.playLastVid = this.playLastVid.bind(this);
        var button = document.querySelector("#escapeButton")

        button.addEventListener('click', this.playLastVid);
    },
    playLastVid: function() {
        // CHEERS video

        // remove video 
        var videoEl = document.querySelector("#thirdVideo")
        videoEl.getAttribute('material').src.pause()
        videoEl.object3D.visible = false;

        //remove button
        document.querySelector("#escapeButton").object3D.visible = false;
  
        // make last video appear
        var secVideoEl = document.querySelector("#lastVideo")
        secVideoEl.getAttribute('material').src.play()
        secVideoEl.object3D.visible = true;
    },
  })