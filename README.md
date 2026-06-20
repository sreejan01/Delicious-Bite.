# Delicious Bite 🍽️

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

A modern, responsive restaurant website showcasing an exquisite menu, online ordering system, and exceptional dining experience.

[Features](#features) • [Live Demo](#live-demo) • [Installation](#installation) • [Contributing](#contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

Delicious Bite is a modern, fully responsive restaurant website built with HTML5, CSS3, and JavaScript. It showcases a beautiful menu, enables online food ordering, displays customer testimonials, and provides seamless navigation for an exceptional dining experience.

**Website Type:** Restaurant/Food Service Business
**Target Audience:** Food enthusiasts, online customers, reservation seekers

---

## ✨ Features

- **Home Landing Page**
  - Eye-catching hero section
  - Call-to-action buttons
  - Featured dishes showcase
  - Restaurant highlights

- **Menu Management**
  - Categorized menu items
  - Dish images, descriptions, and prices
  - Vegetarian/dietary indicators
  - Search & filter functionality
  - Detailed dish modals

- **Online Ordering**
  - Add to cart functionality
  - Quantity management
  - Order summary
  - Checkout process
  - Order confirmation

- **Reservation System**
  - Date & time picker
  - Party size selection
  - Special requests
  - Confirmation emails
  - Reservation management

- **About Section**
  - Restaurant story
  - Team profiles
  - History & achievements
  - Location & hours

- **Testimonials & Reviews**
  - Customer reviews carousel
  - Star ratings
  - Review images
  - Social proof

- **Contact & Location**
  - Contact form
  - Google Maps integration
  - Location details
  - Multiple contact methods
  - Social media links

- **Responsive Design**
  - Mobile-first approach
  - Tablet optimization
  - Desktop experience
  - Cross-browser compatibility
  - Touch-friendly interface

- **User Experience**
  - Smooth animations
  - Intuitive navigation
  - Fast loading
  - Accessibility features
  - SEO optimized

---

## 🌐 Live Demo

Visit the live website: [Delicious Bite Demo](https://delicious-bite-restaurant.netlify.app)

---

## 💻 Technologies

- **HTML5** - Semantic structure
- **CSS3** - Modern styling, animations, transitions
- **JavaScript (ES6+)** - Interactive features
- **Font Awesome** - Icons
- **Google Fonts** - Typography
- **Google Maps API** - Location embedding
- **Responsive Design** - Mobile optimization

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/sreejan01/Delicious-Bite.git
cd Delicious-Bite
```

### 2. Open in Browser

**Option A: Using Live Server (VS Code)**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

**Option B: Local Server**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Navigate to http://localhost:8000
```

### 3. Configuration

Update `js/config.js`:

```javascript
// config.js
const CONFIG = {
  restaurantName: 'Delicious Bite',
  phone: '+1-800-BITE-123',
  email: 'info@deliciousbite.com',
  address: '123 Food Street, Culinary City, CC 12345',
  gmapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  currency: '$',
  deliveryFee: 5.99,
  minimumOrder: 15.00
};
```

---

## 💡 Usage

### Navigation
1. **Home** - Welcome & featured dishes
2. **Menu** - Browse all menu items
3. **About** - Learn restaurant story
4. **Reservations** - Book a table
5. **Contact** - Get in touch

### Ordering Steps
1. Browse menu items
2. Click item to view details
3. Add to cart
4. Review cart
5. Proceed to checkout
6. Enter delivery details
7. Confirm order

### Making a Reservation
1. Navigate to Reservations
2. Select date & time
3. Choose party size
4. Add special requests
5. Confirm reservation

---

## 📁 Project Structure

```
Delicious-Bite/
├── index.html                  # Home page
├── menu.html                   # Menu page
├── about.html                  # About page
├── reservations.html           # Reservations page
├── contact.html                # Contact page
├── css/
│   ├── style.css              # Main stylesheet
│   ├── responsive.css         # Mobile responsiveness
│   ├── animations.css         # Animations & transitions
│   └── menu.css               # Menu-specific styles
├── js/
│   ├── main.js                # Main application script
│   ├── menu.js                # Menu functionality
│   ├── cart.js                # Shopping cart logic
│   ├── reservations.js        # Reservation system
│   ├── contact.js             # Contact form handling
│   ├── config.js              # Configuration
│   └── utils.js               # Utility functions
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   ├── dishes/
│   │   │   ├── biryani.jpg
│   │   │   ├── tandoori.jpg
│   │   │   └── ...
│   │   └── team/
│   ├── icons/
│   └── fonts/
├── data/
│   ├── menu.json              # Menu data
│   └── testimonials.json      # Customer reviews
└── README.md
```

---

## 🎨 Key Components

### Navigation Bar

```html
<nav class="navbar">
  <div class="nav-container">
    <div class="nav-logo">Delicious Bite</div>
    <ul class="nav-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#reservations">Reservations</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
```

### Menu Item Card

```html
<div class="menu-item">
  <img src="assets/images/dishes/dish.jpg" alt="Dish Name">
  <div class="item-info">
    <h3>Delicious Dish Name</h3>
    <p class="description">Mouth-watering description of the dish...</p>
    <div class="item-meta">
      <span class="vegetarian">🌱 Vegetarian</span>
      <span class="price">$12.99</span>
    </div>
    <button class="btn-add-cart" onclick="addToCart(id)">Add to Cart</button>
  </div>
</div>
```

### Shopping Cart

```javascript
// js/cart.js
class ShoppingCart {
  constructor() {
    this.items = [];
    this.loadFromStorage();
  }
  
  addItem(dish, quantity = 1) {
    const existingItem = this.items.find(item => item.id === dish.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        quantity: quantity,
        image: dish.image
      });
    }
    
    this.saveToStorage();
    this.updateUI();
  }
  
  removeItem(dishId) {
    this.items = this.items.filter(item => item.id !== dishId);
    this.saveToStorage();
    this.updateUI();
  }
  
  getTotal() {
    return this.items.reduce((total, item) => 
      total + (item.price * item.quantity), 0
    );
  }
  
  saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
  
  loadFromStorage() {
    const stored = localStorage.getItem('cart');
    if (stored) this.items = JSON.parse(stored);
  }
}

const cart = new ShoppingCart();
```

### Reservation Form

```html
<form id="reservationForm" class="reservation-form">
  <div class="form-group">
    <label for="date">Preferred Date</label>
    <input type="date" id="date" required>
  </div>
  
  <div class="form-group">
    <label for="time">Preferred Time</label>
    <input type="time" id="time" required>
  </div>
  
  <div class="form-group">
    <label for="guests">Number of Guests</label>
    <select id="guests" required>
      <option value="1">1 Guest</option>
      <option value="2">2 Guests</option>
      <option value="4">4 Guests</option>
      <option value="6">6 Guests</option>
      <option value="8">8+ Guests</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="name">Your Name</label>
    <input type="text" id="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" required>
  </div>
  
  <div class="form-group">
    <label for="requests">Special Requests</label>
    <textarea id="requests" rows="4" placeholder="Any special dietary needs or requests?"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Book Table</button>
</form>
```

---

## 📱 Responsive Design

```css
/* Mobile First */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet (768px and above) */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }
  
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Desktop (1024px and above) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
  
  .menu-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 🎨 CSS Animations

```css
/* Smooth transitions */
.menu-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-section {
  animation: fadeIn 0.8s ease-out;
}
```

---

## 🤝 Contributing

### Contribution Guidelines

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-feature`)
3. **Commit** changes (`git commit -m 'Add new feature'`)
4. **Push** to branch (`git push origin feature/new-feature`)
5. **Open** a Pull Request

### Development Standards

- Follow semantic HTML5
- Use CSS Grid/Flexbox
- Ensure mobile responsiveness
- Add comments for complex logic
- Test across browsers

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] User accounts & loyalty program
- [ ] Payment gateway integration
- [ ] Real-time order tracking
- [ ] Admin dashboard
- [ ] Mobile app
- [ ] AI-powered recommendations
- [ ] Delivery integration

---

## 📞 Contact

- **Website**: [deliciousbite.com](https://deliciousbite.com)
- **Email**: [info@deliciousbite.com](mailto:info@deliciousbite.com)
- **Phone**: +1-800-BITE-123
- **Address**: 123 Food Street, Culinary City, CC 12345

---

<div align="center">

Made with ❤️ by [Sreejan](https://github.com/sreejan01)

[⬆ back to top](#delicious-bite-)

</div>
