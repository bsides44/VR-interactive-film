AFRAME.registerComponent('select-egg', {
    schema: {
        count: {type:"number", default:0},
        eggId: {type:"string",  default:"#eggOne"}
    },
    init: function () {      
        this.addToCount = this.addToCount.bind(this);

        this.el.addEventListener('click', this.addToCount);

        var egg = document.querySelector(this.data.eggId)
        // scale on hover
        egg.addEventListener('raycaster-intersected', function () {
            egg.setAttribute('scale', '0.07 0.07 0.07');
          })
        egg.addEventListener('raycaster-intersected-cleared', function () { 
            egg.setAttribute('scale', '0.05 0.05 0.05');
        })
    },
    addToCount: function() {
        this.data.count = this.data.count + 1
        var eggText = document.querySelector("#eggCount")
        var egg = document.querySelector(this.data.eggId)
        eggText.setAttribute('text', {value: this.data.count})
        eggText.components.sound.playSound();

        egg.object3D.visible = false;
        
        var eggIconOne = document.querySelector("#eggIconOne")
        var oneOpacity = eggIconOne.getAttribute('opacity')
        var eggIconTwo = document.querySelector("#eggIconTwo")
        var twoOpacity = eggIconTwo.getAttribute('opacity')
        var eggIconThree = document.querySelector("#eggIconThree")
        var threeOpacity= eggIconThree.getAttribute('opacity')

        if (oneOpacity != 1 && twoOpacity != 1 && threeOpacity != 1) eggIconOne.setAttribute('opacity', 1)
        else if (oneOpacity == 1 && twoOpacity  != 1 && threeOpacity != 1) eggIconTwo.setAttribute('opacity', 1)
        else if (oneOpacity == 1&& twoOpacity == 1&& threeOpacity  != 1) eggIconThree.setAttribute('opacity', 1)
    }
})