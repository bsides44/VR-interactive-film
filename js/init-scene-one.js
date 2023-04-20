AFRAME.registerComponent('init-scene-one', {
  schema: {
    loaded: {type: 'boolean', default: false}
  },
  init: function () {
    this.onClick = this.onClick.bind(this);
    
    var videoPlayer = document.querySelector("#videoPlayer").getAttribute('material').src;
    videoPlayer.pause()

    // Establish listeners
    window.addEventListener('click', this.onClick);
    window.addEventListener('abuttondown', this.onClick);
    window.addEventListener('triggerdown', this.onClick);
    window.addEventListener('gripdown', this.onClick);
    window.addEventListener('xbuttondown', this.onClick);

    // Set welcome loader
    var intro = document.querySelector('#intro');
    var welcomeText = document.querySelector('#welcomeText');

    intro.addEventListener('progress', function() {
		var percentLoaded = 0;
		var duration = intro.duration;
		var buffered = intro.buffered;
		// video loading
		if (buffered.length > 0 && buffered.end) {
			percentLoaded = Math.round((buffered.end(0) / duration) * 100);
		}
		welcomeText.setAttribute('geometry', 'thetaLength', ((percentLoaded/100) * 360))
    });
    // video loaded
    intro.addEventListener('loadeddata', () => {
		welcomeText.emit('firstVideoLoaded', null, true)
		welcomeText.setAttribute('color', '#A10AE2')
		this.data.loaded = true
    });

  },
  onClick: function () {
	if (this.data.loaded){
		var videoPlayer = document.querySelector("#videoPlayer").getAttribute('material').src;
		var welcomeText = document.querySelector("#welcomeText")

		// Welcome text to disappear on first click
		if (welcomeText) welcomeText.parentNode.removeChild(welcomeText);

		// Video to play on first click
		if (videoPlayer) {
			var vidSource = document.querySelector("#intro")
			vidSource.muted = false
			vidSource.play()
			window.removeEventListener('click', this.onClick);
			window.removeEventListener('abuttondown', this.onClick);
			window.removeEventListener('triggerdown', this.onClick);
			window.removeEventListener('gripdown', this.onClick);
			window.removeEventListener('xbuttondown', this.onClick);
		}

		// Challenge text to appear at end of intro
		setTimeout(() => {
			this.appearChallenge()
		}, 5800);
	}
  },
  appearChallenge: function () {  
    var challengeText = document.querySelector("#challengeText")
    var acceptButton = document.querySelector("#acceptButton")
    var videoPlayer = document.querySelector("#videoPlayer")

    // Make challenge appear when video playback is at 5
    if (videoPlayer) {
      challengeText.object3D.visible = true;
      acceptButton.object3D.visible = true;
    }
  }
});