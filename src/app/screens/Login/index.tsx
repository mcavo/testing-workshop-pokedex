import React from 'react';
import { View, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import { Formik } from 'formik';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputFormikField } from '@components/CustomTextInput';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '@constants/validations';
import { AuthData } from '@interfaces/authInterfaces';
import {
  validationsWrapper,
  validateRequired,
  validateEmailFormat,
  validateMinLength,
  validateMaxLength
} from '@utils/validationsUtils';
import AuthActions from '@redux/auth/actions';

import './i18n';

import styles from './styles';
import { FIELDS, LOGIN_INITIAL_VALUES } from './constants';

function Login() {
  const dispatch = useDispatch();
  const onSubmit = (values: AuthData) => {
    dispatch(AuthActions.login(values));
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik onSubmit={onSubmit} initialValues={LOGIN_INITIAL_VALUES}>
          {({ handleSubmit }) => (
            <View style={styles.container}>
              <SafeAreaView>
                <CustomText gray xbig center semiBold style={styles.title}>
                  {i18next.t('LOGIN:POKEDEX')}
                </CustomText>
                <CustomTextInputFormikField
                  keyboardType="email-address"
                  name={FIELDS.email}
                  placeholder={i18next.t('FIELDS:EMAIL')}
                  validate={validationsWrapper([
                    validateRequired(i18next.t('FIELDS:EMAIL')),
                    validateEmailFormat(i18next.t('FIELDS:EMAIL'))
                  ])}
                />
                <CustomTextInputFormikField
                  secureTextEntry
                  placeholder={i18next.t('FIELDS:PASSWORD')}
                  name={FIELDS.password}
                  validate={validationsWrapper([
                    validateRequired(i18next.t('FIELDS:PASSWORD')),
                    validateMinLength(MIN_PASSWORD_LENGTH, i18next.t('FIELDS:PASSWORD')),
                    validateMaxLength(MAX_PASSWORD_LENGTH, i18next.t('FIELDS:PASSWORD'))
                  ])}
                />
                <CustomButton text={i18next.t('LOGIN:SUBMIT')} onPress={handleSubmit} small />
              </SafeAreaView>
            </View>
          )}
        </Formik>
      </TouchableWithoutFeedback>
      {/* <View style={styles.container}>
        <SafeAreaView>
          <CustomController
            control={control}
            name="email"
            rules={emailRules}
            placeholder={i18next.t('FIELDS:EMAIL')}
            error={errors?.email?.message}
          />
          <CustomController
            control={control}
            name="password"
            rules={passwordRules}
            placeholder={i18next.t('FIELDS:PASSWORD')}
            error={errors?.password?.message}
          />
        </SafeAreaView>
      </View> */}
    </>
  );
}

export default Login;
