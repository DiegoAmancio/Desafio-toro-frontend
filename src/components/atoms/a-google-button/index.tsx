import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Tooltip from '@mui/material/Tooltip';
import { login } from '@/pages/api/google.api';
import Router from 'next/router';
import { Button } from '@mui/material';

export function GoogleButton() {
  const onSuccess = async (res: any) => {
    login(res.access_token).then(({ access_token, name }) => {
      localStorage.setItem('tokenTop', `Bearer ${access_token}`);
      localStorage.setItem('BK_NAME', name);
      Router.push('/carteira');
    });
  };

  const onError = () => {
    alert(
      'Estamos com problemas para autenticar o seu login, tente mais tarde',
    );
  };
  const signIn = useGoogleLogin({
    onSuccess,
    onError,
  });

  const signInLoading = () => {
    signIn();
  };

  return (
    <Tooltip title="signInLabel">
      <Button
        sx={{ background: '#5252fd', color: 'white' }}
        onClick={signInLoading}
      >
        {' '}
        Entrar
      </Button>
    </Tooltip>
  );
}
