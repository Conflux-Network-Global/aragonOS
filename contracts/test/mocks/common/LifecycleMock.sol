pragma solidity 0.4.24;

import "../../../common/Initializable.sol";
import "../../../common/Petrifiable.sol";


contract LifecycleMock is Initializable, Petrifiable {
    function initializeMock(uint256 epoch) public {
        initialized(epoch);
    }

    function petrifyMock() public {
        petrify();
    }
}
