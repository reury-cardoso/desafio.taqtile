import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addUserSchema } from '../../schemas/validation-add-user-schema';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../graphql/mutations';

import loadingCircles from '../../assets/bouncing-circles.svg';
import './page-add-user.css';

type AddUserFormData = {
  name: string;
  phone: string;
  email: string;
  password: string;
  birthDate: string;
  role: string;
};

export function PageAddUser() {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      alert('Usuário adicionado com sucesso!');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<AddUserFormData>({ resolver: zodResolver(addUserSchema) });

  const onSubmitLogin = async (formData: AddUserFormData) => {
    await createUser({
      variables: {
        data: formData,
      },
    });
  };

  return (
    <div className='add-user-page'>
      <div className='add-user-container'>
        <h1 className='add-heading-title'>Usuários</h1>
        <button
          className='back-button'
          onClick={() => {
            window.location.href = '/users';
          }}
        >
          Voltar
        </button>
      </div>
      <form className='form-add-user' onSubmit={handleSubmit(onSubmitLogin)}>
        <div className='form-group-add-user'>
          <label htmlFor='name'>Nome Completo</label>
          <input
            type='text'
            className='form-add-user-inputs'
            id='input-name'
            placeholder='Ex: João da Silva'
            {...register('name')}
          />
          {formErrors.name && <p className='error'>{formErrors.name.message}</p>}
        </div>

        <div className='form-group-add-user'>
          <label htmlFor='phone'>Telefone</label>
          <input
            type='tel'
            className='form-add-user-inputs'
            id='input-phone'
            placeholder='Ex: 11987654321'
            {...register('phone')}
          />
          {formErrors.phone && <p className='error'>{formErrors.phone.message}</p>}
        </div>

        <div className='form-group-add-user'>
          <label htmlFor='email'>E-mail</label>
          <input type='email' className='form-add-user-inputs' id='input-email' {...register('email')} />
          {formErrors.email && <p className='error'>{formErrors.email.message}</p>}
        </div>

        <div className='form-group-add-user'>
          <label htmlFor='password'>Senha</label>
          <input type='password' className='form-add-user-inputs' id='input-password' {...register('password')} />
          {formErrors.password && <p className='error'>{formErrors.password.message}</p>}
        </div>

        <div className='form-group-add-user'>
          <label htmlFor='birthDate'>Data de Nascimento</label>
          <input type='date' className='form-add-user-inputs' id='input-birthDate' {...register('birthDate')} />
          {formErrors.birthDate && <p className='error'>{formErrors.birthDate.message}</p>}
        </div>

        <div className='form-group-add-user'>
          <label htmlFor='role'>Função</label>
          <select className='form-add-user-inputs' id='input-role' {...register('role')}>
            <option value='user' defaultChecked>
              Usuário
            </option>
            <option value='admin'>Admin</option>
          </select>
          {formErrors.role && <p className='error'>{formErrors.role.message}</p>}
        </div>

        <button className='form-add-user-button' type='submit' disabled={loading}>
          {loading ? <img src={loadingCircles} alt='Loading...' /> : 'Adicionar'}
        </button>
        {error && <p className='error'>{error.message}</p>}
      </form>
    </div>
  );
}
