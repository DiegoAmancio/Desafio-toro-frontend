import { StocksCard, IStocksCard } from '@/components/molecules/m-stocks-card';
import { List, ListItem } from '@mui/material';

export const CardList = ({ itens }: { itens: IStocksCard[] }) => {
  return (
    <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}>
      {itens.map((item, index) => (
        <ListItem key={'CardList item ' + index}>
          <StocksCard {...item}></StocksCard>
        </ListItem>
      ))}
    </List>
  );
};
