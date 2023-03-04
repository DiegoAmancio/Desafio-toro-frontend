import { IStocksCard } from '@/components/molecules/m-stocks-card';
import { CarteiraTemplate } from '@/components/templates/t-carteira';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { getAccountPositions, getTopFiveStocks } from '../api/account.api';

export default function Index() {
  const [checkingAccountAmount, setCheckingAccountAmount] = useState(0);
  const [positions, setPositions] = useState<IStocksCard[]>([]);
  const [topFiveStocks, setTopFiveStocks] = useState<IStocksCard[]>([]);
  const [consolidated, setConsolidated] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    const token = localStorage.getItem('tokenTop') || '';

    Promise.all([getAccountPositions(token), getTopFiveStocks(token)]).then(
      ([accountPositions, topFive]) => {
        setTopFiveStocks([...topFive]);
        setCheckingAccountAmount(accountPositions.checkingAccountAmount);
        setConsolidated(accountPositions.consolidated);
        setPositions([...accountPositions.positions]);
        setIsLoaded(true);
      },
    );
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
        topFiveStocks={topFiveStocks}
      />
    )
  );
}
