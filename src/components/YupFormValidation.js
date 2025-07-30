import * as yup from 'yup';

export const validation = yup.object().shape({
  title: yup
    .string()
    .required('A product must be entered'),
  price: yup
    .number()
    .typeError("A price must be a number") // For non-numeric strings
    .positive("Price must be positive")
    .required("Price is required"),
});


export const validation2 = yup.object().shape({
  title: yup
    .string()
    .required("task can't be empty, otherwise it's not even a task"),
  dueDate: yup
    .string()
    .required('A task must have a due data')
});


export const validation3 = yup.object().shape({
  username: yup
    .string()
    .required("Username required."),
  password: yup
    .string()
    .required('Password required.')
});

