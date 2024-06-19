import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { sepolia, mainnet } from "wagmi/chains";
import { allfeat } from "./network";

export const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "",
    ssr: true,
    chains: [sepolia, mainnet, allfeat],
    transports: {
        // RPC URL for each chain
        [sepolia.id]: http(
            `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
        ),
        [mainnet.id]: http(
            `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
        ),
        [allfeat.id]: http(allfeat.rpcUrls.default.http[0])
    },
})

