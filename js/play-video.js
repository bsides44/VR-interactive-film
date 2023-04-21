AFRAME.registerComponent('play-video', {
    schema: {
        currentEvent: {type: 'number', default: 0},
      },
      init: function () {        
        this.playNextVideo = this.playNextVideo.bind(this);
        this.appearButtons = this.appearButtons.bind(this);

        this.el.addEventListener('click', this.playNextVideo);
		this.el.addEventListener('abuttondown', this.playNextVideo);
        this.el.addEventListener('triggerdown', this.playNextVideo);
        this.el.addEventListener('gripdown', this.playNextVideo);
        this.el.addEventListener('xbuttondown', this.playNextVideo);
		this.el.addEventListener('removeListeners', this.removeListeners)
    },
    playNextVideo: function() {
		var events = [
			{index: 0, id: "#intro", numberOfEggs: 0, buttonTimer: 0, buttonPrev: null, buttonNext: null, rotation:"0 -70 0" },
			{index: 1, id: "#eeOutdoor", numberOfEggs: 3, bonusEggs: 3, bonusTimer: 15000, buttonTimer: 10000, buttonPrev: null, buttonNext: "Time To\nSing" , rotation:"0 -90 0" },
			{index: 2, id: "#sing1", numberOfEggs: 3, buttonTimer: 10000, buttonPrev: "Go Back\nOutside", buttonNext: "Hunt\nInside" , rotation:"0 -90 0" },
			{index: 3, id: "#eeIndoorOne", numberOfEggs: 3, buttonTimer: 8000, buttonPrev: "Go Back To\nSinging", buttonNext: "Sing A\nNew Song" , rotation:"0 -90 0" },
			{index: 4, id: "#sing2", numberOfEggs: 3, buttonTimer: 6000, buttonPrev: "Search Inside\nAgain", buttonNext: "Board Game" , rotation:"0 -90 0" },
			{index: 5, id: "#articulate", numberOfEggs: 3, buttonTimer: 4000, buttonPrev: "Go Back To\nSinging", buttonNext: "Sing Some\nMore", rotation:"0 70 0" },
			{index: 6, id: "#sing3", numberOfEggs: 3, buttonTimer: 3000, buttonPrev: "Back To\nBoard Game", buttonNext: "Look Inside\nAgain" , rotation:"0 70 0" },
			{index: 7, id: "#eeIndoorTwo", numberOfEggs: 3, buttonTimer: 3000, buttonPrev: "Return To\nSinging", buttonNext: "One More\nSong" , rotation:"-10 210 0" },
			{index: 8, id: "#sing4", numberOfEggs: 3, buttonTimer: 4000, buttonPrev: "Look Indoors\nAgain", buttonNext: "End", rotation:"0 115 0" },
			{index: 9, id: "#cheers", numberOfEggs: 0, buttonTimer: 0, buttonPrev: null, buttonNext: null, rotation:"0 160 0" },
		]
		//NB: #eeOutdoor handled from on-click-accept
		var event = events[this.data.currentEvent]
		
		// emit playing event
		this.el.emit('videoChanged', {id: event.id});

        // replace video source
        var videoPlayer = document.querySelector("#videoPlayer")
		videoPlayer.getAttribute('material').src.pause()
		videoPlayer.getAttribute('material').src.muted = true
        if (event.id) videoPlayer.setAttribute("src", event.id);
		videoPlayer.setAttribute('rotation', event.rotation)

        // play video
        var vidSource = document.querySelector(event.id)
        vidSource.muted = false

		// last video handler
		if (event.index === 9) {
			document.querySelector("#victoryText").object3D.visible = true
			setTimeout(() => {
        document.querySelector("#victoryText").object3D.visible = false
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
          prevButton.setAttribute("play-video", {currentEvent: event.index - 1})
          prevButton.object3D.visible = true;
        }
        
        // new button text and play options
        if (event.buttonNext) {
          nextButton.setAttribute("play-video", {currentEvent: event.index + 1})
          nextButton.object3D.visible = true;
		  nextButton.components.sound.playSound();
        }
    },
	removeListeners: function() {
        this.el.addEventListener('click', this.playNextVideo);
		this.el.addEventListener('abuttondown', this.playNextVideo);
        this.el.addEventListener('triggerdown', this.playNextVideo);
        this.el.addEventListener('gripdown', this.playNextVideo);
        this.el.addEventListener('xbuttondown', this.playNextVideo);
		this.el.addEventListener('removeListeners', this.removeListeners)
    }
  })