import './login.css';

export function Login() {
  return (
    <div>
      <h1 className='welcome-heading'>Bem-vindo(a) à Taqtile!</h1>
      <form className='form-login' action=''>
        <div className='form-group'>
          <label htmlFor='input-email'>E-mail</label>
          <input className='form-login-inputs' id='input-email' type='email' />
        </div>

        <div className='form-group'>
          <label htmlFor='input-password'>Senha</label>
          <input className='form-login-inputs' id='input-password' type='password' />
        </div>

        <button className='form-login-button' type='submit'>
          Entrar
        </button>
      </form>
    </div>
  );
}
