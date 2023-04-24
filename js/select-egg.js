AFRAME.registerComponent('select-egg', {
    schema: {
        count: {type:"number", default:0},
        eggId: {type:"string",  default:"#eggOne"}
    },
    init: function () {      
        this.addToCount = this.addToCount.bind(this);
        this.removeListeners = this.removeListeners.bind(this);

        this.el.addEventListener('click', this.addToCount);
        this.el.addEventListener('abuttondown', this.addToCount);
        this.el.addEventListener('triggerdown', this.addToCount);
        this.el.addEventListener('gripdown', this.addToCount);
        this.el.addEventListener('xbuttondown', this.addToCount);
        this.el.addEventListener('removeListeners', this.removeListeners)
        // Catch new emitted count
        var sceneEl = document.querySelector("a-scene")
        sceneEl.addEventListener('setCount', (event) => {
            this.data.count = event.detail.newCount
        });

        this.data.eggId = '#' + this.el.id
    },
    addToCount: function() {
        // Emit new count to every instance of this code
        var newCount = this.data.count + 1
        this.el.emit('setCount', {newCount: newCount});

        // Increase number
        // var eggText = document.querySelector("#eggCount")
        var eggText = document.getElementById("eggCount")
        eggText.innerHTML = this.data.count
        // eggText.setAttribute('text', {value: this.data.count})
        // eggText.components.sound.playSound();

        // Disappear egg
        var id = this.data.eggId
        var egg = document.querySelector(id)
        egg.object3D.visible = false;
        
        // Activate Bonus Icons
        if (id == "#eggSeven" || id == "#eggEight" || id == "#eggNine") {
            var bonusIconOne = document.getElementById("bonusIconOne")
            var bonusOpacityOne = getComputedStyle(bonusIconOne).getPropertyValue('opacity')
            var bonusIconTwo = document.getElementById("bonusIconTwo")
            var bonusOpacityTwo = getComputedStyle(bonusIconTwo).getPropertyValue('opacity')
            var bonusIconThree = document.getElementById("bonusIconThree")
            var bonusOpactiyThree= getComputedStyle(bonusIconThree).getPropertyValue('opacity')
    
            if (bonusOpacityOne != 1 && bonusOpacityTwo != 1 && bonusOpactiyThree != 1) return bonusIconOne.style.setProperty('opacity', '1')
            else if (bonusOpacityOne == 1 && bonusOpacityTwo  != 1 && bonusOpactiyThree != 1) return bonusIconTwo.style.setProperty('opacity', '1')
            else if (bonusOpacityOne == 1&& bonusOpacityTwo == 1&& bonusOpactiyThree  != 1) return bonusIconThree.style.setProperty('opacity', '1')
            }
            else {
                // Activate Regular icons
                var eggIconOne = document.getElementById("eggIconOne")
                var oneOpacity = getComputedStyle(eggIconOne).getPropertyValue('opacity')
                var eggIconTwo = document.getElementById("eggIconTwo")
                var twoOpacity = getComputedStyle(eggIconTwo).getPropertyValue('opacity')
                var eggIconThree = document.getElementById("eggIconThree")
                var threeOpacity = getComputedStyle(eggIconThree).getPropertyValue('opacity')
                var eggIconFour = document.getElementById("eggIconFour")
                var fourOpacity = getComputedStyle(eggIconFour).getPropertyValue('opacity')
        
                if (oneOpacity != 1 && twoOpacity != 1 && threeOpacity != 1  && fourOpacity != 1) return eggIconOne.style.setProperty('opacity', '1')
                else if (oneOpacity == 1 && twoOpacity  != 1 && threeOpacity != 1  && fourOpacity != 1) return eggIconTwo.style.setProperty('opacity', '1')
                else if (oneOpacity == 1 && twoOpacity == 1 && threeOpacity != 1 && fourOpacity != 1) return eggIconThree.style.setProperty('opacity', '1')
                else if (oneOpacity == 1 && twoOpacity == 1 && threeOpacity == 1 && fourOpacity != 1) return eggIconFour.style.setProperty('opacity', '1')
            }
    },
    removeListeners: function() {
        this.el.removeEventListener('click', this.addToCount);
        this.el.removeEventListener('abuttondown', this.addToCount);
        this.el.removeEventListener('triggerdown', this.addToCount);
        this.el.removeEventListener('gripdown', this.addToCount);
        this.el.removeEventListener('xbuttondown', this.addToCount);
        this.el.removeEventListener('removeListeners', this.removeListeners)
    }
})