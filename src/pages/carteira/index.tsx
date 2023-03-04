import { IStocksCard } from '@/components/molecules/m-stocks-card';
import { CarteiraTemplate } from '@/components/templates/t-carteira';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { getAccountPositions } from '../api/account.api';

export default function Index() {
  const [checkingAccountAmount, setCheckingAccountAmount] = useState(0);
  const [positions, setPositions] = useState<IStocksCard[]>([]);
  const [consolidated, setConsolidated] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    const res = await getAccountPositions(
      localStorage.getItem('tokenTop') || '',
    );
    setCheckingAccountAmount(res.checkingAccountAmount);
    setConsolidated(res.consolidated);
    setPositions([...res.positions]);
    setIsLoaded(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('tokenTop');

    if (token) {
      fetchData();
    } else {
      Router.push('/');
    }
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
