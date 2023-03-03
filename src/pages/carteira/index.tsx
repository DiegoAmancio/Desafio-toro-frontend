import { IStocksCard } from '@/components/molecules/m-stocks-card';
import { CarteiraTemplate } from '@/components/templates/t-carteira';
import { useEffect, useState } from 'react';
import { getAccountPositions } from '../api/account.api';

export default function Index() {
  const [checkingAccountAmount, setCheckingAccountAmount] = useState(0);
  const [positions, setPositions] = useState<IStocksCard[]>([]);
  const [consolidated, setConsolidated] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    const res = await getAccountPositions();
    setCheckingAccountAmount(res.checkingAccountAmount);
    setConsolidated(res.consolidated);
    setPositions([...res.positions]);
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchData();
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
