# React + Vite

# GadgetHeaven ✨

## Your go-to destination for the latest and greatest gadgets

GadgetHeaven is an e-commerce platform offering a wide range of tech gadgets for users. It features a user-friendly design, product browsing by categories, an interactive shopping cart, wishlist system, product sorting, and much more. The app is built using React, Context API, and local storage for data persistence.

---

## Table of Contents

1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Key Features](#key-features)
4. [Screenshots](#screenshots)
5. [Technologies Used](#technologies-used)
6. [ES6 Features Used](#es6-features-used)
7. [Live Demo](#live-demo)
8. [Requirement Document](#requirement-document)
9. [React Concepts Used](#react-concepts-used)
10. [Data Management](#data-management)
11. [Future Enhancements](#future-enhancements)
12. [Known Issues](#known-issues)
13. [Documentation](#documentation)
14. [Acknowledgements](#acknowledgements)

## React Concepts Used

 1. **Components:**
 - Functional components are used for rendering UI elements like the Navbar, Footer, and Product Cards.

2. **Props:**
- Props are used to pass data between components, such as passing product details to the ProductCard component.

3. **State Management:**
- Local state is used in components like modals to control visibility, while global state for cart and wishlist is managed using Context API.

4. **useEffect:**
- Used for performing side effects such as fetching product data from a mock API or saving to LocalStorage when the cart or wishlist changes.

5. **useContext:**
- Provides access to the global cart and wishlist state across the application.

## Key Features of the project:

1. **Responsive Design:**
- The site is mobile-first and looks great on desktops, tablets, and mobile devices.

2. **Categories Sidebar:**
- Gadgets are grouped by categories like Computers, Phones, Smart Watches, Chargers, and Power Banks. Users can easily filter products by categories.

3. **Product Filtering & Sorting:**
- Users can filter products by categories and sort them by price in ascending or descending order.

4. **Interactive Product Cards:**
- Each product is displayed as a card with an image, name, price, and a "Details" button to view more information about the product.

5. **Add to Cart and Wishlist:**
- Users can add items to the cart and wishlist. The cart shows the total price, and items can be removed from both the cart and wishlist.


## Live Demo:
- Check out the live version of GadgetHeaven here: https://pointless-sound.surge.sh/


## Requirement Document:
- For detailed project requirements, you can download the requirement document from the link below: file:///C:/Projects/B10-A8-gadget-heaven/Batch-10_Assignment-08-.pdf


## Data Management
1. **Context API:**
- The Context API is used to manage the global state of the cart and wishlist. The state is provided by a Context Provider component and consumed by the necessary components using useContext.

2. **LocalStorage:**
- Cart and wishlist data are saved in LocalStorage to persist user selections even after page reloads. When the app is reloaded, the data is fetched from LocalStorage to maintain consistency.

