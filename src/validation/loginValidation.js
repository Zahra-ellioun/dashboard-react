import { object, string } from "yup";

export let loginValidation = object({
  email: string().email("ایمیل وارد شده صحیح نمی باشد").required(""),
  password: string().required("").min(8, "تعداد ارقام پسورد اشتباه است"),
  // .minUpercase(1, "رمز شامل یک رقم بزرگ است"),
  // .minNumbers(1, "رمز شاید عدد می باشد"),
  // .minSymbols(1, "رمز شامل @و# و ... می باشد"),
});
