import { Box, Dialog, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import React, { useState } from 'react';
import { snackbarUpdate } from '@/store/actions/snackbar';

export function CPFPopup({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: (value: string) => void;
}) {
  const [cpf, setCpf] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (cpf.length === 11) {
      handleClose(cpf);
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
          label="CPF"
          value={cpf}
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCpf(event.target.value);
          }}
        />
        <Button onClick={onSubmit}>Confirmar</Button>
      </Box>
    </Dialog>
  );
}
