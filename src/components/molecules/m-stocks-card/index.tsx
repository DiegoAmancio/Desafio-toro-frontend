import { TitleValueCard } from '@/components/atoms/a-title-value-card';
import { formatValue } from '@/utils/coins';
import { CardContent, Typography, Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { OrderPopup } from '../m-order-popup';

export interface IStocksCard {
  symbol: string;
  amount?: number;
  currentPrice: number;
}
export function StocksCard({
  showBuyButton,
  stock,
}: {
  showBuyButton?: boolean;
  stock: IStocksCard;
}) {
  const { symbol, amount, currentPrice } = stock;
  const [openButton, setOpenButton] = useState(false);

  const handleClose = () => {
    setOpenButton(false);
  };
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>{symbol}</Typography>
          {amount !== null && amount !== undefined && (
            <TitleValueCard title="Quantidade" value={amount} />
          )}
          <TitleValueCard
            title="Valor individual"
            value={formatValue(currentPrice)}
          />
          {showBuyButton && (
            <Button onClick={() => setOpenButton(true)}>Comprar</Button>
          )}

          <OrderPopup
            open={openButton}
            stock={stock}
            handleClose={handleClose}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
