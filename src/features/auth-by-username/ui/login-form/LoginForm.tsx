import { ChangeEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import style from './LoginForm.module.scss';

import i18n from '@/shared/config/i18n/i18n';
import {
  AsyncSliceManager,
  classNames,
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib';
import { AppButton, TextField, ThemeButton, Typography } from '@/shared/ui';

import { userAction } from '@/entities';

import {
  getLoginEmail,
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  loginAction,
  loginByEmail,
  loginReducer,
} from '../../model';

export interface LoginFormProps {
  className?: string;
  onClose: () => void;
}
const initialReducer = { loginForm: loginReducer };

const LoginForm = ({ className, onClose }: LoginFormProps) => {
  const { t } = useTranslation();

  const email = useAppSelector(getLoginEmail);
  const password = useAppSelector(getLoginPassword);
  const isLoading = useAppSelector(getLoginIsLoading);
  const error = useAppSelector(getLoginError);

  const dispatch = useAppDispatch();

  const handleEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginAction.setEmail(e.target.value));
    },
    [dispatch]
  );

  const handlePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginAction.setPassword(e.target.value));
    },
    [dispatch]
  );

  const handleLoginUser = () => {
    void dispatch(loginByEmail({ email, password }))
      .unwrap()
      .then((data) => {
        if (data.id) {
          dispatch(userAction.setAuthUser(data));
          onClose();
        }
      });
  };

  return (
    <AsyncSliceManager reducers={initialReducer}>
      <div className={classNames(style.login_form, className)}>
        <Typography
          titleClass={style.form_title}
          title={t('Login form')}
          theme='primary'
        />
        <div className={style.input_wrap}>
          <TextField
            onChange={handleEmail}
            label={t('Email')}
            value={email}
            type='text'
            autoFocus
          />
        </div>

        <div className={classNames(!error && style.input_wrap)}>
          <TextField
            onChange={handlePassword}
            className={style.input}
            label={t('Password')}
            value={password}
            type='password'
          />
        </div>
        {error && (
          <Typography
            text={t(error)}
            theme='error'
          />
        )}
        <AppButton
          className={style.btn_form}
          onClick={handleLoginUser}
          theme={ThemeButton.BLACK}
          disabled={isLoading}
          type='submit'
          round='md'
          size='lg'
        >
          {i18n.t('Log in')}
        </AppButton>
      </div>
    </AsyncSliceManager>
  );
};
export default LoginForm;
