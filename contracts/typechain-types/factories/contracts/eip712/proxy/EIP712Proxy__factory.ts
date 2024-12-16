/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  EIP712Proxy,
  EIP712ProxyInterface,
} from "../../../../contracts/eip712/proxy/EIP712Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEAS",
        name: "eas",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "DeadlineExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidEAS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "NotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    inputs: [],
    name: "UsedSignature",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint64",
                name: "expirationTime",
                type: "uint64",
              },
              {
                internalType: "bool",
                name: "revocable",
                type: "bool",
              },
              {
                internalType: "bytes32",
                name: "refUID",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct AttestationRequestData",
            name: "data",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct Signature",
            name: "signature",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct DelegatedProxyAttestationRequest",
        name: "delegatedRequest",
        type: "tuple",
      },
    ],
    name: "attestByDelegation",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAttestTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "uid",
        type: "bytes32",
      },
    ],
    name: "getAttester",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEAS",
    outputs: [
      {
        internalType: "contract IEAS",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRevokeTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint64",
                name: "expirationTime",
                type: "uint64",
              },
              {
                internalType: "bool",
                name: "revocable",
                type: "bool",
              },
              {
                internalType: "bytes32",
                name: "refUID",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct AttestationRequestData[]",
            name: "data",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct MultiDelegatedProxyAttestationRequest[]",
        name: "multiDelegatedRequests",
        type: "tuple[]",
      },
    ],
    name: "multiAttestByDelegation",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct RevocationRequestData[]",
            name: "data",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "revoker",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct MultiDelegatedProxyRevocationRequest[]",
        name: "multiDelegatedRequests",
        type: "tuple[]",
      },
    ],
    name: "multiRevokeByDelegation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct RevocationRequestData",
            name: "data",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct Signature",
            name: "signature",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "revoker",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct DelegatedProxyRevocationRequest",
        name: "delegatedRequest",
        type: "tuple",
      },
    ],
    name: "revokeByDelegation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101e06040523480156200001257600080fd5b5060405162002d0e38038062002d0e83398101604081905262000035916200022c565b6040805180820190915260058152640312e332e360dc1b60208201526001608052600360a052600060c0819052829190620000729083906200016b565b61018052620000838160016200016b565b6101a052815160208084019190912061014052815190820120610160524661010052620001146101405161016051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60e052505030610120526001600160a01b03821662000146576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b0382166101c052600262000162828262000396565b505050620004bc565b60006020835110156200018b576200018383620001a4565b90506200019e565b8162000198848262000396565b5060ff90505b92915050565b600080829050601f81511115620001db578260405163305a27a960e01b8152600401620001d2919062000462565b60405180910390fd5b8051620001e88262000497565b179392505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200022357818101518382015260200162000209565b50506000910152565b600080604083850312156200024057600080fd5b82516001600160a01b03811681146200025857600080fd5b60208401519092506001600160401b03808211156200027657600080fd5b818501915085601f8301126200028b57600080fd5b815181811115620002a057620002a0620001f0565b604051601f8201601f19908116603f01168101908382118183101715620002cb57620002cb620001f0565b81604052828152886020848701011115620002e557600080fd5b620002f883602083016020880162000206565b80955050505050509250929050565b600181811c908216806200031c57607f821691505b6020821081036200033d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200039157600081815260208120601f850160051c810160208610156200036c5750805b601f850160051c820191505b818110156200038d5782815560010162000378565b5050505b505050565b81516001600160401b03811115620003b257620003b2620001f0565b620003ca81620003c3845462000307565b8462000343565b602080601f831160018114620004025760008415620003e95750858301515b600019600386901b1c1916600185901b1785556200038d565b600085815260208120601f198616915b82811015620004335788860151825594840194600190910190840162000412565b5085821015620004525787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208152600082518060208401526200048381604085016020870162000206565b601f01601f19169190910160400192915050565b805160208083015191908110156200033d5760001960209190910360031b1b16919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516127af6200055f600039600081816101e4015281816104d1015281816105e901528181610a5b0152610c3c01526000611262015260006112350152600061136f01526000611347015260006112a2015260006112cc015260006112f6015260006107760152600061074d0152600061072401526127af6000f3fe6080604052600436106100c75760003560e01c806365c40b9c11610074578063a6d4dbc71161004e578063a6d4dbc714610250578063b83010d314610263578063ed24911d1461029657600080fd5b806365c40b9c146101d557806384b0196e14610208578063954115251461023057600080fd5b806317d7de7c116100a557806317d7de7c1461018b5780633c042715146101ad57806354fd4d50146101c057600080fd5b80630eabf660146100cc57806310d736d5146100e157806312b11a171461014e575b600080fd5b6100df6100da3660046119a4565b6102ab565b005b3480156100ed57600080fd5b506101246100fc3660046119e6565b60009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561015a57600080fd5b507fea02ffba7dcb45f6fc649714d23f315eef12e3b27f9a7735d8d8bf41eb2b1af15b604051908152602001610145565b34801561019757600080fd5b506101a0610540565b6040516101459190611a6d565b61017d6101bb366004611a87565b6105d2565b3480156101cc57600080fd5b506101a061071d565b3480156101e157600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610124565b34801561021457600080fd5b5061021d6107c0565b6040516101459796959493929190611ac2565b61024361023e3660046119a4565b610822565b6040516101459190611b81565b6100df61025e366004611bb9565b610c23565b34801561026f57600080fd5b507f78a69a78c1a55cdff5cbf949580b410778cd9e4d1ecbe6f06a7fa8dc2441b57d61017d565b3480156102a257600080fd5b5061017d610d23565b8060008167ffffffffffffffff8111156102c7576102c7611bd2565b60405190808252806020026020018201604052801561030d57816020015b6040805180820190915260008152606060208201528152602001906001900390816102e55790505b50905060005b8281101561049357600085858381811061032f5761032f611c01565b90506020028101906103419190611c30565b61034a90611e9d565b602081015180519192509080158061036757508260400151518114155b1561039e576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156104485760008382815181106103bd576103bd611c01565b6020026020010151905061043f6040518060a0016040528087600001518152602001838152602001876040015185815181106103fb576103fb611c01565b60200260200101518152602001876060015173ffffffffffffffffffffffffffffffffffffffff168152602001876080015167ffffffffffffffff16815250610d32565b506001016103a1565b506040518060400160405280846000015181526020018381525085858151811061047457610474611c01565b602002602001018190525050505061048c8160010190565b9050610313565b506040517f4cb7e9e500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634cb7e9e5903490610508908590600401611f98565b6000604051808303818588803b15801561052157600080fd5b505af1158015610535573d6000803e3d6000fd5b505050505050505050565b60606002805461054f90612067565b80601f016020809104026020016040519081016040528092919081815260200182805461057b90612067565b80156105c85780601f1061059d576101008083540402835291602001916105c8565b820191906000526020600020905b8154815290600101906020018083116105ab57829003601f168201915b5050505050905090565b60006105e56105e0836121d8565b610f8e565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f17325e7346040518060400160405280876000013581526020018780602001906106499190612251565b61065290612285565b8152506040518363ffffffff1660e01b81526004016106719190612304565b60206040518083038185885af115801561068f573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106b49190612331565b90506106c660c0840160a0850161234a565b600082815260036020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905592915050565b60606107487f0000000000000000000000000000000000000000000000000000000000000000611170565b6107717f0000000000000000000000000000000000000000000000000000000000000000611170565b61079a7f0000000000000000000000000000000000000000000000000000000000000000611170565b6040516020016107ac93929190612365565b604051602081830303815290604052905090565b6000606080600080600060606107d461122e565b6107dc61125b565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b60608160008167ffffffffffffffff81111561084057610840611bd2565b60405190808252806020026020018201604052801561088657816020015b60408051808201909152600081526060602082015281526020019060019003908161085e5790505b50905060005b82811015610a5657368686838181106108a7576108a7611c01565b90506020028101906108b99190611c30565b90503660006108cb60208401846123db565b9092509050808015806108ec57506108e66040850185612443565b90508114155b15610923576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610a04576109fc6040518060a001604052808760000135815260200186868581811061095857610958611c01565b905060200281019061096a9190612251565b61097390612285565b81526020016109856040890189612443565b8581811061099557610995611c01565b9050606002018036038101906109ab91906124aa565b81526020016109c06080890160608a0161234a565b73ffffffffffffffffffffffffffffffffffffffff1681526020016109eb60a0890160808a016124c6565b67ffffffffffffffff169052610f8e565b600101610926565b50604080518082019091528435815260208101610a2184866124e1565b815250868681518110610a3657610a36611c01565b602002602001018190525050505050610a4f8160010190565b905061088c565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344adc90e34846040518363ffffffff1660e01b8152600401610ab39190612555565b60006040518083038185885af1158015610ad1573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b189190810190612648565b90506000805b84811015610c155736888883818110610b3957610b39611c01565b9050602002810190610b4b9190611c30565b9050366000610b5d60208401846123db565b90925090508060005b81811015610bff57610b7e608086016060870161234a565b600360008a8a81518110610b9457610b94611c01565b6020026020010151815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550866001019650610bf88160010190565b9050610b66565b5050505050610c0e8160010190565b9050610b1e565b509093505050505b92915050565b610c3a610c35368390038301836126d9565b610d32565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663469262673460405180604001604052808560000135815260200185602001803603810190610ca09190612745565b90526040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815281516004820152602091820151805160248301529091015160448201526064016000604051808303818588803b158015610d0757600080fd5b505af1158015610d1b573d6000803e3d6000fd5b505050505050565b6000610d2d611288565b905090565b608081015167ffffffffffffffff1615801590610d6657504267ffffffffffffffff16816080015167ffffffffffffffff16105b15610d9d576040517f1ab7da6b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208082015180516000908152600390925260409091205473ffffffffffffffffffffffffffffffffffffffff1680610e02576040517fc5723b5100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81163314610e51576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040830151610e5f816113c0565b606080850151855185516020808801516080808b0151604080517f78a69a78c1a55cdff5cbf949580b410778cd9e4d1ecbe6f06a7fa8dc2441b57d9581019590955273ffffffffffffffffffffffffffffffffffffffff90971696840196909652958201939093529384015260a083015267ffffffffffffffff1660c0820152600090610f059060e0015b604051602081830303815290604052805190602001206114ce565b9050846060015173ffffffffffffffffffffffffffffffffffffffff16610f3a82846000015185602001518660400151611516565b73ffffffffffffffffffffffffffffffffffffffff1614610f87576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b608081015167ffffffffffffffff1615801590610fc257504267ffffffffffffffff16816080015167ffffffffffffffff16105b15610ff9576040517f1ab7da6b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6020810151604082015161100c816113c0565b60006110e87fea02ffba7dcb45f6fc649714d23f315eef12e3b27f9a7735d8d8bf41eb2b1af160001b8560600151866000015186600001518760200151886040015189606001518a60800151805190602001208b60a001518d60800151604051602001610eea9a99989796959493929190998a5273ffffffffffffffffffffffffffffffffffffffff98891660208b015260408a019790975294909616606088015267ffffffffffffffff928316608088015290151560a087015260c086015260e0850193909352610100840152166101208201526101400190565b9050836060015173ffffffffffffffffffffffffffffffffffffffff1661111d82846000015185602001518660400151611516565b73ffffffffffffffffffffffffffffffffffffffff161461116a576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6060600061117d83611544565b600101905060008167ffffffffffffffff81111561119d5761119d611bd2565b6040519080825280601f01601f1916602001820160405280156111c7576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846111d157509392505050565b6060610d2d7f00000000000000000000000000000000000000000000000000000000000000006000611626565b6060610d2d7f00000000000000000000000000000000000000000000000000000000000000006001611626565b60003073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480156112ee57507f000000000000000000000000000000000000000000000000000000000000000046145b1561131857507f000000000000000000000000000000000000000000000000000000000000000090565b610d2d604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b8051602080830151604080850151905160f89490941b7fff0000000000000000000000000000000000000000000000000000000000000016928401929092526021830152604182015260009060610160405160208183030381529060405290506004816040516114309190612761565b9081526040519081900360200190205460ff161561147a576040517fcce9a82400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160048260405161148c9190612761565b90815260405190819003602001902080549115157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009092169190911790555050565b6000610c1d6114db611288565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b600080600080611528888888886116d1565b92509250925061153882826117cb565b50909695505050505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061158d577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106115b9576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106115d757662386f26fc10000830492506010015b6305f5e10083106115ef576305f5e100830492506008015b612710831061160357612710830492506004015b60648310611615576064830492506002015b600a8310610c1d5760010192915050565b606060ff831461164057611639836118d8565b9050610c1d565b81805461164c90612067565b80601f016020809104026020016040519081016040528092919081815260200182805461167890612067565b80156116c55780601f1061169a576101008083540402835291602001916116c5565b820191906000526020600020905b8154815290600101906020018083116116a857829003601f168201915b50505050509050610c1d565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561170c57506000915060039050826117c1565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611760573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166117b7575060009250600191508290506117c1565b9250600091508190505b9450945094915050565b60008260038111156117df576117df612773565b036117e8575050565b60018260038111156117fc576117fc612773565b03611833576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600282600381111561184757611847612773565b03611886576040517ffce698f7000000000000000000000000000000000000000000000000000000008152600481018290526024015b60405180910390fd5b600382600381111561189a5761189a612773565b036118d4576040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004810182905260240161187d565b5050565b606060006118e583611917565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f811115610c1d576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083601f84011261196a57600080fd5b50813567ffffffffffffffff81111561198257600080fd5b6020830191508360208260051b850101111561199d57600080fd5b9250929050565b600080602083850312156119b757600080fd5b823567ffffffffffffffff8111156119ce57600080fd5b6119da85828601611958565b90969095509350505050565b6000602082840312156119f857600080fd5b5035919050565b60005b83811015611a1a578181015183820152602001611a02565b50506000910152565b60008151808452611a3b8160208601602086016119ff565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611a806020830184611a23565b9392505050565b600060208284031215611a9957600080fd5b813567ffffffffffffffff811115611ab057600080fd5b820160e08185031215611a8057600080fd5b7fff00000000000000000000000000000000000000000000000000000000000000881681526000602060e081840152611afe60e084018a611a23565b8381036040850152611b10818a611a23565b6060850189905273ffffffffffffffffffffffffffffffffffffffff8816608086015260a0850187905284810360c0860152855180825283870192509083019060005b81811015611b6f57835183529284019291840191600101611b53565b50909c9b505050505050505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561153857835183529284019291840191600101611b9d565b60006101008284031215611bcc57600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61833603018112611c6457600080fd5b9190910192915050565b60405160a0810167ffffffffffffffff81118282101715611c9157611c91611bd2565b60405290565b60405160c0810167ffffffffffffffff81118282101715611c9157611c91611bd2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d0157611d01611bd2565b604052919050565b600067ffffffffffffffff821115611d2357611d23611bd2565b5060051b60200190565b600060408284031215611d3f57600080fd5b6040516040810181811067ffffffffffffffff82111715611d6257611d62611bd2565b604052823581526020928301359281019290925250919050565b600060608284031215611d8e57600080fd5b6040516060810181811067ffffffffffffffff82111715611db157611db1611bd2565b604052905080823560ff81168114611dc857600080fd5b8082525060208301356020820152604083013560408201525092915050565b600082601f830112611df857600080fd5b81356020611e0d611e0883611d09565b611cba565b82815260609283028501820192828201919087851115611e2c57600080fd5b8387015b85811015611e4f57611e428982611d7c565b8452928401928101611e30565b5090979650505050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e8057600080fd5b919050565b803567ffffffffffffffff81168114611e8057600080fd5b600060a08236031215611eaf57600080fd5b611eb7611c6e565b8235815260208084013567ffffffffffffffff80821115611ed757600080fd5b9085019036601f830112611eea57600080fd5b8135611ef8611e0882611d09565b81815260069190911b83018401908481019036831115611f1757600080fd5b938501935b82851015611f4057611f2e3686611d2d565b82528582019150604085019450611f1c565b80868801525050506040860135925080831115611f5c57600080fd5b5050611f6a36828601611de7565b604083015250611f7c60608401611e5c565b6060820152611f8d60808401611e85565b608082015292915050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015612058578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0018652825180518552880151888501889052805188860181905290890190839060608701905b808310156120435761202f82855180518252602090810151910152565b928b019260019290920191908a0190612012565b50978a01979550505091870191600101611fc0565b50919998505050505050505050565b600181811c9082168061207b57607f821691505b602082108103611bcc577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600082601f8301126120c557600080fd5b813567ffffffffffffffff8111156120df576120df611bd2565b61211060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611cba565b81815284602083860101111561212557600080fd5b816020850160208301376000918101602001919091529392505050565b600060c0828403121561215457600080fd5b61215c611c97565b905061216782611e5c565b815261217560208301611e85565b60208201526040820135801515811461218d57600080fd5b604082015260608281013590820152608082013567ffffffffffffffff8111156121b657600080fd5b6121c2848285016120b4565b60808301525060a082013560a082015292915050565b600060e082360312156121ea57600080fd5b6121f2611c6e565b82358152602083013567ffffffffffffffff81111561221057600080fd5b61221c36828601612142565b60208301525061222f3660408501611d7c565b604082015261224060a08401611e5c565b6060820152611f8d60c08401611e85565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff41833603018112611c6457600080fd5b6000610c1d3683612142565b73ffffffffffffffffffffffffffffffffffffffff815116825267ffffffffffffffff6020820151166020830152604081015115156040830152606081015160608301526000608082015160c060808501526122f060c0850182611a23565b60a093840151949093019390935250919050565b6020815281516020820152600060208301516040808401526123296060840182612291565b949350505050565b60006020828403121561234357600080fd5b5051919050565b60006020828403121561235c57600080fd5b611a8082611e5c565b600084516123778184602089016119ff565b80830190507f2e0000000000000000000000000000000000000000000000000000000000000080825285516123b3816001850160208a016119ff565b600192019182015283516123ce8160028401602088016119ff565b0160020195945050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261241057600080fd5b83018035915067ffffffffffffffff82111561242b57600080fd5b6020019150600581901b360382131561199d57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261247857600080fd5b83018035915067ffffffffffffffff82111561249357600080fd5b602001915060608102360382131561199d57600080fd5b6000606082840312156124bc57600080fd5b611a808383611d7c565b6000602082840312156124d857600080fd5b611a8082611e85565b60006124ef611e0884611d09565b80848252602080830192508560051b85013681111561250d57600080fd5b855b8181101561254957803567ffffffffffffffff81111561252f5760008081fd5b61253b36828a01612142565b86525093820193820161250f565b50919695505050505050565b602080825282518282018190526000919060409081850190600581811b8701840188860187805b85811015612638577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08b85030187528251805185528901518985018990528051898601819052908a0190606081881b870181019190870190855b81811015612622577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0898503018352612610848651612291565b948e01949350918d01916001016125d6565b505050978a01979450509188019160010161257c565b50919a9950505050505050505050565b6000602080838503121561265b57600080fd5b825167ffffffffffffffff81111561267257600080fd5b8301601f8101851361268357600080fd5b8051612691611e0882611d09565b81815260059190911b820183019083810190878311156126b057600080fd5b928401925b828410156126ce578351825292840192908401906126b5565b979650505050505050565b600061010082840312156126ec57600080fd5b6126f4611c6e565b823581526127058460208501611d2d565b60208201526127178460608501611d7c565b604082015261272860c08401611e5c565b606082015261273960e08401611e85565b60808201529392505050565b60006040828403121561275757600080fd5b611a808383611d2d565b60008251611c648184602087016119ff565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea164736f6c6343000814000a";

type EIP712ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EIP712ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EIP712Proxy__factory extends ContractFactory {
  constructor(...args: EIP712ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    eas: AddressLike,
    name: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(eas, name, overrides || {});
  }
  override deploy(
    eas: AddressLike,
    name: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(eas, name, overrides || {}) as Promise<
      EIP712Proxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EIP712Proxy__factory {
    return super.connect(runner) as EIP712Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP712ProxyInterface {
    return new Interface(_abi) as EIP712ProxyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): EIP712Proxy {
    return new Contract(address, _abi, runner) as unknown as EIP712Proxy;
  }
}