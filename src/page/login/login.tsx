import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/validation-login-schema';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../graphql/mutations';

import loadingCircles from '../../assets/bouncing-circles.svg';
import './login.css';

type LoginFormData = {
  email: string;
  password: string;
};

export function Login() {
  const [login, { loading, error: authError, data: authData }] = useMutation(LOGIN_MUTATION);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmitLogin = async (data: LoginFormData) => {
    try {
      const response = await login({
        variables: {
          data,
        },
      });
      const token = response.data.login.token;
      localStorage.setItem('token', token);
    } catch (error) {
      console.log('Error on login:', authData);
    }
  };

  return (
    <div>
      <h1 className='welcome-heading'>Bem-vindo(a) à Taqtile!</h1>
      <form className='form-login' onSubmit={handleSubmit(onSubmitLogin)}>
        <div className='form-group'>
          <label htmlFor='input-email'>E-mail</label>
          <input className='form-login-inputs' id='input-email' type='text' {...register('email')} />
          {errors.email && <p className='error'>{errors.email.message}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='input-password'>Senha</label>
          <input className='form-login-inputs' id='input-password' type='password' {...register('password')} />
          {errors.password && <p className='error'>{errors.password.message}</p>}
        </div>

        <button className='form-login-button' type='submit' disabled={loading}>
          {loading ? <img src={loadingCircles} alt='Loading...' /> : 'Entrar'}
        </button>
        {authError && <p className='error'>{authError.message}</p>}
      </form>
    </div>
  );
}
