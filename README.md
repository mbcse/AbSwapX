# AbswapX
### _**Create trustless limit orders across EVM chains**_

Hey this our ETH Tokyo 2023 hack AbswapX. We have created an automation module for any account abstraction or EOA wallet to be able to be able to create limit orders from any token on any source chain to another token on any destination chain across EVM.

## Key Features
**1. Trustless** - AbswapX is a smart contract module, meaning it is completely decentralized, composable and operates on a trustless system.

**2. Cross-chain** - AbswapX can be deployed on any EVM compatible chain, making it possible for users to trade across multiple chains.

**3. Automation** - AbswapX leverages Gelato Network to automate the execution of limit orders. This means that once a user creates a limit order, they no longer need to actively monitor the market to execute the trade.

**4. Composable** - AbswapX can be easily integrated into other DeFi protocols, enabling composability and allowing developers to create more complex trading strategies.

## How it Works
AbswapX leverages Gelato Network to create a task with call data as per the limit order specified by the user. The task is then executed using Connext, Uniswap v3, Honeyswap, or other AMMs as per the token pair, and fetching token prices from UMA protocol oracles.

When a user creates a limit order, they specify the token pair they want to trade, the price they want to buy or sell at, and the amount of tokens they want to trade. The limit order is then added to the AbswapX order book.

When the price of the token pair reaches the user's specified price, the Gelato Network executes the trade automatically. The user's tokens are then swapped for the desired tokens at the specified price.

You can find our contract deployments on - 
* Testnets
  * <a href="https://www.google.com/" target="_blank">Goerli Testnet</a>
  * <a href="https://www.google.com/" target="_blank">Polygon Testnet</a>
  * <a href="https://www.google.com/" target="_blank">Polygon zkEVM</a>
  * <a href="https://www.google.com/" target="_blank">Linea</a>
  * <a href="https://www.google.com/" target="_blank">Scroll zK</a>
  * <a href="https://www.google.com/" target="_blank">Taiko zK</a>
  * <a href="https://www.google.com/" target="_blank">Mantle zK</a>
* Mainnets
  * <a href="https://www.google.com/" target="_blank">Gnosis Chain</a>
  * <a href="https://www.google.com/" target="_blank">Polygon Chain</a>

 
