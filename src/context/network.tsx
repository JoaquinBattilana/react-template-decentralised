import { createContext  } from "react";
import { ethers } from 'ethers'

type NetworkContextType = {
  provider: ethers.providers.Provider
} | undefined

export const NetworkContext = createContext<NetworkContextType>(undefined);

const NetworkContextProvider : React.FC<{}> = ({ children }) => {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum)
  const initialValue : NetworkContextType = {
    provider
  }
  return (
    <NetworkContext.Provider value={initialValue}>
      { children }
    </NetworkContext.Provider>
  )
}

export default NetworkContextProvider;

