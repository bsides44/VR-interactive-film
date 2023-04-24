AFRAME.registerComponent('init-scene-one', {
	schema: {
	  	loaded: {type: 'boolean', default: false}
	},
	init: function () {
		this.onClick = this.onClick.bind(this);
		this.switchToMobileUI = this.switchToMobileUI.bind(this);
		
		var videoPlayer = document.querySelector("#videoPlayer").getAttribute('material').src;
		videoPlayer.pause()

		// Check for mobile
		if (AFRAME.utils.device.isMobile()) this.switchToMobileUI()
  
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
		var vrText = document.querySelector('#vrText');
	
		intro.addEventListener('progress', () => {
			var percentLoaded = 0;
			var duration = intro.duration;
			var buffered = intro.buffered;
			// video loading
			if (buffered.length > 0 && buffered.end) {
				percentLoaded = Math.round((buffered.end(0) / duration) * 100);
			}
			if (!this.data.loaded) {
				welcomeCircle.setAttribute('geometry', 'thetaLength', ((percentLoaded/100) * 360))
			}
		});
		// video loaded
		intro.addEventListener('loadeddata', () => {
			this.data.loaded = true
			welcomeCircle.emit('firstVideoLoaded', null, true)
			welcomeText.object3D.visible = false;
			if (!vrText.getAttribute('visible')) {
				loadedText.object3D.visible = true;
			}
		});

		intro.addEventListener('timeout', (e) => {
			console.log('timeout', e)
		})
		intro.addEventListener('error', (e) => {
			console.log('error', e)
		})

	  setTimeout(() => {
			if (!this.data.loaded){
				this.data.loaded = true
				welcomeCircle.emit('firstVideoLoaded', null, true)
				welcomeText.object3D.visible = false;
				if (!vrText.getAttribute('visible')) {
					loadedText.object3D.visible = true;
				}
			}
		}, 12000);
	},
	onClick: function () {
		if (this.data.loaded){
			var videoPlayer = document.querySelector("#videoPlayer").getAttribute('material').src;
			var welcomeCircle = document.querySelector('#welcomeCircle');
			var loadedText = document.querySelector('#loadedText');
			var vrText = document.querySelector('#vrText');
	
			// Welcome text to disappear on first click
			if (welcomeCircle) welcomeCircle.parentNode.removeChild(welcomeCircle);
			if (loadedText) loadedText.parentNode.removeChild(loadedText);
			if (vrText) vrText.parentNode.removeChild(vrText);

	
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
	
		challengeText.setAttribute('class', "cursor-listener")
		startButton.setAttribute('class', "cursor-listener")
	
		// Make challenge appear when video playback is at 5
		if (videoPlayer) {
			challengeText.object3D.visible = true;
			startButton.object3D.visible = true;
		}
	},
	switchToMobileUI: function () {
		this.shrink(document.querySelector("#welcomeText"), 2, 0, 0.3)
		this.shrink(document.querySelector("#welcomeCircle"), 2, 0, 0.3)
		this.shrink(document.querySelector("#loadedText"), 2, 0, 0.3)
		this.shrink(document.querySelector("#challengeText"), 2, 0, 0.3)
		this.shrink(document.querySelector("#startButton"), 2, 0, 0.3)
		this.shrink(document.querySelector("#prevButton"), 2, 0.5)
		this.shrink(document.querySelector("#nextButton"), 2, -0.5)
		this.shrink(document.querySelector("#victoryText"), 2, 0, 0.3)
		this.shrink(document.querySelector("#friendsButton"), 2, 0, 0.3)
		this.shrink(document.querySelector("#eggIconOne"), 1.2, 0.3)
		this.shrink(document.querySelector("#eggIconTwo"), 1.2, 0.3)
		this.shrink(document.querySelector("#eggIconThree"), 1.2, 0.3)
		this.shrink(document.querySelector("#eggIconFour"), 1.2, 0.3)
		this.shrink(document.querySelector("#bonusIconOne"), 1.2, 0.3)
		this.shrink(document.querySelector("#bonusIconTwo"), 1.2, 0.3)
		this.shrink(document.querySelector("#bonusIconThree"), 1.2, 0.3)
		this.shrink(document.querySelector("#eggCount"), 1.2, 0.3)
	  },
	  shrink(element, scale, posX, posY = 0){
		var oldScale =  element.getAttribute('scale')
		var oldPosition=  element.getAttribute('position')

		element.setAttribute('scale', {x: oldScale.x/scale, y: oldScale.y/scale, z: oldScale.z/scale})
		element.setAttribute('position', {x: oldPosition.x + posX, y: oldPosition.y + posY, z: oldPosition.z})
	  },
  });