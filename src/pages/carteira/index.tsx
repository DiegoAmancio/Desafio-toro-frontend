import { IStocksCard } from '@/components/molecules/m-stocks-card';
import { CarteiraTemplate } from '@/components/templates/t-carteira';
import { useEffect, useState } from 'react';

export default function Index() {
  const [checkingAccountAmount, setCheckingAccountAmount] = useState(0);
  const [positions, setPositions] = useState<IStocksCard[]>([]);
  const [consolidated, setConsolidated] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mock = {
      checkingAccountAmount: 234.0, // Saldo em conta corrente
      positions: [
        {
          symbol: 'PETR4',
          amount: 2,
          currentPrice: 28.44,
        },
        {
          symbol: 'SANB11',
          amount: 3,
          currentPrice: 40.77,
        },
      ],
      consolidated: 413.19, // (234.00 + (28.44 * 2) + (40.77 * 3)
    };

    setCheckingAccountAmount(mock.checkingAccountAmount);
    setConsolidated(mock.consolidated);
    setPositions([...mock.positions]);
    setIsLoaded(true);
  }, []);
  return (
    isLoaded && (
      <CarteiraTemplate
        checkingAccountAmount={checkingAccountAmount}
        consolidated={consolidated}
        positions={positions}
      />
    )
  );
}
