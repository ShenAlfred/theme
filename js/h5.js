(function() {

	/**
	 * 页面定义属性
	 * @jobPagesState 用来记录切换岗位模块状态值
	 */
	var jobsAttr = {
		jobPagesState: 0,
		controllerPoint: 1500
	};

	/**
	 * 一级屏幕滑动
	 * @domName swiper传入的domName节点
	 * @direction swiper方向
	 * @swiper	保存Swiper对象
	 */
	var mainSwiper = {
		domName: '#main-page',
		direction:	'vertical',
		swiper: null,
		newSwiper: function() {
			this.swiper = new Swiper(this.domName, {
				direction: this.direction,
				onSlideChangeStart: this.onSlideChangeStart
			});
			return this;
		},
		onSlideChangeStart: function(swiper) {
			if(swiper.activeIndex == 1 && jobsAttr.jobPagesState != 3) {
				jobsAttr.jobPagesState = 1;
				swiper.disableTouchControl();
			}
		},
		jumpSildeTo: function(index) {
			this.swiper.slideTo(index, 0 ,false);
		}	
	};

	/**
	 * 二级屏幕滑动(职位滑动)
	 * @domName swiper传入的domName节点
	 * @swiper	保存Swiper对象
	 */
	var jobsSwiper = {
		domName: '#jobs-page',
		swiper: null,
		newSwiper: function() {
			this.swiper = new Swiper(this.domName, {
				centeredSlides: true,
				watchSlidesProgress: true,
				slidesPerView: 'auto',
				spaceBetween: 40,
				onSlideChangeStart: this.onSlideChangeStart,
				onSetTransition: this.onSetTransition,
				onProgress: this.onProgress
			});
			return this;
		},
		onProgress: function(swiper) {
			var i, slide, progress;
			for (i = 0; i < swiper.slides.length; i++) {
				slide = swiper.slides[i];
				progress = slide.progress;
				slide.style.opacity = 1 - Math.min(Math.abs(progress / 2), 1);
				slide.style.webkitTransform = slide.style.transform = "translate3d(0,0," + -Math.abs(150 * progress) + "px)";
			}
		},
		onSetTransition: function(swiper, transition) {
			var slide;
			for (var i = 0; i < swiper.slides.length; i++){
				slide = swiper.slides[i].style;
				slide.webkitTransitionDuration = slide.transitionDuration = transition + "ms";
			}
		},
		jumpSildeTo: function(index) {
			this.swiper.slideTo(index, 0 ,false);
		}	
	};

	$(function() {

		var windowHeight = document.documentElement.clientHeight,
			windowWidth = document.documentElement.clientWidth,
			mainSlides = $(".main-slide");
			mainSlides.css('height', windowHeight);

		mainSwiper.newSwiper();
		jobsSwiper.newSwiper();

		function changeJobs(id, index) {
			var idName = id.split('-')[0];
			$("#"+ idName + "-jobs").removeClass('translate-out-y').addClass('animated fadeInUp');
			setTimeout(function() {
				$("#"+ idName + "-jobs").removeClass('animated fadeInUp');
				oldIndex = parseInt(id.split('-')[2]) >= 0 ? parseInt(id.split('-')[2]) : index;
				isChange = true;
			}, jobsAttr.controllerPoint);
			jobsAttr.jobPagesState = 2;
		}

		var oldIndex = 0;
		var isChange = true;
		var audio = $("#audio")[0];

		$(".changeJobItems").click(function() {
			if(isChange) {
				isChange = false;
				var id = $(this).attr('id');
				oldIndex = $(this).attr("data-index");
				$(".page1").addClass('animated fadeOut');
				setTimeout(function() {
					$(".page1").hide();
				}, 1000);
				changeJobs(id, oldIndex);
			}
		});

		$(".changeJobItems-btn").click(function() {
			if(isChange) {
				isChange = false;
				$(".page2").eq(oldIndex).removeClass('translate-out-y').addClass('animated fadeOutDown');
				setTimeout(function() {
					$(".page2").eq(oldIndex).removeClass('animated fadeOutDown').addClass('translate-out-y');
				}, jobsAttr.controllerPoint);
				var id = $(this).attr('id');
				changeJobs(id);
			}
		});

		$(".jobItem").click(function() {
			if(isChange) {
				$(".page2").eq(oldIndex).removeClass('fadeInUp').addClass('animated fadeOutLeft');
				$(".page3").removeClass('translate-out-x').addClass("animated fadeInRight");
				jobsAttr.jobPagesState = 3;
				var index = $(this).index();
				jobsSwiper.jumpSildeTo(index);
				mainSwiper.swiper.enableTouchControl();
			}
		});

		audio.oncanplay = function() {
			document.addEventListener('touchstart', function() {
				audio.play();
			});
		}

		$("#music").on('click', function() {
			if(audio != null) {
				if(audio.paused) {
					audio.play();
				}else {
					audio.pause();
				}
			}

		});

		$("#backFirstPage").on('click', function() {
			mainSwiper.jumpSildeTo(0)
		});

	});

})();