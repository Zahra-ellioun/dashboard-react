import { object, string } from "yup";

export let loginValidation = object({
  username: string().required(""),
  password: string().required(""),
  // .minUpercase(1, "رمز شامل یک رقم بزرگ است"),
  // .minNumbers(1, "رمز شاید عدد می باشد"),
  // .minSymbols(1, "رمز شامل @و# و ... می باشد"),
});
