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

        // this.el.removeEventListener('click', this.addToCount);
        // egg.removeEventListener('raycaster-intersected', function () {
        //     egg.setAttribute('scale', '0.1 0.1 0.1');})
        // egg.removeEventListener('raycaster-intersected-cleared', function () { 
        //     egg.setAttribute('scale', '0.05 0.05 0.05');})
        egg.object3D.visible = false;
    }
})