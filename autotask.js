// this file contains the code for your defender autotask

const { DefenderRelaySigner, DefenderRelayProvider } = require('defender-relay-client/lib/ethers');
const ethers = require('ethers');

exports.handler = async function(event) {
  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider, { speed: 'fast' });
  // Use provider and signer for querying or sending txs from ethers, for example...

  const { greeting } = event.request.body;
  const Greeter = "0x5def1e59226B0E881567E67B4C6c09Daa74dEe04";
  
  const GreeterAbi = {
  "_format": "hh-sol-artifact-1",
  "contractName": "Greeter",
  "sourceName": "contracts/Greeter.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract MinimalForwarder",
          "name": "forwarder",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "greet",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "forwarder",
          "type": "address"
        }
      ],
      "name": "isTrustedForwarder",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "name": "setGreeting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60a06040523480156200001157600080fd5b5060405162000ea638038062000ea6833981810160405281019062000037919062000453565b818073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506200009d60405180606001604052806022815260200162000e846022913982620000be60201b620002611760201c565b8060009080519060200190620000b59291906200018d565b505050620005b6565b620001608282604051602401620000d792919062000516565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200016460201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546200019b9062000580565b90600052602060002090601f016020900481019282620001bf57600085556200020b565b82601f10620001da57805160ff19168380011785556200020b565b828001600101855582156200020b579182015b828111156200020a578251825591602001919060010190620001ed565b5b5090506200021a91906200021e565b5090565b5b80821115620002395760008160009055506001016200021f565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200027e8262000251565b9050919050565b6000620002928262000271565b9050919050565b620002a48162000285565b8114620002b057600080fd5b50565b600081519050620002c48162000299565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200031f82620002d4565b810181811067ffffffffffffffff82111715620003415762000340620002e5565b5b80604052505050565b6000620003566200023d565b905062000364828262000314565b919050565b600067ffffffffffffffff821115620003875762000386620002e5565b5b6200039282620002d4565b9050602081019050919050565b60005b83811015620003bf578082015181840152602081019050620003a2565b83811115620003cf576000848401525b50505050565b6000620003ec620003e68462000369565b6200034a565b9050828152602081018484840111156200040b576200040a620002cf565b5b620004188482856200039f565b509392505050565b600082601f830112620004385762000437620002ca565b5b81516200044a848260208601620003d5565b91505092915050565b600080604083850312156200046d576200046c62000247565b5b60006200047d85828601620002b3565b925050602083015167ffffffffffffffff811115620004a157620004a06200024c565b5b620004af8582860162000420565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000620004e282620004b9565b620004ee8185620004c4565b9350620005008185602086016200039f565b6200050b81620002d4565b840191505092915050565b60006040820190508181036000830152620005328185620004d5565b90508181036020830152620005488184620004d5565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200059957607f821691505b60208210811415620005b057620005af62000551565b5b50919050565b6080516108b3620005d1600039600060b401526108b36000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063572b6c0514610046578063a413686214610076578063cfae321714610092575b600080fd5b610060600480360381019061005b91906104da565b6100b0565b60405161006d9190610522565b60405180910390f35b610090600480360381019061008b9190610683565b610108565b005b61009a6101cf565b6040516100a79190610754565b60405180910390f35b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6101b560405180606001604052806023815260200161085b6023913960008054610131906107a5565b80601f016020809104026020016040519081016040528092919081815260200182805461015d906107a5565b80156101aa5780601f1061017f576101008083540402835291602001916101aa565b820191906000526020600020905b81548152906001019060200180831161018d57829003601f168201915b5050505050836102fd565b80600090805190602001906101cb9291906103c5565b5050565b6060600080546101de906107a5565b80601f016020809104026020016040519081016040528092919081815260200182805461020a906107a5565b80156102575780601f1061022c57610100808354040283529160200191610257565b820191906000526020600020905b81548152906001019060200180831161023a57829003601f168201915b5050505050905090565b6102f982826040516024016102779291906107d7565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061039c565b5050565b6103978383836040516024016103159392919061080e565b6040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061039c565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546103d1906107a5565b90600052602060002090601f0160209004810192826103f3576000855561043a565b82601f1061040c57805160ff191683800117855561043a565b8280016001018555821561043a579182015b8281111561043957825182559160200191906001019061041e565b5b509050610447919061044b565b5090565b5b8082111561046457600081600090555060010161044c565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104a78261047c565b9050919050565b6104b78161049c565b81146104c257600080fd5b50565b6000813590506104d4816104ae565b92915050565b6000602082840312156104f0576104ef610472565b5b60006104fe848285016104c5565b91505092915050565b60008115159050919050565b61051c81610507565b82525050565b60006020820190506105376000830184610513565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61059082610547565b810181811067ffffffffffffffff821117156105af576105ae610558565b5b80604052505050565b60006105c2610468565b90506105ce8282610587565b919050565b600067ffffffffffffffff8211156105ee576105ed610558565b5b6105f782610547565b9050602081019050919050565b82818337600083830152505050565b6000610626610621846105d3565b6105b8565b90508281526020810184848401111561064257610641610542565b5b61064d848285610604565b509392505050565b600082601f83011261066a5761066961053d565b5b813561067a848260208601610613565b91505092915050565b60006020828403121561069957610698610472565b5b600082013567ffffffffffffffff8111156106b7576106b6610477565b5b6106c384828501610655565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107065780820151818401526020810190506106eb565b83811115610715576000848401525b50505050565b6000610726826106cc565b61073081856106d7565b93506107408185602086016106e8565b61074981610547565b840191505092915050565b6000602082019050818103600083015261076e818461071b565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806107bd57607f821691505b602082108114156107d1576107d0610776565b5b50919050565b600060408201905081810360008301526107f1818561071b565b90508181036020830152610805818461071b565b90509392505050565b60006060820190508181036000830152610828818661071b565b9050818103602083015261083c818561071b565b90508181036040830152610850818461071b565b905094935050505056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a26469706673582212203073bf0e5859b1b643ecfdba301cb6883b785dbcbc627c72d4a626468c33cb7364736f6c634300080900334465706c6f79696e67206120477265657465722077697468206772656574696e673a",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063572b6c0514610046578063a413686214610076578063cfae321714610092575b600080fd5b610060600480360381019061005b91906104da565b6100b0565b60405161006d9190610522565b60405180910390f35b610090600480360381019061008b9190610683565b610108565b005b61009a6101cf565b6040516100a79190610754565b60405180910390f35b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6101b560405180606001604052806023815260200161085b6023913960008054610131906107a5565b80601f016020809104026020016040519081016040528092919081815260200182805461015d906107a5565b80156101aa5780601f1061017f576101008083540402835291602001916101aa565b820191906000526020600020905b81548152906001019060200180831161018d57829003601f168201915b5050505050836102fd565b80600090805190602001906101cb9291906103c5565b5050565b6060600080546101de906107a5565b80601f016020809104026020016040519081016040528092919081815260200182805461020a906107a5565b80156102575780601f1061022c57610100808354040283529160200191610257565b820191906000526020600020905b81548152906001019060200180831161023a57829003601f168201915b5050505050905090565b6102f982826040516024016102779291906107d7565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061039c565b5050565b6103978383836040516024016103159392919061080e565b6040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061039c565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546103d1906107a5565b90600052602060002090601f0160209004810192826103f3576000855561043a565b82601f1061040c57805160ff191683800117855561043a565b8280016001018555821561043a579182015b8281111561043957825182559160200191906001019061041e565b5b509050610447919061044b565b5090565b5b8082111561046457600081600090555060010161044c565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104a78261047c565b9050919050565b6104b78161049c565b81146104c257600080fd5b50565b6000813590506104d4816104ae565b92915050565b6000602082840312156104f0576104ef610472565b5b60006104fe848285016104c5565b91505092915050565b60008115159050919050565b61051c81610507565b82525050565b60006020820190506105376000830184610513565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61059082610547565b810181811067ffffffffffffffff821117156105af576105ae610558565b5b80604052505050565b60006105c2610468565b90506105ce8282610587565b919050565b600067ffffffffffffffff8211156105ee576105ed610558565b5b6105f782610547565b9050602081019050919050565b82818337600083830152505050565b6000610626610621846105d3565b6105b8565b90508281526020810184848401111561064257610641610542565b5b61064d848285610604565b509392505050565b600082601f83011261066a5761066961053d565b5b813561067a848260208601610613565b91505092915050565b60006020828403121561069957610698610472565b5b600082013567ffffffffffffffff8111156106b7576106b6610477565b5b6106c384828501610655565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107065780820151818401526020810190506106eb565b83811115610715576000848401525b50505050565b6000610726826106cc565b61073081856106d7565b93506107408185602086016106e8565b61074981610547565b840191505092915050565b6000602082019050818103600083015261076e818461071b565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806107bd57607f821691505b602082108114156107d1576107d0610776565b5b50919050565b600060408201905081810360008301526107f1818561071b565b90508181036020830152610805818461071b565b90509392505050565b60006060820190508181036000830152610828818661071b565b9050818103602083015261083c818561071b565b90508181036040830152610850818461071b565b905094935050505056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a26469706673582212203073bf0e5859b1b643ecfdba301cb6883b785dbcbc627c72d4a626468c33cb7364736f6c63430008090033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

 
  const contract = new ethers.Contract(Greeter, GreeterAbi.abi, signer);
  
  const txn = await contract.setGreeting(greeting)
  await txn.wait()
}
