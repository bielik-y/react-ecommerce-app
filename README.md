# E-commerce React app

## Description

Web app for digital equipment store "Techstore" includes landing page, product pages, cart and includes payment system.
I've been doing this project to improve my skills working with App Router in Next.js and Redux Toolkit. Main focus is frontend part, so there is no DB included.

**Main used technologies:**
- **Next.js 14** (App router)
- **NextAuth** (Google & GitHub authorization)
- **Stripe** (Payment system)
- **Redux** (State management library, redux-persist is also used)
- **TailwindCSS** (Styling)
- **Framer Motion** (Animation)

## Demo

App was deployed to [Railway](https://railway.app/). 
You can see demo [here](https://react-ecommerce-app-production.up.railway.app/).

Note: access to wishlist & card pages is available only for authorized users. To test payment system you can use these [test cards numbers](https://stripe.com/docs/terminal/references/testing#standard-test-cards/).

## Key Features

- SignIn with Google or GitHub account
- Store landing page with slider 
- Provide categories pages & single product page
- Add product to cart or wishlist
- Persist cart data & wishlist data in local storage
- Card payment process with Stripe
- Bill generating for payment
- Fully responsive UI
- SEO optimization provided
- Client error handling with user notification

## Setting up 

1. Step 1: Install all dependencies `npm i`
2. Step 2: Create .env file and add necessary variables (follow `env.example` file). Note that you need to setup urls in your Google Console and GitHub application to provide authorization.
3. Start the app `npm run dev`
(next-env.d.ts should be generated automatically during build)

## TODO
- Store user & order data in DB (for full Backend implementation).
- Animate delete item from cart & wishlist would be cool.

## Screenshots

Here some screenshots of website if you are lazy to check demo or it doesn't work 😊

![Screenshot 1](/screenshots/screenshot-1.png) |  ![Screenshot 2](/screenshots/screenshot-2.png)
:-------------------------:|:-------------------------:
![Screenshot 3](/screenshots/screenshot-3.png) |  ![Screenshot 4](/screenshots/screenshot-4.png)