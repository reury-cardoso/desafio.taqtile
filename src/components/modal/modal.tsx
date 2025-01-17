import { User } from '../../@types/get-users-query';
import './modal.css';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export function Modal({ isOpen, onClose, user }: UserModalProps) {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-card' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>
          &times;
        </button>
        <h2 className='modal-title'>Detalhes do Usuário</h2>
        <div className='modal-body'>
          {user && (
            <>
              <p>
                <strong>Nome:</strong> {user.name}
              </p>
              <p>
                <strong>E-mail:</strong> {user.email}
              </p>
              <p>
                <strong>Telefone:</strong> {user.phone}
              </p>
              <p>
                <strong>Data de Nascimento:</strong> {user.birthDate}
              </p>
              <p>
                <strong>Função:</strong> {
                  user.role === 'Admin' ? 'Administrador' : 'Usuário'
                }
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
