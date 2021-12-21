import { useContext } from "react";
import { NetworkContext } from '../context/network';

const useNetworkContext = () => {
  const context = useContext(NetworkContext);
}

export default useNetworkContext;
