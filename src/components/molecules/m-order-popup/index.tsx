import { Typography, Box, Dialog, DialogTitle, TextField } from '@mui/material';

import React, { useState } from 'react';

export interface IStocksCard {
  symbol: string;
  amount?: number;
  currentPrice: number;
}
export function OrderPopup({
  open,
  checkingAccountAmount,
  stock,
  handleClose,
}: {
  open: boolean;
  checkingAccountAmount: number;
  stock: IStocksCard;
  handleClose: () => void;
}) {
  const [amount, setAmout] = useState(1);

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
        <Typography>Saldo Atual</Typography>
        <Typography>{checkingAccountAmount}</Typography>
        <TextField
          label="Quantidade"
          value={amount}
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAmout(Number(event.target.value));
          }}
        />
      </Box>
    </Dialog>
  );
}
