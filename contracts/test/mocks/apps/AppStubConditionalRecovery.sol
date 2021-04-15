pragma solidity 0.4.24;

import "../../../apps/AragonApp.sol";
import "../../../common/DepositableStorage.sol";


contract AppStubConditionalRecovery is AragonApp, DepositableStorage {
    function initialize(uint256 epoch) onlyInit public {
        initialized(epoch);
        setDepositable(true);
    }

    function allowRecoverability(address token) public view returns (bool) {
        // Doesn't allow to recover ether
        return token != address(0);
    }
}
