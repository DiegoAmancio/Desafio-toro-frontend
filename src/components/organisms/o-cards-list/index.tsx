import { StocksCard, IStocksCard } from '@/components/molecules/m-stocks-card';
import { List, ListItem, Typography } from '@mui/material';

export function CardList({
  itens,
  showBuyButton,
}: {
  itens: IStocksCard[];
  showBuyButton?: boolean;
}) {
  return (
    <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}>
      {itens.length > 0 ? (
        itens.map(item => (
          <ListItem key={`CardList item ${Math.random()}`}>
            <StocksCard stock={item} showBuyButton={showBuyButton} />
          </ListItem>
        ))
      ) : (
        <Typography fontWeight="bold" align="center">
          Sem ativos
        </Typography>
      )}
    </List>
  );
}
