// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";

// import "@mimic-fi/v2-helpers/contracts/utils/ERC20Helpers.sol";

interface IAggregationExecutor {
    /// @notice propagates information about original msg.sender and executes arbitrary data
    function execute(address msgSender) external payable;
}

interface IOneInchV5AggregationRouter {
    struct SwapDescription {
        IERC20 srcToken;
        IERC20 dstToken;
        address payable srcReceiver;
        address payable dstReceiver;
        uint256 amount;
        uint256 minReturnAmount;
        uint256 flags;
    }

    /// @notice Performs a swap, delegating all calls encoded in `data` to `executor`. See tests for usage examples
    /// @dev router keeps 1 wei of every token on the contract balance for gas optimisations reasons. This affects first swap of every token by leaving 1 wei on the contract.
    /// @param executor Aggregation executor that executes calls described in `data`
    /// @param desc Swap description
    /// @param permit Should contain valid permit that can be used in `IERC20Permit.permit` calls.
    /// @param data Encoded calls that `caller` should execute in between of swaps
    /// @return returnAmount Resulting token amount
    /// @return spentAmount Source token amount
    function swap(
        IAggregationExecutor executor,
        SwapDescription calldata desc,
        bytes calldata permit,
        bytes calldata data
    ) external payable returns (uint256 returnAmount, uint256 spentAmount);
}

/**
 * @title OneInchV5Connector
 * @dev Interfaces with 1inch V5 to swap tokens
 */
contract OneInchV5Connector {
    // Reference to 1inch aggregation router v5
    IOneInchV5AggregationRouter private immutable oneInchV5Router;

    /**
     * @dev Initializes the OneInchV5Connector contract
     * @param _oneInchV5Router 1inch aggregation router v5 reference
     */
    constructor(address _oneInchV5Router) {
        oneInchV5Router = IOneInchV5AggregationRouter(_oneInchV5Router);
    }

    /**
     * @dev Internal function to swap two tokens through 1Inch V5
     * @param tokenIn Token being sent
     * @param tokenOut Token being received
     * @param amountIn Amount of tokenIn being swapped
     * @param minAmountOut Minimum amount of tokenOut willing to receive
     * @param data Calldata to be sent to the 1inch aggregation router
     */
    function _swapOneInchV5(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 minAmountOut,
        bytes memory data
    ) external returns (uint256 amountOut) {
        uint256 preBalanceOut = IERC20(tokenOut).balanceOf(address(this));

        IERC20 token = IERC20(tokenIn);
        token.approve(address(oneInchV5Router), amountIn);
        // ERC20Helpers.approve(tokenIn, address(oneInchV5Router), amountIn);
        Address.functionCall(
            address(oneInchV5Router),
            data,
            "1INCH_V5_SWAP_FAILED"
        );

        uint256 postBalanceOut = IERC20(tokenOut).balanceOf(address(this));
        amountOut = postBalanceOut - preBalanceOut;
        require(amountOut >= minAmountOut, "1INCH_V5_MIN_AMOUNT");
    }
}
