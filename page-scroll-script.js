var prevScrollpos = 0;
var header = document.getElementsByTagName('header');
var footer = document.getElementsByTagName('footer');

var scrollableSections = document.getElementsByClassName('scrollable-section');
var currentSectionPos = 0;

var isScrolling = 0;

window.onload = function() {
    // Apply scrolling effect for PC browser
    if(!detectmobile()) {
        // Get current position
        prevScrollpos = Math.ceil(window.pageYOffset);
        currentSectionPos = Math.floor(prevScrollpos / scrollableSections[0].offsetHeight);

        // Scroll to that position
        scrollToCurrentSection();

        // Register onscroll event to page
        window.addEventListener("scroll", onScrollPCFunc);

        // Show header and footer on default
        setTimeout(function(){
            header[0].style.top = "0";
            footer[0].style.bottom = "0";
        },700);
    } 
    // Apply scrolling effect for Mobile browser
    else {
        // Get current position
        prevScrollpos = window.pageYOffset;

        // Register onscroll event to page
        window.addEventListener("scroll", onScrollMobileFunc);
    }
}

function onScrollPCFunc() {
    if(!isScrolling) {        
        var currentScrollPos = Math.ceil(window.pageYOffset);
        var scrollToPos = currentSectionPos;

        if (prevScrollpos > currentScrollPos + 5) {
            // scroll up
            if(scrollToPos - 1 < 0) return false;
            
            scrollToPos -= 1;
        } else if (prevScrollpos < currentScrollPos - 5) {
            //scroll down
            if(scrollToPos + 1 >= scrollableSections.length) return false;

            scrollToPos += 1;
        }

        if(scrollToPos !== currentSectionPos) {
            currentSectionPos = scrollToPos;
            
            if(currentSectionPos === 0 || currentSectionPos === scrollableSections.length - 1) {
                // Show header and footer
                header[0].style.top = "0";
                footer[0].style.bottom = "0";
            } else {
                // Hide header and footer
                header[0].style.top = "-" + header[0].offsetHeight + "px";
                footer[0].style.bottom = "-" + footer[0].offsetHeight + "px";
            }

            scrollToCurrentSection();
        } else {
            isScrolling = 0
        }
    } else {
        return false;
    }
}

function scrollToCurrentSection() {
    isScrolling = 1;

    var pos = scrollableSections[currentSectionPos].offsetTop;

    window.scroll({
        top: pos,
        left: 0, 
        behavior: 'smooth' 
    });

    setTimeout(function(){
        isScrolling = 0;
        prevScrollpos = pos;
    },700);
            
    
}

function onScrollMobileFunc() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // scroll up
        // Show header and footer
        header[0].style.top = "0";
        footer[0].style.bottom = "0";
    } else {
        //scroll down
        // Hide header and footer
        header[0].style.top = "-" + header[0].offsetHeight + "px";
        footer[0].style.bottom = "-" + footer[0].offsetHeight + "px";
    }
    prevScrollpos = currentScrollPos;
}

function detectmobile() {
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    || navigator.userAgent.match(/MSIE/i)
    || navigator.userAgent.match(/Edge/i)) {
        return true;
    } else {
        return false;
    }
}