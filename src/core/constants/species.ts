import { defineMessage } from "@lingui/macro"

const species = {
  // https://datastudio.google.com/reporting/3136c55b-635e-4f46-8e4b-b8ab54f2d460/page/r2LQC
  Cardano: [
    {
      startsAt: 0,
      name: defineMessage({ message: "Ghost" }), // defineMessage will make it appear in the PO
      icon: "Ghost",
    },
    {
      startsAt: 0.000001,
      name: defineMessage({ message: "Plankton" }),
      icon: "Plankton",
    },
    {
      startsAt: 1,
      name: defineMessage({ message: "Seahorse" }),
      icon: "Seahorse",
    },
    {
      startsAt: 10,
      name: defineMessage({ message: "Pipefish" }),
      icon: "Pipefish",
    },
    {
      startsAt: 25,
      name: defineMessage({ message: "Shrimp" }),
      icon: "Shrimp",
    },
    {
      startsAt: 100,
      name: defineMessage({ message: "Shell" }),
      icon: "Shell",
    },
    {
      startsAt: 500,
      name: defineMessage({ message: "Oyster" }),
      icon: "Oyster",
    },
    {
      startsAt: 1000,
      name: defineMessage({ message: "Starfish" }),
      icon: "Starfish",
    },
    {
      startsAt: 2000,
      name: defineMessage({ message: "Crab" }),
      icon: "Crab",
    },
    {
      startsAt: 5000,
      name: defineMessage({ message: "Fish" }),
      icon: "Fish",
    },
    {
      startsAt: 10000,
      name: defineMessage({ message: "Jellyfish" }),
      icon: "Jellyfish",
    },
    {
      startsAt: 50000,
      name: defineMessage({ message: "Piranha" }),
      icon: "Piranha",
    },
    {
      startsAt: 100000,
      name: defineMessage({ message: "Swordfish" }),
      icon: "Swordfish",
    },
    {
      startsAt: 150000,
      name: defineMessage({ message: "Octopus" }),
      icon: "Octopus",
    },
    {
      startsAt: 400000,
      name: defineMessage({ message: "Shark" }),
      icon: "Shark",
    },
    {
      startsAt: 750000,
      name: defineMessage({ message: "Tiger shark" }),
      icon: "Shark",
    },
    {
      startsAt: 1000000,
      name: defineMessage({ message: "Great white shark" }),
      icon: "Shark",
    },
    {
      startsAt: 5000000,
      name: defineMessage({ message: "Orca" }),
      icon: "Orca",
    },
    {
      startsAt: 10000000,
      name: defineMessage({ message: "Whale" }),
      icon: "Whale",
    },
    {
      startsAt: 50000000,
      name: defineMessage({ message: "Fin whale" }),
      icon: "Whale",
    },
    {
      startsAt: 100000000,
      name: defineMessage({ message: "Blue whale" }),
      icon: "Whale",
    },
  ],

  Ergo: [
    {
      startsAt: 0,
      name: defineMessage({ message: "Ghost" }), // t will extract name to PO
      icon: "Ghost",
    },
    {
      startsAt: 0.000000001,
      name: defineMessage({ message: "Plankton" }),
      icon: "Plankton",
    },
    {
      startsAt: 1,
      name: defineMessage({ message: "Seahorse" }),
      icon: "Seahorse",
    },
    {
      startsAt: 10,
      name: defineMessage({ message: "Pipefish" }),
      icon: "Pipefish",
    },
    {
      startsAt: 25,
      name: defineMessage({ message: "Shrimp" }),
      icon: "Shrimp",
    },
    {
      startsAt: 50,
      name: defineMessage({ message: "Shell" }),
      icon: "Shell",
    },
    {
      startsAt: 100,
      name: defineMessage({ message: "Oyster" }),
      icon: "Oyster",
    },
    {
      startsAt: 250,
      name: defineMessage({ message: "Starfish" }),
      icon: "Starfish",
    },
    {
      startsAt: 500,
      name: defineMessage({ message: "Crab" }),
      icon: "Crab",
    },
    {
      startsAt: 1000,
      name: defineMessage({ message: "Fish" }),
      icon: "Fish",
    },
    {
      startsAt: 2500,
      name: defineMessage({ message: "Jellyfish" }),
      icon: "Jellyfish",
    },
    {
      startsAt: 5000,
      name: defineMessage({ message: "Piranha" }),
      icon: "Piranha",
    },
    {
      startsAt: 10000,
      name: defineMessage({ message: "Swordfish" }),
      icon: "Starfish",
    },
    {
      startsAt: 25000,
      name: defineMessage({ message: "Octopus" }),
      icon: "Octopus",
    },
    {
      startsAt: 50000,
      name: defineMessage({ message: "Shark" }),
      icon: "Shark",
    },
    {
      startsAt: 100000,
      name: defineMessage({ message: "Tiger shark" }),
      icon: "Shark",
    },
    {
      startsAt: 250000,
      name: defineMessage({ message: "Great white shark" }),
      icon: "Shark",
    },
    {
      startsAt: 500000,
      name: defineMessage({ message: "Orca" }),
      icon: "Orca",
    },
    {
      startsAt: 1000000,
      name: defineMessage({ message: "Whale" }),
      icon: "Whale",
    },
    {
      startsAt: 2500000,
      name: defineMessage({ message: "Fin whale" }),
      icon: "Whale",
    },
    {
      startsAt: 5000000,
      name: defineMessage({ message: "Blue whale" }),
      icon: "Whale",
    },
  ],
}

export default species
