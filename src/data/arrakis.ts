import type { VillageTrait, Resource, SpecialRegion, SietchTrait } from './types';

// ──────────────────────────────────────────────
// Village Traits
// ──────────────────────────────────────────────

export const villageTraits: VillageTrait[] = [
  {
    id: 'analysts',
    name: 'Analysts',
    effects: ['+2 Intel production with one building of each type'],
  },
  {
    id: 'bartering-customs',
    name: 'Bartering Customs',
    effects: ['+3 Solari per Economy building'],
  },
  {
    id: 'connections',
    name: 'Connections',
    effects: ['+30% agent recruitment speed'],
  },
  {
    id: 'data-brokers',
    name: 'Data Brokers',
    effects: ['+3 Solari per Statecraft building'],
  },
  {
    id: 'desert-miners',
    name: 'Desert Miners',
    effects: ['+1 Plascrete per Economy building'],
  },
  {
    id: 'former-smugglers',
    name: 'Former Smugglers',
    effects: ['+10% resources from pillaging villages'],
  },
  {
    id: 'former-soldiers',
    name: 'Former Soldiers',
    effects: ['+1 Militia slot'],
  },
  {
    id: 'glass-sculptors',
    name: 'Glass Sculptors',
    effects: ["50% of the village's Plascrete production as Solari production"],
  },
  {
    id: 'handymen',
    name: 'Handymen',
    effects: [
      '-40% Buildings construction cost',
      '-40% new Building slot costs in this Village',
    ],
  },
  {
    id: 'hardworkers',
    name: 'Hardworkers',
    effects: ['+10% regional resource production'],
  },
  {
    id: 'industrious',
    name: 'Industrious',
    effects: [
      '+1 Plascrete Factory limit',
      '+20% Plascrete Factory production',
    ],
  },
  {
    id: 'ingenious-mind',
    name: 'Ingenious Mind',
    effects: ['+20% Economy building production'],
  },
  {
    id: 'local-sourcing',
    name: 'Local Sourcing',
    effects: ['+10 Solari with one building of each type'],
  },
  {
    id: 'plunderers',
    name: 'Plunderers',
    effects: ['+3 Solari per Military building'],
  },
  {
    id: 'scavenger-network',
    name: 'Scavenger Network',
    effects: ['Gain 20 Solari per enemy Unit dying in ally territory'],
  },
  {
    id: 'scientists',
    name: 'Scientists',
    effects: [
      '+1 Research Hub limit',
      '+20% Research Hub production',
    ],
  },
  {
    id: 'scholarly',
    name: 'Scholarly',
    effects: ['+20% Statecraft building production'],
  },
  {
    id: 'strong-network',
    name: 'Strong Network',
    effects: ['+1 Intel per Statecraft building'],
  },
  {
    id: 'strong-willed',
    name: 'Strong-Willed',
    effects: ['+1 Manpower with one building of each type'],
  },
  {
    id: 'versatile',
    name: 'Versatile',
    effects: ['+20% resource production with mixed building types'],
  },
  {
    id: 'water-traders',
    name: 'Water Traders',
    effects: ["100% of the village's Water production as Solari"],
  },
  {
    id: 'way-of-the-desert',
    name: 'Way of the Desert',
    effects: ['+20% Experience gains for all military Units'],
  },
  {
    id: 'well-diggers',
    name: 'Well Diggers',
    effects: ['+3 Water production'],
  },
  {
    id: 'youthful-eagerness',
    name: 'Youthful Eagerness',
    effects: [
      '+1 Recruitment Office limit',
      '+20% Recruitment Office production',
    ],
  },
];

// ──────────────────────────────────────────────
// Resources
// ──────────────────────────────────────────────

export const resources: Resource[] = [
  {
    id: 'spice',
    name: 'Spice',
    info: [
      '+ The most valuable resource in the game — used to both generate Solari at a variable exchange rate and pay the Imperial Spice Tax',
      '+ Spice Fields with harvesters on them will generate Spice, but will also be attacked by Sandworms intermittently',
      '+ If set to Auto-Recall, harvesters will generate -5% Spice but will attempt to automatically recall themselves to the village when attacked by a Sandworm. Note that sometimes the Harvester will still be destroyed even on Auto-Recall.',
      '+ Can be traded with other factions',
      '+ Converts to Solari at a rate of 1.5–2.5 Solari per Spice; the rate recalculates after each Spice Tax cycle',
      '+ The Spice Tax is due every 25 days; missing a payment costs −20 Landsraad Standing',
      '− No more than 3,000 Spice can be stockpiled at any given time (6,000 with the CHOAM Branch Main Base building)',
    ],
  },
  {
    id: 'solari',
    name: 'Solari',
    info: [
      '+ Solari is the main currency on Arrakis and is used to pay for a variety of things including Units and Buildings.',
      '+ Primarily gained from selling Spice',
      '+ By default, your Main Base generates +30 Solari',
      '+ Can be traded with other factions',
    ],
    deficitEffects: [
      '−50% Knowledge',
      '−100% Agent recruitment speed',
      '−5 Landsraad Standing',
    ],
  },
  {
    id: 'plascrete',
    name: 'Plascrete',
    info: [
      '+ Plascrete is required to build and maintain all Buildings within Villages and Main Bases.',
      '+ Primarily gained from Plascrete Factories',
      '+ By default, your Main Base generates +30 Plascrete',
      '+ Can be traded with other factions',
      '− No more than 5000 Plascrete can be stockpiled at any given time',
    ],
    deficitEffects: [
      '+50% Buildings Solari Upkeep',
      '−50% Buildings construction speed',
    ],
  },
  {
    id: 'manpower',
    name: 'Manpower',
    info: [
      '+ Manpower is required to recruit and maintain Units',
      '+ Primarily gained from Recruitment Offices and Agents assigned to Spacing Guild Infiltration',
      '+ By default, your Main Base generates +4 Manpower',
      '− No more than 500 Manpower can be stockpiled at any given time',
    ],
    deficitEffects: [
      '−100% health regeneration on Units',
    ],
  },
  {
    id: 'fuelCells',
    name: 'Fuel Cells',
    info: [
      '+ Fuel Cells are the main power source used on Arrakis. They are used to operate vehicles such as Harvesters and Drones, as well as some Buildings',
      '+ Primarily gained by building Fuel Cell Factories',
      '+ By default, your Main Base generates +10 Fuel Cells',
      '− Fremen cannot obtain Fuel Cells; their major buildings consume additional Water instead',
    ],
  },
  {
    id: 'water',
    name: 'Water',
    info: [
      '+ Water is essential for life, and a rare resource on Arrakis. It is mainly used to supply controlled Villages as well as recruit and maintain Units',
      '+ Primarily gained by building Dew Collectors (all factions) or Wind Traps (Fremen only)',
      '+ By default, your Main Base generates +20 Water',
      '+ Village buildings consume 2 Water; major buildings consume 3 Water (10 Water for Fremen)',
      '+ Increases the maximum Supply range of non-mechanical units',
    ],
    deficitEffects: [
      '+50% Supply drain',
      '−50% Manpower production',
      'Unrest and Rebellion may take place in your Villages',
    ],
  },
  {
    id: 'authority',
    name: 'Authority',
    info: [
      "+ Authority represents a Faction's leadership and reach over the regions of Arrakis",
      '+ Primarily gained by assigning Agents to Arrakis Infiltration',
      '+ Used to take control of Villages',
      '+ By default, your Main Base generates +4 Authority',
      '− No more than 500 Authority can be stockpiled at any given time',
    ],
  },
  {
    id: 'knowledge',
    name: 'Knowledge',
    info: [
      "+ Knowledge determines how quickly a Faction's Developments are researched",
      '+ Gained from building Research Hubs, the Research Center or Research Agreement Treaties',
    ],
  },
  {
    id: 'influence',
    name: 'Influence',
    info: [
      '+ Influence may be spent to grant votes in the Landsraad Council',
      '+ Primarily gained from building Listening Posts and assigning Agents to Landsraad Infiltration',
    ],
  },
  {
    id: 'intel',
    name: 'Intel',
    info: [
      '+ Intel is used to launch Espionage Operations',
      '+ Primarily gained from Agents and building Data Centers',
      '− No more than 1000 Intel can be stockpiled at any given time',
    ],
  },
  {
    id: 'commandPoints',
    name: 'Command Points',
    info: [
      '+ Command Points limit the size of your army',
      '+ By default, your Main Base grants you 22 Command Points',
      '+ This cap is mainly increased by researching Military Developments',
    ],
  },
  {
    id: 'hegemony',
    name: 'Hegemony',
    info: [
      "+ Hegemony is the reflection of a Faction's overall power over Dune. Thresholds unlock new abilities and ultimately allow you to win the game",
      '+ 2,500 Hegemony: Unlocks Headquarter Buildings',
      '+ 5,000 Hegemony: Unlocks faction elite ground units, air units, and major buildings',
      '+ 10,000 Hegemony: Unlocks Hero unit',
      '+ 30,000 Hegemony: Victory',
      '+ Primarily gained from controlling Villages (+600 per village on medium map, +1,000 on small map), controlling Special Regions (+1,000 each), paying the Spice Tax (+1,000 per payment), and completing Events (+300 each)',
    ],
  },
  {
    id: 'landsraad',
    name: 'Landsraad Standing',
    info: [
      "+ Landsraad Standing represents your Faction's current political power and standing within the Landsraad",
      '+ Starting values: Corrino 250, Ecaz 220, Vernius 220, Atreides 210, Harkonnen 200; Smugglers enter the Landsraad at 5,000 Hegemony with 200 Standing; Fremen never obtain Landsraad Standing',
      '+ Can be gained from Discoveries, supporting Council Resolutions favored by House Minors, active Truces, and building an Embassy in your Main Base',
      '+ Can be lost from: missing a Spice Tax payment (−20), betraying a Truce (−100), using Nuclear Warheads (−500), recruiting a Hero Ghola (−30)',
      '+ Dropping below 250 Standing risks losing your Charters',
      '+ The Landsraad Standing tier effects are shown below:',
    ],
    landsraadTiers: [
      {
        range: '0-99 (Pariah)',
        effects: [
          'No voting rights',
          '−3 Influence production',
          '+300% CHOAM share buying cost',
          'Main Base attacked by Landsraad Guard every 20 days',
        ],
      },
      {
        range: '100-199 (Low)',
        effects: [
          '−2 Influence production',
          '+100% CHOAM share buying cost',
        ],
      },
      {
        range: '200-299 (Medium)',
        effects: ['No special effects'],
      },
      {
        range: '300-399 (High)',
        effects: [
          '+100 max Influence',
          '+1 Influence production',
          '−10% CHOAM share buying cost',
        ],
      },
      {
        range: '400-500 (Very High)',
        effects: [
          '+200 max Influence',
          '+2 Influence production',
          '−15% CHOAM share buying cost',
        ],
      },
    ],
  },
];

// ──────────────────────────────────────────────
// Special Regions
// ──────────────────────────────────────────────

export const specialRegions: SpecialRegion[] = [
  {
    id: 'acidLakes',
    name: 'Acid Lakes',
    effects: [
      'Ground units lose -10% Health daily',
      '+100% Research Hub production',
    ],
  },
  {
    id: 'crescent',
    name: 'Crescent Ridge',
    effects: [
      '+100% Dew Collector production',
      'Fremen only: +100% Windtrap production',
    ],
  },
  {
    id: 'volcano',
    name: 'Great Volcano',
    effects: [
      'Allows Fuel Cell Factory construction',
      '+100% Fuel Cell Factory production',
      'Fremen only: Allows Ceremonial Caves construction',
      'Fremen only: +100% Ceremonial Caves production',
    ],
  },
  {
    id: 'imperialBasin',
    name: 'Imperial Basin',
    effects: [
      '+100% Recruitment Center production',
    ],
  },
  {
    id: 'moonDew',
    name: 'Moon Dew Vale',
    effects: [
      'Ground units lose Supply at 50% speed',
      'Village buildings consume no Water',
    ],
  },
  {
    id: 'idaho',
    name: 'Mount Idaho',
    effects: [
      '+200% Plascrete Factory production',
    ],
  },
  {
    id: 'observatory',
    name: 'Observatory Mountain',
    effects: [
      'Allows Data Center construction',
      'Allows Listening Post construction',
      '+50% Data Center production',
      '+50% Listening Post production',
    ],
  },
  {
    id: 'polar',
    name: 'Polar Sink',
    note: 'Always located at map center',
    effects: [
      'Allows Water Extractor construction',
    ],
  },
  {
    id: 'sandFall',
    name: 'Sand Fall',
    effects: [
      'Converts 6% of Village Solari upkeep into Knowledge',
    ],
  },
  {
    id: 'shield',
    name: 'Shield Wall',
    effects: [
      '-50% Building upkeep in this region',
    ],
  },
  {
    id: 'spaceWreck',
    name: 'Space Wreck',
    effects: [
      'Space Craft Wreck discovery appears periodically',
      'Spacing Guild Branch provides +1 Guild Favor',
      'Fremen only: Recycling Plant provides +1 Spaceship Parts',
    ],
  },
  {
    id: 'desolation',
    name: 'The Desolation',
    effects: [
      'Cannot be owned',
      '+400% Supply drain',
      'Ground units lose -40% Health daily',
      '-40% Ground unit Speed',
    ],
  },
  {
    id: 'riches',
    name: 'Well of Riches',
    effects: [
      '+100% Processing Plant production',
    ],
  },
  {
    id: 'rift',
    name: 'White Rift',
    effects: [
      '+100% Crafts Workshop production',
    ],
  },
  {
    id: 'nest',
    name: 'Worm Nest',
    effects: [
      'Military units attract Sandworms 50% faster',
      '+25% Spice production in the region',
    ],
  },
];

// ──────────────────────────────────────────────
// Sietch Traits
// ──────────────────────────────────────────────

export const sietchTraits: SietchTrait[] = [
  {
    id: 'arrakis-heart',
    name: 'Arrakis Heart',
    category: 'economic',
    effects: ['+2% resource production per controlled Special Region'],
  },
  {
    id: 'commercial-hub',
    name: 'Commercial Hub',
    category: 'economic',
    effects: ['+10% Solari production'],
  },
  {
    id: 'helping-hand',
    name: 'Helping Hand',
    category: 'economic',
    effects: ['+10% Village production'],
  },
  {
    id: 'tool-makers',
    name: 'Tool Makers',
    category: 'economic',
    effects: ['−20% Building Upkeep'],
  },
  {
    id: 'arrakis-harvesters',
    name: 'Arrakis Harvesters',
    category: 'military',
    effects: ['+200% unit power as Solari when units die'],
  },
  {
    id: 'heralds-of-revolution',
    name: 'Heralds of Revolution',
    category: 'military',
    effects: ['+50% Militia Health'],
  },
  {
    id: 'scouts-of-secret-paths',
    name: 'Scouts of Secret Paths',
    category: 'military',
    effects: ['+10% Military Unit Health'],
  },
  {
    id: 'training-grounds',
    name: 'Training Grounds',
    category: 'military',
    effects: ['−30% recruitment time'],
  },
  {
    id: 'arrakis-collectors',
    name: 'Arrakis Collectors',
    category: 'statecraft',
    effects: ['+10 Solari per active Treaty'],
  },
  {
    id: 'fremen-agents',
    name: 'Fremen Agents',
    category: 'statecraft',
    effects: ['−20% spying cost and preparation time'],
  },
  {
    id: 'fremen-brotherhood',
    name: 'Fremen Brotherhood',
    category: 'statecraft',
    effects: ['+2 Agents with Fremen Sibling trait'],
  },
  {
    id: 'fremen-scientists',
    name: 'Fremen Scientists',
    category: 'statecraft',
    effects: ['+4 Knowledge'],
  },
];
