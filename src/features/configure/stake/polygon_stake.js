import { govPoolABI } from '../abi';

export const polygonStakePools = [
  {
    id: 'rawft-polygon',
    name: 'RAWFT',
    logo: 'single-assets/BIFI.png',
    token: 'RAWFT',
    tokenDecimals: 18,
    tokenAddress: '0x2eF4229DF9c3D76e078AB16Bfee05ad618337C27',
    tokenOracle: 'tokens',
    tokenOracleId: 'RAWFT',
    earnedToken: 'MATIC',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    earnContractAddress: '0xFb0E025481466B39fd822c9316390d339F411A88',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WMATIC',
    partnership: false,
    status: 'active',
    hideCountdown: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        background: 'stake/beefy/background.png',
        text: "You probably already knew that Beefy is the most trusted multi-chain yield optimizer. But did you know that Beefy has its own token? $BIFI has a maximum supply of 80000 tokens and there is no way to mint more. Everyone who holds our own $BIFI token can not only do cool stuff like create and vote on proposals, they also get a share of all harvests done, every hour, every day on all our Polygon vaults. That's a lot of Matic that goes straight to our $BIFI holders. All you have to do is stake your $BIFI in this vault, it’s that simple, come back and harvest your Matic whenever you need it!",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },
];
