import { TitleValueCard } from '@/components/atoms/a-title-value-card';
import { IStocksCard } from '@/components/molecules/m-stocks-card';
import { CardList } from '@/components/organisms/o-cards-list';
import { formatValue } from '@/utils/coins';
import { Box, Typography } from '@mui/material';

export function CarteiraTemplate({
  checkingAccountAmount,
  consolidated,
  positions,
  topFiveStocks,
}: {
  checkingAccountAmount: number;
  consolidated: number;
  positions: IStocksCard[];
  topFiveStocks: IStocksCard[];
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="2rem 1rem"
      minHeight="100vh"
    >
      <Typography>Olá {localStorage.getItem('BK_NAME')}</Typography>

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
      <Typography marginY="1rem" fontWeight="bold">
        Seus ativos
      </Typography>
      <CardList itens={positions} />

      <Typography marginY="1rem" fontWeight="bold">
        Ativos mais negocidos
      </Typography>
      <CardList itens={topFiveStocks} showBuyButton />
    </Box>
  );
}
