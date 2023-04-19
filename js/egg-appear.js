AFRAME.registerComponent('egg-appear', {
    init: function () {
        this.appearEgg = this.appearEgg.bind(this);
    },
    tick: function() {
       var source = document.querySelector("#videoPlayer").getAttribute('src')
       var currentTime = Math.round(document.querySelector("#videoPlayer").components.material.data.src.currentTime)

       if (source === "#eeOutdoor"){
            if (currentTime == 8) this.appearEgg("#eggOne")
            // if (currentTime == 12) this.appearEgg("#eggTwo")
            // if (currentTime == 16) this.appearEgg("#eggThree")
            // if (currentTime == 40) this.appearEgg("#eggSeven")
            // if (currentTime == 38) this.appearEgg("#eggEight")
            // if (currentTime == 39) this.appearEgg("#eggNine")
       }
    },
    appearEgg: function(id) {
        var egg = document.querySelector(id)
        var isVisible = egg.getAttribute('visible')
        if (!isVisible){
            egg.object3D.visible = true
            egg.components.sound.playSound();
        }
        this.appearIcon(id)
    },
    appearIcon: function(id) {
        var eggIconOne = document.querySelector("#eggIconOne")
        var oneVisible = eggIconOne.getAttribute('visible')
        var eggIconTwo = document.querySelector("#eggIconTwo")
        var twoVisible = eggIconTwo.getAttribute('visible')
        var eggIconThree = document.querySelector("#eggIconThree")
        var threeVisible = eggIconThree.getAttribute('visible')
        var bonusIconOne = document.querySelector("#bonusIconOne")
        var bonusOneVisible = bonusIconOne.getAttribute('visible')
        var bonusIconTwo = document.querySelector("#bonusIconTwo")
        var bonusTwoVisible = bonusIconTwo.getAttribute('visible')
        var bonusIconThree = document.querySelector("#bonusIconThree")
        var bonusThreeVisible = bonusIconThree.getAttribute('visible')

        if (id == "#eggSeven" || id == "#eggEight" || id == "#eggNine") {
            if (!bonusOneVisible && !bonusTwoVisible && !bonusThreeVisible) bonusIconOne.object3D.visible = true
            else if (bonusOneVisible && !bonusTwoVisible && !bonusThreeVisible) bonusIconTwo.object3D.visible = true
            else if (bonusOneVisible && bonusTwoVisible && !bonusThreeVisible) bonusIconThree.object3D.visible = true
        }
        else {
            if (oneVisible && twoVisible && !threeVisible) return
                 eggIconThree.object3D.visible = true
                 
            if (oneVisible && !twoVisible && !threeVisible) return eggIconTwo.object3D.visible = true
                 
            if (!oneVisible && !twoVisible && !threeVisible) return eggIconOne.object3D.visible = true
        }
        // not appearing one icon per present egg - just doing all 3

    }
  })