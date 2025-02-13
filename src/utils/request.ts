interface DetailType {
  id: string;
  url: string;
  name: string;
  description: string;
  series: string;
  owner: string;
  contract: string;
  attributes?: {
    value: string;
    trait_type: string;
  }[];
  amount?: number;
}

interface ProfileType {
  avatar?: string;
  address: string;
  name?: string;
}

type NFTSetType = Pick<DetailType, "name" | "contract" | "id">;

const getOwnedNFTSet = async (account: string): Promise<NFTSetType[]> => {
  return await [
    {
      id: "1",
      name: "Hypebeast",
      contract: "cfx:acsc52gtsvn18my8sxc344ewt8fcnz43vevfcy29a1",
    },
    {
      id: "2",
      name: "烤仔在香港",
      contract: "cfx:acsc52gtsvn18my8sxc344ewt8fcnz43vevfcy29a2",
    },
    {
      id: "3",
      name: "2023 守护神兔",
      contract: "cfx:acsc52gtsvn18my8sxc344ewt8fcnz43vevfcy29a3",
    },
    {
      id: "4",
      name: "NFTRainbow 纪念 POAP",
      contract: "cfx:acsc52gtsvn18my8sxc344ewt8fcnz43vevfcy29a4",
    },
    {
      id: "5",
      name: ".Web3 用户名创世 POAP",
      contract: "cfx:acsc52gtsvn18my8sxc344ewt8fcnz43vevfcy29a5",
    },
    {
      id: "6",
      name: "麦当劳数字魔方",
      contract: "cfx:acsc52gtsvn18my8sxc344ewt8fcnz43vevfcy29a6",
    },
    {
      id: "7",
      name: "麦当劳数字魔方",
      contract: "cfx:acsc52gtsvn18my8sxc344ewt8fcnz43vevfcy29a7",
    },
  ];
};

const getCertificates = async (
  account: string,
  set: string[],
  searchValue: string[]
): Promise<Partial<DetailType>[]> => {
  console.log("getCertificates args: ", account, set, searchValue);

  return [
    "4230780341",
    "4230780342",
    "4230780343",
    "4230780344",
    "4230780345",
    "4230780346",
  ].map((id) => ({
    id,
    url: "https://www.nftrainbow.cn/resources/images/game.png",
    name: "NFTRainbow 吉祥物",
    description: "龙马祥瑞，口吐成桥🌈，将 NFT 带给每一个人",
    series: "NFTRainbow 纪念 POAP",
    owner: "cfx:aasc52gtsvn18my8sxc344ewt8fcnz43vevfcy29av",
    contract: "cfx:aasc52gtsvn18my8sxc344ewt8fcnz43vevfcy29av",
    amount: 200,
  }));
};

const getNFTs = async (
  account: string,
  set: string[],
  searchValue: string[]
): Promise<Partial<DetailType>[]> => {
  console.log("getNFTs args: ", account, set, searchValue);

  return [
    "4230780341",
    "4230780342",
    "4230780343",
    "4230780344",
    "4230780345",
    "4230780346",
  ].map((id) => ({
    id,
    url: "https://www.nftrainbow.cn/resources/images/game.png",
    name: "NFTRainbow 吉祥物",
    description: "龙马祥瑞，口吐成桥🌈，将 NFT 带给每一个人",
    series: "NFTRainbow 纪念 POAP",
    owner: "cfx:aasc52gtsvn18my8sxc344ewt8fcnz43vevfcy29av",
    contract: "cfx:aasc52gtsvn18my8sxc344ewt8fcnz43vevfcy29av",
    attributes: [],
  }));
};

const getProfile = async (address: string): Promise<ProfileType> => {
  return await {
    address: "cfx:aasc52gtsvn18my8sxc344ewt8fcnz43vevfcy29av",
    name: "NFTRainbow.web3",
  };
};

// get NFT detail info
const getDetail = async (
  contract: string,
  tokenId: string
): Promise<DetailType> => {
  return await {
    id: tokenId,
    url: "https://www.nftrainbow.cn/resources/images/game.png",
    name: "NFTRainbow 吉祥物",
    description: "龙马祥瑞，口吐成桥🌈，将 NFT 带给每一个人",
    series: "NFTRainbow 纪念 POAP",
    owner: "cfx:aasc52gtsvn18my8sxc344ewt8fcnz43vevfcy29av",
    contract: "cfx:aasc52gtsvn18my8sxc344ewt8fcnz43vevfcy29av",
    attributes: [
      {
        value: "雨后彩虹",
        trait_type: "背景",
      },
      {
        value: "独角兽",
        trait_type: "形象",
      },
      {
        value: "彩虹",
        trait_type: "元素-1",
      },
      {
        value: "白云",
        trait_type: "元素-2",
      },
      {
        value: "NFTRainbow",
        trait_type: "Logo",
      },
    ],
  };

  // // https://www.confluxscan.net/stat/nft/checker/detail?contractAddress=cfx%3Aachew68x34cwu04aezbunyaz67gppakvmyn79tau56&tokenId=401657
  // return await {
  //   code: 0,
  //   message: "",
  //   data: {
  //     imageMinHeight: 200,
  //     imageUri: "https://d1motvw702gmc2.cloudfront.net/image/f9eb1b956cb5.png",
  //     imageName: { en: "TJTW Story Ticket", zh: "TJTW Story Ticket" },
  //     imageDesc:
  //       "The jounery to the west story ticket. Can summon one story card in game.",
  //     detail: {
  //       funcCall: "uri(2)",
  //       tokenUri: {
  //         raw: "https://d1motvw702gmc2.cloudfront.net/public00/2.json",
  //         gateway: "",
  //       },
  //       metadata: {
  //         image: "https://d1motvw702gmc2.cloudfront.net/image/f9eb1b956cb5.png",
  //         name: "TJTW Story Ticket",
  //         description:
  //           "The jounery to the west story ticket. Can summon one story card in game.",
  //       },
  //     },
  //     externalMs: 1,
  //     creator: "cfx:aasc52gtsvn18my8sxc344ewt8fcnz43vevfcy29av",
  //     mintTime: "2021-10-26T08:39:10.000Z",
  //     type: "ERC1155",
  //     imageGateway: "",
  //   },
  // }.data;
};

export {
  getDetail,
  type DetailType,
  getProfile,
  type ProfileType,
  getNFTs,
  getCertificates,
  getOwnedNFTSet,
  type NFTSetType,
};
