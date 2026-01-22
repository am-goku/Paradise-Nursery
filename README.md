# 🌿 Paradise Nursery 🪴

**Paradise Nursery** is a simple, responsive React-based e-commerce application for browsing and purchasing houseplants.

This project was created as part of a **graded assignment** and demonstrates core React concepts along with state management and routing.

---

## ✨ Project Highlights

- React functional components & hooks  
- React Router v6 for navigation  
- Redux Toolkit for shopping cart state management  
- Responsive, mobile-first CSS  
- Clean component structure and separation of concerns  

---

## 🚀 Features

### Core Pages

#### 🏠 Home / Landing Page
- Full-screen background image  
- Company name with a welcoming message  
- **Get Started** button linking to the Plants page  
- **About Us** section displayed directly on the home page  

#### 🌱 Plants Page (`/plants`)
- Plants grouped by category (minimum 3 categories)  
- At least 6 plants per category  
- Each plant displays:
  - Thumbnail image  
  - Name  
  - Price  
  - **Add to Cart** button  
- **Add to Cart** button disables once the item is added  
- Persistent navbar with cart quantity badge  

#### 🛒 Cart Page (`/cart`)
- List of added cart items  
- Displays:
  - Thumbnail  
  - Name  
  - Unit price  
  - Quantity controls (+ / −)  
  - Subtotal per item  
- Remove item button  
- Grand total calculation  
- **Checkout** button (shows *Coming Soon* alert)  
- **Continue Shopping** link back to the Plants page  

---

## 🧭 Shared Components

### Navbar
- Visible on Plants & Cart pages  
- Navigation links:
  - Home  
  - Plants  
  - Cart  
- Cart icon with dynamic item count badge  

---

## 🛠️ Tech Stack

| Technology         | Purpose                             |
|--------------------|-------------------------------------|
| React              | UI library                          |
| React Router v6    | Client-side routing                 |
| Redux Toolkit      | Cart state management               |
| React-Redux        | Connecting Redux with React         |
| Plain CSS          | Component & global styling          |
| Create React App   | Project bootstrapping               |

---

## 📁 Project Structure

```text
paradise-nursery/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── AboutUs.css
│   │   ├── Cart.jsx
│   │   ├── Cart.css
│   │   ├── CartItem.jsx
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── ProductList.jsx
│   │   └── ProductList.css
│   ├── redux/
│   │   └── cartSlice.js
│   ├── data/
│   │   └── plants.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── README.md
├── package.json
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/paradise-nursery.git
```

### 2️⃣ Navigate to Project Directory
```bash
cd paradise-nursery
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Start Development Server
```bash
npm start
```

Open **http://localhost:3000** to view the app in your browser.

---

## 📜 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests (if any)
npm test

# Eject (irreversible)
npm run eject
```

---

## 📝 Assignment Tasks Mapping

| Task | Description                                   | File(s) |
|-----:|-----------------------------------------------|---------|
| 1    | Project README                                | README.md |
| 2    | About Us component                            | src/components/AboutUs.jsx |
| 3    | Landing page background styling               | src/App.css |
| 4    | Landing page & Get Started navigation         | src/App.jsx |
| 5    | Redux cart slice                              | src/redux/cartSlice.js |
| 6    | Plant listing & add-to-cart logic             | src/components/ProductList.jsx |
| 7    | Cart page UI & functionality                  | src/components/Cart.jsx, CartItem.jsx |

---

## 🌐 Live Demo

_Not yet deployed._  
(Can be deployed using **Vercel**, **Netlify**, or **Render**)

---

## 📸 Screenshots

_Recommended to add screenshots of Home, Plants, and Cart pages._

---

## 🔮 Future Improvements

- Persist cart data using `localStorage`  
- Search and filter plants  
- Product detail page  
- Category-based navigation  
- Loading states & error handling  
- Wishlist / favorites feature  
- Dark mode toggle  

---

## 📄 License

This project is for **educational purposes only**.
