import { z } from 'zod';
import { emailSchema, passwordSchema } from './validation-login-schema';

const nameSchema = z
  .string()
  .nonempty({ message: 'O nome é obrigatório.' })
  .refine((name) => name.trim().split(' ').length >= 2, {
    message: 'O nome deve ser completo (pelo menos 2 palavras).',
  });

const phoneSchema = z
  .string()
  .nonempty({ message: 'O telefone é obrigatório.' })
  .regex(/^\d{10,11}$/, {
    message: 'O telefone deve conter apenas dígitos e ter 10 ou 11 caracteres.',
  });

const birthDateSchema = z
  .string()
  .nonempty({ message: 'A data de nascimento é obrigatória.' })
  .refine(
    (date) => {
      const parsedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return parsedDate < today;
    },
    {
      message: 'A data de nascimento não pode estar no futuro.',
    },
  );

const roleSchema = z.enum(['admin', 'user'], {
  required_error: 'A função é obrigatória.',
  invalid_type_error: 'Selecione uma função válida.',
});

export const addUserSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema,
  password: passwordSchema,
  birthDate: birthDateSchema,
  role: roleSchema,
});
