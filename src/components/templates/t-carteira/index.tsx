import { TitleValueCard } from '@/components/atoms/a-title-value-card';
import { IStocksCard } from '@/components/molecules/m-stocks-card';
import { CardList } from '@/components/organisms/o-cards-list';
import { formatValue } from '@/utils/coins';
import { Box } from '@mui/material';

export const CarteiraTemplate = ({
  checkingAccountAmount,
  consolidated,
  positions,
}: {
  checkingAccountAmount: number;
  consolidated: number;
  positions: IStocksCard[];
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    padding="6rem"
    minHeight="100vh"
  >
    <Box
      display="flex"
      width="450px"
      justifyContent="space-between"
      marginBottom={5}
    >
      <TitleValueCard
        title="Saldo"
        value={formatValue(checkingAccountAmount)}
      />
      <TitleValueCard
        title="Patrimônio sumarizado"
        value={formatValue(consolidated)}
      />
    </Box>
    <CardList itens={positions} />
  </Box>
);
