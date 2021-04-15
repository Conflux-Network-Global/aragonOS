pragma solidity 0.4.24;

import "../../../apps/UnsafeAragonApp.sol";
import "../../../common/DepositableStorage.sol";


contract VaultMock is UnsafeAragonApp, DepositableStorage {
    event LogFund(address sender, uint256 amount);

    function initialize(uint256 epoch) external {
        initialized(epoch);
        setDepositable(true);
    }

    function () external payable {
        emit LogFund(msg.sender, msg.value);
    }
}
