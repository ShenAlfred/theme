(function() {

	var Company_Jobs = [
		{
			group: {
				jobs: []
			},
		},
		{
			eb: {
			jobs: []
			}
		},
		{
			finance: {
				jobs: []
			}
		}
	];

	var url = {
		dev: 'http://116.247.81.254:8083' 
	};


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

	$(function() {

		var api = {
			getJsConfig: '/api/getJSConfig',
			recruit: '/api/recruit'
		};

		/**
		 * 微信配置和调用微信分享接口
		 */
		;(function() {

			window.shareInfo = {
				title: '商赢集团招聘',
				desc: '商赢集团招聘-desc',
				imgUrl: url.dev + '/images/jt.png',
			}

			var locationUrl = location.href;
			var params = {
        		"url": locationUrl
			};
		
			$.ajax({
				type: 'post',
				contentType: 'application/json',
				url: url.dev + api.getJsConfig,
				data: JSON.stringify(params),
				dataType: 'json',
				timeout: 10000,
				success: function(result) {
					if(result.data) {
						var r = result.data;
						wx.config({
							debug: false,
							appId: r.appId,
							timestamp: r.timestamp,
							nonceStr: r.nonceStr,
							signature: r.signature,
							jsApiList: [
								'onMenuShareTimeline', 'onMenuShareAppMessage'
							]
						});
					}
				}
			});

			wx.ready(function() {
				wx.onMenuShareAppMessage({
					title: window.shareInfo.title,
					desc: window.shareInfo.desc,
					link: location.href,
					imgUrl: window.shareInfo.imgUrl,
					type: '',
					dataUrl: '',
					success: function() {
						alert("success")
					},
					cancel: function() {
						alert("cancel")
					}
				});
				wx.onMenuShareTimeline({
					title: window.shareInfo.title,
					link: location.href,
					imgUrl: window.shareInfo.imgUrl,
					success: function() {
						alert("success")
					},
					cancel: function() {
						alert("cancel")
					}
				});
			});

		})(); 

		function getJobsData(num, type) {
			var CompanyListData;
			var def = $.Deferred();
			$.ajax({
				type: 'get',
				url: url.dev + api.recruit,
				data: {
					companyId: num
				},
				success: function(result) {
					if(result.resultList) {
						var resultList = result.resultList;
						for(var i=0, len=resultList.length; i<len; i++) {
							var json = {};
							json.name = resultList[i].position;
							json.jobsName = resultList[i].requirement;
							Company_Jobs[num-1][type].jobs.push(json);
						} 
						renderJob(type+"-jobs-warp", Company_Jobs[num-1][type], 'jobitem');
						def.resolve('data');
					}else {
						def.reject('no-data')
					}
				}
			});
			return def.promise();
		}


		var windowHeight = document.documentElement.clientHeight,
			windowWidth = document.documentElement.clientWidth,
			mainSlides = $(".main-slide");
			mainSlides.css('height', windowHeight);
		var audio = $("#audio")[0];
		var pullUp = $(".pull-up");

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
					lazyLoadingInPrevNext: true,
					lazyLoadingOnTransitionStart: true,
					lazyLoadingInPrevNextAmount: 4
				});
				return this;
			},
			onSlideChangeStart: fn_onSlideChangeStart,
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
					spaceBetween: 20,  //40
					onSlideChangeStart: this.onSlideChangeStart,
					onSetTransition: this.onSetTransition,
					onProgress: this.onProgress
				});
				return this;
			},
			onProgress: function(swiper) {
				// var i, slide, progress;
				// for (i = 0; i < swiper.slides.length; i++) {
				// 	slide = swiper.slides[i];
				// 	progress = slide.progress;
				// 	slide.style.opacity = 1 - Math.min(Math.abs(progress / 2), 1);
				// 	slide.style.webkitTransform = slide.style.transform = "translate3d(0,0," + -Math.abs(150 * progress) + "px)";
				// }
			},
			onSetTransition: function(swiper, transition) {
				// var slide;
				// for (var i = 0; i < swiper.slides.length; i++){
				// 	slide = swiper.slides[i].style;
				// 	slide.webkitTransitionDuration = slide.transitionDuration = transition + "ms";
				// }
			},
			jumpSildeTo: function(index, speed) {
				this.swiper.slideTo(index, speed ,true);
			}	
		};

		var count = 0;
		var rate = 0;
		var progress = $("#progress");
		var loadPage = $(".loading-page");
		var mainPage = $("#pages");
		var music = $(".music");
		var pullUp = $(".pull-up");
		var homePageImages = $("#homepage").find('img');
		var secondSereenImages = $("#selectpage").find('img'); 
		var thiredSereenImages = $("#flpage").find('img');
		var fourScreenImages = $("#giftpage").find('img');
		var managementImages = $("#managementpage").find('img');
		var managementpage = $(".management-page");
		var images = [];
		
		/**
		 *  存储前4章图片
		 */
		saveImages(images, homePageImages);
		saveImages(images, secondSereenImages);
		saveImages(images, thiredSereenImages);
		saveImages(images, fourScreenImages);
		saveImages(images, managementImages);

		loadImages2(images);

		mainSwiper.newSwiper();

		$.when(getJobsData(1, 'group'), getJobsData(2, 'eb'), getJobsData(3, 'finance')).done(function(result1, result2, result3){
			//職位點擊事件
			$(".jobItem").click(function() {
				$(".page2").eq(jobsAttr.oldIndex).removeClass('fadeInUp').addClass('animated fadeOutLeft');
				$(".page3").removeClass('translate-out-x').addClass("animated fadeInRight");
				jobsAttr.jobPagesState = 3;
				$(pullUp[3]).addClass('pull_fadeIn');
				var index = $(this).index();
				jobsSwiper.jumpSildeTo(index);
				mainSwiper.swiper.enableTouchControl();
			});
		});

		function fn_onSlideChangeStart(swiper) {
			if(swiper.activeIndex == 2 || swiper.activeIndex == 3) {
				$(pullUp[swiper.activeIndex-1]).addClass('pull_fadeIn');
			}
			if(swiper.activeIndex == 5) {
				$(pullUp[swiper.activeIndex-1]).addClass('pull_fadeIn');
			}
			if( (swiper.activeIndex == 1 || (swiper.activeIndex == 4 && jobsAttr.jobPagesState!=3) || swiper.activeIndex == 6) ) {
				swiper.disableTouchControl();
			}else {
				swiper.enableTouchControl();
			}
		}
		
		function autoPlayer() {
			if(audio != null) {
				audio.play();
				music.addClass('music-rotate');
			}
		}

		function saveImages(arr, images) {
			for(var i=0; i<images.length; i++) {
				arr.push(images[i]);
			}
		}
		
		function loadImages2(images) {
			var total = images.length;
			var audio = $("#audio")[0];
				audio.addEventListener('canplaythrough', function() {			
					count++;
					rate = (count/total)*100;
					progress.attr('width', rate + "%");
					if(rate >= 100) {
						showThing();
					}
				}, false);
			for(var i=0; i< total; i++) {
				(function(i){
					var src = images[i].getAttribute('c-data-src');
					images[i].setAttribute('src', src);
					images[i].onload= function() {
						count++;
						rate = (count/total)*100;
						progress.attr('width', rate + "%");
						if(rate >= 100) {
							showThing();
						}
					}
					images[i].onerror = function() {
						count++;
						rate = (count/total)*100;
						progress.attr('width', rate + "%");
						if(rate >= 100) {
							showThing();
						}
					}
				})(i);
			}
		}

		function showThing() {
			loadPage.addClass('animated fadeOut');
			mainPage.addClass('fadeInUp');
			music.removeClass('hide');
			autoPlayer();
			$(pullUp[0]).addClass('pull_fadeIn');
			setTimeout(function() {
				loadPage.remove();
			}, 1000);
		}

		function renderJob(id, job, tplid) {
			$("#"+id).empty();
			var tpl = document.querySelector("#"+ tplid).innerHTML;
			var html = juicer(tpl, job);
			$("#"+id).append(html);
		}

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
		 *  重置状态
		 */
		function resetState() {
			jobsSwiper.swiper.destroy();		//清除職位swiper對象(防止下次預覽出現的bug)
			jobsAttr.jobPagesState = 0;
			$(pullUp[3]).removeClass('pull_fadeIn');
			$(".page1").removeClass('animated fadeOut').attr('style', " ");
			$(".page2").attr('style', " ").eq(parseInt(jobsAttr.currentIndex)).removeClass('animated fadeOutLeft');
			$(".page3").removeClass('animated fadeInRight').addClass('translate-out-x');
		}

		/**
		 * 切换公司关于我们的内容
		 * 
		 * @param {any} index     公司下标 
		 */
		function transferCompanyAboutUs(index) {
			var logo_group = $("#company-logo-group"),
				mail_address = $(".mail-address"),
				aboutUs = $("#company-aboutUs");
			logo_group.children('.page').addClass('hide').eq(index).removeClass('hide');
			mail_address.addClass('hide').eq(index).removeClass('hide');
			aboutUs.html(index)
		}
		
		//集團 電商 金服大按鈕點擊事件
		$(".changeJobItems").click(function() {
			var type = $(this).attr("data-type");
			jobsAttr.currentIndex = jobsAttr.oldIndex = $(this).attr("data-index"); 
			$(".page1").addClass('animated fadeOut');
			setTimeout(function() {
				$(".page1").hide();
			}, 1000);
			renderJob("jobs-warp", Company_Jobs[jobsAttr.currentIndex][type], 'jobs');
			jobsSwiper.newSwiper();				//牛一個swiper
			transferJob(jobsAttr.oldIndex);
			transferCompanyAboutUs(jobsAttr.currentIndex)
		});

		//集團 電商 金服小按鈕點擊事件
		$(".changeJobItems-btn").click(function() {
			$(".page2").eq(jobsAttr.oldIndex).css({
				'opacity': 0,
				'transform': 'translate3d(0,100%,0)',
				'-webkit-transform': 'translate3d(0,100%,0)',
				'transition': 'all .5s ease',
				'-webkit-transition': 'all .5s ease'
			});
			var index = parseInt($(this).attr('data-index')),
				type = $(this).attr('data-type');
			jobsAttr.currentIndex = index;
			jobsSwiper.swiper.destroy();
			renderJob("jobs-warp", Company_Jobs[jobsAttr.currentIndex][type], 'jobs');
			jobsSwiper.newSwiper();				//先銷毀之前的再牛一個
			transferJob(index);
			transferCompanyAboutUs(index);
		});

		/**
		 * 社會招聘點擊跳轉到page3
		 */
		$("#community-invite").on('click', function() {
			mainSwiper.jumpSildeTo(2);
		});
		$("#management-invite").on('click', function() {
			$("#management").removeClass('hidepage').addClass('showpage');
		});

		music.on('click', function() {
			if(audio != null) {
				if(audio.paused) {
					audio.play();
					music.addClass('music-rotate');
				}else {
					audio.pause();
					music.removeClass('music-rotate')
				}
			}
		});

		//返回首页
		$("#backFirstPage").on('click', function() {
			resetState();
			mainSwiper.jumpSildeTo(0, 1000)
		});

		//分享层
		$("#shareBtn").on('click', function() {
			$('#share-layer').show();
		});
		$('#share-layer').on('click', function() {
			$(this).hide();
		});

		//关于我们层
		(function(){
			var pop = $("#aboutUs-pop"),
				pop_layer = $("#pop-layer"),
				intro = $("#intro");

			pop.find('.pop-close').on('click', function() {
				pop.addClass('hide');
				pop_layer.addClass('hide');
				managementpage.removeClass('overflow');
			});

			intro.on('click', function() {
				var scrollTop = managementpage.scrollTop();
				pop_layer.css('top', scrollTop);
				pop.removeClass('hide');
				pop_layer.removeClass('hide');
				managementpage.addClass('overflow');
			});

		})();

	});

})();