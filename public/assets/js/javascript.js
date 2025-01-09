window.addEventListener('scroll', () => {
    let stickyNav = document.getElementsByClassName('navbar-sticky')[0]
    let offset = window.pageYOffset
    if (offset >= 120) {
        stickyNav.setAttribute('class', 'navbar navbar-sticky navbar-expand-lg navbar-dark navbar-sticky-moved-up')
       
        
    } else {
        stickyNav.setAttribute('class', 'navbar navbar-sticky navbar-expand-lg navbar-dark');
        stickyNav.style.backgroundColor = ''
    }
    // apply transition
    if (offset >= 250) {
        stickyNav.setAttribute('class', 'navbar navbar-sticky navbar-expand-lg navbar-dark navbar-sticky-transitioned')
        // $stickyNav.addClass("navbar-sticky-transitioned");
    } else {
        stickyNav.setAttribute('class', 'navbar navbar-sticky navbar-expand-lg navbar-dark');
        stickyNav.style.position = 'absolute'
        // $stickyNav.removeClass("navbar-sticky-transitioned");
    }
    // sticky on
    if (offset >= 500) {
        stickyNav.setAttribute('class', 'navbar navbar-sticky navbar-expand-lg navbar-dark navbar-sticky-on')
        stickyNav.style.position = 'fixed'
        stickyNav.style.backgroundColor = '#fff'
        // $stickyNav.addClass("navbar-sticky-on");
    } else {
        stickyNav.setAttribute('class', 'navbar navbar-sticky navbar-expand-lg navbar-dark');
        // stickyNav.style.position = 'inherit'
        // stickyNav.style.backgroundColor = ''
        // $stickyNav.removeClass("navbar-sticky-on");
    }
}
)

window.addEventListener('resize', ()=>{
    let w = window.innerWidth
    let c = document.querySelectorAll('.container.position-relative')[0] || document.querySelectorAll('.position-relative.logo')[0]
    if(w <= 990){
        c.setAttribute('class', 'position-relative logo')

    } else{
        c.setAttribute('class', 'container position-relative')

    }
})