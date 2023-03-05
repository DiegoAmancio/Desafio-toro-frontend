import { Box, Dialog, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import React, { useState } from 'react';
import { snackbarUpdate } from '@/store/actions/snackbar';
import { deposit } from '@/pages/api/account.api';
import { WALLET_UPDATE } from '@/store/actions';

export function DepositPopup({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [origin, setOrigin] = useState({
    bank: '033',
    branch: '03312',
    cpf: '45358996060',
  });

  const [amount, setAmout] = useState(0);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (origin.cpf.length === 11) {
      const token = localStorage.getItem('tokenTop') || '';

      deposit(token, {
        event: 'TRANSFER',
        target: {
          bank: '352',
          branch: '0001',
          account: '40000',
        },
        origin,
        amount,
      }).then(
        response => {
          dispatch(
            snackbarUpdate({
              open: true,
              message: 'Deposito feito',
              severity: 'success',
            }),
          );
          dispatch({
            type: WALLET_UPDATE,
            payload: response,
          });
          handleClose();
        },
        error => {
          dispatch(
            snackbarUpdate({
              open: true,
              message: error.response.data.message,
              severity: 'error',
            }),
          );
        },
      );
    } else {
      dispatch(
        snackbarUpdate({
          open: true,
          message: 'CPF inválido',
          severity: 'error',
        }),
      );
    }
  };
  return (
    <Dialog open={open}>
      <Box
        display="flex"
        width="100%"
        maxWidth="450px"
        padding="1rem"
        justifyContent="space-between"
        marginBottom={5}
        flexDirection="column"
        gap="10px"
        alignItems="center"
      >
        <TextField
          label="Valor"
          value={amount}
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAmout(Number(event.target.value));
          }}
        />
        <TextField
          label="Banco"
          value={origin.bank}
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setOrigin({ ...origin, bank: event.target.value });
          }}
        />
        <TextField
          label="Agência"
          value={origin.branch}
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setOrigin({ ...origin, branch: event.target.value });
          }}
        />
        <TextField
          label="CPF"
          value={origin.cpf}
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setOrigin({ ...origin, cpf: event.target.value });
          }}
        />
        <Button onClick={onSubmit}>Confirmar</Button>
      </Box>
    </Dialog>
  );
}
