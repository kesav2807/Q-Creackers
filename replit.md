# Q Crackers E-Commerce Website

## Overview
Professional e-commerce website for Q Crackers - a crackers shop with admin panel, user interface, and WhatsApp order integration.

## Features

### User Side
- **Home Page**: Displays Q Crackers branding with product catalog
- **Product Filtering**: Filter by category (Kids/Adults) and cracker types
- **Shopping Cart**: Add products, adjust quantities, view total
- **WhatsApp Integration**: Send orders directly to admin via WhatsApp
- **Customer Details**: Name, phone number, and address collection
- **Mobile Responsive**: Works perfectly on all devices

### Admin Side
- **Admin Login**: Secure login (username: admin, password: admin123)
- **Order Management**: View all customer orders in real-time
- **Order Details**: See customer info (name, phone, address), items, quantities, and total amounts

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── ProductCard.jsx # Product display card
│   └── FilterBar.jsx   # Product filter controls
├── pages/              # Page components
│   ├── HomePage.jsx    # Main product listing
│   ├── CartPage.jsx    # Shopping cart & checkout
│   ├── AdminLogin.jsx  # Admin authentication
│   └── AdminDashboard.jsx # Order management
├── context/            # State management
│   ├── CartContext.jsx # Shopping cart state
│   └── AuthContext.jsx # Admin authentication
├── data/
│   └── products.js     # Product catalog
├── App.jsx             # Main app component
├── App.css             # Global styles
└── index.jsx           # Entry point
```

## Technology Stack
- React 18
- Vite (build tool)
- Context API (state management)
- Local Storage (data persistence)
- WhatsApp API (order messaging)

## How It Works

1. **User Journey**:
   - Browse products with filters
   - Add items to cart
   - Enter customer details (name, phone, address)
   - Send order via WhatsApp to admin
   - See "Your Order Sent Successfully" confirmation

2. **Admin Journey**:
   - Login to admin panel
   - View all orders in real-time
   - See customer details (name, phone, address) and order items
   - Delete completed orders

3. **WhatsApp Integration**:
   - Orders are sent to admin's WhatsApp: +91 9876543210
   - Message includes customer name, phone, address, items, and total amount
   - Admin receives formatted order notification

## Configuration
- Admin WhatsApp number can be changed in `src/pages/CartPage.jsx` (line 12)
- Admin credentials in `src/context/AuthContext.jsx` (line 20)
- Products catalog in `src/data/products.js`

## Recent Changes
- Created complete e-commerce website (Oct 7, 2025)
- Implemented dual panel system (user/admin)
- Added WhatsApp order integration with address field
- Added "Your Order Sent Successfully" confirmation message
- Made fully mobile responsive
- Set up real-time order management
- Updated modern UI/UX with gradient effects and animations

## Running the Project
The project automatically runs with `npm run dev` on port 5000.
