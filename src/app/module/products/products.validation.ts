import { z } from "zod";

const createProductSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    stock: z.number(),
    quantity: z.number(),
    ratings: z.number(),
    image: z.string(),
  }),
});
export const ProductsValidations = {
  createProductSchemaValidation,
};
