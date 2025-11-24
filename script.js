const testimonials = [
            {
                quote: "“The team delivered exactly what we needed—clean design, intuitive UX, and a dashboard our users actually enjoy using. They understood the complexity of our logistics workflows.”",
                author: "Elizabeth White",
                title: "Founder at Metech",
                avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                quote: "“Our entire brand identity was successfully overhauled, leading to a 40% increase in lead conversion within the first quarter. Their strategic approach to design is simply unmatched.”",
                author: "Marcus Chen",
                title: "CMO at GlobalTech",
                avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                quote: "“I highly recommend this team for anyone seeking top-tier creative work and reliable execution. The project was completed on time, under budget, and exceeded all expectations.”",
                author: "Sarah Johnson",
                title: "VP of Product, FinPro",
                avatar: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ];

        let currentIndex = 0;
        const quoteDisplay = document.getElementById('quote-display');
        const avatarGroup = document.getElementById('avatar-group');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        // Function to update the UI with the current testimonial
        function updateTestimonial(index) {
            // Apply a fade-out effect
            quoteDisplay.style.opacity = 0;

            setTimeout(() => {
                const item = testimonials[index];
                
                // 1. Update Quote and Author
                quoteDisplay.innerHTML = `
                    <p class="quote-text">${item.quote}</p>
                    <span class="quote-author">${item.author}</span>
                    <span class="quote-title"> — ${item.title}</span>
                `;

                // 2. Update Active Avatar
                const avatars = avatarGroup.querySelectorAll('.client-avatar');
                avatars.forEach((avatar, i) => {
                    avatar.classList.remove('is-active');
                    if (i === index) {
                        avatar.classList.add('is-active');
                    }
                });

                // 3. Update Button State
                prevButton.disabled = index === 0;
                nextButton.disabled = index === testimonials.length - 1;

                // Apply fade-in effect
                quoteDisplay.style.opacity = 1;

            }, 300); // Match timeout to transition duration
        }

        // Function to handle navigation
        function navigate(direction) {
            const newIndex = currentIndex + direction;
            if (newIndex >= 0 && newIndex < testimonials.length) {
                currentIndex = newIndex;
                updateTestimonial(currentIndex);
            }
        }

        // ----------------------------------------------------
        // Initialization
        // ----------------------------------------------------

        // 1. Generate Avatars
        function generateAvatars() {
            testimonials.forEach((item, index) => {
                const img = document.createElement('img');
                img.src = item.avatar;
                img.alt = item.author;
                img.classList.add('client-avatar');
                
                // Set the correct index for navigation
                img.setAttribute('data-index', index); 
                
                // Event listener for direct avatar click navigation
                img.addEventListener('click', () => {
                    if (currentIndex !== index) {
                        currentIndex = index;
                        updateTestimonial(currentIndex);
                    }
                });
                avatarGroup.appendChild(img);
            });
        }
        
        // 2. Attach Event Listeners
        prevButton.addEventListener('click', () => navigate(-1));
        nextButton.addEventListener('click', () => navigate(1));

        // 3. Initial Load
        window.onload = function() {
            generateAvatars();
            updateTestimonial(currentIndex);
        };
        