export interface ProfileType {
  age?: number;
  avatar?: string;
  city?: string;
  // country?: Country;
  country?: string;
  // currency: Currency,
  email?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  username?: string;
}

type ValidationErrorType = 'is incorrect' | 'is too long' | 'is too short' | '';

export type ProfileValidationErrors = Partial<
  Record<keyof ProfileType, ValidationErrorType>
>;
