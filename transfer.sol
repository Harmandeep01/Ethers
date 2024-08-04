// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract tranfer{
    address public  owner;
    event TransferLog(address indexed to, uint256 indexed value);

    constructor (){
        owner = msg.sender;
    }

    function callOwner() public view returns (address) {
        return owner;
    }

    function _transfer(address payable  _to) public payable {
        _to.transfer(msg.value);
        emit TransferLog(_to, msg.value);
    }
}