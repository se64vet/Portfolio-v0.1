
// TweenLite.defaultEase = Power0.easeNone;



$(document).ready(function () {
    
    //scroll Magic horizontal
    // init
	// var controller =  new ScrollMagic.Controller({
    //     refreshInterval: 0
    // });
    // //create new animation
    // const slideX = new TimelineMax();

    //         // animate to work-section panel
    //         slideX.to(".slide-container", 0.5, {z: -150})		// move back in 3D space
	// 		slideX.to(".slide-container", 1,   {x: "-25%"})	    // move in to first panel
	// 		slideX.to(".slide-container", 0.5, {z: 0})			// move back to origin in 3D space
			
    //         // animate to about-me-section panel
	// 		slideX.to(".slide-container", 0.5, {z: -150, delay: 1})
	// 		slideX.to(".slide-container", 1,   {x: "-50%"})
	// 		slideX.to(".slide-container", 0.5, {z: 0})

    //         slideX.from(".desc__text", 0.3 , {css:{scale:2, opacity:0}} ) 
    //         slideX.from(".about-section__title", 0.5 , {css:{rotate:-27, opacity:0}} ) 
    //         slideX.from(".desc__btns", 0.3 , {css:{y:40, opacity:0}} ) 
            

    //         // animate to fourth panel
	// 		slideX.to(".slide-container", 0.5, {z: -150, delay: 1})
	// 		slideX.to(".slide-container", 1,   {x: "-75%"})
	// 		slideX.to(".slide-container", 0.5, {z: 0});


    // new ScrollMagic.Scene({
    //     triggerElement: ".pin-container",
    //     triggerHook: "onLeave",
    //     duration: "200%"
    // })  .setPin(".pin-container")
    //     .setTween(slideX)
    //     .addIndicators()
    //     .addTo(controller)


    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        loopBottom: 'true',
        anchors: ['home', 'work', 'about', 'contact'],
        menu: '#myMenu',
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'left',
            'scrollingSpeed': 300,
            'tooltips': ['Home', 'Works', 'About', 'Contact']
        },
        

        //section transition animation
        afterLoad: function (anchorLink, index) {

            //animation on work section
                //from
            if(anchorLink !== 'work'){
                $(".work-section__title h2").animate({letterSpacing: '-20px', opacity: '0'})
                $(".work-section__project-panel").animate({opacity: '0',top: '250px'});

                $(".nav-bar__nav-logo").css({border: '3px solid var(--primary-dark)'});
                $(".nav-logo__text-dan").css({color: 'var(--primary-dark)'});
            }
                //to
            if(anchorLink == 'work'){
                $(".work-section__title h2").animate({letterSpacing: '2px', opacity: "1"})
                $(".work-section__project-panel").animate({opacity: '1',top: '0px'}, 500);

                $(".nav-bar__nav-logo").css({border: '3px solid white'});
                $(".nav-logo__text-dan").css({color: 'white'});
            }
            

            //animation on about section
                //from
            if(anchorLink !== 'about'){
                $(".about-section__title").animate({opacity: '0',bottom: '150px'});
                $(".about-section__desc").animate({opacity: '0',top: '150px'});
                $(".about-section__img").animate({opacity:0});
            }
                //to
            if(anchorLink == 'about'){
                $(".about-section__title").animate({opacity: '1',bottom: '0px'}, 500);
                $(".about-section__desc").animate({opacity: '1',top: '0px'}, 500);
                $(".about-section__img").animate({opacity:1},700);
            }
            
            //animation on contact section
                //from
                if(anchorLink !== 'contact'){
                    $(".contact-section__avatar").animate({left: '-50px', opacity: '0'})
                    $(".contact-form").animate({right: '-250px', opacity: '0'})

                   
                }
                    //to
                if(anchorLink == 'contact'){
                    $(".contact-section__avatar").animate({left: '0px', opacity: "1"},700)
                    $(".contact-form").animate({right: '-100px', opacity: '1'}, 1000)

                    $(".nav-bar__nav-logo").css({border: '3px solid white'})
                    $(".nav-logo__text-dan").css({color: 'white'})
                }


          }
        
    });
    
    



    //Navigation toggle animation by clicking Hamburger btn
    $('.nav-bar__nav-hamburger , .nav-list__nav-link').click(function () { 
        //hamburger animation
        $('.nav-hamburger__icon').toggleClass(
        'hamburger-animation hamburger-animation-counter fa-bars fa-times');

        //nav content show /hidden
        $('.nav-bar__nav-content').toggleClass('nav-content-show');
        $('.nav-list__nav-item').toggleClass('show');

        //changing logo color
        $('.nav-logo__text-dan').toggleClass('color-dark color-white');
        $('.nav-bar__nav-logo').toggleClass('border-white');

        //cancel conflict of z-index and transform
        
    });

    // project card  open animation
        
    

    const cardExpand = ()=>{
        //move cover top and expand to 100vw
        $('.project__img').toggleClass(' move-top');
        // $('.project__img').offset({ left: 0 })
        // $( window ).resize(function() {
        //     $('.project__img').offset({ left: 0 })
        //   });
        
        //colapse/open the project info panel
        $('.project-panel__project-info').toggleClass('colapse');

        //info hidden when init and show when click
        $('.project-panel__project_desc, .project-panel__project-info')
        .toggleClass('hidden ');
    }

    $('.project-panel__project').click(cardExpand);

    //pagination
    let projectId = [];
     function CreatePagingBtn (numOfProjects) {
        //adding paging btn according to number of project
        for(let i = 1; i <= numOfProjects; i++){
            let pagingBtn = document.createElement('button');
            pagingBtn.className = 'control__btn';
            pagingBtn.id = `project${i}`;
            $('.pagination__control').append(pagingBtn);
            projectId.push(pagingBtn.id);
        }
    };
    CreatePagingBtn(4)
    const projectData = [
        {
            Id : 'project-1',
            name: 'all Blues',
            type: 'case Study',
            img1 : './assets/img/Works/all-blues-bar/all-blues-menu.png',
            img2 : './assets/img/Works/all-blues-bar/all-blues-menu.png',
            about : `Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Obcaecati dolorem id doloribus provident! 
                    Nihil similique alias quisquam ad magnam minima 
                    enim distinctio? Distinctio vitae amet veritatis 
                    totam molestiae? Perferendis laboriosam odio 
                    possimus impedit blanditiis. Quam error magni 
                    saepe obcaecati culpa.<br/><br>

                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Obcaecati dolorem id doloribus provident! 
                    Nihil similique alias quisquam ad magnam minima 
                    enim distinctio?  Quam error magni 
                    saepe obcaecati culpa.<br/><br> 
                    Perferendis laboriosam odio 
                    possimus impedit blanditiis.`
        }
    ]

    function LoadProjectData(){
        let projects = $('#project1').siblings();
        console.log(projectData[0].Id)
        $("#project2").click(function(){
            $(".project-desc__name").text(projectData[0].Id)
        })
        
    };
    LoadProjectData()

    
});