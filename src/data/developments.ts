import type { Development, FactionId } from './types';

export const developments: Development[] = [

  // ──────────────────────────────────────────────
  // Shared — Economy
  // ──────────────────────────────────────────────

  {
    id: 'compositeMaterials',
    name: 'Composite Materials',
    tree: 'economy',
    tier: 1,
    effects: [
      '+10 Plascrete production',
      'Unlock Maintenance Center',
    ],
    flavorText: "Dune's harsh environment makes composite materials a key part of building a vast and durable infrastructure",
  },

  {
    id: 'modularParts',
    name: 'Modular Parts',
    tree: 'economy',
    tier: 2,
    prereqId: 'compositeMaterials',
    effects: [
      '+1 maximum assignable Crew in Harvesters',
      'Unlocks Spice Silos Village Building',
      'Unlocks the Harvester Works building',
    ],
    flavorText: 'Modular parts unlock customization options for your vehicles, like extra crew cabins in your Harvesters',
  },

  {
    id: 'advancedEngineering',
    name: 'Advanced Engineering',
    tree: 'economy',
    tier: 2,
    prereqId: 'compositeMaterials',
    effects: [
      'Each Village produces +2% resources per Building constructed',
      'Unlocks the Mason Guild in Base Building',
      'Unlocks the Trade Agreement Treaty',
    ],
    flavorText: "These improved construction techniques specific to Arrakis' environment are dedicated to infrastructure efficiency",
  },

  {
    id: 'choamIntegration',
    name: 'CHOAM Integration',
    tree: 'economy',
    tier: 3,
    prereqId: 'modularParts',
    effects: [
      `See next period's Spice exchange rate in the Spice Report`,
      'Unlocks the CHOAM branch Building in your Main Base',
      '+1 Agent slot in CHOAM Information',
    ],
    flavorText: 'TODO: flavor text for choam integration',
  },

  {
    id: 'insulatedValley',
    name: 'Insulated Valley',
    tree: 'economy',
    tier: 3,
    prereqId: 'advancedEngineering',
    effects: [
      'Controlled Village in regions with at most 2 Wind Strength Gain:',
      '-30% Building Solari Upkeep',
      'Buildings require -1 Water'
    ],
    flavorText: 'TODO: flavor text for insulated valley',
  },

  {
    id: 'geothermalCondensers',
    name: 'Geothermal Condensers',
    tree: 'economy',
    tier: 3,
    prereqId: 'advancedEngineering',
    effects: [
      'Fuel cell Factories product +10 Solari',
      'Fuel cell Factories produce +5 water',
      '+10% resource production in villages with Fuel cell Factory',
    ],
    flavorText: 'TODO: flavor text for geothermal condensers',
  },

  {
    id: 'richesOfArrakis',
    name: 'Riches of Arrakis',
    tree: 'economy',
    tier: 3,
    prereqId: 'advancedEngineering',
    effects: [
      '+10 Solari production per controlled Special Region',
      '+2% total Solari production per controlled Special Region',
    ],
    flavorText: 'Arrakis teaches the attitude of the knife - chopping off what\'s incomplete and saying: "Now, it\'s complete because it\'s ended here."',
  },

  {
    id: 'crewTrainingProgram',
    name: 'Crew Training Program',
    tree: 'economy',
    tier: 4,
    prereqId: 'choamIntegration',
    effects: [
      '+2 Maximum Crew in Harvesters',
      '+20% Spice production',
    ],
    flavorText: 'Some Houses consider harvester crews as expendable. Others know in their happiness lies the recipe for the very best Spice yields',
  },

  {
    id: 'choamSupport',
    name: 'CHOAM Support',
    tree: 'economy',
    tier: 4,
    prereqId: 'choamIntegration',
    effects: [
      '-15% CHOAM Share buying price',
      '+0.1 Spice exchange rate per 5% CHOAM Share',
    ],
    flavorText: 'TODO: flavor text for choam support',
  },

  // ──────────────────────────────────────────────
  // Shared — Military
  // ──────────────────────────────────────────────

  {
    id: 'survivalTraining',
    name: 'Survival Training',
    tree: 'military',
    tier: 1,
    effects: [
      "Unlock armory to customize unit's equipment",
      'Unlocks the Military Base building',
    ],
    flavorText: 'Arrakis is the deadliest and most efficient instructor',
  },


  {
    id: 'armyLogistics',
    name: 'Army Logistics',
    tree: 'military',
    tier: 2,
    prereqId: 'survivalTraining',
    effects: [
      '+10 Water',
      'Unlock second gear slot in armory',
    ],
    flavorText: 'An army needs a lot of resources to operating, including those found in the field',
  },

  {
    id: 'mechanization',
    name: 'Mechanization',
    tree: 'military',
    tier: 2,
    prereqId: 'survivalTraining',
    effects: [
      'Unlock Support Drone unit',
    ],
    flavorText: 'TODO: flavor text for mechanization',
  },

  {
    id: 'recruitmentInitiative',
    name: 'Recruitment Initiative',
    tree: 'military',
    tier: 2,
    prereqId: 'survivalTraining',
    effects: [
      '+5 Command Point',
      "+20% Manpower Production",
      'Unlock Command Post district',
    ],
    flavorText: 'TODO: flavor text for recruitment initiative',
  },

  {
    id: 'energyEfficiency',
    name: 'Energy Efficiency',
    tree: 'military',
    tier: 3,
    prereqId: 'mechanization',
    effects: [
      '+50% Fuel Cell',
      '-1 mechanical units Fuel Cell requirement',
      'Unlocks the Fusion Plant Building in your main base',
    ],
    flavorText: 'TODO: flavor text for energy efficiency',
  },

  {
    id: 'parallelTraining',
    name: 'Parallel Training',
    tree: 'military',
    tier: 3,
    prereqId: 'recruitmentInitiative',
    effects: [
      "+2 Training slot",
      'Unlock Military Academy',
      '+1 Agent slot in Spacing Guild Information',
    ],
    flavorText: 'TODO: flavor text for parallel training',
  },

  {
    id: 'partsProduction',
    name: 'Parts Production',
    tree: 'military',
    tier: 4,
    prereqId: 'energyEfficiency',
    effects: [
      '+20% mechanical units Health',
      '+50% mechanical units regeneration speed',
      "-30% mechanical units regeneration costs",
    ],
    flavorText: 'TODO: flavor text for parts production',
  },

  {
    id: 'militaryPropaganda',
    name: 'Military Propaganda',
    tree: 'military',
    tier: 4,
    prereqId: 'parallelTraining',
    effects: [
      '+10 Command Point',
      '+20% Authority production if no other factions use more Command Point',
    ],
    flavorText: 'TODO: flavor text for military propaganda',
  },

  {
    id: 'siegeIncentives',
    name: 'Siege Incentives',
    tree: 'military',
    tier: 4,
    prereqId: 'parallelTraining',
    effects: [
      'Military units deal +50% damage against Main Bases',
      'Military units gives 0.1 solari per damage inflicted on a Main Base',
    ],
    flavorText: 'TODO: flavor text for siege incentives',
  },

  // ──────────────────────────────────────────────
  // Shared — Statecraft
  // ──────────────────────────────────────────────

  {
    id: 'intelligenceNetwork',
    name: 'Intelligence Network',
    tree: 'statecraft',
    tier: 1,
    effects: [
      'Getting the chosen result on at least one resolution grants 10 Landsraad Standing every Council',
      '+100% Agent Recruitment speed',
    ],
    flavorText: 'Allows all agents on the field to input and have access to information, creating an ever-expanding web of knowledge to which all can connect',
  },

  {
    id: 'diplomaticManeuvers',
    name: 'Diplomatic Maneuvers',
    tree: 'statecraft',
    tier: 2,
    prereqId: 'intelligenceNetwork',
    effects: [
      'Minor Houses deliver a House Gift near Main Base after every Council',
      'Unlock Political Agreement Treaty',
      'Unlock Embassy district',
    ],
    flavorText: 'Diplomacy is a complex game, one that can be played only by those who accept and even enjoy such interactions',
  },

  {
    id: 'spyingLogistic',
    name: 'Spying Logistic',
    tree: 'statecraft',
    tier: 2,
    prereqId: 'intelligenceNetwork',
    effects: [
      'Allow the training of Assassins',
      '+200% Agent recruitment speed',
      'Unlocks the Intelligence Agency building',
    ],
    flavorText: 'Not everybody is born a natural spy. Most have to train hard to become one',
  },


  {
    id: 'counterMeasures',
    name: 'Counter Measures',
    tree: 'statecraft',
    tier: 3,
    prereqId: 'diplomaticManeuvers',
    effects: [
      'After every Council 1 Landsraad Guard appear near Main Base per 100 Influence spent up to 3',
      'You can assign 1 more Agent to Counterintelligence',
    ],
    flavorText: 'Sometimes, the best offense is defense. This is particularly true in espionage',
  },

  {
    id: 'landsraadSupport',
    name: 'Landsraad Support',
    tree: 'statecraft',
    tier: 3,
    prereqId: 'diplomaticManeuvers',
    effects: [
      '+50 max Influence per agent assigned to a Landsraad Information slot',
      '+1 Agent slot in Landsraad Information',
    ],
    flavorText: 'TODO: flavor text for landsraad support',
  },

  {
    id: 'stealthGear',
    name: 'Stealth Gear',
    tree: 'statecraft',
    tier: 3,
    prereqId: 'spyingLogistic',
    effects: [
      `20% of an operation's Intel cost is refunded when launched in the territory of a faction in Conflict`,
      'Enemies have -50% chance to detect missions',
    ],
    flavorText: 'The best way not to get caught is to not be seen at all',
  },

    {
    id: 'nefariousContracts',
    name: 'Nefarious Contracts',
    tree: 'statecraft',
    tier: 3,
    prereqId: 'spyingLogistic',
    effects: [
      '-50% Assassin recruitment costs',
      `+1 max Infiltration Cells in each faction's territory`,
    ],
    flavorText: 'TODO: flavor text for nefarious contracts',
  },

  {
    id: 'insiderTrading',
    name: 'Insider Trading',
    tree: 'statecraft',
    tier: 4,
    prereqId: 'landsraadSupport',
    effects: [
      '-20% CHOAM Share selling price',
      'Selling CHOAM shares grants 1 Influence Influence per share and removes CHOAM selling cooldown and max influence during landsraad council',
    ],
    flavorText: 'TODO: flavor text for insider trading',
  },

  {
    id: 'spyingMastery',
    name: 'Spying Mastery',
    tree: 'statecraft',
    tier: 4,
    prereqId: 'stealthGear',
    effects: [
      '-50% impact from number of Agents on the time to recruit a new one',
      '+5 max Agents',
    ],
    flavorText: 'Secrets are best kept by fewer guardians, and a strong encryption code',
  },

  // ──────────────────────────────────────────────
  // Shared — Expansion
  // ──────────────────────────────────────────────

  {
    id: 'localDialectStudies',
    name: 'Local Dialect Studies',
    tree: 'expansion',
    tier: 1,
    prereqId: 'stealthGear',
    effects: [
      '-15% Authority cost to annex a Village',
      '+1 Water per controlled Village',
    ],
    flavorText: "Efforts in social and cultural integration always help assuaging the pyon's fears",
  },

  {
    id: 'layOfTheLand',
    name: 'Lay of the Land',
    tree: 'expansion',
    tier: 2,
    prereqId: 'localDialectStudies',
    effects: [
      '+0.5 Knowledge per controlled Village',
      'Unlocks the Research Agreement Treaty',
    ],
    flavorText: 'To the layman, Dune is only a pile of dust. Only those who know the land see the deadly traps and abundant opportunities',
  },

  {
    id: 'localHubs',
    name: 'Local Hubs',
    tree: 'expansion',
    tier: 2,
    prereqId: 'localDialectStudies',
    effects: [
      '-15% Village Buildings construction costs',
      'Unlocks the Investment Office Village Building',
    ],
    flavorText: 'Further fostering local ties helps when it comes to surviving on a planet like Arrakis',
  },

  {
    id: 'nativeCustoms',
    name: 'Native Customs',
    tree: 'expansion',
    tier: 2,
    prereqId: 'localDialectStudies',
    effects: [
      '+20% Authority from Agents on a Arrakis Information slot',
      '-30% Authority cost to Annex a Village in a Region with a revealed Sietch',
    ],
    flavorText: 'TODO: flavor text for native customs',
  },

  {
    id: 'civilianDefenseForce',
    name: 'Civilian Defense Force',
    tree: 'expansion',
    tier: 3,
    prereqId: 'localHubs',
    effects: [
      '+1 Militia Slot',
      '+150 Militia Health',
      '-50% Airfield Upkeep',
    ],
    flavorText: 'TODO: flavor text for civilian defense force',
  },

  {
    id: 'outpostLogistics',
    name: 'Outpost Logistics',
    tree: 'expansion',
    tier: 3,
    prereqId: 'nativeCustoms',
    effects: [
      'Owned Villages Authority penalty to annex a new Village is reduced by 30%',
      '+1 Agent slot in Arrakis Information',
    ],
    flavorText: 'Setting up a solid network of outposts generally requires defensive installations, the right people, and convincing gifts',
  },

  {
    id: 'valuableTrinkets',
    name: 'Valuable Trinkets',
    tree: 'expansion',
    tier: 3,
    prereqId: 'nativeCustoms',
    effects: [
      '+100% resources received from trading with an allied Sietch',
      'Unlocks the Crafts Workshop Village Building',
    ],
    flavorText: 'TODO: flavor text for valuable trinkets',
  },

  {
    id: 'borderDefence',
    name: 'Border Defense',
    tree: 'expansion',
    tier: 4,
    prereqId: 'civilianDefenseForce',
    effects: [
      '+1 Missile Battery limit',
      '+30% Missile Battery Power',
      '+4 Militia Armor',
    ],
    flavorText: 'These small stations are usually built within villages, allowing for better communication with remote places',
  },

  {
    id: 'wondersOfTheDesert',
    name: 'Wonders of the Desert',
    tree: 'expansion',
    tier: 4,
    prereqId: 'valuableTrinkets',
    effects: [
      '+30% resource production in Special Regions',
      'No penalty Authority cost to Annex a Village in a Special Region',
    ],
    flavorText: 'TODO: flavor text for wonders of the desert',
  },

  // ──────────────────────────────────────────────
  // Atreides — Unique
  // ──────────────────────────────────────────────

  {
    id: 'atreidesSympathizers',
    name: 'Atreides Sympathizers',
    tree: 'statecraft',
    faction: 'atreides',
    replacesId: 'intelligenceNetwork',
    effects: [
      '+5 Landsraad Standing per Landsraad Information level, on Council opening',
      '+2 Influence production'
    ],
    flavorText: 'Reaching agreements with highly regarded factions is a good way to be highly regarded yourself',
  },

  {
    id: 'politicalEntente',
    name: 'Political Entente',
    tree: 'statecraft',
    faction: 'atreides',
    replacesId: 'counterMeasures',
    effects: [
      'When another faction betrays a Truce with House Atreides, receive 4 free Landsraad Guard',
      'Unlocks the Council Chamber building',
    ],
    flavorText: 'Reaching agreements with highly regarded factions is a good way to be highly regarded yourself',
  },

  {
    id: 'sustainableSpying',
    name: 'Sustainable Spying',
    tree: 'statecraft',
    faction: 'atreides',
    replacesId: 'stealthGear',
    effects: [
      'Agents assigned on CHOAM Information, Landsraad Information, or Spacing Guild Information slots produce +50% of their associated resources',
      'Agent traits present only once on an Information field apply their effects twice',
    ],
    flavorText: 'Reaching agreements with highly regarded factions is a good way to be highly regarded yourself',
  },

  {
    id: 'activeSurveillance',
    name: 'Active Surveillance',
    tree: 'statecraft',
    faction: 'atreides',
    replacesId: 'nefariousContracts',
    effects: [
      '+1 Influence and Intel production per Agent assigned to Counterintelligence',
      '+1 Agent slot in Counterintelligence',
    ],
    flavorText: 'Reaching agreements with highly regarded factions is a good way to be highly regarded yourself',
  },

  {
    id: 'airNetwork',
    name: 'Air Network',
    tree: 'expansion',
    faction: 'atreides',
    replacesId: 'localHubs',
    effects: [
      '-70% Airfield construction costs',
      '-70% Airfield upkeep',
      'Shuttles are +100% faster',
    ],
    flavorText: 'Power doesn\'t have to be solely about imposing your will; you can sometimes get more with truth and trust',
  },

  {
    id: 'veteranMilitia',
    name: 'Veteran Militia',
    tree: 'expansion',
    faction: 'atreides',
    replacesId: 'civilianDefenseForce',
    effects: [
      '-15% damage received by Military Units inside Atreides borders',
      '+80% Militia Health',
    ],
    flavorText: 'Power doesn\'t have to be solely about imposing your will; you can sometimes get more with truth and trust',
  },

  {
    id: 'culturalAssimilation',
    name: 'Cultural Assimilation',
    tree: 'expansion',
    faction: 'atreides',
    replacesId: 'outpostLogistics',
    effects: [
      '-20% Authority and Influence cost to use Peaceful Annexation',
      'Unlocks the Concord Chamber Village Building',
      '+1 Agent slot in Arrakis Information',
    ],
    flavorText: 'Power doesn\'t have to be solely about imposing your will; you can sometimes get more with truth and trust',
  },

  {
    id: 'localCommunity',
    name: 'Local Community',
    tree: 'economy',
    faction: 'atreides',
    replacesId: 'compositeMaterials',
    effects: [
      '+5 Plascrete production',
      'Unlock Maintenance Center',
      'Unlock Investment Office',
    ],
    flavorText: 'TODO: flavor text for local community',
  },

  {
    id: 'urbanPlanning',
    name: 'Urban Planning',
    tree: 'economy',
    faction: 'atreides',
    replacesId: 'advancedEngineering',
    effects: [
      'Allow constructing multiple Village Buildings simultaneously',
      'Unlocks the Mason Guild building in Arrakeen',
      'Unlocks the Trade Agreement Treaty',
    ],
    flavorText: 'TODO: flavor text for urban planning',
  },

  {
    id: 'atreidesForemen',
    name: 'Atreides Foremen',
    tree: 'economy',
    faction: 'atreides',
    replacesId: 'crewTrainingProgram',
    effects: [
      '+2 Maximum Crew in Harvesters',
      'After successfully paying the Imperial Tax, every Harvesters with full crew gains +15% gathering rate permanently (x3 max)',
    ],
    flavorText: 'TODO: flavor text for atreides foremen',
  },

  {
    id: 'postTraumaReintegration',
    name: 'Post-Trauma Reintegration',
    tree: 'military',
    faction: 'atreides',
    replacesId: 'recruitmentInitiative',
    effects: [
      '+5 Command Point',
      '-30% non-mechanical units regeneration costs',
      'Unlocks the Command Post Building',
    ],
    flavorText: 'TODO: flavor text for post-trauma reintegration',
  },

    {
    id: 'proudLiberator',
    name: 'Proud Liberator',
    tree: 'military',
    faction: 'atreides',
    replacesId: 'siegeIncentives',
    effects: [
      'Non-mechanical units get +1% max Health per 20 Landsraad Standing',
      'Units Liberating or Annexing a Village from a faction with less Landsraad Standing heal 50% of Health',
    ],
    flavorText: 'TODO: flavor text for proud liberator',
  },

  // ──────────────────────────────────────────────
  // Harkonnen — Unique
  // ──────────────────────────────────────────────

  {
    id: 'workEthics',
    name: 'Work Ethics',
    tree: 'economy',
    faction: 'harkonnen',
    replacesId: 'compositeMaterials',
    effects: [
      '+5 Plascrete production',
      '+3 Manpower production',
      'Unlocks the Maintenance Center Village Building',
    ],
    flavorText: 'Let them complain!',
  },
  
  {
    id: 'martialEconomy',
    name: 'Martial Economy',
    tree: 'economy',
    faction: 'harkonnen',
    replacesId: 'richesOfArrakis',
    effects: [
      '+1 Militia slot',
      'Unlocks the Office of Order Village Building',
    ],
    flavorText: 'Let them complain!',
  },

  {
    id: 'arrakisButchers',
    name: 'Arrakis Butchers',
    tree: 'military',
    faction: 'harkonnen',
    replacesId: 'armyLogistics',
    effects: [
      '+10 Water',
      '+50% damage against Militia and Rebel',
      'Gains 5 Manpower upon killing Militia and Rebel',
    ],
    flavorText: 'If they do not dread our very name, we have failed!',
  },

  {
    id: 'assemblyLines',
    name: 'Assembly Lines',
    tree: 'military',
    faction: 'harkonnen',
    replacesId: 'partsProduction',
    effects: [
      '-30% Combat Probe and Harpy recruitment costs',
      '-30% Combat Probe and Harpy training time',
    ],
    flavorText: 'If they do not dread our very name, we have failed!',
  },

  {
    id: 'adrenalineAddiction',
    name: 'Adrenaline Addiction',
    tree: 'military',
    faction: 'harkonnen',
    replacesId: 'militaryPropaganda',
    effects: [
      '+10 Command Point',
      'Every time a unit dies, ally Military Units that are fighting nearby receive +1% attack speed (x50 max)',
      'Unlock the second gear slot in the Armory',
    ],
    flavorText: 'If they do not dread our very name, we have failed!',
  },

  {
    id: 'cruelReputation',
    name: 'Cruel Reputation',
    tree: 'statecraft',
    faction: 'harkonnen',
    replacesId: 'diplomaticManeuvers',
    effects: [
      'Using an operation on a faction in Conflict grants 25% of its Solari cost as Influence',
      'Unlocks the Political Agreement Treaty',
    ],
    flavorText: 'It is a good thing they are not too fond of us. It keeps them on their toes, and us on our feet',
  },

  {
    id: 'landsraadWhispers',
    name: 'Landsraad Whispers',
    tree: 'statecraft',
    faction: 'harkonnen',
    replacesId: 'landsraadSupport',
    effects: [
      'Agents assigned on a Landsraad Information slot produce +2 Intel',
      'Unlocks the Landsraad Quarters Building',
      '+1 Agent slot in Landsraad Information',
    ],
    flavorText: 'It is a good thing they are not too fond of us. It keeps them on their toes, and us on our feet',
  },

  {
    id: 'enhancedQuestioning',
    name: 'Enhanced Questioning',
    tree: 'statecraft',
    faction: 'harkonnen',
    replacesId: 'stealthGear',
    effects: [
      'Oppressed Villages grant +1 Intel production',
      'Unlocks the Interrogation Center Building',
    ],
    flavorText: 'It is a good thing they are not too fond of us. It keeps them on their toes, and us on our feet',
  },

  {
    id: 'instillFear',
    name: 'Instill Fear',
    tree: 'expansion',
    faction: 'harkonnen',
    replacesId: 'nativeCustoms',
    effects: [
      '-10% Authority cost to Annex pillaged Villages',
      '-50% Authority cost to Annex again a Village owned by Harkonnen in the past',
    ],
    flavorText: 'It is by my will alone I set my mind in motion',
  },

  {
    id: 'savageCleansing',
    name: 'Savage Cleansing',
    tree: 'expansion',
    faction: 'harkonnen',
    replacesId: 'valuableTrinkets',
    effects: [
      'Pillaging a Sietch gives 100 Authority and immediately reveals another Sietch',
      'A successful Pillage resupply +25% of max Supply of units in the occupation circle',
    ],
    flavorText: 'It is by my will alone I set my mind in motion',
  },

  {
    id: 'symbolsOfAuthority',
    name: 'Symbols of Authority',
    tree: 'expansion',
    faction: 'harkonnen',
    replacesId: 'wondersOfTheDesert',
    effects: [
      'Oppressed Special Regions grant +1 Authority production',
      'Unlocks the Crafts Workshop Village Building',
    ],
    flavorText: 'It is by my will alone I set my mind in motion',
  },

  // ──────────────────────────────────────────────
  // Smugglers — Unique
  // ──────────────────────────────────────────────

  {
    id: 'footInTheDoor',
    name: 'Foot in the Door',
    tree: 'statecraft',
    faction: 'smugglers',
    replacesId: 'intelligenceNetwork',
    effects: [
      '-20% Underworld Headquarters installation costs within territories of a faction in Truce',
      '1 Influence and Intel production per faction hosting at least one Underworld Headquarters',
      '+100% Agent recruitment speed',
    ],
    flavorText: 'TODO: flavor text for foot in the door',
  },

  {
    id: 'securityDetails',
    name: 'Security Details',
    tree: 'statecraft',
    faction: 'smugglers',
    replacesId: 'counterMeasures',
    effects: [
      'Receive 4 free Mercenary after any resolution choice marked by a Bounty passes',
      '+1 Agent slot in Counterintelligence'
    ],
    flavorText: 'TODO: flavor text for security details',
  },

  {
    id: 'underworldBribes',
    name: 'Underworld Bribes',
    tree: 'statecraft',
    faction: 'smugglers',
    replacesId: 'landsraadSupport',
    effects: [
      '+15 Landsraad Standing upon successfully paying the Guild Fees',
      'Resolutions marked by a Bounty receives 1 more vote from the Houses Minor per 4 Landsraad Standing',
      '+1 Agent slot in Landsraad Information',
    ],
    flavorText: 'TODO: flavor text for underworld bribes',
  },

  {
    id: 'guerrillaTactics',
    name: 'Guerrilla Tactics',
    tree: 'military',
    faction: 'smugglers',
    replacesId: 'armyLogistics',
    effects: [
      '+15 Water',
      'At night, Military Units gain +20% damage and +20% Speed outside combat',
    ],
    flavorText: 'TODO: flavor text for guerrilla tactics',
  },

  {
    id: 'organizedLooting',
    name: 'Organized Looting',
    tree: 'military',
    faction: 'smugglers',
    replacesId: 'mechanization',
    effects: [
      '+30% resources from pillaging Villages and Sietches',
      'Unlocks the Scavenging Drone unit',
    ],
    flavorText: 'TODO: flavor text for organized looting',
  },

  {
    id: 'industrialScavenging',
    name: 'Industrial Scavenging',
    tree: 'military',
    faction: 'smugglers',
    replacesId: 'energyEfficiency',
    effects: [
      'Non-mechanical units in the same region as at least 1 Scavenging Drone consume -30% Solari upkeep',
      'Unlock the second gear slot in the Armory',
      'Unlocks the Fusion Plant Building',
    ],
    flavorText: 'TODO: flavor text for industrial scavenging',
  },

  {
    id: 'synchronizedHeist',
    name: 'Synchronized Heist',
    tree: 'military',
    faction: 'smugglers',
    replacesId: 'militaryPropaganda',
    effects: [
      '+10 Command Point',
      'On completing a siege, units in the occupation circle gain +20% Speed for 1 day',
      'When at least 2 sieges are underway against the same faction, Pillage progress 100% faster'
    ],
    flavorText: 'TODO: flavor text for synchronized heist',
  },

  {
    id: 'criminalBarons',
    name: 'Criminal Barons',
    tree: 'expansion',
    faction: 'smugglers',
    replacesId: 'localDialectStudies',
    effects: [
      '-15% Underworld Headquarters installation cost',
      '+0.5 Water per Underworld Headquarters',
    ],
    flavorText: 'TODO: flavor text for criminal barons',
  },

  {
    id: 'undergroundNetwork',
    name: 'Underground Network',
    tree: 'expansion',
    faction: 'smugglers',
    replacesId: 'localHubs',
    effects: [
      'Smuggler Villages produce +5 Solari per Underworld Headquarters in adjacent regions',
      'Unlocks the Black Market Branch Building'
    ],
    flavorText: 'TODO: flavor text for underground network',
  },

  {
    id: 'illicitMethods',
    name: 'Illicit Methods',
    tree: 'expansion',
    faction: 'smugglers',
    replacesId: 'outpostLogistics',
    effects: [
      'Ignore the cost penalty to Annex pillaged Villages',
      'Unlocks the Investment Office',
      '+1 Agent slot in Arrakis Information'
    ],
    flavorText: 'TODO: flavor text for illicit methods',
  },

  {
    id: 'tinkererTeams',
    name: 'Tinkerer Teams',
    tree: 'economy',
    faction: 'smugglers',
    replacesId: 'modularParts',
    effects: [
      '+1 maximum Crew in Harvesters',
      'Unlocks the Trafficking Station Village Building',
      'Unlocks the Harvester Works Building'
    ],
    flavorText: 'TODO: flavor text for tinkerer teams',
  },

  {
    id: 'underworldContacts',
    name: 'Underworld Contacts',
    tree: 'economy',
    faction: 'smugglers',
    replacesId: 'crewTrainingProgram',
    effects: [
      '+2 maximum Crew in Harvesters',
      "Underworld Headquarters produce 20% of their Village's Spice",
      'Unlocks Contraband Supply special events'
    ],
    flavorText: 'TODO: flavor text for underworld contacts',
  },

  // ──────────────────────────────────────────────
  // Fremen — Unique
  // ──────────────────────────────────────────────

  {
    id: 'fremenSolidarity',
    name: 'Fremen Solidarity',
    tree: 'statecraft',
    faction: 'fremen',
    replacesId: 'intelligenceNetwork',
    effects: [
      'Immediately gain 60 relation with all Sietches',
      '+100% Agent recruitment speed',
    ],
    flavorText: 'TODO: flavor text for fremen solidarity',
  },

  {
    id: 'sandDiplomats',
    name: 'Sand Diplomats',
    tree: 'statecraft',
    faction: 'fremen',
    replacesId: 'diplomaticManeuvers',
    effects: [
      'Each allied Sietch grants +1 Influence production',
      'Unlocks the Political Agreement Treaty',
      'Unlocks the Al-Gaib Temple Building in Sietch Tabr',
    ],
    flavorText: 'TODO: flavor text for sand diplomats',
  },

  {
    id: 'sietchNetwork',
    name: 'Sietch Network',
    tree: 'statecraft',
    faction: 'fremen',
    replacesId: 'counterMeasures',
    effects: [
      'Each allied Sietch grants +5% chance to detect an enemy operation',
      '+1 Agent slot in Counterintelligence',
    ],
    flavorText: 'TODO: flavor text for sietch network',
  },

  {
    id: 'skyGrazing',
    name: 'Sky Grazing',
    tree: 'military',
    faction: 'fremen',
    replacesId: 'armyLogistics',
    effects: [
      '-20% damage from air units',
      'Unlocks the Mobile Turret unit',
    ],
    flavorText: 'TODO: flavor text for sky grazing',
  },

  {
    id: 'desertTrekkers',
    name: 'Desert Trekkers',
    tree: 'military',
    faction: 'fremen',
    replacesId: 'mechanization',
    effects: [
      '+10 Water',
      'Ground units gain +20% Speed in neutral territory',
    ],
    flavorText: 'TODO: flavor text for desert trekkers',
  },

  {
    id: 'stalwartAlliance',
    name: 'Stalwart Alliance',
    tree: 'military',
    faction: 'fremen',
    replacesId: 'energyEfficiency',
    effects: [
      'During Liberation of an enemy Village, neighboring allied Sietches send a supporting raid',
      'Unlock the second gear slot in the Armory',
      'Allied Sietches Militia have +50% Health',
    ],
    flavorText: 'TODO: flavor text for stalwart alliance',
  },

  {
    id: 'idayAlakrab',
    name: 'Iday Alakrab',
    tree: 'military',
    faction: 'fremen',
    replacesId: 'partsProduction',
    effects: [
      'Wormriding is +100% faster',
      'Wormriding cannot be seen',
      'On exiting wormriding, units inflict +10 damage on the first attack and gain Stealth for a day',
    ],
    flavorText: 'TODO: flavor text for iday alakrab',
  },

  {
    id: 'heirOfArrakis',
    name: 'Heir of Arrakis',
    tree: 'expansion',
    faction: 'fremen',
    replacesId: 'layOfTheLand',
    effects: [
      '+20% Authority production per controlled Deep Desert',
      'Unlocks the Investment Office Village Building',
      'Controlled Deep Desert grant neighboring Villages effects:',
      'Effects of Village quirks are applied 2 more times',
      '+20% Militia Power',
    ],
    flavorText: 'TODO: flavor text for heir of arrakis',
  },

  {
    id: 'desertWisdom',
    name: 'Desert Wisdom',
    tree: 'expansion',
    faction: 'fremen',
    replacesId: 'localHubs',
    effects: [
      'Windtraps produce +0.1 Knowledge per level of wind strength in the Region',
      'Unlocks the Research Agreement Treaty',
      'Unlocks the Mason Guild Building in Sietch Tabr',
    ],
    flavorText: 'TODO: flavor text for desert wisdom',
  },

  {
    id: 'desertWatchers',
    name: 'Desert Watchers',
    tree: 'expansion',
    faction: 'fremen',
    replacesId: 'civilianDefenseForce',
    effects: [
      '+1 Militia slot',
      '+50 Militia Health per neutral neighboring Village',
      'Ally units in Fremen territory have Stealth',
      'Fremen units also gain stealth near Allied sietches'
    ],
    flavorText: 'TODO: flavor text for desert watchers',
  },

  {
    id: 'arrakisSecrets',
    name: 'Arrakis Secrets',
    tree: 'economy',
    faction: 'fremen',
    replacesId: 'modularParts',
    effects: [
      'Reveals the position of all Spice Fields',
      'Deployed Harvesting Teams regain Health and Supply',
      'When they pack up, Harvesting Teams leave combat immediately and have Stealth for 1 day',
      'Unlocks the Spice Silos Village Building',
    ],
    flavorText: 'TODO: flavor text for arrakis secrets',
  },

  {
    id: 'freedomFighters',
    name: 'Freedom Fighters',
    tree: 'economy',
    faction: 'fremen',
    replacesId: 'advancedEngineering',
    effects: [
      '+0.5 Solari Production per existing neutral or Fremen Village',
      '+500 Solari when liberating a Village',
      'Unlocks the Trade Agreement Treaty'
    ],
    flavorText: 'TODO: flavor text for freedom fighters',
  },

  {
    id: 'sandBrotherhood',
    name: 'Sand Brotherhood',
    tree: 'economy',
    faction: 'fremen',
    replacesId: 'insulatedValley',
    effects: [
      '+1% Solari production per ally Sietch',
      '+10% resource production in the region of an ally Sietch and its neighbors',
      'Unlocks the Bazaar Building in Sietch Tabr'
    ],
    flavorText: 'TODO: flavor text for sand brotherhood',
  },

  {
    id: 'sharedTranscendence',
    name: 'Shared Transcendence',
    tree: 'economy',
    faction: 'fremen',
    replacesId: 'geothermalCondensers',
    effects: [
      'Ceremonial Caves produce +10 Solari',
      'Ceremonial Caves produce +1 Knowledge',
    ],
    flavorText: 'TODO: flavor text for shared transcendence',
  },

  // ──────────────────────────────────────────────
  // Corrino — Unique
  // ──────────────────────────────────────────────

  {
    id: 'absolutePower',
    name: 'Absolute Power',
    tree: 'statecraft',
    faction: 'corrino',
    replacesId: 'intelligenceNetwork',
    effects: [
      'Proposing a Non-aggression Pact has no cost if no Truce is active',
      'Gain 5 Landsraad Standing on Council opening if at least one Truce is active',
      'Unlocks the Landsraad Quarters Building in Imperial Base',
    ],
    flavorText: 'TODO: flavor text for absolute power',
  },

  {
    id: 'diplomaticSpying',
    name: 'Diplomatic Spying',
    tree: 'statecraft',
    faction: 'corrino',
    replacesId: 'diplomaticManeuvers',
    effects: [
      '+2 Influence production per Agent assigned on a faction in Truce',
      '+2 Intel production per Agent assigned on a faction in Conflict',
      'Unlocks the Political Agreement Treaty',
    ],
    flavorText: 'TODO: flavor text for diplomatic spying',
  },

  {
    id: 'emperorEyes',
    name: 'Emperor Eyes',
    tree: 'statecraft',
    faction: 'corrino',
    replacesId: 'counterMeasures',
    effects: [
      'Fills Counterintelligence slots with 3 unmovable Emperor Eye Agents',
      '-50% Military Units costs while the victim of a treason',
    ],
    flavorText: 'TODO: flavor text for emperor eyes',
  },

  {
    id: 'imperialCommand',
    name: 'Imperial Command',
    tree: 'military',
    faction: 'corrino',
    replacesId: 'armyLogistics',
    effects: [
      'Can use Airfields of factions in Truce',
      'No Supply drain in regions owned by factions in Truce',
      'Unlock the second gear slot in the Armory',
    ],
    flavorText: 'TODO: flavor text for imperial command',
  },

  {
    id: 'imperialProtocols',
    name: 'Imperial Protocols',
    tree: 'military',
    faction: 'corrino',
    replacesId: 'militaryPropaganda',
    effects: [
      '+10 Command Point',
      '-20% damage received for Military Units in regions where Corrino has numerical superiority',
    ],
    flavorText: 'TODO: flavor text for imperial protocols',
  },

  {
    id: 'megalopolis',
    name: 'Megalopolis',
    tree: 'expansion',
    faction: 'corrino',
    replacesId: 'localDialectStudies',
    effects: [
      '-10% construction costs in Imperial Base',
      'Corrino Villages neighbouring Imperial Base get: +3 Water, -10% construction cost',
    ],
    flavorText: 'TODO: flavor text for megalopolis',
  },

  {
    id: 'imperialResearchers',
    name: 'Imperial Researchers',
    tree: 'expansion',
    faction: 'corrino',
    replacesId: 'layOfTheLand',
    effects: [
      '+1 Knowledge per completed district',
      'Unlocks the Research Agreement Treaty',
    ],
    flavorText: 'TODO: flavor text for imperial researchers',
  },

  {
    id: 'imperialAdministration',
    name: 'Imperial Administration',
    tree: 'expansion',
    faction: 'corrino',
    replacesId: 'localHubs',
    effects: [
      'Effects of Village quirks are applied 1 more time in ally Villages neighbouring Imperial Bases',
      'Unlocks the Investment Office Village Building',
    ],
    flavorText: 'TODO: flavor text for imperial administration',
  },

  {
    id: 'administrativeConsolidation',
    name: 'Administrative Consolidation',
    tree: 'expansion',
    faction: 'corrino',
    replacesId: 'nativeCustoms',
    effects: [
      '-20% Solari Upkeep in ally Villages with 4 or more Buildings of the same type',
      'Unlocks the Emperor Monument Building in the Imperial Base',
    ],
    flavorText: 'TODO: flavor text for administrative consolidation',
  },

  {
    id: 'solidMaterials',
    name: 'Solid Materials',
    tree: 'economy',
    faction: 'corrino',
    replacesId: 'compositeMaterials',
    effects: [
      '+15 Plascrete Production',
      'Buildings have +1000 Health',
    ],
    flavorText: 'TODO: flavor text for solid materials',
  },

  {
    id: 'choamManipulation',
    name: 'CHOAM Manipulation',
    tree: 'economy',
    faction: 'corrino',
    replacesId: 'choamSupport',
    effects: [
      'Each 1% of CHOAM Shares grants: +0.5% Military Unit Power, +1% chance of detecting an enemy operation',
    ],
    flavorText: 'TODO: flavor text for choam manipulation',
  },

  {
    id: 'integratedCosts',
    name: 'Integrated Costs',
    tree: 'economy',
    faction: 'corrino',
    replacesId: 'insulatedValley',
    effects: [
      'Ally Villages neighbouring Imperial Base get: +10 Solari production, -30% Major Building Solari upkeeps',
    ],
    flavorText: 'TODO: flavor text for integrated costs',
  },

  // ──────────────────────────────────────────────
  // Ecaz — Unique
  // ──────────────────────────────────────────────

  {
    id: 'politicalArt',
    name: 'Political Art',
    tree: 'statecraft',
    faction: 'ecaz',
    replacesId: 'insiderTrading',
    effects: [
      'Gain 8 Influence upon building a Masterpiece',
      'Any Charter claimed by House Ecaz cannot be proposed to vote',
    ],
    flavorText: 'TODO: flavor text for political art',
  },

  {
    id: 'influentialPlots',
    name: 'Influential Plots',
    tree: 'statecraft',
    faction: 'ecaz',
    replacesId: 'spyingMastery',
    effects: [
      'When out of Intel, Influence is used for mission preparation, assassination upkeep, and Assassin recruitment',
      "+1 max Infiltration Cells in each faction's territory",
    ],
    flavorText: 'TODO: flavor text for influential plots',
  },

  {
    id: 'cosmopolitanElegance',
    name: 'Cosmopolitan Elegance',
    tree: 'statecraft',
    faction: 'ecaz',
    replacesId: 'nefariousContracts',
    effects: [
      'Information levels rise and fall 50% faster',
      'Agents on fields at max Information level produce +50% of every resource',
    ],
    flavorText: 'TODO: flavor text for cosmopolitan elegance',
  },

  {
    id: 'nationalMythos',
    name: 'National Mythos',
    tree: 'military',
    faction: 'ecaz',
    replacesId: 'mechanization',
    effects: [
      'Unlocks the War Banner unit',
      '-10% damage received by Ecazi units in a large area around the Champion',
    ],
    flavorText: 'TODO: flavor text for national mythos',
  },

  {
    id: 'inspiringStandard',
    name: 'Inspiring Standard',
    tree: 'military',
    faction: 'ecaz',
    replacesId: 'energyEfficiency',
    effects: [
      'War Banners produce 2 Manpower',
      'Non-mechanical units in the same region as at least 1 War Banner regenerate Health 100% faster',
      'Unlocks the Fusion Plant Building in Foliage',
    ],
    flavorText: 'TODO: flavor text for inspiring standard',
  },

  {
    id: 'martialPerfectionism',
    name: 'Martial Perfectionism',
    tree: 'military',
    faction: 'ecaz',
    replacesId: 'recruitmentInitiative',
    effects: [
      '+5 Command Point',
      'Units can pay +100% price to recruit in +50% time, gaining +20% Health, +20% Power, +100% Cost to heal permanently',
      'Unlocks the Military Academy Building in Foliage',
    ],
    flavorText: 'TODO: flavor text for martial perfectionism',
  },

  {
    id: 'logisticalFlourish',
    name: 'Logistical Flourish',
    tree: 'military',
    faction: 'ecaz',
    replacesId: 'parallelTraining',
    effects: [
      'When a Champion dies, get +50% units recruitment speed for 10 days',
      'Unlocks the Command Post Building in Foliage',
      '+1 Agent slot in Spacing Guild Information',
    ],
    flavorText: 'TODO: flavor text for logistical flourish',
  },

  {
    id: 'manicheanPropaganda',
    name: 'Manichean Propaganda',
    tree: 'expansion',
    faction: 'ecaz',
    replacesId: 'localHubs',
    effects: [
      '+1 Militia slot',
      'Other factions lose 5 Influence when killing an Ecazi Militia',
    ],
    flavorText: 'TODO: flavor text for manichean propaganda',
  },

  {
    id: 'pridefulCrown',
    name: 'Prideful Crown',
    tree: 'expansion',
    faction: 'ecaz',
    replacesId: 'civilianDefenseForce',
    effects: [
      'Villages at a distance of 2 regions from the Garden Resort gain: +40% Authority cost to Annex, +50% Militia Power, +50% Militia Health',
    ],
    flavorText: 'TODO: flavor text for prideful crown',
  },

  {
    id: 'nativeArtists',
    name: 'Native Artists',
    tree: 'expansion',
    faction: 'ecaz',
    replacesId: 'nativeCustoms',
    effects: [
      'Masterpieces increase relation with Sietches in the same region',
      'Unlocks the Museum of Unbound Arts Building',
    ],
    flavorText: 'TODO: flavor text for native artists',
  },

  {
    id: 'artisticAspirations',
    name: 'Artistic Aspirations',
    tree: 'economy',
    faction: 'ecaz',
    replacesId: 'advancedEngineering',
    effects: [
      'Gain 80 Solari upon building a Masterpiece',
      '-50% cost to add a Building slot',
      'Unlocks the Mason Guild Building in Foliage',
    ],
    flavorText: 'TODO: flavor text for artistic aspirations',
  },

  {
    id: 'culturalTourism',
    name: 'Cultural Tourism',
    tree: 'economy',
    faction: 'ecaz',
    replacesId: 'geothermalCondensers',
    effects: [
      'Each Sanctuary provides +10 Solari production',
      'Each Sanctuary provides +5 Water',
      'Unlocks the Trade Agreement Treaty',
    ],
    flavorText: 'TODO: flavor text for cultural tourism',
  },

  // ──────────────────────────────────────────────
  // Vernius — Unique
  // ──────────────────────────────────────────────

  {
    id: 'technologicalExchange',
    name: 'Technological Exchange',
    tree: 'statecraft',
    faction: 'vernius',
    replacesId: 'intelligenceNetwork',
    effects: [
      'Gain 5 Landsraad Standing on Council opening per active Truce',
      '+2 Knowledge per active Truce',
    ],
    flavorText: 'TODO: flavor text for technological exchange',
  },

  {
    id: 'hereticalComputing',
    name: 'Heretical Computing',
    tree: 'statecraft',
    faction: 'vernius',
    replacesId: 'spyingLogistic',
    effects: [
      'Unlock Analytical Machine Agents and get 1 for free',
      'Unlocks the Harmless Gadget Treaty',
      'Unlocks the Intelligence Agency Building in S-Vault',
    ],
    flavorText: 'TODO: flavor text for heretical computing',
  },

  {
    id: 'holisticThinking',
    name: 'Holistic Thinking',
    tree: 'statecraft',
    faction: 'vernius',
    replacesId: 'nefariousContracts',
    effects: [
      '+1 Knowledge per Information field with at least 1 Analytical Machine',
      'Information increases by 1 level in factions that have accepted a Harmless Gadget',
    ],
    flavorText: 'TODO: flavor text for holistic thinking',
  },

  {
    id: 'physicalWiring',
    name: 'Physical Wiring',
    tree: 'statecraft',
    faction: 'vernius',
    replacesId: 'spyingMastery',
    effects: [
      'Infiltration Cells adjacent to a connected neural node give +2 Knowledge, +5 Solari production, and +1 Intel production per Statecraft building in the Village',
      'Allows the training of Assassins',
    ],
    flavorText: 'TODO: flavor text for physical wiring',
  },

  {
    id: 'waterBatteries',
    name: 'Water Batteries',
    tree: 'military',
    faction: 'vernius',
    replacesId: 'armyLogistics',
    effects: [
      'When out of Fuel Cells, Water is used in its stead',
      'Unlock the second gear slot in the Armory',
    ],
    flavorText: 'TODO: flavor text for water batteries',
  },

  {
    id: 'guildCollaboration',
    name: 'Guild Collaboration',
    tree: 'military',
    faction: 'vernius',
    replacesId: 'recruitmentInitiative',
    effects: [
      '+5 Command Point',
      'Agents assigned on a Spacing Guild Information slot produce 2 Fuel Cell',
      'Unlocks the Command Post Building in S-Vault',
    ],
    flavorText: 'TODO: flavor text for guild collaboration',
  },

  {
    id: 'automatedManufacture',
    name: 'Automated Manufacture',
    tree: 'military',
    faction: 'vernius',
    replacesId: 'militaryPropaganda',
    effects: [
      '+10 Command Point',
      '+0.5% recruitment and regeneration speed of all units per Knowledge',
    ],
    flavorText: 'TODO: flavor text for automated manufacture',
  },

  {
    id: 'sequentialThinking',
    name: 'Sequential Thinking',
    tree: 'expansion',
    faction: 'vernius',
    replacesId: 'localDialectStudies',
    effects: [
      'The Nodal Network can optionally connect to Neural Nodes across a Deep Desert',
      'Each node on the longest path of the Nodal Network gives +0.5 Knowledge and +2% Authority production',
    ],
    flavorText: 'TODO: flavor text for sequential thinking',
  },

  {
    id: 'automatedDefenses',
    name: 'Automated Defenses',
    tree: 'expansion',
    faction: 'vernius',
    replacesId: 'borderDefence',
    effects: [
      'Villages connected to the Nodal Network gain: +2 free extra Automated Militia',
      'Connected Neural Nodes attack enemy units in the region as a rapid-fire single-target defensive building',
    ],
    flavorText: 'TODO: flavor text for automated defenses',
  },

  {
    id: 'neuralTropism',
    name: 'Neural Tropism',
    tree: 'expansion',
    faction: 'vernius',
    replacesId: 'nativeCustoms',
    effects: [
      'Enemy factions pay +30% Authority to Annex a Village neighboring at least 2 regions connected to the Nodal Network',
      'Unlocks the Neural Core Building in S-Vault',
    ],
    flavorText: 'TODO: flavor text for neural tropism',
  },

  {
    id: 'entropicEngineering',
    name: 'Entropic Engineering',
    tree: 'economy',
    faction: 'vernius',
    replacesId: 'modularParts',
    effects: [
      'Can spend up to 2 Fuel Cell in Combine Harvester Drones to increase their production',
      'Unlocks the Spice Silos Village Building',
      'Unlocks the Spice Laboratory Building in S-Vault',
    ],
    flavorText: 'TODO: flavor text for entropic engineering',
  },

  {
    id: 'spiceEnlightenment',
    name: 'Spice Enlightenment',
    tree: 'economy',
    faction: 'vernius',
    replacesId: 'crewTrainingProgram',
    effects: [
      'Can spend up to 4 Fuel Cells in Combine Harvester Drones to increase their production',
      '+0.5% Spice production per Knowledge',
    ],
    flavorText: 'TODO: flavor text for spice enlightenment',
  },

];

export function getFactionTree(factionId: FactionId): Development[] {
  const replacing = developments.filter(d => d.faction === factionId && d.replacesId);
  const replacedIds = new Set(replacing.map(d => d.replacesId!));
  const replacementMap = new Map(replacing.map(d => [d.replacesId!, d]));

  const resolvePrereq = (id: string | undefined) =>
    id && replacedIds.has(id) ? replacementMap.get(id)!.id : id;

  const result: Development[] = [];

  // Walk the shared devs in their original order so the unique replacement is
  // inserted at the exact same position as the dev it replaces.
  for (const d of developments) {
    if (d.faction) continue; // handle faction devs below

    if (replacedIds.has(d.id)) {
      // Emit the unique dev in place of the shared dev it replaces
      const unique = replacementMap.get(d.id)!;
      const prereqId = resolvePrereq(d.prereqId);
      result.push(prereqId ? { ...unique, prereqId } : { ...unique, prereqId: undefined });
    } else {
      // Shared dev: remap prereqId if it points to a replaced node
      const fixed = resolvePrereq(d.prereqId);
      result.push(fixed !== d.prereqId ? { ...d, prereqId: fixed } : d);
    }
  }

  // Append extra unique devs that don't replace anything
  result.push(...developments.filter(d => d.faction === factionId && !d.replacesId));

  return result;
}
