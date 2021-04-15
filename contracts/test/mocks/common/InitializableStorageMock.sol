pragma solidity 0.4.24;

import "../../../common/Initializable.sol";


contract InitializableStorageMock is Initializable {
    function initialize(uint256 epoch) onlyInit public {
        initialized(epoch);
    }

    function getInitializationBlockPosition() public pure returns (bytes32) {
        return INITIALIZATION_BLOCK_POSITION;
    }
}
