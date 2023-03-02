import { TitleValueCard } from '@/components/atoms/a-title-value-card';
import { formatValue } from '@/utils/coins';
import { CardContent, Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';

export interface IStocksCard {
  symbol: string;
  amount: number;
  currentPrice: number;
}
export const StocksCard = ({ symbol, amount, currentPrice }: IStocksCard) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>{symbol}</Typography>
          <TitleValueCard title="Quantidade" value={amount} />
          <TitleValueCard
            title="Valor individual"
            value={formatValue(currentPrice)}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
