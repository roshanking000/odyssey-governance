export default [{ inputs: [{ internalType: 'address', name: '_dionePower', type: 'address' }, { internalType: 'address', name: '_dioneStakingPower', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' }, {
  inputs: [], name: 'CONSOLIDATION_RATE', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function', 
}, {
  inputs: [], name: 'DIONE', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function', 
}, {
  inputs: [], name: 'STAKING', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function', 
}, {
  inputs: [{ internalType: 'address', name: 'user', type: 'address' }], name: 'getPropositionPower', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function', 
}, {
  inputs: [], name: 'getTotalPropositionSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function', 
}, {
  inputs: [], name: 'getTotalVotingSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function', 
}, {
  inputs: [{ internalType: 'address', name: 'user', type: 'address' }], name: 'getVotingPower', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function', 
}];
