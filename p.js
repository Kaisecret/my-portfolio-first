let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            let top = window.scrollY;

            sections.forEach(sec => {
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').includes(id)) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };
        ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});
        ScrollReveal().reveal(".picture1", {
            duration: 3000,
            origin: "left",
            distance: "300px",
            easing: "ease-in-out"
          });