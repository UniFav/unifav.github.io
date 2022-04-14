	"use strict"
	var durationTween;
	var durationTweenWaveOne;
	var durationTweenWaveTwo;
	var endOffsetOne;
	var endOffsetTwo;
	var triggerHookTwo;

	let window_width = $(window).width();
	let window_height = $(window).height();
	
$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger').toggleClass('openMenu');
		$('.menu').toggleClass('openMenu');
		$('header').toggleClass('openMenu');
		$('nav').toggleClass('openMenu');
	});
	
		if (window_width < 420) {
			$('#waveTextOne').attr('startOffset', '-2000%');
			$('#waveTextTwo').attr('startOffset', '2250%');
			durationTween = "35%";
			durationTweenWaveOne = "200px";
			durationTweenWaveTwo = "250px";
			endOffsetOne = "100";
			endOffsetTwo = "100";
			triggerHookTwo = "onEnter";
		}
		else{
			$('#waveTextOne').attr('startOffset', '-700%');
			$('#waveTextTwo').attr('startOffset', '2250%');
			durationTween = "35%";;
			durationTweenWaveOne = "84%";
			durationTweenWaveTwo = "24%";
			endOffsetOne = "1000";
			endOffsetTwo = "300";
			triggerHookTwo = "onLeave";
		}

	// 	// init controller
	var controller = new ScrollMagic.Controller();

	
	// build tween
	var tween = TweenMax.to("#target", 1, {opacity: 0});
	var tweenWaveOne = TweenMax.to("#waveTextOne", 1, {attr:{startOffset: endOffsetOne}});
	var tweenWaveTwo = TweenMax.to("#waveTextTwo", 1, {attr:{startOffset: endOffsetTwo}});

	// build scene and set duration to window height
	var scene = new ScrollMagic.Scene({triggerHook: "onLeave", triggerElement: "#trigger", duration: durationTween})
		.setTween(tween)
		// .addIndicators()
		.addTo(controller);
	var scene = new ScrollMagic.Scene({triggerHook: triggerHookTwo, triggerElement: "#triggerTwo", duration: durationTweenWaveOne})
		.setTween(tweenWaveOne)
		// .addIndicators()
		.addTo(controller);
	var scene = new ScrollMagic.Scene({triggerHook: triggerHookTwo, triggerElement: "#triggerThree", duration: durationTweenWaveTwo})
		.setTween(tweenWaveTwo)
		// .addIndicators()
		.addTo(controller);
	//Альтернативная версия плавного исчезновения при скроле

	// window.addEventListener('scroll', function() {
	// 	if(window.scrollY < 160)
	// 	document.querySelector('.mainContainer').style.opacity = 80 / window.scrollY;
	// 	else if(window.scrollY < 200)
	// 	document.querySelector('.mainContainer').style.opacity = 40 /(window.scrollY - 80);
	// 	else if(window.scrollY < 220)
	// 	document.querySelector('.mainContainer').style.opacity = 20 /(window.scrollY - 120);
	// 	else if(window.scrollY < 240)
	// 	document.querySelector('.mainContainer').style.opacity = 10 /(window.scrollY - 170);
	// 	else if(window.scrollY > 240)
	// 	document.querySelector('.mainContainer').style.opacity = 0;
	// 	console.log(window.scrollY);
	// });

	//Вторая альтернативная версия плавного исчезновения при скроле

	// $(window).scroll(function() {
	// 	var height = $(window).scrollTop();              // Текущая позиция  скрола
	// 	$(".mainContainer").css("opacity", (230 - height) / 100); // Так как нужно указывать прозрачность вроде .50 и т.д., то делим на 100
	//   });

		//Альтернативная версия плавного появления текста при скроле
	// const Paths = document.querySelectorAll('textPath');
	// window.addEventListener('scroll', function() {
	// 	Paths[0].setAttribute('startOffset', window.scrollY*3.5 - 2000);
	// 	Paths[1].setAttribute('startOffset',2500 - window.scrollY*3);
	// 	Paths[2].setAttribute('startOffset',2555 - window.scrollY*3);
	// 	Paths[3].setAttribute('startOffset',window.scrollY*3.5 - 2940);
	// 	console.log(window.scrollTop);
	// });
});

