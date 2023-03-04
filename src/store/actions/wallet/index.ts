import { IStocksCard } from '@/components/molecules/m-order-popup';
import { WALLET_UPDATE } from '..';

export type IWallet = {
  checkingAccountAmount?: number;
  positions?: IStocksCard[];
  topFiveStocks?: IStocksCard[];
  consolidated?: number;
};
export const walletUpdate = (action: IWallet) => ({
  type: WALLET_UPDATE,
  payload: action,
});
