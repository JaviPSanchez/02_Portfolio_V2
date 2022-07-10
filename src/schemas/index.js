import * as yup from "yup";

const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "name must be at least 3 characters long")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  message: yup
    .string()
    .min(5, "message must be at least 5 characters long")
    .required("Required"),
});

export default basicSchema;
