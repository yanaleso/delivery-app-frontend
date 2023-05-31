import { Formik } from 'formik';
import * as yup from 'yup';
import CustomerInfo from '../components/CustomerInfo';
import {
  FormBox,
  StyledButton,
} from '../components/CustomerInfo/CustomerInfo.styled';

function ShoppingCartPage() {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };

  const phoneRegExp =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Name must be more than 2 characters!')
      .max(30, 'Name must be less than 30 characters!')
      .required('The name field is required.'),
    email: yup
      .string()
      .email('Email is not valid')
      .required('The email field is required.'),
    number: yup
      .string()
      .min(6, 'Phone must be more than 6 characters!')
      .max(13, 'Phone must be less than 13 characters!')
      .matches(phoneRegExp, 'Phone number is not valid.')
      .required('The phone field is required.'),
    address: yup.string().required('The address field is required.'),
  });

  // const handleSubmit = (values, { resetForm }) => {
  //   console.log(values);
  //   dispatch(authOperations.register(values));
  //   resetForm();
  // };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        // onSubmit={handleSubmit}
      >
        <FormBox>
          <CustomerInfo />
          <StyledButton type="submit">Submit</StyledButton>
        </FormBox>
      </Formik>
    </>
  );
}

export default ShoppingCartPage;
