const networks = {
    1: {
        chainId: `0x${Number(1).toString(16)}`,
        chainName: "Ethereum Mainnet",
        rpcUrls: [
            "https://eth-mainnet.public.blastapi.io",
            "https://cloudflare-eth.com",
            "https://ethereumnodelight.app.runonflux.io",
            "https://main-light.eth.linkpool.io",
        ],
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        blockExplorerUrls: [
            "https://etherscan.io",
        ]
    },
    10: {
        chainId: `0x${Number(10).toString(16)}`,
        chainName: "Optimism",
        rpcUrls: [
            "https://mainnet.optimism.io/"
        ],
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        blockExplorerUrls: [
            "https://optimistic.etherscan.io",
        ]
    },
    56: {
        chainId: `0x${Number(56).toString(16)}`,
        chainName: "Binance Smart Chain Mainnet",
        nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "BNB",
            decimals: 18
        },
        rpcUrls: [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org"
        ],
        blockExplorerUrls: ["https://bscscan.com"]
    },
    100: {
        chainId: `0x${Number(100).toString(16)}`,
        chainName: "Gnosis Chain (formerly xDai)",
        rpcUrls: [
            "https://rpc.gnosischain.com",
            "https://xdai.poanetwork.dev",
            "wss://rpc.gnosischain.com/wss",
            "wss://xdai.poanetwork.dev/wss",
            "http://xdai.poanetwork.dev",
            "https://dai.poa.network",
            "ws://xdai.poanetwork.dev:8546"
        ],
        nativeCurrency: {
            name: "xDAI",
            symbol: "xDAI",
            decimals: 18
        },
        blockExplorerUrls: [
            "https://blockscout.com/xdai/mainnet",
        ]
    },
    137: {
        chainId: `0x${Number(137).toString(16)}`,
        chainName: "Polygon Mainnet",
        rpcUrls: ["https://polygon-rpc.com/"],
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        blockExplorerUrls: ["https://polygonscan.com/"]
    },
    250: {
        chainId: `0x${Number(250).toString(16)}`,
        chainName: "Fantom Opera",
        rpcUrls: [
            "https://rpc.ftm.tools"
        ],
        nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18
        },
        blockExplorerUrls: [
            "https://ftmscan.com",

        ]
    },
    42161: {
        chainId: `0x${Number(42161).toString(16)}`,
        chainName: "Arbitrum One",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: [
            "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}",
            "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
            "https://arb1.arbitrum.io/rpc",
            "wss://arb1.arbitrum.io/ws"
        ],
        blockExplorerUrls: [
            "https://arbiscan.io",
            "https://explorer.arbitrum.io",

        ]
    },
    43114: {
        chainId: `0x${Number(43114).toString(16)}`,
        chainName: "Avalanche C-Chain",
        rpcUrls: [
            "https://api.avax.network/ext/bc/C/rpc"
        ],
        nativeCurrency: {
            name: "Avalanche",
            symbol: "AVAX",
            decimals: 18
        },
        blockExplorerUrls: [
            "https://snowtrace.io",
        ]
    },
    1313161554: {
        chainId: `0x${Number(1313161554).toString(16)}`,
        chainName: "Aurora Mainnet",
        rpcUrls: [
            "https://mainnet.aurora.dev"
        ],
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        blockExplorerUrls: [
            "https://aurorascan.dev",
        ]
    }

};

module.exports = {
    networks
}