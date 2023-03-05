import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Tooltip from '@mui/material/Tooltip';
import { login } from '@/pages/api/google.api';
import Router from 'next/router';
import { Button } from '@mui/material';

import { CPFPopup } from '@/components/molecules/m-cpf-popup';
import { useDispatch } from 'react-redux';
import { snackbarUpdate } from '@/store/actions/snackbar';
import { isRegistered } from '@/pages/api/account.api';

export function GoogleButton() {
  const [cpfDialog, setOpenCpfDialog] = useState({
    open: false,
    acessToken: '',
  });

  const loginAPI = (acessToken: string, cpf?: string) =>
    login(acessToken, cpf).then(({ access_token, name }) => {
      localStorage.setItem('tokenTop', `Bearer ${access_token}`);
      localStorage.setItem('BK_NAME', name);
      Router.push('/carteira');
    });
  const onSuccess = async (res: any) => {
    const isClient = await isRegistered(res.access_token);

    if (!isClient) {
      setOpenCpfDialog({ open: true, acessToken: res.access_token });
    } else {
      loginAPI(res.access_token);
    }
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

  const dispatch = useDispatch();

  const handleCpfPopupclose = async (value: string) => {
    const { acessToken } = cpfDialog;
    loginAPI(acessToken, value)
      .then(() =>
        setOpenCpfDialog({
          open: false,
          acessToken: '',
        }),
      )
      .catch(error => {
        dispatch(
          snackbarUpdate({
            open: true,
            message: error.message,
            severity: 'error',
          }),
        );
      });
  };
  return (
    <>
      <CPFPopup open={cpfDialog.open} handleClose={handleCpfPopupclose} />
      <Tooltip title="signInLabel">
        <Button
          sx={{ background: '#5252fd', color: 'white' }}
          onClick={signInLoading}
        >
          {' '}
          Entrar
        </Button>
      </Tooltip>
    </>
  );
}
