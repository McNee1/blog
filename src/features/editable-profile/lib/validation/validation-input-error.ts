import { ProfileType, ProfileValidationErrors } from '@/entities';

const isEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validateStringField = (value: string) => {
  if (value.length > 30) {
    return 'is too long';
  } else if (value.length <= 3 || !value.length) {
    return 'is too short';
  } else {
    return '';
  }
};

const isURL = (value: string): boolean => {
  try {
    const url = new URL(value);

    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return false;
    }

    const invalidCharsRegex = /[^\w-.~:/?#[\]@!$&'()*+,;=%]/;
    if (invalidCharsRegex.test(value)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

export const validationInputError = (
  name: keyof ProfileType,
  value: string
): ProfileValidationErrors => {
  const errors: ProfileValidationErrors = {};

  const age = Number(value);

  switch (name) {
    case 'firstName':
    case 'lastName':
    case 'username':
    case 'city':
      errors[name] = validateStringField(value);
      break;

    case 'age':
      if (isNaN(age) || !Number.isInteger(age) || age < 0 || age > 150 || !age) {
        errors.age = 'is incorrect';
      } else {
        errors.age = '';
      }
      break;

    case 'email':
      if (!isEmail(value) || value.length > 30) {
        errors.email = 'is incorrect';
      } else {
        errors.email = '';
      }
      break;
    case 'avatar':
      errors.avatar = isURL(value) ? '' : 'is incorrect';
      break;
  }

  return errors;
};
