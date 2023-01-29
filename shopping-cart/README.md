This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# ShoppingCart Project

ShoppingCart is an ecommerce giftcards website, where users can buy giftcards, add them into cart, remove from cart, and view giftcard details.

## Final Product

!["All Products Desktop Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/All_Products_desktop.png?raw=true)
!["Shopping Cart Desktop Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Shopping_Cart_desktop.png?raw=true)
!["Product Detail Desktop Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Product_Detail_desktop.png?raw=true)
!["Checkout Desktop Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Checkout_desktop.png?raw=true)
!["Loading Desktop Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Loading_desktop.png?raw=true)
!["Add to Cart Toast Desktop Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Add_To_Cart_Toast.png?raw=true)
!["Remove From Cart Toast Desktop Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Remove_From_Cart_toast.png?raw=true)
!["All Products tablet Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/All_Products_tablet.png?raw=true)
!["Checkout tablet Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Checkout_tablet.png?raw=true)
!["Shopping Cart tablet Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Shopping_Cart_tablet.png?raw=true)
!["All Products mobile Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/All_Products_mobile.png?raw=true)
!["Product Detail mobile Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Product_Detail_mobile.png?raw=true)
!["Shopping Cart mobile Page Screenshot"](https://github.com/patelheta/Shopping-Cart/blob/main/shopping-cart/docs/Shopping_Cart_mobile.png?raw=true)

## Dependencies

- Next
- Material icons
- Material UI
- Cypress
- React toastify

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm run dev` command.
- Go to `localhost:3000` on your browser.
- View all products on product page.
- Click on product to see product detail.
- Add your favourite product to cart.
- View all added to cart item on Shopping cart page.
- Increase or decrease product quantity into cart.
- Remove product from the cart.
- For payment select proceed to checkout button.

## Functionality

- View all products from Chimoney API
- View Individual product detail
- Toast will notify user when user do Add to cart
- Toast will notify user when user do Remove from cart
- View all cart products
- User can increase or decrease product quantity into cart
- implemented loading state feature

## Future Improvement

- User authentication
- Chimoney Api integration for payment
- Set custom giftcard amount
- Add caching and pagination

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
