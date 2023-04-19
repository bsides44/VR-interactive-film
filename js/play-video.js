AFRAME.registerComponent('play-video', {
    schema: {
        currentEvent: {type: 'number', default: 0},
      },
      init: function () {        
        this.playNextVideo = this.playNextVideo.bind(this);
        this.appearButtons = this.appearButtons.bind(this);

        this.el.addEventListener('click', this.playNextVideo);
    },
    playNextVideo: function() {
		var events = [
			{index: 0, id: "#intro", numberOfEggs: 0, buttonTimer: 0, buttonPrev: null, buttonNext: null, rotation:"0 -70 0" },
			{index: 1, id: "#eeOutdoor", numberOfEggs: 3, bonusEggs: 3, bonusTimer: 15000, buttonTimer: 10000, buttonPrev: null, buttonNext: "Go sing" , rotation:"0 -90 0" },
			{index: 2, id: "#sing1", numberOfEggs: 3, buttonTimer: 10000, buttonPrev: "Go back\noutside", buttonNext: "Go hunt\ninside" , rotation:"0 -90 25" },
			{index: 3, id: "#eeIndoorOne", numberOfEggs: 3, buttonTimer: 8000, buttonPrev: "Go back to\nsinging?", buttonNext: "Go do more\nsinging" , rotation:"-20 50 -20" },
			{index: 4, id: "#sing2", numberOfEggs: 3, buttonTimer: 6000, buttonPrev: "Go back\ninside", buttonNext: "Board game" , rotation:"0 -90 0" },
			{index: 5, id: "#articulate", numberOfEggs: 3, buttonTimer: 4000, buttonPrev: "Go back to\nsinging?", buttonNext: "Go sing\nsome more", rotation:"0 70 0" },
			{index: 6, id: "#sing3", numberOfEggs: 3, buttonTimer: 3000, buttonPrev: "Back to\nBoard game", buttonNext: "Look inside\nagain" , rotation:"0 70 0" },
			{index: 7, id: "#eeIndoorTwo", numberOfEggs: 3, buttonTimer: 3000, buttonPrev: "Return to\nsinging?", buttonNext: "Maybe sing\nsome more" , rotation:"-10 210 0" },
			{index: 8, id: "#sing4", numberOfEggs: 3, buttonTimer: 3000, buttonPrev: "Return\nindoors", buttonNext: "End", rotation:"0 115 -15" },
			{index: 9, id: "#cheers", numberOfEggs: 0, buttonTimer: 0, buttonPrev: null, buttonNext: null, rotation:"0 160 0" },
		]
		var event = events[this.data.currentEvent]
		
        // replace video source
        var videoPlayer = document.querySelector("#videoPlayer")
		videoPlayer.getAttribute('material').src.pause()
		videoPlayer.getAttribute('material').src.muted = true
        if (event.id) videoPlayer.setAttribute("src", event.id);
		videoPlayer.setAttribute('rotation', event.rotation)

        // play video
        var vidSource = document.querySelector(event.id)
        vidSource.muted = false
		// appear congrats text on last video
		if (event.index === 9) {
			document.querySelector("#victoryText").object3D.visible = true
			setTimeout(() => {
				document.querySelector("#friendsButton").object3D.visible = true
			}, 2000);
		}
		else {
        	vidSource.play()
		}
  
        // make buttons disappear
        document.querySelector("#nextButton").object3D.visible = false
        document.querySelector("#prevButton").object3D.visible = false

        // set next buttons to appear. NB scene 2 buttons appear in on-click-accept
        if (event.buttonTimer >= 1) {
          setTimeout(() => {
            this.appearButtons(event)
        }, event.buttonTimer);
       }
        
        // remove listeners
        // this.el.removeEventListener('click', this.playNextVideo);
    },
    appearButtons: function(event) {
        var prevButton = document.querySelector("#prevButton")
        var nextButton = document.querySelector("#nextButton")

        // new button text and play options
        if (event.buttonPrev) {
          document.querySelector("#prevText").setAttribute('value', event.buttonPrev)
          prevButton.setAttribute("play-video", {currentEvent: event.index - 1})
          prevButton.object3D.visible = true;
        }
        
        // new button text and play options
        if (event.buttonNext) {
          document.querySelector("#nextText").setAttribute('value', event.buttonNext)
          nextButton.setAttribute("play-video", {currentEvent: event.index + 1})
          nextButton.object3D.visible = true;
        }
    }
  })