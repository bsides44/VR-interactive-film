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
    var welcomeCircle = document.querySelector('#welcomeCircle');
    var welcomeText = document.querySelector('#welcomeText');
    var loadedText = document.querySelector('#loadedText');

    intro.addEventListener('progress', function() {
		var percentLoaded = 0;
		var duration = intro.duration;
		var buffered = intro.buffered;
		// video loading
		if (buffered.length > 0 && buffered.end) {
			percentLoaded = Math.round((buffered.end(0) / duration) * 100);
		}
		welcomeCircle.setAttribute('geometry', 'thetaLength', ((percentLoaded/100) * 360))
    });
    // video loaded
    intro.addEventListener('loadeddata', () => {
      	this.data.loaded = true
		welcomeCircle.emit('firstVideoLoaded', null, true)
    	welcomeText.object3D.visible = false;
    	loadedText.object3D.visible = true;
    });

  },
  onClick: function () {
	if (this.data.loaded){
		var videoPlayer = document.querySelector("#videoPlayer").getAttribute('material').src;
		var welcomeCircle = document.querySelector('#welcomeCircle');
		var loadedText = document.querySelector('#loadedText');

		// Welcome text to disappear on first click
		if (welcomeCircle) welcomeCircle.parentNode.removeChild(welcomeCircle);
		if (loadedText) loadedText.parentNode.removeChild(loadedText);

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
    var startButton = document.querySelector("#startButton")
    var videoPlayer = document.querySelector("#videoPlayer")

    // Make challenge appear when video playback is at 5
    if (videoPlayer) {
      challengeText.object3D.visible = true;
	  startButton.object3D.visible = true;
    }
  }
});