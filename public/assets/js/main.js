/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ],
			'xlarge-to-max':   '(min-width: 1681px)',
			'small-to-xlarge': '(min-width: 481px) and (max-width: 1680px)'
		});

	// Stop animations/transitions until the page has ...

		// ... loaded.
			window.addEventListener('load', function() {
				setTimeout(function() {
					document.body.classList.remove('is-preload');
				}, 100);
			});

		// ... stopped resizing.
			var resizeTimeout;

			window.addEventListener('resize', function() {
				document.body.classList.add('is-resizing');
				clearTimeout(resizeTimeout);
				resizeTimeout = setTimeout(function() {
					document.body.classList.remove('is-resizing');
				}, 100);
			});

	// Fixes.

		// Object fit images.
			if (!browser.canUse('object-fit') || browser.name == 'safari') {
				document.querySelectorAll('.image.object').forEach(function(el) {
					var img = el.querySelector('img');
					var style = getComputedStyle(img);

					img.style.opacity = '0';
					el.style.backgroundImage = 'url("' + img.getAttribute('src') + '")';
					el.style.backgroundSize = style.objectFit || 'cover';
					el.style.backgroundPosition = style.objectPosition || 'center';
				});
			}

	// Sidebar.
		var sidebar = document.querySelector('#sidebar'),
			sidebarInner = sidebar.querySelector('.inner');

		var sidebarLocked = 0, sh, wh;

		// Inactive by default on <= large.
			breakpoints.on('<=large', function() {
				sidebar.classList.add('inactive');
			});

			breakpoints.on('>large', function() {
				sidebar.classList.remove('inactive');
			});

		// Hack: Workaround for Chrome/Android scrollbar position bug.
			if (browser.os == 'android' && browser.name == 'chrome') {
				var s = document.createElement('style');
				s.textContent = '#sidebar .inner::-webkit-scrollbar { display: none; }';
				document.head.appendChild(s);
			}

		// Toggle.
			var toggle = document.createElement('a');
			toggle.href = '#sidebar';
			toggle.className = 'toggle';
			toggle.textContent = 'Toggle';
			sidebar.appendChild(toggle);

			toggle.addEventListener('click', function(event) {
				event.preventDefault();
				event.stopPropagation();
				sidebar.classList.toggle('inactive');
			});

		// Events.

			// Link clicks.
				sidebar.addEventListener('click', function(event) {
					var a = event.target.closest('a');
					if (!a) return;

					// >large? Bail.
					if (breakpoints.active('>large')) return;

					var href = a.getAttribute('href');
					var target = a.getAttribute('target');

					event.preventDefault();
					event.stopPropagation();

					if (!href || href == '#' || href == '') return;

					sidebar.classList.add('inactive');

					setTimeout(function() {
						if (target == '_blank')
							window.open(href);
						else
							window.location.href = href;
					}, 500);
				});

			// Prevent certain events inside the panel from bubbling.
				['click', 'touchend', 'touchstart', 'touchmove'].forEach(function(name) {
					sidebar.addEventListener(name, function(event) {
						if (breakpoints.active('>large')) return;
						event.stopPropagation();
					});
				});

			// Hide panel on body click/tap.
				['click', 'touchend'].forEach(function(name) {
					document.body.addEventListener(name, function() {
						if (breakpoints.active('>large')) return;
						sidebar.classList.add('inactive');
					});
				});

		// Scroll lock.
			function sidebarOnScroll() {
				var x, y;

				// <=large? Bail.
				if (breakpoints.active('<=large')) {
					sidebarLocked = 0;
					sidebarInner.style.position = '';
					sidebarInner.style.top = '';
					return;
				}

				x = Math.max(sh - wh, 0);
				y = Math.max(0, window.scrollY - x);

				if (sidebarLocked == 1) {
					if (y <= 0) {
						sidebarLocked = 0;
						sidebarInner.style.position = '';
						sidebarInner.style.top = '';
					} else {
						sidebarInner.style.top = (-1 * x) + 'px';
					}
				} else {
					if (y > 0) {
						sidebarLocked = 1;
						sidebarInner.style.position = 'fixed';
						sidebarInner.style.top = (-1 * x) + 'px';
					}
				}
			}

			function sidebarOnResize() {
				wh = window.innerHeight;
				sh = sidebarInner.offsetHeight + 30;
				sidebarOnScroll();
			}

			window.addEventListener('load', function() {
				if (window.scrollY == 1)
					window.scrollTo(0, 0);

				window.addEventListener('scroll', sidebarOnScroll);
				window.addEventListener('resize', sidebarOnResize);
				sidebarOnResize();
			});

	// Menu.
		var menu = document.querySelector('#menu');
		var menuOpeners = Array.from(menu.querySelectorAll('.opener'));

		menuOpeners.forEach(function(opener) {
			opener.addEventListener('click', function(event) {
				event.preventDefault();

				// Deactivate all other openers.
				menuOpeners.forEach(function(other) {
					if (other !== opener)
						other.classList.remove('active');
				});

				// Toggle this one.
				opener.classList.toggle('active');

				// Recalculate sidebar lock.
				sidebarOnResize();
			});
		});

})();
