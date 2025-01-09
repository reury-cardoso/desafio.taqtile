import * as zod from 'zod';

const passwordSchema = zod
  .string()
  .nonempty({ message: 'Senha é obrigatória' })
  .min(7, { message: 'A senha deve ter no mínimo 7 caracteres' })
  .regex(/[a-zA-Z]/, { message: 'A senha deve conter pelo menos uma letra' })
  .regex(/\d/, { message: 'A senha deve conter pelo menos um número' });

const emailSchema = zod
  .string()
  .nonempty({ message: 'E-mail é obrigatório' })
  .email({ message: 'E-mail inválido' });

export const loginSchema = zod.object({
  email: emailSchema,
  password: passwordSchema,
});
