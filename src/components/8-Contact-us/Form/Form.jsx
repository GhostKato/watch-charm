import { Field, Formik, Form } from 'formik';
import Button from '../../Button/Button';
import s from './Form.module.css';

const FormComponent = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',    
    comment: '', 
  };

  const handleSubmit = (data, actions) => {
    console.log(data);
    actions.resetForm();
  };

  return (
    <div className={s.container}>
      <p className={s.p}>
        Please use the form below to contact us. Enter your name, email, phone, and message and we'll get back to you shortly.
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>

          <label className={s.label}>
            <Field className={s.input} name='name' placeholder='Name' />
          </label>

          <label className={s.label}>
            <Field className={s.input} name='email' type='email' placeholder='Email' />
          </label>

          <label className={s.label}>
            <Field className={s.input} name='phone' type='tel' placeholder='+380' />
          </label>

          <label className={s.label}>
            <Field className={s.textarea} as='textarea' name='comment' placeholder='Comment' />
          </label>

          <Button style='formBtn' text='Send' type='submit'/>
        </Form>
      </Formik>
    </div>
  );
}

export default FormComponent;