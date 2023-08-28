# E-Commerce microservice

<details>
<summary>Table of content</summary>

- [E-Commerce microservice](#e-commerce-microservice)
  - [About](#about)
  - [Build with](#build-with)
  - [About the backend used :](#about-the-backend-used-)
  - [Features ✨](#features-)
  - [Project structure](#project-structure)
  - [Screenshots 🖵](#screenshots-)
  - [Installation 📥](#installation-)
  - [How to use](#how-to-use)
    - [using live server](#using-live-server)
    - [using npm](#using-npm)
  - [Deployment/Live Demo](#deploymentlive-demo)
  - [Notes](#notes)
  - [Future Feauters](#future-feauters)
  </details>

## About

dadadad

## Build with

This app is built with Angular ,bootstrap ,HTML and CSS

## About the backend used :

- This app uses:
  - [backend service 1]()
  - [backend service 2]()

## Features ✨

- Display results (list of products) with pagination
- Display product with more details
- Shopping Cart with a list of products and the overall price.
- Ability to change the number of each product in the shopping cart.
- Ability to add and remove product to/from cart
- Ability to make a payment using card #no ,CVV ,Email and info about shipping address

## Project structure

<details>
<summary>Click to expand!</summary>

```bash
## Project Structure
📦src
 ┣ 📂app
 ┃ ┣ 📂carts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂cart
 ┃ ┃ ┃ ┃ ┣ 📜cart.component.css
 ┃ ┃ ┃ ┃ ┣ 📜cart.component.html
 ┃ ┃ ┃ ┃ ┣ 📜cart.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜cart.component.ts
 ┃ ┃ ┃ ┣ 📂payment-form
 ┃ ┃ ┃ ┃ ┣ 📜payment-form.component.css
 ┃ ┃ ┃ ┃ ┣ 📜payment-form.component.html
 ┃ ┃ ┃ ┃ ┣ 📜payment-form.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜payment-form.component.ts
 ┃ ┃ ┃ ┗ 📂product-in-cart
 ┃ ┃ ┃ ┃ ┣ 📜product-in-cart.component.css
 ┃ ┃ ┃ ┃ ┣ 📜product-in-cart.component.html
 ┃ ┃ ┃ ┃ ┣ 📜product-in-cart.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜product-in-cart.component.ts
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┣ 📜Order.model.ts
 ┃ ┃ ┃ ┗ 📜OrderItem.model.ts
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┣ 📜carts.service.spec.ts
 ┃ ┃ ┃ ┗ 📜carts.service.ts
 ┃ ┃ ┗ 📜carts.module.ts
 ┃ ┣ 📂products
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂all-products
 ┃ ┃ ┃ ┃ ┣ 📜all-products.component.css
 ┃ ┃ ┃ ┃ ┣ 📜all-products.component.html
 ┃ ┃ ┃ ┃ ┣ 📜all-products.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜all-products.component.ts
 ┃ ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┃ ┣ 📜product.component.css
 ┃ ┃ ┃ ┃ ┣ 📜product.component.html
 ┃ ┃ ┃ ┃ ┣ 📜product.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜product.component.ts
 ┃ ┃ ┃ ┗ 📂product-details
 ┃ ┃ ┃ ┃ ┣ 📜product-details.component.css
 ┃ ┃ ┃ ┃ ┣ 📜product-details.component.html
 ┃ ┃ ┃ ┃ ┣ 📜product-details.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜product-details.component.ts
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┣ 📜Pageable.model.ts
 ┃ ┃ ┃ ┣ 📜product-cart.model.ts
 ┃ ┃ ┃ ┣ 📜product.model.ts
 ┃ ┃ ┃ ┗ 📜products-Response.model.ts
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┣ 📜products.service.spec.ts
 ┃ ┃ ┃ ┗ 📜products.service.ts
 ┃ ┃ ┗ 📜products.module.ts
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┣ 📜header.component.css
 ┃ ┃ ┃ ┃ ┣ 📜header.component.html
 ┃ ┃ ┃ ┃ ┣ 📜header.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜header.component.ts
 ┃ ┃ ┃ ┣ 📂pagination
 ┃ ┃ ┃ ┃ ┣ 📜pagination.component.css
 ┃ ┃ ┃ ┃ ┣ 📜pagination.component.html
 ┃ ┃ ┃ ┃ ┣ 📜pagination.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜pagination.component.ts
 ┃ ┃ ┃ ┣ 📂select
 ┃ ┃ ┃ ┃ ┣ 📜select.component.css
 ┃ ┃ ┃ ┃ ┣ 📜select.component.html
 ┃ ┃ ┃ ┃ ┣ 📜select.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜select.component.ts
 ┃ ┃ ┃ ┗ 📂spinner
 ┃ ┃ ┃ ┃ ┣ 📜spinner.component.css
 ┃ ┃ ┃ ┃ ┣ 📜spinner.component.html
 ┃ ┃ ┃ ┃ ┣ 📜spinner.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜spinner.component.ts
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┣ 📜shared.service.spec.ts
 ┃ ┃ ┃ ┗ 📜shared.service.ts
 ┃ ┃ ┗ 📜shared.module.ts
 ┃ ┣ 📜app-routing.module.ts
 ┃ ┣ 📜app.component.css
 ┃ ┣ 📜app.component.html
 ┃ ┣ 📜app.component.spec.ts
 ┃ ┣ 📜app.component.ts
 ┃ ┗ 📜app.module.ts
 ┣ 📂assets
 ┃ ┣ 📜.gitkeep
 ┃ ┗ 📜logo.jpg
 ┣ 📂environments
 ┃ ┣ 📜environment.prod.ts
 ┃ ┗ 📜environment.ts
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜main.ts
 ┗ 📜styles.css

```

</details>

## Screenshots 🖵

<details>
<summary>Products page with pagination</summary>

![image](https://github.com/AbdelrahmanShaheen/Forkify-app/assets/77184432/2dbebbd5-5ffc-4f9d-a6b8-e157920f436f)

</details>

<details>
<summary>Shopping cart</summary>

![image](https://github.com/AbdelrahmanShaheen/Forkify-app/assets/77184432/46b03b0f-a852-41dd-8b23-59a2c289852a)

</details>

<details>
<summary>Making payment</summary>

![image](https://github.com/AbdelrahmanShaheen/Forkify-app/assets/77184432/fc75045d-ed6f-47f8-a600-624d296533a4)

</details>

## Installation 📥

```bash
> git clone https://github.com/AbdelrahmanShaheen/Forkify-app
> cd Forkify-app/
> npm install
```

## How to use

### using live server

Use live server extension \
or
install nodejs : [nodejs](https://nodejs.org/en/download/) \
then install live server as an npm package

```bash
> npm install live-server -g
> live-server
```

### using npm

```bash
> npm run start
```

The application will be running on your localhost.

## Deployment/Live Demo

Deployed Website: [E-Commerce]()

## Notes

Not mobile friendly.

## Future Feauters

- abc
- xyz
