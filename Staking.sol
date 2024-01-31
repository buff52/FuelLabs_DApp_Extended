// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staking is Ownable {
    using SafeERC20 for IERC20;

    mapping(address => uint256) public stakedBalances;

    function stake(address token, uint256 amount) external {
        IERC20(token).safeTransferFrom(msg.sender, address(this), amount);
        stakedBalances[msg.sender] += amount;
    }

    function unstake(address token, uint256 amount) external {
        require(stakedBalances[msg.sender] >= amount, "Insufficient staked balance");
        IERC20(token).safeTransfer(msg.sender, amount);
        stakedBalances[msg.sender] -= amount;
    }

    // Additional functionality for rewards distribution, slashing, etc.
}
