document.addEventListener("DOMContentLoaded", function () {
    const skillButtons = document.querySelectorAll(".skill-button");

    skillButtons.forEach(button => {
        button.addEventListener("mouseover", function () {
            const experience = button.getAttribute("data-experience");
            button.innerText = `Experience: ${experience} years`;
        });

        button.addEventListener("mouseout", function () {
            const skillName = button.getAttribute("data-skill");
            button.innerText = skillName;
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollToTop = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });

    scrollToTop.addEventListener("click", function (event) {
        event.preventDefault();
        const scrollOptions = {
            top: 0,
            behavior: "smooth"
        };
        window.scrollTo(scrollOptions);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Apply the fade-in effect to elements
    fadeInElements(".header-content", 1000); // Adjust the duration (in milliseconds) as needed
    fadeInElements(".about-text", 1000);    // Adjust the duration (in milliseconds) as needed
    fadeInElements(".skills-content", 1000); // Adjust the duration (in milliseconds) as needed
    fadeInElements(".goals-text", 1000);    // Adjust the duration (in milliseconds) as needed
    
    // Add more elements as needed
    
    // Your existing scroll-to-top code here
});



document.addEventListener("DOMContentLoaded", function () {
    // Apply the longer fade-in effect to elements
    fadeInElements(".header-content", 2000); // Adjust the duration (in milliseconds) as needed
    fadeInElements(".about-text", 2000);    // Adjust the duration (in milliseconds) as needed
    fadeInElements(".skills-content", 2000); // Adjust the duration (in milliseconds) as needed
    fadeInElements(".goals-text", 2000);    // Adjust the duration (in milliseconds) as needed
    // Add more elements as needed
    



    let prevScrollPos = window.pageYOffset;
    let headerVisible = true;
    
    window.addEventListener("scroll", function () {
      const currentScrollPos = window.pageYOffset;
    
      if (currentScrollPos < prevScrollPos) {
        // Scrolling up
        headerVisible = true;
        document.querySelector(".navbar").style.top = "0";
      } else {
        // Scrolling down
        headerVisible = false;
        document.querySelector(".navbar").style.top = "-100px"; // Adjust as needed
      }
    
      prevScrollPos = currentScrollPos;
    });
    





    // Your existing scroll-to-top code here
});

function fadeInElements(selector, duration) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        element.style.opacity = 0;
        fadeIn(element, duration);
    });
}

function fadeIn(element, duration) {
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(progress / duration, 1);

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}



document.addEventListener("DOMContentLoaded", function () {
    // Apply the fade-in effect to images in all sections
    fadeInImages(".section img", 3000); // Adjust the duration (in milliseconds) as needed
    fadeInImages(".header img", 3000); // Adjust the duration (in milliseconds) as needed
    
    // Your existing scroll-to-top code here
});

function fadeInImages(selector, duration) {
    const images = document.querySelectorAll(selector);
    
    images.forEach(image => {
        image.style.opacity = 0;
        fadeIn(image, duration);
    });
}

function fadeIn(element, duration) {
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(progress / duration, 2);

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}






  // Get a reference to the form element
  const form = document.querySelector('form');

  // Add an event listener to the form
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform any necessary actions here, such as sending data to a server or processing the form data

    // For example, you can access form fields like this:
    const name = document.getElementById('input').value;

    // Do something with the form data (e.g., send it to a server using AJAX)

    // Optionally, you can redirect the user to a different page after form submission
    // window.location.href = 'thank-you.html';
  });





