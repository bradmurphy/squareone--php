var amplifiAPI = (function () {

	var public = {};
	var pageHolder = $('.page-holder');
  var page = pageHolder.find('.page');
 	var pageWidth = page.outerWidth(true);
  var controls = $('.circle');
	var entryStatus = false;

	// CAROUSEL LOGIC
	function carouselLogic(e) {

		var self = $(this);
		var selfPos = self.index();
		var scrollPos = selfPos * pageWidth;

		e.preventDefault();
		// console.log(self , selfPos, scrollPos );

		if (entryStatus) {

			$('.pages-wrap').animate({
			     scrollLeft: scrollPos
			}, 250);

			$(".circle").removeClass("orange");
			$(this).addClass("orange");

		}

	}

	// CLICK EVENTS
	function clickEvents() {

		// FAN ANIMATION
		function fanAnimation() {
			// FAN POPUP ANIMATION
			TweenMax.to(".pop-up", 1, { 
				top: "30%",
				ease: Power4.easeInOut
			});
			TweenMax.to([".arrow-up"], 1, {
				css:{autoAlpha: 1},
				ease: Power4.easeInOut
			});
			TweenMax.to(["#artistLogin", ".arrow-one", ".arrow-two"], 0.35, {
				css:{autoAlpha: 0},
				ease: Power4.easeInOut
			});
			TweenMax.to(["#fanLogin"], 1, {
				y: "-10%",
				ease: Power4.easeInOut
			});

			// CHANGE "CHOOSE" TEXT TO "LOGIN"
			$("#crazyButton").hide().html("login").css("cursor", "pointer").fadeIn("slow");
		}

		// ARTIST ANIMATION
		function artistAnimation() {
			// ARTIST POPUP ANIMATION
			TweenMax.to(".pop-up", 1, { 
				top: "30%",
				ease: Power4.easeInOut
			});
			TweenMax.to([".arrow-one", ".arrow-two"], 0.35, {
				css:{autoAlpha: 0},
				ease: Power4.easeInOut
			});
			TweenMax.to(".arrow-up", 1, {
				css:{autoAlpha: 1},
				ease: Power4.easeInOut
			});
			TweenMax.to(["#artistLogin", "#fanLogin"], 1, {
				y: "-110%",
				ease: Power4.easeInOut
			});

			// CHANGE "CHOOSE" TEXT TO "LOGIN"
			$("#crazyButton").hide().html("login").css("cursor", "pointer").fadeIn("slow");
		}

		// SOCIAL LOGIN ANIMATION
		function login(e) {

			// var self = $(this);
			// var selfPos = self.index();
			// var scrollPos = selfPos * pageWidth;

			var loginButton = $("#crazyButton").html();

			if(loginButton === "login") {
				entryStatus = true;

				var slideTwo = $(".circle:nth-child(2)");
				var slideTwoPos = slideTwo.index();
				var slideTwoScrollPos = slideTwoPos * pageWidth;

				// e.preventDefault();
				// // console.log(self , selfPos, scrollPos );

				$('.pages-wrap').animate({
				     scrollLeft: slideTwoScrollPos
				}, 250);

				$(".circle").removeClass("orange");
				$(".circle:nth-child(2)").addClass("orange");

				$("#crazyButton").hide().html("find an artist").css("cursor", "initial").fadeIn("slow");
			}

		}

		// FAN POPUP CLICK EVENT
		$("#fanLogin").on("click", fanAnimation);

		// ARTIST POPUP CLICK EVENT
		$("#artistLogin").on("click", artistAnimation);

		// PAGER CLICK EVENT
		$(".circle").on('click', carouselLogic);

		// SOCIAL LOGIN EVENT
		$(".login").on("click", login);

		// ON FOCUS SEARCH EVENT
		$("#search").focus(function() {
		    $(this).attr('placeholder', 'i.e. ARTIST, GENRE');
		}).blur(function() {
		    $(this).attr('placeholder', 'SEARCH');
		});

	}

	// INIT FUNCTION
	function init() {

		// CALL EVENT ANIMATIONS
		clickEvents();

	}

	// PUBLIC FUNCTIONS
	public.init = init;


	// RETURN PUBLIC
	return public;

}());

$(document).on("ready", amplifiAPI.init);

// PRELOADER WINDOW LOADING EVENT

// $(window).load(function() {

// 	$(".overlay").delay(2500).fadeOut(500);

// });