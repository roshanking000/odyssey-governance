import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Network } from 'appConstants';
import { metamaskConnect } from 'store/metamask/actionCreators';
import { metamaskSelectors } from 'store/metamask/selectors';
import { MetamaskStatus } from 'types';

export const useWallet = (callback?: () => void) => {
  const dispatch = useDispatch();
  
  const status = useSelector(metamaskSelectors.getProp('status'));
  const isConnected = status === MetamaskStatus.CONNECTED;
  const isLoading = status === MetamaskStatus.LOADING;

  const handleConnectWallet = useCallback(() => {
    dispatch(metamaskConnect({
      network: Network.Dione,
      callback,
    }));
  }, [callback, dispatch]);

  return {
    isLoading,
    isConnected,
    handleConnectWallet,
  };
};
