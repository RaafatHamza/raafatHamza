
let ourSkills = document.querySelector(".skills");

window.onscroll = function () { 

    // Skills Offset Top 
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Hight
    let skillsOuterHight = ourSkills.offsetHeight;

    // WindowHeight 
    let windowHeight = this.innerHeight;

    // Window Scroll Page
    let windowScrollTop =  this.pageYOffset;
    if (windowScrollTop > (skillsOffsetTop + skillsOuterHight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skills-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        }); 
    } ;
    };



    // Select All Bullets
    const allBullets = document.querySelectorAll(".nav-bullets .bullet");

    // Select All Links
    const allLinks = document.querySelectorAll(".header-area .links a" );

    function scrollToSomeWhere(element) {
        element.forEach(ele => {
            ele.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(e.target.dataset.section).scrollIntoView({
                    behavior: 'smooth',
                });
            });
        });
    };
    
    scrollToSomeWhere(allBullets)
    scrollToSomeWhere(allLinks);

    // Handle Active State
    function handleActive(ev) {
        // Remove Active Class from All Spans
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        // Add Active Class On Self
        ev.target.classList.add("active");
    };


    // toggle Menu
    let toggleBtn = document.querySelector(".links-list");
    let tLinks = document.querySelector(".links")

    toggleBtn.onclick = function (e) {
        e.stopPropagation();
        tLinks.classList.toggle("open");
    }

    document.addEventListener('click' , (e) => {
        if (e.target !== toggleBtn && e.target !== tLinks){

            if (tLinks.classList.contains("open")) {
                tLinks.classList.toggle("open");
            }
        }
    })

    tLinks.onclick = (e) => {
        e.stopPropagation()
    }

    // Create Popup With The Image
    let ourGallery = document.querySelectorAll(".gallery img") ;
    ourGallery.forEach(img => {
        img.addEventListener('click' , (e) => {
            // Create  Overly Element
            let overly = document.createElement("div");
            // Add Class Name To Overly
            overly.className = "popup-overly";
            // Append Overly To The body
            document.body.appendChild(overly)
            // Create The popup
            let popupBox = document.createElement("div");
            // Add Class To popup Box
            popupBox.className = "popup-box"
            if (img.alt !== null ) {
                // create Heading
                let imgHeading = document.createElement("h3");
                // create Text to heading
                let headingText = document.createTextNode(img.alt);
                imgHeading.appendChild(headingText)
                popupBox.appendChild(imgHeading);
            };
            // create The Image
            let popupImage = document.createElement("img");
            // set Image Source
            popupImage.src = img.src
            // add Image To popup Box
            popupBox.appendChild(popupImage)
            // append The popup Box To Body
            document.body.appendChild(popupBox)
            // create closing popup
            let closing = document.createElement("span");
            closing.className = "closing-button"
            let closingText = document.createTextNode("X");
            closing.appendChild(closingText);
            popupBox.appendChild(closing);
        });
    });

    // close popup 
    document.addEventListener('click' , function (e) {
        if (e.target.className == 'closing-button') {
            // // remove The Current Popup
            e.target.parentNode.remove()
            // remove Overlay
            document.querySelector(".popup-overly").remove()
        }
    });
