(function() {


	var JOBS = [
		{
			name: '集团',
			jobs: [
				{
					JobName: '总裁办秘书',
					description: [
						'好文笔、好身手、好头脑！',
						'来吧，欢迎和我们聊聊！',
						'聊一聊你在秘书这条不归路上的诗和远方。',
						'会议纪要、客户接待、资料归档这些真的炉火纯青，不说且熟。',
						'请任性的说：放心把你们总裁交给我吧！'
					]
				},
				{
					JobName: '投融资副总监',
					description: [
						'虽然是副的，但依然要你对金融资本市场运筹帷幄、谈笑风生！',
						'来吧！欢迎和我们聊聊！',
						'聊一聊你那投融资并购项目的惊险与刺激；',
						'一不小心就聊出个成百上千亿项目来；',
						'如果你有著名投行或投资机构从业经历；有CPA、律师等资格证书统统优先；'
					]
				},
				{
					JobName: '审计经理',
					description: [
						'数学系全能王：审计方案、报告、财务风险评估----，千言和万语都离不开精密逻辑；',
						'来吧，欢迎和我们聊聊！',
						'聊一聊你对审计精神的一切理解！',
						'听说，你在四大呆过？',
						'这真的是一个加分项！'
					]
				},
				{
					JobName: '薪酬绩效主管',
					description: [
						'人类的数据你来分析，看着辣么多五花八门的考勤绩效，头发不乱就好；',
						'来吧，欢迎和我们聊聊！',
						'聊一聊你是否有把绩效做错被人骂的经历！',
						'听说你已把薪酬绩效管理体系玩的走火入魔？',
						'OK，很好！'
					]
				},
				{
					JobName: '税务主管',
					description: [
						'对国家税务政策、税法了如指掌、信手拈来！',
						'来吧！欢迎和我们聊聊！',
						'聊一聊税收的核算、缴纳、记录、沟通及其他税务管理有关工作；',
						'对报表之类驾轻就熟，具有集团化财税经验100%加分；'
					]
				}
			]
		},
		{
			name: '电商',
			jobs: [
				{
					JobName: '电商运营经理',
					description: [
						'一句话说尽你的能量，那就是对电商渠道平台的运营及销售目标负责；',
						'给你一个团队，你能把销售数据绕地球六圈',
						'当然对达成目标的营销与执行你看着办好了；',
						'OK，剩下的就等你来聊一聊了'
					]
				},
				{
					JobName: '电商运营主管（淘宝、天猫店长）',
					description: [
						'当店长听起来好高大上的样子，那么就来过把瘾吧！',
						'来吧！欢迎和我们聊聊！',
						'聊一聊要怎么在线上开店还能保证转化率？',
						'全面掌握线上开店流程，熟悉管理一家店铺的所有事务；',
						'总而言之，让大家停止剁手，就算你赢了。'
					]
				},
				{
					JobName: '物流类目主管',
					description: [
						'梳类目就跟梳头发一样拉风，部门协调这件事对你来说跟玩似的；',
						'来吧！欢迎和我们聊聊！',
						'聊一聊你对仓储、配送还有电商的一切理解；',
						'能写能说懂管理，并能确保项目质量and执行进度；',
						'物流收退、发送还有仓内操作熟到可以煮饭，那就来吧来吧来吧！。'
					]
				},
				{
					JobName: '工业工程师',
					description: [
						'听说你是电商工程界的杠把子？',
						'来吧！欢迎和我们聊聊！',
						'聊一聊关于标准制定、LAYOUT、流程改善、动作分析、绩效统计；',
						'对于标准化推进、工时测定、现场改善等掌握着独门物流数据分析方法；',
						'熟练使用Word、Excel、PPT、Visio等办公软件，熟练使用AutoCAD，并掌握一款3D绘图软件。'
					]
				},
				{
					JobName: '客服主管',
					description: [
						'对于各类“闻所未闻”的问题及投诉总能做到云淡风轻；',
						'来吧！欢迎和我们聊聊！',
						'聊一聊那些与客户剪不断理还乱的故事！',
						'听说你已把客服流程玩到东方不败；',
						'来吧，把你的标准化服务再升级成独孤求败。'
					]
				},
				{
					JobName: '电商客服',
					description: [
						'亲：很高兴为您服务哦！',
						'客户虐你千百遍，你待客户如初恋？',
						'在线回答各种“奇葩”问题；',
						'这可真是一出好戏啊！反正你的工作就是各种聊；',
						'那么先来和我们聊聊关于聊天这件事；',
						'怎么聊，才出彩？你说了算！'
					]
				},
				{
					JobName: '结算专员',
					description: [
						'能计会算爱报表；',
						'“变态”到小数点后四位都不融错过；',
						'来吧！欢迎和我们聊一聊！',
						'文学固然精彩，但数的清字数算你能耐；',
						'当然内控、税务管理、ERP系统开发像追剧一样精彩；',
						'对你来说，无数字不精彩'
					]
				},
				{
					JobName: '项目实施运维',
					description: [
						'对信息系统负责；',
						'比如：调研、分析、并提供优秀的解决方案；',
						'还比如：参与IT项目实施及技术支持全过程；',
						'那么欢迎你来聊一聊这个全过程；',
						'Java/.Net在你面前就跟个小屁孩一样；',
						'要聊就聊个痛快'
					]
				},
				{
					JobName: '招商专员',
					description: [
						'做的了调研、谈的了买卖~爱沟通、善计划；',
						'来吧，欢迎和我们聊聊！',
						'聊一聊那招商业绩的荣誉感！',
						'听说，你就爱挑战更高薪酬？',
						'那么，来就对了！',
					]
				}
			]
		},
		{
			name: '金服',
			jobs: [
				{
					JobName: '金控副总裁',
					description: [
						'霸道总裁诞生记！',
						'来吧，欢迎和我们聊聊！',
						'聊一聊你对金融战略化的深谋远虑；',
						'具备丰富的金融行业全面运作经验，对平台板块的组建驾轻就熟；',
						'高大上的你对保险、证券、银行均有所及，你的见解就是一个金融新时代。'
					]
				},
				{
					JobName: '融租总经理',
					description: [
						'自带光环的金融界未来之星；',
						'来吧，欢迎谱写融资租赁的金融史；',
						'在融租领域叉过房、浪过车，资产端玩的溜溜转；',
						'写的一手好方案~谈的项目永辉煌',
						'作为空降高管，你的金融资历值得好好聊一聊'
					]
				},
				{
					JobName: '清算经理',
					description: [
						'在金融机构当清算经理，听起来就足够炫酷；',
						'来吧，欢迎和我们聊聊！',
						'聊一聊你对结算操作流程的精益求精；',
						'因为你要面对平台的海量收回款数据，一笔一笔所向披靡；',
						'从此你与马虎大意绝缘，生涯里满满精确；'
					]
				},
				{
					JobName: '运维工程师',
					description: [
						'都说你们技术宅？',
						'加班加到没头发？',
						'总是与黑客死战到底？',
						'来吧，欢迎和我们聊聊！',
						'聊一聊作为一个攻城狮右手编程史',
						'看千古风流人物总被代码破？'
					]
				},
				{
					JobName: '苏州车辆评估师',
					description: [
						'醉美江南、怡情苏杭；',
						'你可以不是苏州级才子佳人，但绝对深喑二手车市场；',
						'来吧！欢迎和我们聊聊！',
						'聊一聊对车辆的“毒辣”级精准评估；',
						'作为一个资产评估师，不权威还怎么在江湖混？',
						'所以，取得二手车评估师或二手车鉴定评估师资格证书就加分啦！',
						'开的一车好车，要拿个C证以上更好；',
						'车辆登记抵押这件事放心交给你了；'
					]
				}
			]
		}
	]

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
					lazyLoadingInPrevNext : true,
					lazyLoadingOnTransitionStart : true,
					lazyLoadingInPrevNextAmount : 2
				});
				return this;
			},
			onSlideChangeStart: function(swiper) {
				if( (swiper.activeIndex == 1 || swiper.activeIndex == 4 || swiper.activeIndex == 6) ) {
					pullUp.addClass('hide');
					swiper.disableTouchControl();
				}else {
					pullUp.removeClass('hide');
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

		mainSwiper.newSwiper();
		renderJob("group-jobs-warp", JOBS[0], 'jobitem');
		renderJob("eb-jobs-warp", JOBS[1], 'jobitem');
		renderJob("finance-jobs-warp", JOBS[2], 'jobitem');

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
		
		//集團 電商 金服大按鈕點擊事件
		$(".changeJobItems").click(function() {
			jobsAttr.currentIndex = jobsAttr.oldIndex = $(this).attr("data-index"); 
			$(".page1").addClass('animated fadeOut');
			setTimeout(function() {
				$(".page1").hide();
			}, 1000);
			renderJob('jobs-warp',JOBS[jobsAttr.currentIndex], 'jobs');
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
			var index = parseInt($(this).attr('data-index'));
			jobsAttr.currentIndex = index;
			jobsSwiper.swiper.destroy();
			renderJob('jobs-warp',JOBS[jobsAttr.currentIndex], 'jobs');
			jobsSwiper.newSwiper();				//先銷毀之前的再牛一個
			transferJob(index);
			transferCompanyAboutUs(index);
		});

		//職位點擊事件
		$(".jobItem").click(function() {
			$(".page2").eq(jobsAttr.oldIndex).removeClass('fadeInUp').addClass('animated fadeOutLeft');
			$(".page3").removeClass('translate-out-x').addClass("animated fadeInRight");
			jobsAttr.jobPagesState = 3;
			pullUp.removeClass('hide');
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
			jobsSwiper.swiper.destroy();		//清除職位swiper對象(防止下次預覽出現的bug)
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