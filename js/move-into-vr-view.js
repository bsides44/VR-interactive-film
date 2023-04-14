AFRAME.registerComponent('move-into-vr-view', {
    init: function() {
        window.addEventListener('enter-vr', () => {
            var buttonOne = document.querySelector("#buttonOne")
            var buttonTwo = document.querySelector("#buttonTwo")
            var buttonThree = document.querySelector("#buttonThree")

            var welcomeText = document.querySelector("#welcomeText")

            // Move buttons into view
            buttonOne.setAttribute('position', "1.7 0.6 -1")
            buttonTwo.setAttribute('position', "2.3 0.6 -1" )
            buttonThree.setAttribute('position', "1.7 0.6 -1" )
            if (welcomeText) {
                welcomeText.setAttribute('position', "0.45 0 -1" )
                welcomeText.setAttribute('value', "Press any button\nTo start" )
            }
        })
        window.addEventListener('exit-vr', () => {
            buttonOne.setAttribute('position', "-0.3 1.6 -1" )
            buttonTwo.setAttribute('position', "0.3 1.6 -1" )
            buttonThree.setAttribute('position', "-0.3 1.6 -1" )
        })
    }
})