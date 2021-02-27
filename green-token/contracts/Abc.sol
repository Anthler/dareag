pragma solidity >= 0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Abc is ERC20{

    constructor() ERC20("ABC", "ATN"){
       // _mint(msg.sender, 100000);
    }
}