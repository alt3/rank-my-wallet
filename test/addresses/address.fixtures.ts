const addresses = [
  {
    Cardano: [
      {
        address:
          "addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgse35a3x",
        network: "Mainnet",
        type: "type-00 (Base Address)",
        isSupported: true,
      },
      {
        address:
          "addr1z8phkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gten0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs9yc0hh",
        network: "Mainnet",
        type: "type-01",
        isSupported: false,
      },
      {
        address:
          "addr1yx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzerkr0vd4msrxnuwnccdxlhdjar77j6lg0wypcc9uar5d2shs2z78ve",
        network: "Mainnet",
        type: "type-02",
        isSupported: false,
      },
      {
        address:
          "addr1x8phkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gt7r0vd4msrxnuwnccdxlhdjar77j6lg0wypcc9uar5d2shskhj42g",
        network: "Mainnet",
        type: "type-03",
        isSupported: false,
      },
      {
        address: "addr1gx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer5pnz75xxcrzqf96k",
        network: "Mainnet",
        type: "type-04",
        isSupported: false,
      },
      {
        address: "addr128phkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gtupnz75xxcrtw79hu",
        network: "Mainnet",
        type: "type-05",
        isSupported: false,
      },
      {
        address: "addr1vx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzers66hrl8",
        network: "Mainnet",
        type: "type-06",
        isSupported: false,
      },
      {
        address: "addr1w8phkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gtcyjy7wx",
        network: "Mainnet",
        type: "type-07",
        isSupported: false,
      },
      {
        address: "stake1uyehkck0lajq8gr28t9uxnuvgcqrc6070x3k9r8048z8y5gh6ffgw",
        network: "Mainnet",
        type: "type-14 (Stake Address)",
        isSupported: true,
      },
      {
        address: "stake178phkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gtcccycj5",
        network: "Mainnet",
        type: "type-15",
        isSupported: false,
      },
      {
        address:
          "addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae",
        network: "Testnet",
        type: "type-00 (Base Address)",
        isSupported: false,
      },
      {
        address:
          "addr_test1zrphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gten0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgsxj90mg",
        network: "Testnet",
        type: "type-01",
        isSupported: false,
      },
      {
        address:
          "addr_test1yz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzerkr0vd4msrxnuwnccdxlhdjar77j6lg0wypcc9uar5d2shsf5r8qx",
        network: "Testnet",
        type: "type-02",
        isSupported: false,
      },
      {
        address:
          "addr_test1xrphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gt7r0vd4msrxnuwnccdxlhdjar77j6lg0wypcc9uar5d2shs4p04xh",
        network: "Testnet",
        type: "type-03",
        isSupported: false,
      },
      {
        address: "addr_test1gz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer5pnz75xxcrdw5vky",
        network: "Testnet",
        type: "type-04",
        isSupported: false,
      },
      {
        address: "addr_test12rphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gtupnz75xxcryqrvmw",
        network: "Testnet",
        type: "type-05",
        isSupported: false,
      },
      {
        address: "addr_test1vz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzerspjrlsz",
        network: "Testnet",
        type: "type-06",
        isSupported: false,
      },
      {
        address: "addr_test1wrphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gtcl6szpr",
        network: "Testnet",
        type: "type-07",
        isSupported: false,
      },
      {
        address: "stake_test1uqehkck0lajq8gr28t9uxnuvgcqrc6070x3k9r8048z8y5gssrtvn",
        network: "Testnet",
        type: "type-14 (Stake Address)",
        isSupported: false,
      },
      {
        address: "stake_test17rphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gtcljw6kf",
        network: "Testnet",
        type: "type-15",
        isSupported: false,
      },
    ],
  },
  {
    Ergo: [
      {
        address: "9fRAWhdxEsTcdb8PhGNrZfwqa65zfkuYHAMmkQLcic1gdLSV5vA",
        network: "Mainnet",
        type: "Pay-to-PublicKey (P2PK)",
        isSupported: true,
      },
      {
        address: "8UApt8czfFVuTgQmMwtsRBZ4nfWquNiSwCWUjMg",
        network: "Mainnet",
        type: "Pay-to-Script-Hash (P2SH)",
        isSupported: false,
      },
      {
        address: "4MQyML64GnzMxZgm",
        network: "Mainnet",
        type: "Pay-to-Script (P2S)",
        isSupported: false,
      },
      {
        address: "BxKBaHkvrTvLZrDcZjcsxsF7aSsrN73ijeFZXtbj4CXZHHcvBtqSxQ",
        network: "Mainnet",
        type: "Pay-to-Script (P2S)",
        isSupported: false,
      },
      {
        address: "3WvsT2Gm4EpsM9Pg18PdY6XyhNNMqXDsvJTbbf6ihLvAmSb7u5RN",
        network: "Testnet",
        type: "Pay-to-PublicKey (P2PK)",
        isSupported: false,
      },
      {
        address: "rbcrmKEYduUvADj9Ts3dSVSG27h54pgrq5fPuwB",
        network: "Testnet",
        type: "Pay-to-Script-Hash (P2SH)",
        isSupported: false,
      },
      {
        address: "Ms7smJwLGbUAjuWQ",
        network: "Testnet",
        type: "Pay-to-Script (P2S)",
        isSupported: false,
      },
      {
        // should support long addresses
        address:
          "J3JuxbRZSTFQrWtXY997t5vCi3dgBqWQjvd8Y5deJxQfxNF9ieaVegSSF7KGh9neCwovYasneYcKkcNXey7xsZbkiRbYLyENpoB242v7T5DQKUPLBSPCQoAVW8PzjC7d5pwdRPt82XLhMyVr3mh6pSmHkaQDej7YB7eoT3CDwVBNztZdNL61ksaSwifZQywzG5nsHiLnkYF1aW4izEY7drZxoM2TB3eksaQoNjVq5yG5QkVeEBPAg7GqtusVWg2xMLzzAS824SBB5twybJUUsoYqLtapWSow2A2miYht5dVjZs88UmynNVwLs9rv4kDhte9VXGxmcELSAKPoNvevoCBzFasMKnjRCeFjjYVhq1HhPYnzGMGeVxKD41rcgjoddqoRwBqmkcodhT1ck6za1bBsn6nnEXREvM4Pzd6TxBVQkRhaBwgHv2c2NLD8guEp4FbXoWVgHVCSN417tM4M9Td5DEXito5jdBc9kEawUwDg2X9UJ3ypGyAgXENLmVtMDa6xnNLFW2toS1f8KzaUEon",
        network: "Testnet",
        type: "Pay-to-Script (P2S)",
        isSupported: false,
      },
    ],
  },
  {
    Bitcoin: [
      {
        address: "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4", // mainnet P2WPKH
        isSupported: false,
      },
      {
        address: "tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx", // testnet  P2WPKH
        isSupported: false,
      },
      {
        address: "bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3", // mainnet P2WSH
        isSupported: false,
      },
      {
        address: "tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7", // testbet P2WSH
        isSupported: false,
      },
    ],
  },

  {
    Ethereum: [
      {
        address: "0x281055afc982d96fab65b3a49cac8b878184cb16",
        isSupported: false,
      },
      {
        address: "0x6f46cf5569aefa1acc1009290c8e043747172d89",
        isSupported: false,
      },
      {
        address: "0x90e63c3d53e0ea496845b7a03ec7548b70014a91",
        isSupported: false,
      },
    ],
  },

  {
    Ripple: [
      {
        address: "rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC",
        isSupported: false,
      },
      {
        address: "rfBKzgkPt9EvSJmk1uhoWTauaFCaRh4jMp",
        isSupported: false,
      },
      // {
      //   address: "XV5sbjUmgPpvXv4ixFWZ5ptAYZ6PD2q1qM6owqNbug8W6KV", // awaits X-address support by ripple-regex
      //   isSupported: false,
      // },
    ],
  },

  {
    /**
     * @see {@link https://monerotech.info/Home/Address)}
     */
    Monero: [
      {
        address:
          "47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs", // old mainnet
        isSupported: false,
      },
      {
        address:
          "42oAxV3DVXXG3HhyCyi2xaPukKXbip9Sx1YuJtoCqjZRSze4tYCq7n3VUswDBFV59Zev8yfHSZro4TUwXumtRWnQ8xQipkC", // old mainnet
        isSupported: false,
      },
      // {
      //   address: "5", // awaits merge by regex-monero
      //   isSupported: false,
      // },
      // {
      //   address:
      //     "73a4nWuvkYoYoksGurDjKZQcZkmaxLaKbbeiKzHnMmqKivrCzq5Q2JtJG1UZNZFqLPbQ3MiXCk2Q5bdwdUNSr7X9QrPubkn", // stagenet, awaits merge
      //   isSupported: false,
      // },
      // {
      //   address:
      //     "888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H", // new mainnet after fork, awaits merge
      //   isSupported: false,
      // },
    ],
  },

  {
    Solana: [
      {
        address: "DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX6ZKUmG5CNSKK",
        isSupported: false,
      },
      {
        address: "7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv",
        isSupported: false,
      },
    ],
  },
]

export default addresses
