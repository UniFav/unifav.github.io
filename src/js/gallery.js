"use strict"

	function goLazyLoad() {
		$('img.lazy').lazyload({
			threshold: 300,
		});
	}
	goLazyLoad();
	$('.arrowDownMain').click(function() {
		$('body, html').animate({scrollTop: ($(window).height()+270)}, 800);
	});
// сортировка
	// в продаже                         класс onSale
	$('#canBuyButton').click(function() {
		$('.divImg').each(function (index, value) { 
			if($(this).hasClass('onSale'))
				$(this).css({display: "grid",})
			else
				$(this).css({display: "none",})
		  });
	});

	// проданно                         класс sold
	$('#soldButton').click(function() {
		$('.divImg').each(function (index, value) { 
			if($(this).hasClass('sold'))
				$(this).css({display: "grid",})
			else
				$(this).css({display: "none",})
		  });
	});

	// все картины                         класс 
	$('#showAllButton').click(function() {
		$('.divImg').each(function (index, value) { 
				$(this).css({display: "grid",})
		  });
	});

	// выделение активной кнопки и нахождение id первой и последней картины
	$('.buttons').children('input').click(function() {
		goLazyLoad();

		$('.buttons').children('input').removeClass('activeButton');
		$(this).addClass('activeButton');

		let lastIdDiv = $('.divImg').not('[style="display: none;"]').last();
		lastId = Number(lastIdDiv.attr('id'));
		let firstIdDiv = $('.divImg').not('[style="display: none;"]').first();
		firstId = Number(firstIdDiv.attr('id'));
		var onlyOne = "#" + firstId;
		$(onlyOne).children('.fullDivImg').children('.fullImg').children('.goLeft').removeAttr('style');
		$(onlyOne).children('.fullDivImg').children('.fullImg').children('.goRight').removeAttr('style');
		if(firstId == lastId) {
			$(onlyOne).children('.fullDivImg').children('.fullImg').children('.goLeft').css('display', 'none');
			$(onlyOne).children('.fullDivImg').children('.fullImg').children('.goRight').css('display', 'none');
		}
		
	})

function loadImgCube(firstImgId, goForward) {
	var idTemp = firstImgId;
	if(!goForward)
	idTemp -= 6;
	var idSrc;
	var $cube = $('.carusel').children('.perspective').children('.cube')
	var visibleImgCount = $('.divImg').length;
	var goImg = visibleImgCount - firstImgId;
	if(goForward)
	idTemp++;
	$cube.each(function(){
		$(this).children().children('img').attr('src', '')
	})

	if(goImg >= 1 || !goForward){
		var idNext = "#" + idTemp;
		idTemp++;
		// idSrc = $(idNext).children('.divImgMin').children('img').attr('src')
		// if(idSrc == null)
		idSrc = $(idNext).children('.divImgMin').children('img').attr('data-original')
		$cube.children('.front').children('img').attr('src', idSrc)
	}
	else{
		$cube.children('.front').children('img').attr('src', '')
	}
		
	if(goImg >= 2 || !goForward){
		var idNext = "#" + idTemp;
		idTemp++;
		idSrc = $(idNext).children('.divImgMin').children('img').attr('data-original')
		$cube.children('.right').children('img').attr('src', idSrc)
	}
	else{
		$cube.children('.right').children('img').attr('src', '')
	}
		
	if(goImg >= 3 || !goForward){
		var idNext = "#" + idTemp;
		idTemp++;
		idSrc = $(idNext).children('.divImgMin').children('img').attr('data-original')
		$cube.children('.back').children('img').attr('src', idSrc)
	}
	else{
		$cube.children('.back').children('img').attr('src', '')
	}
		
	if(goImg >= 4 || !goForward){
		var idNext = "#" + idTemp;
		idTemp++;
		idSrc = $(idNext).children('.divImgMin').children('img').attr('data-original')
		$cube.children('.top').children('img').attr('src', idSrc)
	}
	else{
		$cube.children('.top').children('img').attr('src', '')
	}
		
	if(goImg >= 5 || !goForward){
		var idNext = "#" + idTemp;
		idTemp++;
		idSrc = $(idNext).children('.divImgMin').children('img').attr('data-original')
		$cube.children('.left').children('img').attr('src', idSrc)
	}
	else{
		$cube.children('.left').children('img').attr('src', '')
	}
	
	if(goImg >= 6 || !goForward){
		var idNext = "#" + idTemp;
		idTemp++;
		idSrc = $(idNext).children('.divImgMin').children('img').attr('data-original')
		$cube.children('.bottom').children('img').attr('src', idSrc);
	}
	else{
		$cube.children('.bottom').children('img').attr('src', '')
	}
}
var interactive3d = true;
	$('.button3d').click(function() {
		if(!$('.smallOrBig').is(':visible')){
			if(typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function'){
				requestAccess();
			}
		}
		else{

		if(interactive3d)
		{
			interactive3d = false;
			$('.carusel').off();
			$('.perspective').removeAttr('style')
			$('.button3d').css({
				textDecoration: 'line-through',
				color: "rgb(231, 54, 54)",
			});
		}
		
		else{
			interactive3d = true;
			$('.button3d').css({
				textDecoration: 'none',
				color: 'white',
			});

			$('.carusel').on( "mousemove", function( event ) {
				var caruselWidth = $('.carusel').width();
				var caruselHeight = $('.carusel').height();
				var	X = caruselWidth*1.3 - event.pageX*1.5;
				var	Y = caruselHeight*1.7 - event.pageY*2.5;
				$('.perspective').attr('style','perspective-origin:' + X + 'px ' + Y + 'px');
			});	
		}
					
	}
	});

	function requestAccess(){
		DeviceOrientationEvent.requestPermission().then(response => {
			if(response == 'granted'){
				permissionGranted = true;
			}
		}).catch(console.error);
	}

	alert("IT SWORK");
	if($('.smallOrBig').is(':visible')){
		$('.carusel').on( "mousemove", function( event ) {
			var caruselWidth = $('.carusel').width();
			var caruselHeight = $('.carusel').height();
			var	X = caruselWidth*1.3 - event.pageX*1.5;
			var	Y = caruselHeight*1.7 - event.pageY*2.5;
			$('.perspective').attr('style','perspective-origin:' + X + 'px ' + Y + 'px');
			if(interactive3d==false){
				$(this).off();
			}
		});	
		console.log('NOT PK')
	}
	else if(!$('.smallOrBig').is(':visible')){
		window.addEventListener("deviceorientation", function(event) {
			var caruselWidth = $('.carusel').width();
			var caruselHeight = $('.carusel').height();
			var	X = caruselWidth - event.alpha*1.5;
			var	Y = caruselHeight - event.beta*3;
			// alert(event.beta + ' ' + event.gamma);
			$('.perspective').attr('style','perspective-origin:' + X + 'px ' + Y + 'px');
			// console.log("ok")
			// if(interactive3d==false){
			// 	$(this).off();
			// }
			$('.logo a').text(event.beta + '  ' + event.alpha);
		});
	}

	loadImgCube(0, true);
	var lastId = $('.divImg').length;
	var firstId = 1;
	var scrollPrev = 0;
	var countSlide = 1;
	var countImg = 1;
	$('.numberOfImage').text(1);
	$('.previousSlide').click(function() {
		$('.numberOfImage').text(countImg-1);
		if(countSlide == 1 && countImg == 1){
			countImg = lastId;
			var goLastId = lastId;
			countSlide = 6;

			countSlide = lastId;
			while(countSlide>=6){countSlide -=6;}
			++countSlide;
			countImg = goLastId + 1;
			loadImgCube(goLastId +(8 - countSlide), false);
			var goToLastId = true;
			$('.numberOfImage').text(lastId);
		}
		if(countSlide == 1){
			$('.cube').css({
				transform: 'rotateX(-90deg) rotateY(-180deg) rotateZ(180deg) translate3d(0px , -20vh, -200px)',
			});
			if(countImg > 1) 
			loadImgCube(countImg, false);
		}
		else if(countSlide == 2){
			$('.cube').css({
				transform: 'rotateX(0deg) rotateY(0deg)',
				animation: 'none',
				
			});
		}
		else if(countSlide == 3){
			$('.cube').css({
				transform: 'rotateX(0deg) rotateY(-90deg)',
				animation: 'none',
			});
		}
		else if(countSlide == 4){
			$('.cube').css({
				transform: 'rotateX(0deg) rotateY(-180deg)',
				animation: 'none',
			});
		}
		else if(countSlide == 5){
			$('.cube').css({
				transform: 'rotateX(-90deg) rotateY(-180deg)  rotateZ(0deg) translate3d(0px , -200px, -200px)',
				animation: 'none',
			});
		}
		else{
			$('.cube').css({
				transform: 'rotateX(-90deg) rotateY(-180deg) rotateZ(90deg) translate3d(0px , -200px, -200px)',
				animation: 'none',
			});
			countSlide = 6;
			if(goToLastId == true){
			countSlide = lastId;
			while(countSlide>6){countSlide -=6;}
			++countSlide;
			goToLastId = false;
			}
		}
		
		if(countImg > 0)
		--countImg;
		--countSlide;
	});

	$('.nextSlide').click(function() {
		$('.numberOfImage').text(countImg+1);
		var imgCount = $('.divImg').length;
		if(countImg == imgCount){
			countImg = 0;
			countSlide = 0;
			loadImgCube(countImg, true);
			$('.cube').css({
				transform: 'rotateY(0deg) rotateX(0deg) rotateZ(0deg) translate3d(0px , 0px, 0px)',
				animation: 'none',
			});
			$('.numberOfImage').text(1);
		}
		else{
		if(countSlide == 1){
			$('.cube').css({
				transform: 'rotateX(0deg) rotateY(-90deg) rotateZ(0deg)',
			});
		}
		else if(countSlide == 2){
			$('.cube').css({
				transform: 'rotateX(-0deg) rotateY(-180deg) ',
				animation: 'none',
			});
		}
		else if(countSlide == 3){
			$('.cube').css({
				transform: 'rotateX(-90deg) rotateY(-180deg) rotateZ(0deg) translate3d(0px , -200px, -200px)',
				animation: 'none',
			});
		}
		else if(countSlide == 4){
			$('.cube').css({
				transform: 'rotateX(-90deg) rotateY(-180deg) rotateZ(90deg) translate3d(0px , -200px, -200px)',
				animation: 'none',
			});
		}
		else if(countSlide == 5){
			$('.cube').css({
				transform: 'rotateX(-90deg) rotateY(-180deg) rotateZ(180deg) translate3d(0px , -200px, -200px)',
				animation: 'none',
			});
		}
		else{
			countSlide = 0;
			loadImgCube(countImg, true);
			$('.cube').css({
				transform: 'rotateY(0deg) rotateX(0deg) rotateZ(0deg) translate3d(0px , 0px, 0px)',
				animation: 'none',});
		}
	}
		++countImg;
		++countSlide;
		
	});

	$('.cube').children('div').click(function() {
		var srcToGo = $(this).children('img').attr('src')
		var tempIdToGo = $('.gridImg').children('.divImg').children('.divImgMin').children('img[data-original="' + srcToGo +'"]');
		var idToGo = tempIdToGo.parent();
		openFullImg(idToGo);
	})

	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
		if(scrolled >790)
			$('nav').attr('style', "background: rgba(254, 121, 35, 1)");
		else
			$('nav').removeAttr('style');
		if ( scrolled > 200 && scrolled > scrollPrev) {
			$('header').addClass('out');
		} else {
			$('header').removeClass('out');
		}
		scrollPrev = scrolled ;
	});



// курсор уменьшающей лупы
	$('.zoom').click(function() {
		$(this).toggleClass('zoomOut');
	});
	
	$('.arrowDown').click(function() {
		$('.fullDivImg').animate({scrollTop: $(window).height()}, 800);
	});

	function addZoom(zoomId){
		setTimeout(function() {
			var $thisImg = zoomId.children('img');
			var thisImgNaturalHeight = $($thisImg).get(0).naturalHeight;
			var thisImgRealHeight = $($thisImg).height();
			// кратность зума
			var xZoom = thisImgRealHeight * 2;
			
			var zoomMagnify = xZoom / thisImgNaturalHeight;
			zoomId.zoom({
				on: 'click',
				magnify: zoomMagnify,
			});
		},10);
	}
// кнопки переключения между картинами
	// левая
	$('.goLeft').click(function() {
		var id = Number($(this).parents().eq(2).attr('id'));
		var goImgId;
		if(id == firstId)
		{
			goImgId = "#" + lastId;
			$(goImgId).children('.fullDivImg').addClass('fullDivImgOpen');
		}
		else{
			let notId = true;
			while(notId){
				id = id - 1;
				goImgId = "#" + id;
				if($(goImgId).is(':visible'))
					notId = false;
			}
			$(goImgId).children('.fullDivImg').addClass('fullDivImgOpen');
		}
		$(this).parents().eq(1).removeClass('fullDivImgOpen');

		lazyMax($(goImgId).children('.fullDivImg').children('.fullImg').children('.zoom').children('img'));
		addZoom($(goImgId).children('.fullDivImg').children('.fullImg').children('.zoom'));
	});

	// правая
	$('.goRight').click(function() {
		var id = Number($(this).parents().eq(2).attr('id'));
		var goImgId;
		if(id == lastId)
		{
			goImgId = "#" + firstId;
			$(goImgId).children('.fullDivImg').addClass('fullDivImgOpen');
		}
		else{
			let notId = true;
			while(notId){
				id = id + 1;
				goImgId = "#" + id;
				if($(goImgId).is(':visible'))
					notId = false;
			}
			$(goImgId).children('.fullDivImg').addClass('fullDivImgOpen');
		}
		$(this).parents().eq(1).removeClass('fullDivImgOpen');
		lazyMax($(goImgId).children('.fullDivImg').children('.fullImg').children('.zoom').children('img'));
		addZoom($(goImgId).children('.fullDivImg').children('.fullImg').children('.zoom'));
	});

// закрытие полной картины по крестику
		$('.closeIco').on("click",function() {
			$(this).parent().animate({
				scrollTop: 0,
				opacity: 0,
			}, 600, function(){
				$(this).removeClass('fullDivImgOpen');
				$(this).removeAttr('style');
			});
			$("body").css("overflow-y","visible");
			
			$(this).parents().eq(1).children('.divImgMin').children('img').fadeIn(1000);
		});

// раскрытие изображения
	$('.divImgMin').click(function() {
		openFullImg(this);
	})
	function openFullImg(thisId) {
		var $thisImg = $(thisId).parent().children('.fullDivImg').children('.fullImg').children('.zoom').children('img');
		
		lazyMax($thisImg);
		var $fullDivImg= $(thisId).parents().children('.fullDivImg');
			$("body").css("overflow-y","hidden");
			$fullDivImg.addClass('fullDivImgOpen');
			$fullDivImg.css({
				// right: '-100%',
				opacity: 0,
			});
			$fullDivImg.animate({
				opacity: 1,
			}, 1000);

			addZoom($(thisId).parent().children('.fullDivImg').children('.fullImg').children('.zoom'));
	}		

// оптимизация загрузки больших изображений (при клике)
		function lazyMax(This){
			var imgMax = This;
			if(imgMax.attr('class') === 'lazyMax'){
				var src = imgMax.attr('data-src')
				imgMax.attr('src', src)
				imgMax.removeAttr('data-src');
				imgMax.removeClass('lazyMax');
			}
		}