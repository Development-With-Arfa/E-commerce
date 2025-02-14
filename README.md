# 🔗 README - E-commerce Marketplace

## 🔗 Overview

This document delineates the technical framework of the E-commerce platform, meticulously designed to ensure a seamless and efficient shopping experience. It comprehensively outlines the frontend requirements, CMS configuration, integration of third-party APIs, system architecture, and fundamental workflows.

## 🔗Technical Framework

### 🔗Frontened Requirements

#### 1. Learn Basics

1.  HTML
2.  CSS
3.  Javascript
4.  Learn One Framework

- **Responsive Design :** Adapts for mobile and desktop screens.
  - **Home :** Featured products, nav bar, and banners.
  - **Product Listing :** Filtering (price, popularity, category) and pagination
  - **Product Details :** Description, price, stock, and "Add to Cart".
  - **Cart :** Product summary, quantity adjustment, and total price.
  - **Checkout :** Billing, shipping, and payment selection.
  - **Order Confirmation :** Success message with order summary.
- **Search :** Interactive search functionality.
- **Authentication :** User sign-up, login, and profile management.

### 🔗Sanity CMS

- **Product Schema :**

```
import { defineType } from "sanity";

export default defineType(
    {
        name: "products", title: "Products", type:"document"
    fields: [
        { name: "title", title: "Product Title", type: "string" },
        { name: "slug", title: "slug", type: "slug",
            options: { source: 'title' },
        },
        { name: "price", title: "Price", type: "number" },
        { title: "Price without Discount", name: "priceWithoutDiscount", type: "number" },
        { name: "badge", title: "Badge", type: "string" },
        { name: "image", title: "Product Image", type: "image" },
        { name: "category", title: "Category", type: "reference",
            to: [
                { type: "categories" }
                ]
        },
        { name: "description", title: "Product Description", type: "text" },
        { name: "inventory", title: "Inventory Management", type: "number" },
        { name: "tags", title: "Tags", type: "array"
            of: [
                  { type: "string" }
              ],
            options: {
              list: [
                { title: "Featured", value: "featured" },
                { title: "Follow products and discounts on Instagram", value: "instagram"},
                { title: "Gallery", value: "gallery" },
              ],
            },
        },
    ],
});
```

- **Order Schema :**

```const order = {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        { name: "firstName", type: "string", title: "First Name" },
        { name: "lastName", type: "string", title: "Last Name" },
        { name: "email", type: "string", title: "Email" },
        { name: "phone", type: "string", title: "Phone" },
        { name: "address", type: "string", title: "Address" },
        { name: "city", type: "string", title: "City" },
        { name: "zipCode", type: "string", title: "Zip Code" },
        { name: "discount", type: "number", title: "Discount" },
        { name: "cartItems", type: "array", title: "Cart Items", 
            of: [
                { type: "reference", to: { type: "products" } }
                ]
        },
        { name: "total", type: "number", title: "Total" },
        { name: "status", type: "string", title: "Order Status",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Success", value: "success" },
                    { title: "Dispatch", value: "dispatch" }
                ],
                layout: "radio",
            },
            initialValue: "pending",
        }
    ]
};
export default order;
```

## 🔗Third-Party APIs
* **Shipment Tracking API :** Fetches real-time shipment updates.
* **Payment Gateway :** Integrates with providers like Stripe.
* **Product Data API :**
  - **Endpoint :** ``/products``
  - **Method :** ``/Get``
  - **Response Example :** 
```
[
    {
      "id": 1,
      "name": "Product A",
      "price": 100,
      "stock": 50
    }
] 
```

## 🔗 System Architecture
* **Frontend (Next.js) :** Handles the user interface
* **Sanity CMS :** Manages product and order data.
* **APIs :** Product Data API, Order Data API, and third-party integrations (e.g., Stripe, Shipment Tracking).

### 🔗 Architecture Diagram
```
[Frontend (Next.js)]
      |
      | ---> [Sanity CMS] <---> [Product Data API]
      |
      | ---> [Order Data API]
      |
      | ---> [Payment Gateway]
      |
      | ---> [Third-Party APIs]
```

### 🔗 Key Workflows
  1. **User Registration:**
    + User submits form → Data stored in Sanity → Email verification sent.
  2. **Product Browsing:**
    - User searches/filters → Data fetched from Sanity → Products displayed.
  3. **Order Placement:**
    - User adds to cart → Payment processed → Order saved in Sanity.
  4. **Shipment Tracking:**
    - User checks tracking → Updates fetched from third-party API → Displayed.

## 🔗 Conclusion    
This README provides a concise overview of the **E-commerce** platform's technical foundation. For more details, refer to the specific sections or contact the development team.