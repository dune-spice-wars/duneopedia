import type { Building } from './types';

export const buildings: Building[] = [

  // ──────────────────────────────────────────────
  // Village — Economy
  // ──────────────────────────────────────────────

  {
    id: 'refinery',
    name: 'Refinery',
    image: '/images/buildings/refinery.png',
    category: 'village-economy',
    cost: { plascrete: 400, water: 2 },
    upkeep: { solari: 12 },
    constructionTimeDays: 4,
    factions: ['atreides', 'harkonnen', 'smugglers', 'corrino', 'ecaz', 'vernius'],
    effects: ['Allows deployment of a Harvester to a Spice Field within the same region'],
    flavorText: 'Refining is a second step to Spice harvesting. It allows the extraction of the pure and precious substance by extracting trace quantities out of large masses of rocks and sand',
  },

  {
    id: 'spiceSilos',
    name: 'Spice Silos',
    image: '/images/buildings/spiceSilos.png',
    category: 'village-economy',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 8 },
    constructionTimeDays: 4,
    developmentRequired: 'modularParts',
    factions: 'all',
    effects: ['+20% Spice production in ally Villages in the Region and its neighbors (x1 max)'],
    flavorText: 'Spice silos hold harvested spice. When the Refinery completes the conversion process, it automatically distributes the spice evenly among the silos',
  },

  {
    id: 'plascreteFactory',
    name: 'Plascrete Factory',
    image: '/images/buildings/plascreteFactory.png',
    category: 'village-economy',
    cost: { plascrete: 50, water: 2 },
    upkeep: { solari: 20 },
    constructionTimeDays: 4,
    factions: 'all',
    effects: ['+10 Plascrete production'],
    flavorText: 'Plascrete is a hard material to come by, and a dedicated factory is still necessary for its production',
  },

  {
    id: 'maintenanceCenter',
    name: 'Maintenance Center',
    image: '/images/buildings/maintenanceCenter.png',
    category: 'village-economy',
    cost: { plascrete: 150, water: 2 },
    upkeep: {},
    constructionTimeDays: 4,
    developmentRequired: 'compositeMaterials',
    factions: 'all',
    effects: ['-20% Solari Upkeep in ally Villages in this region and its neighbors (x1 max)'],
    flavorText: 'Centralizes supplies for all buildings but also streamlines their logistics and uses, making upkeep easier and more efficient',
  },

  {
    id: 'wholesaleMarket',
    name: 'Wholesale Market',
    image: '/images/buildings/wholesaleMarket.png',
    category: 'village-economy',
    cost: { plascrete: 50 },
    upkeep: {},
    constructionTimeDays: 4,
    factions: 'all',
    effects: ['+4 Solari production'],
    flavorText: 'While Spice and Water are the most important resources on Arrakis, there is always money to be made with less glamorous wares',
  },

  {
    id: 'processingPlant',
    name: 'Processing Plant',
    image: '/images/buildings/processingPlant.png',
    category: 'village-economy',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 4 },
    constructionTimeDays: 4,
    factions: 'all',
    effects: ['+20 Solari production'],
    notes: 'Can only be built in a Region containing Rare Elements or the Well of Riches',
    flavorText: 'The excavator ultimately generates Solaris by extracting Rare Elements from the ground',
  },

  {
    id: 'dewCollector',
    name: 'Dew Collector',
    image: '/images/buildings/dewCollector.png',
    category: 'village-economy',
    cost: { plascrete: 50 },
    upkeep: { solari: 4 },
    constructionTimeDays: 4,
    factions: 'all',
    effects: ['+1 Water per wind level in the Region'],
    flavorText: 'Collect the morning dew to produce a small amount of clean Water',
  },

  {
    id: 'windtrap',
    name: 'Windtrap',
    image: '/images/buildings/windtrap.png',
    category: 'village-economy',
    cost: { plascrete: 150 },
    upkeep: { solari: 8 },
    constructionTimeDays: 4,
    factions: ['fremen'],
    effects: ['+2 Water per wind level in the Region'],
    flavorText: 'Captures humidity from the air and produces a small amount of clean water out of it',
  },

  {
    id: 'waterExtractor',
    name: 'Water Extractor',
    image: '/images/buildings/waterExtractor.png',
    category: 'village-economy',
    cost: { plascrete: 300 },
    upkeep: { solari: 10 },
    constructionTimeDays: 4,
    factions: ['atreides', 'harkonnen', 'smugglers', 'corrino', 'ecaz'],
    effects: ['+25 Water production'],
    notes: 'Can only be built in the Polar Sink',
    flavorText: 'Gathers ice, melts it and filters it to produce clean water in large quantities',
  },

  {
    id: 'neuralNode',
    name: 'Neural Node',
    image: '/images/buildings/neuralNode.png',
    category: 'village-economy',
    cost: { plascrete: 50, landsraadStanding: 3 },
    upkeep: {},
    constructionTimeDays: 1,
    factions: ['vernius'],
    effects: ['Connects the Region to the Nodal Network'],
    notes: 'Can only be built where exactly 1 neighboring region is already connected to the Nodal Network',
    flavorText: 'The whole is more than the sum of its parts',
  },

  {
    id: 'masterpieceEconomy',
    name: 'Masterpiece Economy',
    image: '/images/buildings/masterpieceEconomy.png',
    category: 'village-economy',
    cost: { plascrete: 100 },
    upkeep: {},
    constructionTimeDays: 2,
    factions: ['ecaz'],
    effects: [
      'Counts as 2 buildings for Village Quirks',
      'Not destroyed on Liberation',
      'Destroying this building costs the attacker -10 Authority and -10 Landsraad Standing',
    ],
    flavorText: 'A true expression of beauty, pure and untainted',
  },

  {
    id: 'experimentalFurnace',
    name: 'Experimental Furnace',
    image: '/images/buildings/experimentalFurnace.png',
    category: 'village-economy',
    cost: { solari: 1000, plascrete: 500, fuelCells: 10, water: 5 },
    upkeep: { solari: 20 },
    constructionTimeDays: 8,
    prerequisite: '5k Hegemony',
    factions: 'all',
    effects: [
      '+30% resource production for other Economy buildings in this region and its neighbours (x1 max)',
      'Major Building: Can only be built ONCE per faction',
    ],
    flavorText: 'Under certain pressure and temperature conditions, regular mineral can be turned into exotic and valuable alloys',
  },

  {
    id: 'traffickingStation',
    name: 'Trafficking Station',
    image: '/images/buildings/traffickingStation.png',
    category: 'village-economy',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 8 },
    constructionTimeDays: 4,
    developmentRequired: 'tinkererTeams',
    factions: ['smugglers'],
    effects: [
      '-20% Spice production in neighboring regions',
      'Gain 80% of neighboring regions\' Spice production as Solari',
    ],
    flavorText: 'So much is lost during refining. Would anyone notice if more went missing?',
  },

  {
    id: 'shaiHuludTemple',
    name: 'Shai-Hulud Temple',
    image: '/images/buildings/shaiHuludTemple.png',
    category: 'village-economy',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: {},
    constructionTimeDays: 4,
    developmentRequired: 'spreadingTheFaith',
    prerequisite: 'Spreading the Faith development OR Mother Ramallo as councilor',
    factions: ['fremen'],
    effects: [
      '+20% resource production in ally Villages in this region and its neighbors (x1 max)',
      'Major Building: Can only be built ONCE per faction',
    ],
    flavorText: 'The guidance of Shai-Hulud strengthens the will of the people',
  },

  // ──────────────────────────────────────────────
  // Village — Military
  // ──────────────────────────────────────────────

  {
    id: 'recruitmentOffice',
    name: 'Recruitment Office',
    image: '/images/buildings/recruitmentOffice.png',
    category: 'village-military',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 20 },
    constructionTimeDays: 4,
    factions: 'all',
    effects: ['+3 Manpower production'],
    flavorText: 'Recruiting locally is both cheap and efficient for your crews and armies. Knowledge of the desert often makes all the difference',
  },

  {
    id: 'fuelCellFactory',
    name: 'Fuel Cell Factory',
    image: '/images/buildings/fuelCellFactory.png',
    category: 'village-military',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 6 },
    constructionTimeDays: 4,
    factions: ['atreides', 'harkonnen', 'smugglers', 'corrino', 'ecaz'],
    effects: ['+10 Fuel Cells production'],
    notes: 'Must be built in a region with Geothermal Energy or in the Great Volcano',
    flavorText: 'This building, dedicated to the production of fuel cells, optimizes the process and allows for better productivity',
  },

  {
    id: 'missileBattery',
    name: 'Missile Battery',
    image: '/images/buildings/missileBattery.png',
    category: 'village-military',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 10 },
    constructionTimeDays: 4,
    factions: 'all',
    effects: ['Automatically attacks enemy units in range within your territory'],
    notes: "Won't attack while the Village it's built in is under siege",
    flavorText: 'A well placed Missile Battery can make a big difference in an attack\'s outcome. An efficiency that also makes it a good deterrent',
  },

  {
    id: 'militaryBase',
    name: 'Military Base',
    image: '/images/buildings/militaryBase.png',
    category: 'village-military',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 12 },
    constructionTimeDays: 4,
    developmentRequired: 'survivalTraining',
    factions: 'all',
    effects: ['-20% damage received by ally Military Units in this Region and its neighbors (x1 max)'],
    flavorText: 'The military base allows better preparedness for your troops and your militia, allowing for easier defense of your controlled Regions',
  },

  {
    id: 'airfield',
    name: 'Airfield',
    image: '/images/buildings/airfield.png',
    category: 'village-military',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 12 },
    constructionTimeDays: 4,
    factions: ['atreides', 'harkonnen', 'smugglers', 'corrino', 'ecaz'],
    effects: ['Military units can embark on Shuttles to be transported within the range of airfields'],
    notes: 'Your Main Base also counts as an Airfield by default',
    flavorText: 'A strong network of Airfields is an efficient way to maintain control over your territory or to organize surprise attacks on your enemies',
  },

  {
    id: 'militaryFactory',
    name: 'Military Factory',
    image: '/images/buildings/militaryFactory.png',
    category: 'village-military',
    cost: { solari: 1000, plascrete: 500, fuelCells: 10, water: 5 },
    upkeep: { solari: 20 },
    constructionTimeDays: 8,
    prerequisite: '5k Hegemony',
    factions: 'all',
    effects: [
      '+15% Military Unit Power and Health',
      '-50% Military Unit Solari and Manpower upkeep',
      'Major Building: Can only be built ONCE per faction',
    ],
    flavorText: 'Serialization of ammunition and aiming accessories improves the efficiency of local defense systems',
  },

  {
    id: 'nuclearSilo',
    name: 'Nuclear Silo',
    image: '/images/buildings/nuclearSilo.png',
    category: 'village-military',
    cost: { solari: 2000, plascrete: 1000, fuelCells: 10, water: 5 },
    upkeep: { solari: 20 },
    constructionTimeDays: 8,
    factions: 'all',
    effects: [
      'Allows for the preparation and launch of Nuclear Warheads',
      'Major Building: Can only be built ONCE per faction',
    ],
    flavorText: 'The use of nuclear weapons against humans is forbidden by the Great Convention. There is no greater crime recognised by the Landsraad Council',
  },

  {
    id: 'ceremonialCaves',
    name: 'Ceremonial Caves',
    image: '/images/buildings/ceremonialCaves.png',
    category: 'village-military',
    cost: { plascrete: 150, water: 2 },
    upkeep: { spice: 6 },
    constructionTimeDays: 4,
    factions: ['fremen'],
    effects: ['+5% military unit Power'],
    notes: 'Must be built in a region with Geothermal Energy (Energy Sources) or in the Great Volcano',
    flavorText: 'In deep caves, Fremen have their Spice orgy, a secret ritual communion fueled by powerful narcotics',
  },

  // ──────────────────────────────────────────────
  // Village — Statecraft
  // ──────────────────────────────────────────────

  {
    id: 'researchHub',
    name: 'Research Hub',
    image: '/images/buildings/researchHub.png',
    category: 'village-statecraft',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 16 },
    constructionTimeDays: 4,
    factions: 'all',
    effects: ['+1 Knowledge production'],
    flavorText: 'A provincial lab might find more about life on Arrakis than what we got in the big cities',
  },

  {
    id: 'dataCenter',
    name: 'Data Center',
    image: '/images/buildings/dataCenter.png',
    category: 'village-statecraft',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 12 },
    constructionTimeDays: 4,
    factions: 'all',
    effects: ['+3 Intel production'],
    flavorText: 'Sometimes the best way to spy on your enemies is to stay close to them. This building is made for exactly that purpose',
  },

  {
    id: 'listeningPost',
    name: 'Listening Post',
    image: '/images/buildings/listeningPost.png',
    category: 'village-statecraft',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 12 },
    constructionTimeDays: 4,
    factions: 'all',
    effects: ['+1 Influence production'],
    notes: 'Must be built in a Village neighbouring an enemy region',
    flavorText: 'Intercepting and listening to political discussions is often the best way to counter opponents',
  },

  {
    id: 'investmentOffice',
    name: 'Investment Office',
    image: '/images/buildings/investmentOffice.png',
    category: 'village-statecraft',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 10 },
    constructionTimeDays: 4,
    developmentRequired: 'outpostLogistics',
    factions: 'all',
    effects: ["+1 instance of this Village's Traits"],
    flavorText: 'Investing in local infrastructure can bring great rewards',
  },

  {
    id: 'craftsWorkshop',
    name: 'Crafts Workshop',
    image: '/images/buildings/craftsWorkshop.png',
    category: 'village-statecraft',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 25 },
    constructionTimeDays: 4,
    developmentRequired: 'localDialectStudies',
    factions: 'all',
    effects: ['+8 Hegemony per day'],
    notes: 'Must be built in a Special Region',
    flavorText: 'Kull Wahad! High quality craftsmanship can fetch a very high price, especially with offworlders',
  },

  {
    id: 'concordChamber',
    name: 'Concord Chamber',
    image: '/images/buildings/concordChamber.png',
    category: 'village-statecraft',
    cost: { plascrete: 150, water: 2 },
    upkeep: { solari: 6 },
    constructionTimeDays: 4,
    factions: ['atreides'],
    effects: [
      'Sietches in neighbouring regions gain +200% to relation level gains',
      'Sietches in neighbouring regions gain +20% resources received from trading',
    ],
    notes: 'Must be built next to a revealed neighbouring sietch',
    flavorText: 'Long lasting alliances are built on small, practical actions. A local presence helps climb these small steps, day after day',
  },

  {
    id: 'researchStation',
    name: 'Research Station',
    image: '/images/buildings/researchStation.png',
    category: 'village-statecraft',
    cost: { solari: 1000, plascrete: 500, fuelCells: 10, water: 5 },
    upkeep: { solari: 20 },
    constructionTimeDays: 8,
    prerequisite: '5k Hegemony',
    factions: ['atreides', 'harkonnen', 'smugglers', 'corrino', 'ecaz'],
    effects: [
      '+100% Research Hub resource production',
      'Research Hub upkeep increased by 50%',
      'Major Building: Can only be built ONCE per faction',
    ],
    flavorText: 'Coordinates all scientific efforts to allow for better progression in the research of Developments',
  },

  {
    id: 'spacingGuildBranch',
    name: 'Spacing Guild Branch',
    image: '/images/buildings/spacingGuildBranch.png',
    category: 'village-statecraft',
    cost: { solari: 1000, plascrete: 500, water: 5 },
    upkeep: { solari: 20 },
    constructionTimeDays: 8,
    prerequisite: '5k Hegemony',
    factions: ['atreides', 'harkonnen', 'smugglers', 'corrino', 'ecaz'],
    effects: [
      'Allows trading resources with Guild Favour',
      'Unlocks Spacing Guild Special Events',
      "Allows the deployment of your faction's Air Units",
      'Major Building: Can only be built ONCE per faction',
    ],
    flavorText: "As the only known source of geriatric spice, it's only natural that the Spacing Guild will take special interest into Arrakis",
  },

  {
    id: 'recyclingPlant',
    name: 'Recycling Plant',
    image: '/images/buildings/recyclingPlant.png',
    category: 'village-statecraft',
    cost: { solari: 1000, plascrete: 500, water: 10 },
    upkeep: { solari: 20 },
    constructionTimeDays: 4,
    prerequisite: '5k Hegemony',
    factions: ['fremen'],
    effects: [
      'Allows trading resources with Spaceship Parts (Machine Scraps)',
      'Allows the construction of Spire and Altar air units',
      'Major Building: Can only be built ONCE per faction',
    ],
    flavorText: 'The Fremen have limited industrial capacities. They can however reach a decent output by scrapping and repurposing the invader\'s machines',
  },

  // ──────────────────────────────────────────────
  // Main Base — Economy
  // ──────────────────────────────────────────────

  {
    id: 'adminHall',
    name: 'Administrative Hall',
    category: 'mainbase-economy',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'localHubs',
    factions: 'all',
    effects: ['+3 Solari production in Villages', '+30% Authority production'],
    flavorText: 'The city hall centralizes the administrative formalities and acts as a nexus for your civic and political power',
  },

  {
    id: 'choamBranch',
    name: 'CHOAM Branch',
    category: 'mainbase-economy',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'economicLobbying',
    factions: 'all',
    effects: [
      'Applies Solari Upkeep Reduction to all ally Villages in neighboring regions',
      '+0.3 CHOAM Spice exchange rate',
      'Agents assigned on CHOAM Infiltration produce 30% more Solari and Intel',
    ],
    flavorText: 'Hosting a CHOAM branch is not mandatory in any way, but a wise leader will quickly find it quite advantageous, as it is sure to give them an edge in their economic endeavors',
  },

  {
    id: 'harvesterWorks',
    name: 'Harvester Works',
    category: 'mainbase-economy',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'modularParts',
    factions: ['atreides', 'harkonnen', 'smugglers', 'corrino', 'ecaz'],
    effects: [
      "+5% Harvester gathering rate per Economy building in its Village",
      '-50% Harvester respawn time',
      'Each Crew grants increased defense',
    ],
    flavorText: 'This structure trains technical harvesting crews and gives them tools to improve their work. Specialists of spice collection help optimize the process from start to finish',
  },

  {
    id: 'recyclingVats',
    name: 'Recycling Vats',
    category: 'mainbase-economy',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'waterTrade',
    factions: 'all',
    effects: ['+25% max Supply', '+5 Water per building in your main base'],
    flavorText: 'A complex but streamlined system of used water collection gathers the precious fluids to several recycling stations called "clear nodes," and then re-injects it as clean water into the system',
  },

  {
    id: 'alGaibTemple',
    name: 'Al-Gaib Temple',
    category: 'mainbase-economy',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'sietchNetwork',
    factions: ['fremen'],
    effects: [
      '+20% Spice production',
      '+40% resource production in ally Villages of the neighboring regions',
      '+40% received resources when trading with Sietch',
    ],
    flavorText: 'The temple draws the faithful, strengthening their will to serve Arrakis, either through industrious work or combat against offworlders',
  },

  // ──────────────────────────────────────────────
  // Main Base — Military
  // ──────────────────────────────────────────────

  {
    id: 'recruitmentCenter',
    name: 'Recruitment Center',
    category: 'mainbase-military',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    factions: 'all',
    effects: ['+2 Training Slots', 'Military units are trained 20% faster'],
    flavorText: 'This structure streamlines the process of enrollment for military units as well as makes recruitment easier, ultimately bringing in more manpower for your forces',
  },

  {
    id: 'barracks',
    name: 'Barracks',
    category: 'mainbase-military',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'groundCommand',
    factions: 'all',
    effects: ['Gives access to gear customisation for military units', '+30% Experience gains for all military units'],
    flavorText: 'Allows your military forces to recover and organize more effectively by giving them a place to fall back to and store their equipment',
  },

  {
    id: 'commandPost',
    name: 'Command Post',
    category: 'mainbase-military',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'supportStructures',
    factions: 'all',
    effects: ['+10 Command Points', '+10% Power to your military units'],
    flavorText: 'Optimizes logistics for your armies and improves communication down the chain of command, ultimately making your forces more efficient and dangerous',
  },

  {
    id: 'enhancedFortifications',
    name: 'Enhanced Fortifications',
    category: 'mainbase-military',
    cost: { solari: 500, plascrete: 800 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'defenceSystems',
    factions: ['atreides', 'harkonnen', 'fremen'],
    effects: ['+20 Armor on Main Base', '-20% damage received from Atomics'],
    flavorText: "Reinforces the main Base's Defense and offensive capabilities, making it harder to take down",
  },

  {
    id: 'undergroundTunnels',
    name: 'Underground Tunnels',
    category: 'mainbase-military',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'undergroundNetwork',
    factions: ['smugglers'],
    effects: [
      "Increase armies' max Supply by 30%",
      'Gain 30% more resources when pillaging a Village',
      '-30% damage received from Atomics',
    ],
    flavorText: 'A stockpile of weapons is the best thing to have with you when taking a last stand.',
  },

  // ──────────────────────────────────────────────
  // Main Base — Statecraft
  // ──────────────────────────────────────────────

  {
    id: 'embassy',
    name: 'Embassy',
    category: 'mainbase-statecraft',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    factions: 'all',
    effects: [
      '+10 Landsraad Standing after each Council',
      'Having at least one Treaty contracted with another faction grants a production bonus of 5% in its associated resource',
    ],
    flavorText: 'An important node of your power, where diplomats and other powerful people exchange information or work on political agreements',
  },

  {
    id: 'researchCenter',
    name: 'Research Center',
    category: 'mainbase-statecraft',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    factions: 'all',
    effects: ['+25% Knowledge production', '+15% Hegemony gains'],
    flavorText: 'Scientia potentia est: knowledge is power. The research center hosts the best scientists and gives them the means of making breakthroughs that will, in turn, serve you as Developments',
  },

  {
    id: 'intelligenceAgency',
    name: 'Intelligence Agency',
    category: 'mainbase-statecraft',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'spyingLogistic',
    factions: 'all',
    effects: ['+2 additional operation slots', '+200% Agent recruitment speed'],
    flavorText: 'The battle for information is best fought with the proper structures, and this agency contains everything you need to conduct proper espionage and counter intelligence missions',
  },

  {
    id: 'councilChamber',
    name: 'Council Chamber',
    category: 'mainbase-statecraft',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'atreidesDelegations',
    factions: ['atreides'],
    effects: ['+10% Landsraad Standing gains', '+100% relation gain with Sietches'],
    flavorText: 'The best way to have an influence over the Landsraad is to make sure you are always in the midst of it, ever present and seemingly indispensable',
  },

  {
    id: 'interrogationCenter',
    name: 'Interrogation Center',
    category: 'mainbase-statecraft',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'cruelReputation',
    factions: ['harkonnen'],
    effects: [
      'Gain 5 Intel when killing enemy units',
      'Gain 50 Intel by pillaging a Village',
      '+5 Intel per Agent captured by you',
    ],
    flavorText: 'Like spice, information must flow. Sadly, said information must more often than not be extracted from human beings like sap is extracted from a tree. Most abhor the method, but the Harkonnens will never shy away from a proven tool',
  },

  {
    id: 'blackMarketBranch',
    name: 'Black Market Branch',
    category: 'mainbase-statecraft',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'underworldBribes',
    factions: ['smugglers'],
    effects: [
      'Gain 250% of your Influence production as Solari',
      "Get 5% of the Bounty's cost as Influence",
      'Get 25 Landsraad Standing per positive resolution affecting another faction that you voted on',
    ],
    flavorText: 'Money is not the only thing that can be earned from commercial exchanges. Especially when said transactions are on the verge of legality',
  },

  {
    id: 'bazaar',
    name: 'Bazaar',
    category: 'mainbase-statecraft',
    cost: { solari: 1000, plascrete: 500 },
    upkeep: { solari: 10 },
    constructionTimeDays: 8,
    developmentRequired: 'arrakisSecrets',
    factions: ['fremen'],
    effects: [
      'Counts as Economy, Military, and Statecraft for the purpose of district bonuses',
      'Applies the district bonus 1 more time',
      '+2 Influence production per ally Sietch',
    ],
    flavorText: 'The city hall centralizes the administrative formalities and acts as a nexus for your civic and political power',
  },

  // ──────────────────────────────────────────────
  // Underworld HQ — Economy (enemy villages, Smugglers only)
  // ──────────────────────────────────────────────

  {
    id: 'bootlegMarket',
    name: 'Bootleg Market',
    category: 'underworld-economy',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: [
      "Produce 40% of the Village's Spice production as Solari",
      "Produce 40% of the Village's Plascrete production as Solari",
      "Produce 40% of the Village's Water production as Solari",
    ],
    flavorText: 'This illegal market can provide small quantities of rare resources',
  },

  {
    id: 'contrabandCache',
    name: 'Contraband Cache',
    category: 'underworld-economy',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: [
      "Stocks 40% of the Village's Solari production, up to 500",
      "Stocks 40% of the Village's Spice production, up to 500",
      "Stocks 40% of the Village's Plascrete production, up to 500",
      'You can retrieve the resources stocked in this Underworld Headquarters with Pillage',
    ],
    flavorText: 'Hiding resources over time will be helpful for the day you take over',
  },

  {
    id: 'workersGuild',
    name: "Worker's Guild",
    category: 'underworld-economy',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: ['Host Village gains +20% Resource production'],
    flavorText: "The Worker's Guild can always provide labor. You just never know who they truly work for",
  },


  // ──────────────────────────────────────────────
  // Underworld HQ — Military
  // ──────────────────────────────────────────────

  {
    id: 'backAlleyDoctor',
    name: 'Back-Alley Doctor',
    category: 'underworld-military',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: ['Regenerates Health for nearby ally units', 'Refills Supply for nearby units'],
    flavorText: 'Local help can make the difference in a conflict',
  },

  {
    id: 'supportStation',
    name: 'Support Station',
    category: 'underworld-military',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: ['Ally military units in the region have -30% Solari upkeep'],
    flavorText: 'This illegal market can provide small quantities of rare resources',
  },

  {
    id: 'hiddenExplosives',
    name: 'Hidden Explosives',
    category: 'underworld-military',
    cost: { solari: 100 },
    upkeep: {},
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: [
      "Damages the Village's Militia by 50% of their Health upon ally Siege",
      'This building is destroyed upon ally Siege on the village',
    ],
    flavorText: 'A good way to weaken your enemies before striking',
  },

  {
    id: 'clandestineScouts',
    name: 'Clandestine Scouts',
    category: 'underworld-military',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: ['+10% Power to ally military units in the Region'],
    flavorText: 'You just never know when a supply of weapons and ammunition will come in handy',
  },

  // ──────────────────────────────────────────────
  // Underworld HQ — Statecraft
  // ──────────────────────────────────────────────

  {
    id: 'spyware',
    name: 'Spyware',
    category: 'underworld-statecraft',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: ["Advances a random Development owned by the Village's faction every day"],
    flavorText: 'A bit of industrial spying has never hurt anyone',
  },

  {
    id: 'whisperersLair',
    name: "Whisperers Lair",
    category: 'underworld-statecraft',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: [
      '+1 Intel production',
      '-10% daily chance of agent capture when assigned on this faction',
      '-10% agent capture chance when an operation on this faction is detected',
    ],
    flavorText: "When you're spying, you can't always choose your fights, but you should always take advantage of circumstances",
  },

  {
    id: 'activistQuarters',
    name: 'Activist Quarters',
    category: 'underworld-statecraft',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: ['+5 more Minor Houses votes are guaranteed on resolutions with a Bounty'],
    flavorText: 'Lobbying, influence and veiled threats are a perfect recipe for good and healthy relations',
  },

  {
    id: 'enrollmentStation',
    name: 'Enrollment Station',
    category: 'underworld-statecraft',
    cost: { solari: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 1,
    factions: ['smugglers'],
    effects: ['+50% Agent recruitment speed for you and your allies'],
    flavorText: 'Kids who get mixed up with the mob often have many qualities that can be used for higher purpose, if you know how to train them',
  },

  // ──────────────────────────────────────────────
  // Underworld HQ — Main Base (enemy main bases, 10k Hegemony)
  // ──────────────────────────────────────────────

  {
    id: 'contrabandHub',
    name: 'Contraband Hub',
    category: 'underworld-mainbase',
    cost: { solari: 2000, intel: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 2,
    prerequisite: '10k Hegemony',
    factions: ['smugglers'],
    effects: ["Gain 30% more resources when pillaging Villages owned by this faction"],
    flavorText: 'Stealing is only half of the work, you also need an efficient way to resell your goods',
  },

  {
    id: 'spiceTraffickers',
    name: 'Spice Traffickers',
    category: 'underworld-mainbase',
    cost: { solari: 2000, intel: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 2,
    prerequisite: '10k Hegemony',
    factions: ['smugglers'],
    effects: ["Produce 5 Spice per active Spice Harvester of this main base's faction"],
    flavorText: 'He who controls those who control the spice, controls the universe',
  },

  {
    id: 'launderingNetwork',
    name: 'Laundering Network',
    category: 'underworld-mainbase',
    cost: { solari: 2000, intel: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 2,
    prerequisite: '10k Hegemony',
    factions: ['smugglers'],
    effects: ["+30 Solari production per level of this main base's biggest completed Economy district"],
    flavorText: 'Paying taxes is for Houses',
  },

  {
    id: 'hiddenExplosivesMB',
    name: 'Hidden Explosives (Main Base)',
    category: 'underworld-mainbase',
    cost: { solari: 1000, intel: 100 },
    upkeep: { solari: 5 },
    constructionTimeDays: 2,
    prerequisite: '10k Hegemony',
    factions: ['smugglers'],
    effects: [
      'Destroy 20 Armor from the Main Base upon ally Siege',
      'This building is destroyed upon ally Siege on the Main Base',
    ],
    flavorText: 'No walls are big enough when they can crumble from their core',
  },

  {
    id: 'beaconNetwork',
    name: 'Beacon Network',
    category: 'underworld-mainbase',
    cost: { solari: 2000, intel: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 2,
    prerequisite: '10k Hegemony',
    factions: ['smugglers'],
    effects: ["Ally military units in this faction's territory gain +2 Armor"],
    flavorText: 'The best way to win a battle against a strong opponent is to exploit your own strengths',
  },

  {
    id: 'weaponDealers',
    name: 'Weapon Dealers',
    category: 'underworld-mainbase',
    cost: { solari: 2000, intel: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 2,
    prerequisite: '10k Hegemony',
    factions: ['smugglers'],
    effects: ["+3% unit Power per level of this main base's biggest completed Military district"],
    flavorText: 'Weapons always get lost in a conflict. And also found by clever people',
  },

  {
    id: 'whisperersHub',
    name: 'Whisperers Hub',
    category: 'underworld-mainbase',
    cost: { solari: 2000, intel: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 2,
    prerequisite: '10k Hegemony',
    factions: ['smugglers'],
    effects: ['+10 Infiltration production towards this faction', 'Captured Agents have +100% escape chances in this faction'],
    flavorText: "It's always good to have an escape route, with people to help along the way",
  },

  {
    id: 'schemeLodge',
    name: 'Scheme Lodge',
    category: 'underworld-mainbase',
    cost: { solari: 2000, intel: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 2,
    prerequisite: '10k Hegemony',
    factions: ['smugglers'],
    effects: ['+5 Intel production per active treaty with this faction'],
    flavorText: 'Sometimes the best spies are the most noticeable',
  },

  {
    id: 'activistHQ',
    name: 'Activist Headquarters',
    category: 'underworld-mainbase',
    cost: { solari: 2000, intel: 200 },
    upkeep: { solari: 5 },
    constructionTimeDays: 2,
    prerequisite: '10k Hegemony',
    factions: ['smugglers'],
    effects: ["+20 max Influence per level of this main base's biggest completed Statecraft district"],
    flavorText: 'Spreading propaganda directly among their people also lets them know how much you matter',
  },

  // ──────────────────────────────────────────────
  // Sietch Settlements — Economy (Fremen, allied sietches, 10k Hegemony)
  // ──────────────────────────────────────────────

  {
    id: 'fremenTradeHub',
    name: 'Fremen Trade Hub',
    category: 'sietch-economy',
    cost: { plascrete: 1000, authority: 20, water: 5 },
    upkeep: {},
    constructionTimeDays: 4,
    prerequisite: '10k Hegemony',
    factions: ['fremen'],
    effects: ['+100% trade resource gains with this Sietch for you and your allies'],
    notes: 'Only one of these buildings may exist globally',
    flavorText: 'Sietches are powerful. Keeping good relations with them should be a priority',
  },

  {
    id: 'melangeMixingMill',
    name: 'Melange Mixing Mill',
    category: 'sietch-economy',
    cost: { plascrete: 1000, authority: 20, water: 5 },
    upkeep: {},
    constructionTimeDays: 4,
    prerequisite: '10k Hegemony',
    factions: ['fremen'],
    effects: ['+30% Spice production in ally Villages in the Region and its neighbors (x1 max)'],
    notes: 'Only one of these buildings may exist globally',
    flavorText: 'A mix of instinct and knowledge from locals can yield great harvests',
  },

  {
    id: 'hiddenPlascreteFactory',
    name: 'Hidden Plascrete Factory',
    category: 'sietch-economy',
    cost: { plascrete: 1000, authority: 20, water: 5 },
    upkeep: {},
    constructionTimeDays: 4,
    prerequisite: '10k Hegemony',
    factions: ['fremen'],
    effects: ['+80 Plascrete production'],
    notes: 'Only one of these buildings may exist globally',
    flavorText: "Good thing the Empire doesn't know all that can be hidden within a Sietch",
  },

  // ──────────────────────────────────────────────
  // Sietch Settlements — Military
  // ──────────────────────────────────────────────

  {
    id: 'thumpersFactory',
    name: 'Thumpers Factory',
    category: 'sietch-military',
    cost: { plascrete: 1000, authority: 20, water: 5 },
    upkeep: {},
    constructionTimeDays: 4,
    prerequisite: '10k Hegemony',
    factions: ['fremen'],
    effects: ['+20% Thumper production', '+2 max Thumper'],
    notes: 'Only one of these buildings may exist globally',
    flavorText: 'Worm riding can be vital in times of conflict',
  },

  {
    id: 'raidGatheringSite',
    name: 'Raid Gathering Site',
    category: 'sietch-military',
    cost: { plascrete: 1000, authority: 20, water: 5 },
    upkeep: {},
    constructionTimeDays: 4,
    prerequisite: '10k Hegemony',
    factions: ['fremen'],
    effects: ['This Sietch will raid more frequently'],
    notes: 'Only one of these buildings may exist globally',
    flavorText: 'Whether by charm or false flag operations, locals can easily be convinced to strike their perceived enemy',
  },

  {
    id: 'masterKnifeMakers',
    name: 'Master Knife Makers',
    category: 'sietch-military',
    cost: { plascrete: 1000, authority: 20, water: 5 },
    upkeep: {},
    constructionTimeDays: 4,
    prerequisite: '10k Hegemony',
    factions: ['fremen'],
    effects: ['+10% military units Power'],
    notes: 'Only one of these buildings may exist globally',
    flavorText: 'Many blades are crafted here, as well as the very invaluable Crysknives',
  },

  // ──────────────────────────────────────────────
  // Sietch Settlements — Statecraft
  // ──────────────────────────────────────────────

  {
    id: 'gossipBarterers',
    name: 'Gossip Barterers',
    category: 'sietch-statecraft',
    cost: { plascrete: 1000, authority: 20, water: 5 },
    upkeep: {},
    constructionTimeDays: 4,
    prerequisite: '10k Hegemony',
    factions: ['fremen'],
    effects: ['+10 Intel production per neutral Village in the region and its neighbors'],
    notes: 'Only one of these buildings may exist globally',
    flavorText: 'The Houses like to think they are master spies, and yet in their arrogance they ignore the many ears surrounding them every day',
  },

  {
    id: 'desertAnalysis',
    name: 'Desert Analysis',
    category: 'sietch-statecraft',
    cost: { plascrete: 1000, authority: 20, water: 5 },
    upkeep: {},
    constructionTimeDays: 4,
    prerequisite: '10k Hegemony',
    factions: ['fremen'],
    effects: ['+2 Knowledge per neutral Village in this region and its neighbors'],
    notes: 'Only one of these buildings may exist globally',
    flavorText: 'Arrakis still holds many secrets even the Fremen have not fathomed',
  },

  {
    id: 'terraformingResearchHub',
    name: 'Terraforming Research Hub',
    category: 'sietch-statecraft',
    cost: { plascrete: 1000, authority: 20, water: 5 },
    upkeep: {},
    constructionTimeDays: 4,
    prerequisite: '10k Hegemony',
    factions: ['fremen'],
    effects: ['+100% Hegemony production from Water production'],
    notes: 'Only one of these buildings may exist globally',
    flavorText: 'The Fremen have a plan for their planet. That plan must stay a secret',
  },

];
