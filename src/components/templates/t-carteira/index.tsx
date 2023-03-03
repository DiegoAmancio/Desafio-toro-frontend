import { TitleValueCard } from '@/components/atoms/a-title-value-card';
import { IStocksCard } from '@/components/molecules/m-stocks-card';
import { CardList } from '@/components/organisms/o-cards-list';
import { formatValue } from '@/utils/coins';
import { Box } from '@mui/material';

export function CarteiraTemplate({
  checkingAccountAmount,
  consolidated,
  positions,
}: {
  checkingAccountAmount: number;
  consolidated: number;
  positions: IStocksCard[];
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="2rem 1rem"
      minHeight="100vh"
    >
      <Box
        display="flex"
        width="100%"
        maxWidth="450px"
        padding="0rem 1rem"
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
}
