import { formatValue } from '@/utils/coins';
import { Typography, Box, Dialog, DialogTitle, TextField } from '@mui/material';

import React, { useState } from 'react';

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
      </Box>
    </Dialog>
  );
}
