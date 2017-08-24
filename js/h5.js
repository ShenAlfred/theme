(function() {

	/**
	 * 顺序  集团->电商->金控
	 */

	/**
	 * 页面定义属性
	 * @jobPagesState 用来记录切换岗位模块状态值
	 * @oldIndex	  用来记录前一个公司岗位列表切换模块下标
	 * @currentIndex  记录当前公司岗位列表模块
	 */
	var jobsAttr = {
		jobPagesState: 0,
		oldIndex: 0,
		currentIndex: 0
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
				onSlideChangeStart: this.onSlideChangeStart,
				lazyLoading: true,
				lazyLoadingInPrevNext : true,
				lazyLoadingOnTransitionStart : true,
				lazyLoadingInPrevNextAmount : 2
			});
			return this;
		},
		onSlideChangeStart: function(swiper) {
			if( (swiper.activeIndex == 1 || swiper.activeIndex == 4 || swiper.activeIndex == 6) ) {  // && jobsAttr.jobPagesState != 4
				// jobsAttr.jobPagesState = 1;
				console.log("lock")
				swiper.disableTouchControl();
			}else {
				swiper.enableTouchControl();
			}
		},
		jumpSildeTo: function(index, speed) {
			this.swiper.slideTo(index, speed ,true);
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
				pagination : '.swiper-pagination',
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
		jumpSildeTo: function(index, speed) {
			this.swiper.slideTo(index, speed ,true);
		}	
	};

	$(function() {

		var windowHeight = document.documentElement.clientHeight,
			windowWidth = document.documentElement.clientWidth,
			mainSlides = $(".main-slide");
			mainSlides.css('height', windowHeight);
		var audio = $("#audio")[0];

		mainSwiper.newSwiper();
		jobsSwiper.newSwiper();

		function transferJob(index) {
			$(".page2").eq(index).css({
				'opacity': 1,
				'transform': 'translate3d(0,0%,0)',
				'-webkit-transform': 'translate3d(0,0%,0)',
				'transition': 'all .5s ease',
				'-webkit-transition': 'all .5s ease'
			});
			jobsAttr.oldIndex = index;
			jobsAttr.jobPagesState = 2;
		}

		/**
		 * 切换公司关于我们的内容
		 * 
		 * @param {any} index     公司下标 
		 */
		function transferCompanyAboutUs(index) {
			var logo_group = $("#company-logo-group"),
				aboutUs = $("#company-aboutUs");
			
			logo_group.children().addClass('hide').eq(index).removeClass('hide');
			aboutUs.html(index)
		}
		
		$(".changeJobItems").click(function() {
			jobsAttr.currentIndex = jobsAttr.oldIndex = $(this).attr("data-index"); 
			$(".page1").addClass('animated fadeOut');
			setTimeout(function() {
				$(".page1").hide();
			}, 1000);
			transferJob(jobsAttr.oldIndex);
			transferCompanyAboutUs(jobsAttr.currentIndex)
		});

		$(".changeJobItems-btn").click(function() {
			console.log(123)
			$(".page2").eq(jobsAttr.oldIndex).css({
				'opacity': 0,
				'transform': 'translate3d(0,100%,0)',
				'-webkit-transform': 'translate3d(0,100%,0)',
				'transition': 'all .5s ease',
				'-webkit-transition': 'all .5s ease'
			});
			var index = parseInt($(this).attr('data-index'));
			jobsAttr.currentIndex = index;
			transferJob(index);
			transferCompanyAboutUs(index);
		});

		$(".jobItem").click(function() {
			$(".page2").eq(jobsAttr.oldIndex).removeClass('fadeInUp').addClass('animated fadeOutLeft');
			$(".page3").removeClass('translate-out-x').addClass("animated fadeInRight");
			jobsAttr.jobPagesState = 4;
			var index = $(this).index();
			jobsSwiper.jumpSildeTo(index);
			mainSwiper.swiper.enableTouchControl();
		});


		$("#music").on('click', function() {
			if(audio != null) {
				if(audio.paused) {
					audio.play();
				}else {
					audio.pause();
				}
			}
		});

		/**
		 *  重置状态
		 */
		function resetState() {
			$(".page1").removeClass('animated fadeOut').attr('style', " ");
			$(".page2").attr('style', " ").eq(parseInt(jobsAttr.currentIndex)).removeClass('animated fadeOutLeft');
			$(".page3").removeClass('animated fadeInRight').addClass('translate-out-x');
		}

		/**
		 * 社會招聘點擊跳轉到page3
		 */
		$("#community-invite").on('click', function() {
			mainSwiper.jumpSildeTo(2);

		});

		//返回首页
		$("#backFirstPage").on('click', function() {
			resetState();
			mainSwiper.jumpSildeTo(0, 1000)
		});

	});

})();