import { z } from "zod";
import { categories, types } from "./consts";

export const transactionSchema = z.object({
  type: z.enum(types),
  category: z.enum(categories),
  amount: z.number().min(1, {
    message: "Amount need to be at least 1",
  }),
  description: z.string().min(1, {
    message: "The description is required",
  }),
  created_at: z.string().refine((val) => {
    isNaN(Date.parse(val)), {
        message: 'Date needs in this format YYYY-MM-DD'
    };
  }),
});
