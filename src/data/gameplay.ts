import type { Operation } from './types';

// ──────────────────────────────────────────────
// Regular Operations (common + faction-specific)
// ──────────────────────────────────────────────

export const operations: Operation[] = [
  // ── Common Operations (all factions) ──────────────────────────────────────
  {
    id: 'probe-setup',
    name: 'Probe Setup',
    cost: { intel: 50 },
    difficulty: 'Easy',
    infoLevelsRequired: [],
    faction: 'all',
    effects: [
      '+ Reveals all information and units in the region',
      '+ Advances detection of any Sietch in the region',
    ],
  },
  {
    id: 'defense-sabotage',
    name: 'Defense Sabotage',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['Arrakis 1'],
    faction: 'all',
    effects: [
      '+ Missile Batteries and Main Base suffer −30% Power',
    ],
  },
  {
    id: 'leave-order',
    name: 'Leave Order',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['Landsraad 1'],
    faction: 'all',
    effects: [
      '+ Enemies lose 100 Solari per unit in the region',
    ],
  },
  {
    id: 'supply-drop',
    name: 'Supply Drop',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['Spacing Guild 1'],
    faction: 'all',
    effects: [
      '+ Ally non-mechanical units gain +80 Supply daily',
    ],
  },
  {
    id: 'scavenger-team',
    name: 'Scavenger Team',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['CHOAM 1'],
    faction: 'all',
    effects: [
      '+ Converts 25% of the max Health of dying Military Units into Solari',
      '+ +20% resources from pillaging a Village',
    ],
  },
  {
    id: 'decoy-thumper',
    name: 'Decoy Thumper',
    cost: { intel: 200, solari: 200 },
    difficulty: 'Medium',
    infoLevelsRequired: ['Arrakis 2'],
    faction: 'all',
    effects: [
      '+ Calls a Sandworm to the region',
      '+ Protects neighboring regions from attacks',
    ],
  },
  {
    id: 'emp-bomb',
    name: 'EMP Bomb',
    cost: { intel: 200, solari: 200 },
    difficulty: 'Medium',
    infoLevelsRequired: ['Spacing Guild 2'],
    faction: 'all',
    effects: [
      '+ Enemy mechanical units suffer −50% attack speed and −20% Speed',
    ],
  },
  {
    id: 'administrative-burden',
    name: 'Administrative Burden',
    cost: { intel: 500, solari: 500 },
    difficulty: 'Hard',
    infoLevelsRequired: ['CHOAM 2'],
    faction: 'all',
    effects: [
      '+ Target faction Military Units are trained at −60% speed',
      '+ Buildings constructed at −60% speed',
    ],
  },
  {
    id: 'defense-breaches',
    name: 'Defense Breaches',
    cost: { intel: 500, solari: 500 },
    difficulty: 'Hard',
    infoLevelsRequired: ['Landsraad 2'],
    faction: 'all',
    effects: [
      '+ +50% damage received by the target Main Base',
      '+ −3 Armor to the target Main Base',
    ],
  },

  // ── Atreides ──────────────────────────────────────────────────────────────
  {
    id: 'support-intelligence',
    name: 'Support Intelligence',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['Spacing Guild 1'],
    faction: 'atreides',
    effects: [
      '+ −5% damage received to Atreides and allies per launched operation',
    ],
  },
  {
    id: 'arrakis-diplomacy',
    name: 'Arrakis Diplomacy',
    cost: { intel: 200, solari: 200 },
    difficulty: 'Medium',
    infoLevelsRequired: ['Arrakis 2'],
    faction: 'atreides',
    effects: [
      '+ Disbands rebellions and raids',
      '+ +200% increased relation gain with Sietches in the region',
    ],
  },
  {
    id: 'cease-fire',
    name: 'Cease Fire',
    cost: { intel: 500, solari: 500 },
    difficulty: 'Hard',
    infoLevelsRequired: ['Landsraad 2'],
    faction: 'atreides',
    effects: [
      '+ Interrupts and prevents battles in target region for 2 days',
    ],
  },

  // ── Harkonnen ─────────────────────────────────────────────────────────────
  {
    id: 'combat-drugs',
    name: 'Combat Drugs',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['CHOAM 1'],
    faction: 'harkonnen',
    effects: [
      '+ Ally units gain +30% damage and +10% Speed',
      '− Ally units lose −10% Health per day',
    ],
  },
  {
    id: 'sleeper-agent',
    name: 'Sleeper Agent',
    cost: { intel: 200, solari: 200 },
    difficulty: 'Medium',
    infoLevelsRequired: ['Arrakis 2'],
    faction: 'harkonnen',
    effects: [
      '+ Any non-temporary non-mechanical unit has a 50% chance to spawn a Sleeper Agent',
    ],
  },
  {
    id: 'toxic-vapors',
    name: 'Toxic Vapors',
    cost: { intel: 500, solari: 500 },
    difficulty: 'Hard',
    infoLevelsRequired: ['Spacing Guild 2'],
    faction: 'harkonnen',
    effects: [
      '+ Enemy non-mechanical units have no Health regeneration',
      '+ Enemy non-mechanical units lose −30% Health per day',
    ],
  },

  // ── Smugglers ─────────────────────────────────────────────────────────────
  {
    id: 'poison-the-reserves',
    name: 'Poison the Reserves',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['Arrakis 1'],
    faction: 'smugglers',
    effects: [
      '+ Enemy units losing supply suffer −20% Speed and −5% Health per day',
    ],
  },
  {
    id: 'extraction-network',
    name: 'Extraction Network',
    cost: { intel: 200, solari: 200 },
    difficulty: 'Medium',
    infoLevelsRequired: ['Spacing Guild 2'],
    faction: 'smugglers',
    effects: [
      '+ Every unit around the region\'s Village is extracted to Sietch Tuek instantly',
    ],
  },
  {
    id: 'communication-jamming',
    name: 'Communication Jamming',
    cost: { intel: 500, solari: 500 },
    difficulty: 'Hard',
    infoLevelsRequired: ['CHOAM 2'],
    faction: 'smugglers',
    effects: [
      '+ Cancels all current and blocks new operations in the region for 3 days',
    ],
  },

  // ── Fremen ────────────────────────────────────────────────────────────────
  {
    id: 'hiding-tracks',
    name: 'Hiding Tracks',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['Arrakis 1'],
    faction: 'fremen',
    effects: [
      '+ Allied units in the region and its neighbors gain Stealth',
      '+ Enemy units suffer −10% Speed',
    ],
  },
  {
    id: 'hidden-thumpers',
    name: 'Hidden Thumpers',
    cost: { intel: 200, solari: 200 },
    difficulty: 'Medium',
    infoLevelsRequired: ['Arrakis 2'],
    faction: 'fremen',
    effects: [
      '+ Riding Sandworms to or from this region does not consume a Thumper',
      '+ Units gain Stealth',
    ],
  },
  {
    id: 'awaken-the-people',
    name: 'Awaken the People',
    cost: { intel: 500, solari: 500 },
    difficulty: 'Hard',
    infoLevelsRequired: ['CHOAM 2'],
    faction: 'fremen',
    effects: [
      '+ Start a rebellion in the Village',
    ],
  },

  // ── Corrino ───────────────────────────────────────────────────────────────
  {
    id: 'consolidation',
    name: 'Consolidation',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['CHOAM 1'],
    faction: 'corrino',
    effects: [
      '+ +2 Armor to ally mechanical units and structures',
    ],
  },
  {
    id: 'interdiction-zone',
    name: 'Interdiction Zone',
    cost: { intel: 200, solari: 200 },
    difficulty: 'Medium',
    infoLevelsRequired: ['Landsraad 2'],
    faction: 'corrino',
    effects: [
      '+ Enemy Carryalls cannot be used',
      '+ Enemy Airfield cannot be used',
    ],
  },
  {
    id: 'orbital-strike',
    name: 'Orbital Strike',
    cost: { intel: 500, solari: 500 },
    difficulty: 'Hard',
    infoLevelsRequired: ['Spacing Guild 2'],
    faction: 'corrino',
    effects: [
      '+ Missiles strike from orbit targeting all ground enemy units, Villages, and Main Bases',
    ],
  },

  // ── Ecaz ──────────────────────────────────────────────────────────────────
  {
    id: 'epic-quest',
    name: 'Epic Quest',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['Arrakis 1'],
    faction: 'ecaz',
    effects: [
      '+ The Military Unit with the most Power in the region deals +100% damage',
    ],
  },
  {
    id: 'live-performance',
    name: 'Live Performance',
    cost: { intel: 200, solari: 200 },
    difficulty: 'Medium',
    infoLevelsRequired: ['Landsraad 2'],
    faction: 'ecaz',
    effects: [
      '+ Gain 5 Influence upon killing enemy units',
      '− Lose 5 Influence upon units dying',
    ],
  },
  {
    id: 'elecca-fog',
    name: 'Elecca Fog',
    cost: { intel: 500, solari: 500 },
    difficulty: 'Hard',
    infoLevelsRequired: ['CHOAM 2'],
    faction: 'ecaz',
    effects: [
      '+ In combat, enemy non-mechanical units cannot be controlled',
    ],
  },

  // ── Vernius ───────────────────────────────────────────────────────────────
  {
    id: 'ambient-connection',
    name: 'Ambient Connection',
    cost: { intel: 100 },
    difficulty: 'Easy',
    infoLevelsRequired: ['Landsraad 1'],
    faction: 'vernius',
    effects: [
      '+ Ally mechanical units are Tethered remotely',
    ],
  },
  {
    id: 'empirical-data',
    name: 'Empirical Data',
    cost: { intel: 200, solari: 200 },
    difficulty: 'Medium',
    infoLevelsRequired: ['CHOAM 2'],
    faction: 'vernius',
    effects: [
      '+ +1 Knowledge per unit of any faction in combat in the region',
    ],
  },
  {
    id: 'hidden-backdoor',
    name: 'Hidden Backdoor',
    cost: { intel: 500, solari: 500 },
    difficulty: 'Hard',
    infoLevelsRequired: ['Spacing Guild 2'],
    faction: 'vernius',
    effects: [
      '+ Enemy mechanical units cannot be controlled and attack their allies',
    ],
  },
];

// ──────────────────────────────────────────────
// Assassination Operations
// ──────────────────────────────────────────────

export const assassinationOperations: Operation[] = [
  {
    id: 'infiltration-cells',
    name: 'Infiltration Cells',
    cost: { intel: 100 },
    difficulty: 'N/A',
    infoLevelsRequired: ['Target Faction 1'],
    faction: 'all',
    effects: [
      '+ Install an Infiltration Cell in the target Village',
      '+ Gain access to 1 more Agent slot in the target faction',
    ],
  },
  {
    id: 'cell-search',
    name: 'Cell Search',
    cost: { solari: 200 },
    difficulty: 'N/A',
    infoLevelsRequired: [],
    faction: 'all',
    effects: [
      '+ Reveal the presence of Infiltration Cells in the region and its neighbors',
    ],
  },
  {
    id: 'assassination',
    name: 'Assassination',
    cost: { intel: 500, solari: 1000 },
    difficulty: 'N/A',
    infoLevelsRequired: ['Target Faction 3', 'Arrakis 1', 'Spacing Guild 1', 'CHOAM 1', 'Landsraad 1'],
    faction: 'all',
    effects: [
      '+ Launch the Assassination Countdown to kill the target faction leader',
      '+ The targeted faction leader will be removed from the game if successful',
    ],
  },
];
