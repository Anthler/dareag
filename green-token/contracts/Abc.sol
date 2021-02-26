pragma solidity >= 0.5.16 <=0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ABC is ERC20{

    constructor() ERC20("ABC", "ATN"){
       // _mint(msg.sender, 100000);
    }
}