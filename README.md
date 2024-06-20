# Web3 dApp template using RainbowKit connect wallet and NETX.js 14

## Installation

```bash
git clone https://github.com/ArnaudSene/web3-rainbowkit-template.git
cd web3-rainbowkit-template
```

## Setup

### smart contract address and ABI
Add your smart contract address and ABI into `constants/index.ts`
ABI type must be declared with `as const`

```typescript
const my_abi = [...] as const
```
Check this example : [example ABI setup](https://github.com/ArnaudSene/web3-connectKit-template/blob/5-example-with-apps/constants/index.ts)


### Add your network(s) 
Create the file in `config/network.ts`
Check this example [example network setup](https://github.com/ArnaudSene/web3-connectKit-template/blob/5-example-with-apps/config/network.ts)


### Environment files
Create 2 files
- .env.development
- .env.production

Check the sample.env.development as a template


## Run app in developement mode
```bash
pnpm run dev
```

## Run app in production mode
```bash
pnpm run start
```