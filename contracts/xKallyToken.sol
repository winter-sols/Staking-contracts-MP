// SPDX-License-Identifier: MIT

/**
 * Polkally (https://polkally.com)
 * @author Shiro <shiro@polkally.com>
 */

pragma solidity 0.8.4;

import "./libs/BEP20.sol";

// xKallyToken
contract xKallyToken is BEP20 {

    /**
     * @notice Constructs the xKallyToken contract.
     */
    constructor() BEP20("xKally Token", "XKALLY") {
    }

    /// @notice Creates `_amount` token to `_to`. Must only be called by the owner (MasterChef).
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
}
