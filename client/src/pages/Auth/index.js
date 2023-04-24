import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Wrapper, Contain, P, Button } from '../../components/Collection'
import Input from '../../components/Input'

import { User } from '../../sdk/user.sdk'

const Auth = () => {
  const { type } = useParams()
  const navigate = useNavigate();

  const handleSubmit = async ({ username, email, password }) => {
    if (type === 'register') {
      const res = await User.create(
        username,
        email,
        password,
      ).catch(err => {
        console.log(err.error);
        return;
      });

      if (!res.success) {
        console.log(res.msg);
        return;
      } else {
        navigate('/auth/login');
      }
    } else {
      const res = await User.login(email, password).catch(err => {
        console.log(err.error);
      });

      if (!res.success) {
        console.log(res.msg);
        return;
      } else {
        localStorage.setItem('apiToken', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        navigate('/');
      }
    }
  }


  return (
    <Wrapper>
      <Contain padding={'40px 48px 40px 48px'} borderRadius={'5px'} background={'#fff'} direction={'column'} maxWidth={'640px'} width={'100%'} margin={'20px auto'} border={'1px solid lightGrey'}>
        <P fontSize={30} weight={700} align={'center'}>Welcome to Dev Articles</P>
        <P opacity={'0.7'} fontSize={16} align={'center'}>Dev Articles is a community of amazing developers </P>

        <Formik
          initialValues={{ email: '', password: '', username: '' }}
          //TODO: add validations validate={values => { }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ handleChange, values }) => (
            <Form>
              {/* TODO: add validation and display errors */}
              <Contain direction={'column'}>
                <Input margin={'20px 0 0'} onChange={handleChange} value={values.email} name={'email'} label={'Email'} />
                {type === 'register' && <Input margin={'20px 0 0'} onChange={handleChange} value={values.username} name={'username'} label={'Username'} />}
                <Input margin={'20px 0 0'} onChange={handleChange} value={values.password} name={'password'} label={'Password'} />

                <Button type='submit' width={'100%'} padding={'10px'} color={'#fff'} background={'#3B49DF'} borderRadius={'5px'} height={'48px'} margin={'24px 0 0'}>{type === 'register' ? 'Register' : 'Log In'}</Button>
              </Contain>
            </Form>
          )}
        </Formik>

      </Contain>
    </Wrapper>
  )
}

export default Auth