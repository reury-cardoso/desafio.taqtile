import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/validation-login-schema';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom';

import loadingCircles from '../../assets/bouncing-circles.svg';
import './page-login.css';

type LoginFormData = {
  email: string;
  password: string;
};

export function PageLogin() {
  const navigate = useNavigate();
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.login.token);
      navigate('/users');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmitLogin = async (formData: LoginFormData) => {
    await login({
      variables: {
        data: formData,
      },
    });
  };

  return (
    <div>
      <h1 className='welcome-heading'>Bem-vindo(a) à Taqtile!</h1>
      <form className='form-login' onSubmit={handleSubmit(onSubmitLogin)}>
        <div className='form-group'>
          <label htmlFor='input-email'>E-mail</label>
          <input className='form-login-inputs' id='input-email' type='email' {...register('email')} />
          {formErrors.email && <p className='error'>{formErrors.email.message}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='input-password'>Senha</label>
          <input className='form-login-inputs' id='input-password' type='password' {...register('password')} />
          {formErrors.password && <p className='error'>{formErrors.password.message}</p>}
        </div>

        <button className='form-login-button' type='submit' disabled={loading}>
          {loading ? <img src={loadingCircles} alt='Loading...' /> : 'Entrar'}
        </button>
        {error && <p className='error'>{error.message}</p>}
      </form>
    </div>
  );
}
