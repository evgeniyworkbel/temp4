/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});
