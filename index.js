
const headerContent = document.querySelector(".headerContent"); 
const menu = document.getElementById("menu");                      
const body = document.body;                                       

// When hamburger is clicked
menu.addEventListener("click", () => {
    
    headerContent.classList.toggle("open");
  
    menu.classList.toggle("active");

    body.classList.toggle("no-scroll");
    
    console.log("Menu clicked!");  
});

const products = [
            {
                id: "0",
                image: 'WhatsApp Image 2026-03-16 at 9.34.51 PM (1).jpeg',
                title: 'Fluffy fur cap',
                price: 6500,
                category: 'Clothing & Fashion'
            },
            {
                id: "1",
                image: 'WhatsApp Image 2026-03-16 at 9.35.03 PM (2).jpeg',
                title: 'Dignife woman perfume',
                price: 10500,
                category: 'Cosmetic'
            },
            {
                id: "2",
                image: 'WhatsApp Image 2026-03-16 at 9.35.03 PM.jpeg',
                title: 'Shoe rack',
                price: 21000,
                category: 'furniture'
            },
            {
                id: "3",
                image: 'WhatsApp Image 2026-03-16 at 9.35.04 PM (1).jpeg',
                title: '10 inches LCD writting tab',
                price: 6000,
                category: 'Electronics'
            },
            {
                id: "4",
                image: 'WhatsApp Image 2026-03-16 at 9.35.04 PM (2).jpeg',
                title: 'Rechargeable PRO LED 800 Light with 2.1 meter tripod stand',
                price: 44000,
                category: 'Electronics'
            },
            {
                id: "5",
                image: 'WhatsApp Image 2026-03-16 at 9.35.04 PM.jpeg',
                title: '12 inches LCD writing tab',
                price: 7000,
                category: 'Electronics'
            },
            {
                id: "6",
                image: 'WhatsApp Image 2026-03-16 at 9.35.05 PM (1).jpeg',
                title: 'Men gift set with power bank',
                price: 22000,
                category: 'Accessories'
            },
            {
                id: "7",
                image: 'WhatsApp Image 2026-03-16 at 9.35.05 PM (2).jpeg',
                title: 'Men gift set',
                price: 22000,
                category: 'Accessories'
            },
            {
                id: "8",
                image: 'WhatsApp Image 2026-03-16 at 9.35.05 PM.jpeg',
                title: 'Rechargeable PRO LED 600 Light with 2.1 meter tripod stand',
                price: 39000,
                category: 'bathroom'
            },
            {
                id: "9",
                image: 'WhatsApp Image 2026-03-16 at 9.35.03 PM (1).jpeg',
                title: 'Hand bag',
                price: 12000,
                category: 'Accessories'
            },
            {
                id: "10",
                image: 'WhatsApp Image 2026-03-16 at 9.34.53 PM.jpeg',
                title: '2 in 1 Bath towel set super soft highly absorbent',
                price: 5500,
                category: 'Clothing & Fashion'
            },
            {
                id: "12",
                image: 'WhatsApp Image 2026-03-16 at 9.34.53 PM (1).jpeg',
                title: 'Clothing racks',
                price: 17000,
                category: 'Home & Furniture'
            },
                  {
                id: "13",
                image: 'WhatsApp Image 2026-03-16 at 9.34.52 PM.jpeg',
                title: 'Fluffy fur cap',
                price: 6500,
                category: 'Clothing & Fashion'
            },
                {
                id: "14",
                image: 'WhatsApp Image 2026-03-16 at 9.34.51 PM.jpeg',
                title: 'Fluffy fur cap',
                price: 6500,
                category: 'Clothing & Fashion'
            },
            {
                id: "15",
                image: 'WhatsApp Image 2026-03-16 at 9.35.06 PM (1).jpeg',
                title: 'Juliana watch set',
                price: 9999,
                category: 'Accessories'
            }, 
            {
                id: "16",
                image: 'WhatsApp Image 2026-03-16 at 9.35.06 PM (2).jpeg',
                title: 'Eternal love couples watch and bracelet set',
                price: 23000,
                category: 'Accessories'
            },
            {
                id: "17",
                image: 'WhatsApp Image 2026-03-16 at 9.35.06 PM (3).jpeg',
                title: '5pcs Blue eye watch set',
                price: 9500,
                category: 'Accessories'
            },
             {
                id: "18",
                image: 'WhatsApp Image 2026-03-16 at 9.35.07 PM (1).jpeg',
                title: '3 in 1 UV Led Manicure and Pedicure Nail Lamp',
                price: 23000,
                category: 'Beauty & Personal Care'
            },
                 {
                id: "19",
                image: 'WhatsApp Image 2026-03-16 at 9.35.07 PM (2).jpeg',
                title: '3 in 1 UV Led Manicure and Pedicure Nail Lamp',
                price: 23000,
                category: 'Beauty & Personal Care'
            },
                 {
                id: "18",
                image: 'WhatsApp Image 2026-03-16 at 9.35.07 PM.jpeg',
                title: 'Knight and princess couples watch and bracelet set',
                price: 23000,
                category: 'Accessories'
            },
             {
                id: "19",
                image: 'WhatsApp Image 2026-03-16 at 9.35.08 PM (1).jpeg',
                title: 'HQNova Professional Curling Iron',
                price: 12000,
                category: 'Beauty & Personal Care'
            },
             {
                id: "20",
                image: 'WhatsApp Image 2026-03-16 at 9.35.08 PM (2).jpeg',
                title: 'Twin Swan Contrast home decor',
                price: 31000,
                category: 'Home Decor'
            },
              {
                id: "21",
                image: 'WhatsApp Image 2026-03-16 at 9.35.08 PM.jpeg',
                title: 'Mini True Wireless Stero earbuds',
                price: 8500,
                category: 'Electronic'
            },
              {
                id: "22",
                image: 'WhatsApp Image 2026-03-16 at 9.35.09 PM (1).jpeg',
                title: 'Closed faux book',
                price: 5000,
                category: 'Home Decor'
            },
              {
                id: "23",
                image: 'WhatsApp Image 2026-03-16 at 9.35.09 PM.jpeg',
                title: 'Portable mini BT printer',
                price: 17000,
                category: 'Electronic'
            },
              {
                id: "24",
                image: 'WhatsApp Image 2026-03-16 at 9.35.10 PM (1).jpeg',
                 title: 'Rechargeable Multifunctional Astronaut Projector with Bluetooth Speaker/Fm Radio',
                price: 27000,
                category: 'Home Decor'
            },
            {
                id: "25",
                image: 'WhatsApp Image 2026-03-16 at 9.35.10 PM (2).jpeg',
                title: 'Rechargeable Multifunctional Astronaut Projector with Bluetooth Speaker/Fm Radio',
                price: 27000,
                category: 'Home Decor'
            },
            {
                id: "26",
                image: 'WhatsApp Image 2026-03-16 at 9.35.11 PM (1).jpeg',
                title: 'Soft Fluffy Home Rug For Living Room And Bedroom (160 by 230)',
                price: 37000,
                category: 'Home Decor'
            },
            {
                id: "27",
                image: 'WhatsApp Image 2026-03-16 at 9.35.11 PM (2).jpeg',
                title: 'Soft Fluffy Home Rug For Living Room And Bedroom (160 by 230)',
                price: 37000,
                category: 'Home Decor'
            },
            {
                id: "28",
                image: 'WhatsApp Image 2026-03-16 at 9.35.11 PM (3).jpeg',
                title: 'Soft Fluffy Home Rug For Living Room And Bedroom (160 by 230)',
                price: 37000,
                category: 'Home Decor'
            },
            {
                id: "29",
                image: 'WhatsApp Image 2026-03-16 at 9.35.11 PM.jpeg',
                title: 'Soft Fluffy Home Rug For Living Room And Bedroom (160 by 230)',
                price: 37000,
                category: 'Home Decor'
            },
            {
                id: "30",
                image: 'WhatsApp Image 2026-03-16 at 9.35.12 PM (1).jpeg',
                title: 'Soft Fluffy Home Rug For Living Room And Bedroom (160 by 230)',
                price: 37000,
                category: 'Home Decor'
            },
                  {
                id: "31",
                image: 'WhatsApp Image 2026-03-16 at 9.35.12 PM (2).jpeg',
                title: 'Astronaut Starry Bluetooth Projector',
                price: 24000,
                category: 'Electronic'
            },
            {
                id: "32",
                image: 'WhatsApp Image 2026-03-16 at 9.35.12 PM.jpeg',
                title: 'Soft Fluffy Home Rug For Living Room And Bedroom (160 by 230)',
                price: 37000,
                category: 'Home Decor'
            },
            {
                id: "33",
                image: 'WhatsApp Image 2026-03-16 at 9.35.13 PM (1).jpeg',
                title: 'P47 wireless headphones',
                price: 6500,
                category: 'Electronic'
            },
            {
                id: "34",
                image: 'WhatsApp Image 2026-03-16 at 9.35.13 PM (2).jpeg',
                title: 'STN-28 CAT HEADSET',
                price: 9500,
                category: 'Electronic'
            },
            {
                id: "35",
                image: 'WhatsApp Image 2026-03-16 at 9.35.13 PM.jpeg',
                title: '3 Partition jewelry organizer',
                price: 7900,
                category: 'Accessories'
            },
            {
                id: "36",
                image: 'WhatsApp Image 2026-03-16 at 9.35.14 PM (1).jpeg',
                title: 'MF993BT',
                price: 13000,
                category: 'Electronic'
            },
            {
                id: "33",
                image: 'WhatsApp Image 2026-03-16 at 9.35.14 PM (2).jpeg',
                title: 'Nodizz NPad 18 Adult',
                price: 95000,
                category: 'Electronic'
            },
            {
                id: "33",
                image: 'WhatsApp Image 2026-03-16 at 9.35.14 PM (3).jpeg',
                title: 'Pink Jolie watch set',
                price: 12000,
                category: 'Accessories'
            },
            {
                id: "33",
                image: 'WhatsApp Image 2026-03-16 at 9.35.14 PM.jpeg',
                title: 'P9 PRO MAX HEADSET',
                price: 9500,
                category: 'Electronic'
            },
            {
                id: "33",
                image: 'WhatsApp Image 2026-03-16 at 9.35.15 PM (1).jpeg',
                title: 'Amelia 3pcs watch',
                price: 16000,
                category: 'Accessories'
            },
            {
                id: "33",
                image: 'WhatsApp Image 2026-03-16 at 9.35.15 PM (2).jpeg',
                title: 'Astronaut Wall Clock',
                price: 32000,
                category: 'Home Decor'
            },
            {
                id: "33",
                image: 'WhatsApp Image 2026-03-16 at 9.35.15 PM.jpeg',
                title: 'Fola Jewelry Set',
                price: 12900,
                category: 'Accessories'
            }
        ];

        let currentCategory = 'all';
        let searchTerm = '';

        // Search Functionality
        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            searchTerm = e.target.value.toLowerCase();
            applyFilters();
        });

              document.getElementById('searchBars').addEventListener('keyup', (e) => {
            searchTerm = e.target.value.toLowerCase();
            applyFilters();
        });

        // Category Filter Function
        function filterByCategory(category) {
            currentCategory = category;
            
            // Update active button state
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.toLowerCase() === category) {
                    btn.classList.add('active');
                }
            });
            
            applyFilters();
        }

        // Combined Filter Logic
        function applyFilters() {
            let filtered = products;

            // Apply category filter
            if (currentCategory !== 'all') {
                filtered = filtered.filter(item => item.category === currentCategory);
            }

            // Apply search filter
            if (searchTerm) {
                filtered = filtered.filter(item => 
                    item.title.toLowerCase().includes(searchTerm)
                );
            }

            displayItems(filtered);
        }

        // Display Function
        function displayItems(items) {
            const root = document.getElementById('root');
            
            if (items.length === 0) {
                root.innerHTML = '<div class="no-results">No products found</div>';
                return;
            }

            root.innerHTML = items.map((item) => {
                const { image, title, price, category } = item;
                
                return `
                    <div class='box'>
                        <div class="img-box">
                            <span class="category-tag">${category}</span>
                            <img class='images' src="${image}" alt="${title}" 
                                 onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">
                        </div>
                        <div class='bottom'>
                            <p>${title}</p>
                            <h2>₦  ${price.toLocaleString()}.00</h2>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Add to Cart Function
        function addToCart(productTitle) {
            alert(`Added "${productTitle}" to cart!`);
        }

        // Initialize display
        displayItems(products);


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2 // triggers when 20% is visible
  }
);

reveals.forEach(el => observer.observe(el));

const year = new Date().getFullYear();
document.getElementById("year").textContent = year;


let map;

function initMap() {
  const center = { lat: 7.0676, lng: 6.2636 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: center
  });

  addMarker({
    coordinate: center,
    iconImage: "https://img.icons8.com/fluent/96/000000/marker-storm.png"
  });
}

function addMarker({ coordinate, iconImage }) {
  const marker = new google.maps.Marker({
    position: coordinate,
    map: map,
    icon: iconImage
  });

  marker.addListener("click", () => {
    const url = `https://www.google.com/maps?q=${coordinate.lat},${coordinate.lng}`;
    window.open(url, "_blank");
  });
}

const form = document.getElementById('form');
const submitBtn = form.querySelector('input[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "1df78677-f9d9-400b-884e-b9b1b24741b6");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
