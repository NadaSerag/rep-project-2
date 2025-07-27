import * as yup from 'yup';

export const validation = yup.object().shape({
  name: yup
    .string()
    .required('A project must be entered'),
  description: yup
    .string()
    .required('A description must be entered')
    .min(5, 'Project must have at least a brief description'),
});


export const validation2 = yup.object().shape({
  title: yup
    .string()
    .required("task can't be empty, otherwise it's not even a task"),
  dueDate: yup
    .string()
    .required('A task must have a due data')
});


