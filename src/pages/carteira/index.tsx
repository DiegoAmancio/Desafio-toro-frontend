import { useEffect } from 'react';
import Router from 'next/router';
import { CarteiraTemplate } from '@/components/templates/t-carteira';
import { IRootState } from '@/store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { LOADING_UPDATE, WALLET_UPDATE } from '@/store/actions';
import { getAccountPositions, getTopFiveStocks } from '../api/account.api';

export default function Index() {
  const { open } = useSelector((state: IRootState) => state.loading);

  const { checkingAccountAmount, positions, topFiveStocks, consolidated } =
    useSelector((state: IRootState) => state.wallet);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const token = localStorage.getItem('tokenTop') || '';

    Promise.all([getAccountPositions(token), getTopFiveStocks(token)]).then(
      ([accountPositions, topFive]) => {
        dispatch({
          type: WALLET_UPDATE,
          payload: {
            ...accountPositions,
            topFiveStocks: topFive,
          },
        });
        dispatch({
          type: LOADING_UPDATE,
          payload: {
            open: true,
          },
        });
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
    open && (
      <CarteiraTemplate
        checkingAccountAmount={checkingAccountAmount}
        consolidated={consolidated}
        positions={positions}
        topFiveStocks={topFiveStocks}
      />
    )
  );
}
