AFRAME.registerComponent('egg-appear', {
    init: function () {
        this.appearEgg = this.appearEgg.bind(this);
        this.playEeOutdoor = this.playEeOutdoor.bind(this);
        console.log('init')
        // not working
        this.el.addEventListener('videoChanged', function () {
            console.log('videoChanged')
            //  if (event.detail.id == "#eeOutdoor") this.playEeOutdoor
            //  if (event.detail.id == "#sing1") this.playSing1
            //  if (event.detail.id == "#eeIndoorOne") this.playEeIndoorOne
            //  if (event.detail.id == "#articulate") this.playArticulate
            //  if (event.detail.id == "#sing3") this.playSing3
            //  if (event.detail.id == "#eeIndoorTwo") this.playEeIndoorTwo
            //  if (event.detail.id == "#sing4") this.playSing4
          });
    },
    playEeOutdoor: function() {
        console.log('playEeOutdoor')

       var currentTime = Math.round(document.querySelector("#videoPlayer").components.material.data.src.currentTime)

        if (currentTime == 8) this.appearEgg("#eggOne")
        if (currentTime == 12) this.appearEgg("#eggTwo")
        if (currentTime == 16) this.appearEgg("#eggThree")
        if (currentTime == 40) this.appearEgg("#eggSeven")
        if (currentTime == 38) this.appearEgg("#eggEight")
        if (currentTime == 39) this.appearEgg("#eggNine")
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
            if (oneVisible && twoVisible && !threeVisible) return eggIconThree.object3D.visible = true
            else if (oneVisible && !twoVisible && !threeVisible) return eggIconTwo.object3D.visible = true 
            else if (!oneVisible && !twoVisible && !threeVisible) return eggIconOne.object3D.visible = true
        }


    }
  })