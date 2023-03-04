import { orderStocks } from '@/pages/api/account.api';
import { WALLET_UPDATE } from '@/store/actions';
import { formatValue } from '@/utils/coins';
import {
  Typography,
  Box,
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import React, { useState } from 'react';
import { snackbarUpdate } from '@/store/actions/snackbar';

export interface IStocksCard {
  symbol: string;
  amount?: number;
  currentPrice: number;
}
export function OrderPopup({
  open,
  stock,
  handleClose,
}: {
  open: boolean;
  stock: IStocksCard;
  handleClose: () => void;
}) {
  const [amount, setAmout] = useState(1);

  const dispatch = useDispatch();

  const onSubmit = () => {
    const token = localStorage.getItem('tokenTop') || '';

    orderStocks(token, { amount, symbol: stock.symbol }).then(
      response => {
        dispatch({
          type: WALLET_UPDATE,
          payload: response,
        });
        dispatch(
          snackbarUpdate({
            open: true,
            message: 'Compra realizada',
            severity: 'success',
          }),
        );
      },
      data => {
        console.log(data);
        dispatch(
          snackbarUpdate({
            open: true,
            message: data.message,
            severity: 'error',
          }),
        );
      },
    );
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        display="flex"
        width="100%"
        maxWidth="450px"
        padding="0rem 1rem"
        justifyContent="space-between"
        marginBottom={5}
        flexDirection="column"
        gap="10px"
        alignItems="center"
      >
        <DialogTitle>Fazer Pedido</DialogTitle>
        <Typography>{stock.symbol}</Typography>
        <Typography>Valor individual</Typography>
        <Typography>{formatValue(stock.currentPrice)}</Typography>
        <TextField
          label="Quantidade"
          value={amount}
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAmout(Number(event.target.value));
          }}
        />
        <Button onClick={onSubmit}>Comprar</Button>
      </Box>
    </Dialog>
  );
}
