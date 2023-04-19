AFRAME.registerComponent('egg-appear', {
    init: function () {
        this.appearEgg = this.appearEgg.bind(this);
    },
    tick: function() {
       var source = document.querySelector("#videoPlayer").getAttribute('src')
       var currentTime = Math.round(document.querySelector("#videoPlayer").components.material.data.src.currentTime)

       if (source === "#eeOutdoor"){
            if (currentTime == 8) this.appearEgg("#eggOne")
            if (currentTime == 12) this.appearEgg("#eggTwo")
            if (currentTime == 16) this.appearEgg("#eggThree")
            if (currentTime == 40) this.appearEgg("#eggSeven")
            if (currentTime == 38) this.appearEgg("#eggEight")
            if (currentTime == 39) this.appearEgg("#eggNine")
       }
    },
    appearEgg: function(id) {
        var egg = document.querySelector(id)
        var isVisible = egg.getAttribute('visible')
        if (!isVisible){
            console.log('appear! ', id)
            egg.object3D.visible = true
            egg.components.sound.playSound();
        }
    }
  })