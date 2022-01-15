const addresses = {
  shelley: [],

  ergo: [
    "9fRAWhdxEsTcdb8PhGNrZfwqa65zfkuYHAMmkQLcic1gdLSV5vA", // mainnet P2PK
    "8UApt8czfFVuTgQmMwtsRBZ4nfWquNiSwCWUjMg", // mainnet P2SH
    "4MQyML64GnzMxZgm", // mainnet P2S
    "BxKBaHkvrTvLZrDcZjcsxsF7aSsrN73ijeFZXtbj4CXZHHcvBtqSxQ", // mainnet P2S
    "3WvsT2Gm4EpsM9Pg18PdY6XyhNNMqXDsvJTbbf6ihLvAmSb7u5RN", // testnet P2PK
    "rbcrmKEYduUvADj9Ts3dSVSG27h54pgrq5fPuwB", // testnet P2SH
    "Ms7smJwLGbUAjuWQ", // testnet P2S
  ],

  bitcoin: [
    "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4", // bech32: mainnet P2WPKH
    "tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx", // bech32: testnet P2WPKH
    "bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3", // bech32: mainnet P2WSH
    "tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7", // bech32: testnet P2WSH
  ],

  ethereum: [
    "0x281055afc982d96fab65b3a49cac8b878184cb16",
    "0x6f46cf5569aefa1acc1009290c8e043747172d89",
    "0x90e63c3d53e0ea496845b7a03ec7548b70014a91",
  ],

  ripple: [
    "rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC",
    "rfBKzgkPt9EvSJmk1uhoWTauaFCaRh4jMp",
    // "XV5sbjUmgPpvXv4ixFWZ5ptAYZ6PD2q1qM6owqNbug8W6KV"
  ],

  // https://monerotech.info/Home/Address
  monero: [
    "47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs", // old mainnet
    "42oAxV3DVXXG3HhyCyi2xaPukKXbip9Sx1YuJtoCqjZRSze4tYCq7n3VUswDBFV59Zev8yfHSZro4TUwXumtRWnQ8xQipkC", // old mainnet
    // 5
    "73a4nWuvkYoYoksGurDjKZQcZkmaxLaKbbeiKzHnMmqKivrCzq5Q2JtJG1UZNZFqLPbQ3MiXCk2Q5bdwdUNSr7X9QrPubkn", // stagenet
    "888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H", // new mainnet after fork
  ],

  solana: [
    "DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX6ZKUmG5CNSKK",
    "7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv",
  ],
}

export default addresses
