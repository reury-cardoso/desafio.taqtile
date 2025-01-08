import './login.css';

export function Login() {
  return (
    <div>
      <h1 className="welcome-heading">Bem-vindo(a) à Taqtile!</h1>
      <form className='form-login' action=''>
        <label htmlFor='input-email'>E-mail</label>
        <input id='input-email' type='email' required/>

        <label htmlFor='input-password'>Senha</label>
        <input id='input-password' type='password' required/>

        <button className='form-login-button' type='submit'>Entrar</button>
      </form>
    </div>
  );
}
