const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
let toggleBtn = document.querySelector('.toggle-btn')
let body = document.querySelector('html');
let title = document.querySelectorAll('.section-title');
let p = document.querySelectorAll('p');
let cta = document.querySelector('.col-right .cta')
let contactItem = document.querySelectorAll('.contact-item')
let contactInfo = document.querySelectorAll('.contact-info')
let darkMode = localStorage.getItem('darkMode');



// Dark mode start //

      //darkMode enable start//
	  darkModeEnable = () => {
		toggleBtn.classList.add('active');
    body.classList.add('active');
	for (let i = 0; i < title.length; i++) {
		title[i].classList.add('active')	
	};
	for (let i = 0; i < p.length; i++) {
		p[i].classList.add('active')	
	};
	for (let i = 0; i < contactItem.length; i++) {
		contactItem[i].classList.add('active')	
	};
	for (let i = 0; i < contactInfo.length; i++) {
		contactInfo[i].classList.add('active')	
	};
	cta.classList.add('active')
		
	localStorage.setItem('darkMode', 'on')
	  }

	//********* **** dark mode enable end // ***********

	  // dark mode disable start //
	  darkModeDisable = () => {
		toggleBtn.classList.remove('active');
    body.classList.remove('active');
	for (let i = 0; i < title.length; i++) {
		title[i].classList.remove('active')	
	};
	for (let i = 0; i < p.length; i++) {
		p[i].classList.remove('active')	
	};
	for (let i = 0; i < contactItem.length; i++) {
		contactItem[i].classList.remove('active')	
	};
	for (let i = 0; i < contactInfo.length; i++) {
		contactInfo[i].classList.remove('active')	
	};
	cta.classList.remove('active')
		
	localStorage.setItem('darkMode', 'off')
	  }  
	 
	 
	  // dark mode disable end //

	// onload condition start //

if (darkMode === 'on') {
	darkModeEnable()
}

	// onload condition end //


	//toggle btn click start //
toggleBtn.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'on') {
		darkModeEnable();
	
	} else {
		darkModeDisable();
	}
})

	//toggle btn click end //

//**** **/ Dark mode end // **************



// Hamburger menu start //

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



// Hamburger menu end //