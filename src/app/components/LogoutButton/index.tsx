import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import logoutIcon from '@assets/logout.png';
import AuthActions from '@redux/auth/actions';

import styles from './styles';

function LogoutButton() {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(AuthActions.logout());
  return (
    <TouchableOpacity onPress={handleLogout}>
      <Image source={logoutIcon} style={styles.image} />
    </TouchableOpacity>
  );
}

export default LogoutButton;
