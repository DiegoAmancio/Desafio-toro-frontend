import { StocksCard, IStocksCard } from '@/components/molecules/m-stocks-card';
import { List, ListItem } from '@mui/material';

export function CardList({ itens }: { itens: IStocksCard[] }) {
  return (
    <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}>
      {itens.map(item => (
        <ListItem key={`CardList item ${Math.random()}`}>
          <StocksCard {...item} />
        </ListItem>
      ))}
    </List>
  );
}
