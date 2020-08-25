import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import CustomButton from '@components/CustomButton';
import CustomController from '@components/CustomController';
import CustomText from '@components/CustomText';
import { AuthData } from '@interfaces/authInterfaces';
import AuthActions from '@redux/auth/actions';
import { emailRules, passwordRules } from '@utils/validationsUtils';

import './i18n';

import styles from './styles';

function Login() {
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm<AuthData>();
  const onSubmit = (values: AuthData) => {
    dispatch(AuthActions.login(values));
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CustomText gray xbig center semiBold style={styles.title}>
          {i18next.t('LOGIN:POKEDEX')}
        </CustomText>
        <CustomController
          control={control}
          name="email"
          rules={emailRules}
          inputProps={{
            placeholder: i18next.t('FIELDS:EMAIL'),
            error: errors?.email?.message
          }}
        />
        <CustomController
          control={control}
          name="password"
          rules={passwordRules}
          inputProps={{
            placeholder: i18next.t('FIELDS:PASSWORD'),
            error: errors?.password?.message
          }}
        />
        <CustomButton text={i18next.t('LOGIN:SUBMIT')} onPress={handleSubmit(onSubmit)} small />
      </SafeAreaView>
    </View>
  );
}

export default Login;
