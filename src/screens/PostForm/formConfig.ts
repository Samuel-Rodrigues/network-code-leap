import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
});

export const initialValues: Partial<Career> = {
  title: '',
  content: '',
};
