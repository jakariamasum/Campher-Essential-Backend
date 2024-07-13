import { Request, Response } from "express";
import stripeModule from "stripe";

const stripe = new stripeModule(
  "sk_test_51NFKgXEzrlDWkzjgiKJLpSTLPRvWYY58Z4vJu4FXbYWXCSs32OSocvX3yUcAfVZW6wYVkf2aWvUT30LXO0rJg1gA00hO2PW2uy"
);

const createPayment = async (req: Request, res: Response) => {
  try {
    const { products } = req.body;

    if (!products || !Array.isArray(products)) {
      return res.status(400).json({ error: "Products must be an array" });
    }

    const lineItems = products.map((product: any) => {
      if (
        typeof product.product.price !== "number" ||
        isNaN(product.product.price)
      ) {
        throw new Error(`Invalid price for product: ${product.product.name}`);
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.product.name,
            images: [product.product.image],
          },
          unit_amount: Math.round(product.product.price * 100), // Ensure unit_amount is an integer
        },
        quantity: product.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: error.message });
  }
};

export const PaymentControllers = {
  createPayment,
};
