const contractAbi = {
    endurance: [{"type":"constructor","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"CLAIM_CD","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"COO_ROLE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DEFAULT_ADMIN_ROLE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"UPGRADER_ROLE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"_signerAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"baseWater","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"claim","inputs":[{"type":"uint256","name":"serverTimeStamp","internalType":"uint256"},{"type":"bytes","name":"signature","internalType":"bytes"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"claimCost","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract BOATCollectionCommonClaimConfigV1"}],"name":"configContract","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"getRoleAdmin","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getSnowflakeExtraBounds","inputs":[{"type":"uint256","name":"id","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"grantRole","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"hasRole","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initialize","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"pause","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"paused","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"proxiableUUID","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceRole","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"revokeRole","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBoatCollectionAddress","inputs":[{"type":"address","name":"newValue","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setConfigContract","inputs":[{"type":"address","name":"newValue","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setNewClaimCD","inputs":[{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setSinger","inputs":[{"type":"address","name":"newSigner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setSnowflakeExtraBounds","inputs":[{"type":"uint256","name":"id","internalType":"uint256"},{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"signatureExpirationTime","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract BOATCollection"}],"name":"snowflakeCollection","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"timeSinceLastSuccClaim","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"timeSinceLastSuccClaim2","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"unpause","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"upgradeTo","inputs":[{"type":"address","name":"newImplementation","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"upgradeToAndCall","inputs":[{"type":"address","name":"newImplementation","internalType":"address"},{"type":"bytes","name":"data","internalType":"bytes"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"withdraw","inputs":[]},{"type":"event","name":"AdminChanged","inputs":[{"type":"address","name":"previousAdmin","indexed":false},{"type":"address","name":"newAdmin","indexed":false}],"anonymous":false},{"type":"event","name":"BeaconUpgraded","inputs":[{"type":"address","name":"beacon","indexed":true}],"anonymous":false},{"type":"event","name":"EClaimSuc","inputs":[{"type":"address","name":"who","indexed":true},{"type":"uint256","name":"totalAmount","indexed":false},{"type":"uint256","name":"randomFactor","indexed":false},{"type":"uint256","name":"extraBonus","indexed":false},{"type":"uint256","name":"multiple","indexed":false}],"anonymous":false},{"type":"event","name":"EReceived","inputs":[{"type":"address","name":"from","indexed":true},{"type":"uint256","name":"value","indexed":true}],"anonymous":false},{"type":"event","name":"Initialized","inputs":[{"type":"uint8","name":"version","indexed":false}],"anonymous":false},{"type":"event","name":"Paused","inputs":[{"type":"address","name":"account","indexed":false}],"anonymous":false},{"type":"event","name":"RoleAdminChanged","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"bytes32","name":"previousAdminRole","indexed":true},{"type":"bytes32","name":"newAdminRole","indexed":true}],"anonymous":false},{"type":"event","name":"RoleGranted","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}],"anonymous":false},{"type":"event","name":"RoleRevoked","inputs":[{"type":"bytes32","name":"role","indexed":true},{"type":"address","name":"account","indexed":true},{"type":"address","name":"sender","indexed":true}],"anonymous":false},{"type":"event","name":"Unpaused","inputs":[{"type":"address","name":"account","indexed":false}],"anonymous":false},{"type":"event","name":"Upgraded","inputs":[{"type":"address","name":"implementation","indexed":true}],"anonymous":false},{"type":"error","name":"ShouldBeSomethingWrong","inputs":[]},{"type":"error","name":"ShouldCorrectSignature","inputs":[]},{"type":"error","name":"ShouldFutureTimeStamp","inputs":[]},{"type":"error","name":"ShouldInCD","inputs":[]},{"type":"error","name":"ShouldMeetClaimPrice","inputs":[]},{"type":"error","name":"ShouldNotBeZeroAddress","inputs":[]},{"type":"error","name":"ShouldReceiveACE","inputs":[]},{"type":"error","name":"ShouldSignASAP","inputs":[]},{"type":"error","name":"ShouldSufficientBalance","inputs":[]},{"type":"receive"}]
}

module.exports = {
    contractAbi
}
