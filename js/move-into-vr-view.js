AFRAME.registerComponent('move-into-vr-view', {
    init: function() {
        window.addEventListener('enter-vr', () => {
            var triangle = document.querySelector("#nextVideoButton")
            var nextText = document.querySelector("#nextText")
            var secondModel = document.querySelector("#secondModel")
            var welcomeText = document.querySelector("#welcomeText")

            // Move buttons into view
            if (secondModel) secondModel.setAttribute('position', "-40 10 -10" )
            if (secondModel) secondModel.setAttribute('animation', "property: position; to: 60 14 -12; dur: 14000; easing: linear; loop: false; startEvents: startanim002" )
            triangle.setAttribute('position', "1 0.3 -1" )
            nextText.setAttribute('position', "1 0 -1" )
            if (welcomeText) {
                welcomeText.setAttribute('position', "0.45 0 -1" )
                welcomeText.setAttribute('value', "Press any button\nTo start" )
            }
        })
        window.addEventListener('exit-vr', () => {
            portal.setAttribute('visible', "true" )
            triangle.setAttribute('position', "-1 1.3 -1" )
            text.setAttribute('position', "1 1 -1" )
        })
    }
})