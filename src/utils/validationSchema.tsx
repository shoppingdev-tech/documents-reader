import {object, string} from 'yup';
import {ObjectShape} from 'yup/lib/object';

type ObjectShapeValues = ObjectShape extends Record<string, infer V>
  ? V
  : never;
type Shape<T extends Record<any, any>> = Partial<
  Record<keyof T, ObjectShapeValues>
>;
interface LoginSchemaType {
  email: string;
  password: string;
}

export const loginSchema = (translate: any) => {
  return object<Shape<LoginSchemaType>>({
    email: string()
      .required(translate('LOGIN.ERRORS.EMPTY_EMAIL'))
      .email(translate('LOGIN.ERRORS.INVALID_EMAIL')),
    password: string()
      .required(translate('LOGIN.ERRORS.EMPTY_PASSWORD'))
      .min(8, translate('LOGIN.ERRORS.INVALID_PASSWORD')),
  });
};
