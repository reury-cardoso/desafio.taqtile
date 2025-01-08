import './login.css';

export function Login() {
  return (
    <div>
      <h1 className="welcome-heading">Bem-vindo(a) à Taqtile!</h1>
      <form className='form-login' action=''>
        <label htmlFor='inputEmail'>E-mail</label>
        <input id='inputEmail' type='email' />

        <label htmlFor='inputPassword'>Senha</label>
        <input id='inputPassword' type='password' />

        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
}
