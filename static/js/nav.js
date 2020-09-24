const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");
const navMenuItems = document.querySelectorAll(".nav-menu li");

jQuery(document).ready(function($) {
  $(window).resize(function() { 
    // 判断页面的宽度是否小于960px
    if (window.innerWidth < 960) {
      navBtn.classList.add('inactive');
      navMenu.classList.add('close');
    } else {
      navBtn.classList.remove('inactive');
      navMenu.classList.remove('close');
    }
  });
  $(".nav-btn,.home,.blog,.music,.movie,.me").click(function() {
    if ($(navBtn).hasClass('active') && $(navMenu).hasClass('open')) {
      navBtn.classList.replace("active", "inactive");
      navMenu.classList.replace("open", "close");
      navMenuItems.forEach((item, index) => {
        item.style.animation = `0.3s ease-in-out slideOut Backwards ${
					index * 0.1 + 0.3
				}s`;
      });
    } else if ($(navBtn).hasClass('inactive') && $(navMenu).hasClass('close')) {
      navBtn.classList.replace("inactive", "active");
      navMenu.classList.replace("close", "open");
      navMenuItems.forEach((item, index) => {
        item.style.animation = `0.3s ease-in-out slideIn forwards ${
					index * 0.1 + 0.3
				}s`;
      });
    }
  });
});
// if (navBtnClassName == "active" && navMenuClassName == "open") {
//   navBtn.classList.replace("active", "inactive");
//   navMenu.classList.replace("open", "close");
//   navMenuItems.forEach((item, index) => {
//     item.style.animation = `0.3s ease-in-out slideOut Backwards ${
// 			index * 0.1 + 0.3
// 		}s`;
//   });
// } else if (navBtnClassName == "inactive" && navMenuClassName == "close") {
//   navBtn.classList.replace("inactive", "active");
//   navMenu.classList.replace("close", "open");
//   navMenuItems.forEach((item, index) => {
//     item.style.animation = `0.3s ease-in-out slideIn forwards ${
// 			index * 0.1 + 0.3
// 		}s`;
//   });
// }
