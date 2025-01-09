import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/validation-login-schema';
import './login.css';

type LoginFormData = {
  email: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmitLogin = async (data: LoginFormData) => {
    console.log(data);
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

        <button className='form-login-button' type='submit'>
          Entrar
        </button>
      </form>
    </div>
  );
}
