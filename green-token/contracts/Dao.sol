pragma solidity >= 0.6.0 < 0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Dao{

    address public admin;
    address public abc_token_contract;
    uint constant MINIMUM_AMOUNT = 1000;
    uint private ballotCount;
    mapping(uint => Ballot) ballots;

    struct Proposal {
        bytes32 name; 
        uint voteCount;
    }

    struct Ballot{
        uint id;
        string description;
        Proposal[] proposals;
        uint endTime;
        mapping(address => bool) voted;
    }

    constructor(address _token){
        abc_token_contract = _token;
    }

    function updateTokenContract(address _token) public {
        require(msg.sender == admin, 'You do not have the permission to update token address');
        abc_token_contract = _token;
    }

    function vote(uint _ballotId, uint _option) public {
        require(IERC20(abc_token_contract).balanceOf(msg.sender) >= MINIMUM_AMOUNT, "You do not have enought tokens to vote");
        require(! ballots[_ballotId].voted[msg.sender], "You already voted");
        require(_ballotId <= ballotCount, "Invallid ballot ID provided");
        require(ballots[_ballotId].endTime < block.timestamp, "Voting session already ended");
        ballots[_ballotId].proposals[_option].voteCount+=1;
        ballots[_ballotId].voted[msg.sender] = true;
    }

    function createNewBallot(bytes32[] memory _proposals, uint _endTime) public{
        require(msg.sender == admin, "You are not an admin");
        uint ballotId = ballotCount++;
        Ballot storage ballot = ballots[ballotId];
        ballot.id = ballotId;
        ballot.endTime = _endTime;
         for(uint i = 0; i < 2; i++){
            ballot.proposals[i] = Proposal({name: _proposals[i], voteCount:0});
        }
    }

    function getWinningProposal(uint _ballotId) public view returns(bytes32 _proposalName, uint _votes){
        Ballot storage ballot = ballots[_ballotId];
        for(uint i = 0; i <2; i++){
            uint winningVoteCount = 0;
            if(ballot.proposals[i].voteCount > winningVoteCount){
                winningVoteCount = ballot.proposals[i].voteCount;
            }
            _proposalName = ballot.proposals[i].name;
            _votes = winningVoteCount;
        }
        
    }

}