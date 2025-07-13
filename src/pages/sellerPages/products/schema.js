import * as yup from "yup";

 export const schema = yup.object().shape({
  title: yup.string().required("Product title is required"),
  description: yup.string().required("Description is required").min(10),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than zero")
    .required("Price is required"),
  discount: yup
    .number()
    .typeError("Discount must be a number")
    .min(0, "Discount cannot be negative")
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? null : value
    )
    .test("discount-less-than-price", "Discount cannot exceed price", function (discount) {
      const { price } = this.parent;
      if (discount == null || price == null) return true;
      return discount <= price;
    }),
  stock: yup
    .number()
    .typeError("Stock must be a number")
    .integer("Stock must be an integer")
    .min(0, "Stock cannot be negative")
    .required("Stock is required"),
  category: yup.string().required("Category is required"),
  brand: yup.string().nullable(),
  image: yup.mixed().required("Product image is required"),
});