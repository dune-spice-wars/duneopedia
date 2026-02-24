import type { ImageMetadata } from 'astro';

// ──────────────────────────────────────────────
// Core resource / cost types
// ──────────────────────────────────────────────

export interface Cost {
  solari?: number;
  manpower?: number;
  spice?: number;
  water?: number;
  commandPoints?: number;
  plascrete?: number;
  guildFavour?: number;
  fuelCells?: number;
  machineScraps?: number; // Fremen "Spaceship Parts"
  influence?: number;
  intel?: number;
  authority?: number;
  landsraadStanding?: number;
}

// ──────────────────────────────────────────────
// Faction identifiers
// ──────────────────────────────────────────────

export type FactionId =
  | 'atreides'
  | 'harkonnen'
  | 'smugglers'
  | 'fremen'
  | 'corrino'
  | 'ecaz'
  | 'vernius';

// ──────────────────────────────────────────────
// Units
// ──────────────────────────────────────────────

export type UnitCategory = FactionId | 'militia' | 'raider' | 'renegade' | 'misc';

export interface UnitStats {
  health: number | null;
  power: number | null;
  armor: number | null;
  supply: number | null;
}

export interface Unit {
  id: string;
  name: string;
  image?: string;
  category: UnitCategory;
  tier: 1 | 2 | 3 | 4 | 'air' | 'hero' | 'misc';
  stats: UnitStats;
  recruitmentCost: Cost;
  recruitmentTimeDays?: number;
  upkeep: Cost;
  developmentRequired?: string; // development id
  buildingRequired?: string;    // building id
  prerequisite?: string;        // free-form e.g. "10k Hegemony", "Captain Aramsham as councilor"
  range: number | 'Melee' | 'N/A';
  abilities: string[];
  flavorText: string;
}

// ──────────────────────────────────────────────
// Buildings
// ──────────────────────────────────────────────

export type BuildingCategory =
  | 'village-economy'
  | 'village-military'
  | 'village-statecraft'
  | 'mainbase-economy'
  | 'mainbase-military'
  | 'mainbase-statecraft'
  | 'underworld-economy'
  | 'underworld-military'
  | 'underworld-statecraft'
  | 'underworld-mainbase'
  | 'sietch-economy'
  | 'sietch-military'
  | 'sietch-statecraft';

export interface Building {
  id: string;
  name: string;
  image?: string;
  category: BuildingCategory;
  cost: Cost;
  upkeep: Cost;
  constructionTimeDays: number;
  developmentRequired?: string; // development id
  prerequisite?: string;        // e.g. "5k Hegemony"
  factions: FactionId[] | 'all';
  effects: string[];
  notes?: string;
  flavorText: string;
}

// ──────────────────────────────────────────────
// Developments
// ──────────────────────────────────────────────

export type DevelopmentTree = 'statecraft' | 'expansion' | 'economy' | 'military';

export interface Development {
  id: string;
  name: string;
  image?: string;
  tree: DevelopmentTree;
  /** Omitted for shared (all-faction) developments */
  faction?: FactionId;
  /** Row in the visual tree (1 = root tier). Only used on shared developments. */
  tier?: number;
  /** ID of the prerequisite development. Root node has none. */
  prereqId?: string;
  /** For faction-unique devs: the ID of the shared dev this replaces in the faction tree. */
  replacesId?: string;
  effects: string[];
  flavorText: string;
}

// ──────────────────────────────────────────────
// Councilors
// ──────────────────────────────────────────────

export type Difficulty = 'Easy' | 'Hard';

export interface Councilor {
  id: string;
  name: string;
  image?: ImageMetadata;
  faction: FactionId;
  difficulty: Difficulty;
  abilities: string[];
  flavorText: string;
}

// ──────────────────────────────────────────────
// Factions
// ──────────────────────────────────────────────

export interface FactionUniqueAbility {
  name: string;
  description: string;
  effects: string[];
}

export interface FactionData {
  id: FactionId;
  name: string;
  blockquote: string;
  banner: ImageMetadata;
  logo?: ImageMetadata;
  devTreeImage: ImageMetadata;
  passives: string[];
  hegemony5k: string[];
  hegemony10k: string[];
  uniqueAbility?: FactionUniqueAbility;
}

// ──────────────────────────────────────────────
// Arrakis – Villages, Resources, Special Regions
// ──────────────────────────────────────────────

export interface VillageTrait {
  id: string;
  name: string;
  effects: string[];
}

export interface LandsraadTier {
  range: string;
  effects: string[];
}

export interface Resource {
  id: string;
  name: string;
  info: string[];
  deficitEffects?: string[];
  landsraadTiers?: LandsraadTier[];
}

export interface SpecialRegion {
  id: string;
  name: string;
  note?: string;
  effects: string[];
}

export interface SietchTrait {
  id: string;
  name: string;
  category: 'economic' | 'military' | 'statecraft';
  effects: string[];
}

// ──────────────────────────────────────────────
// Espionage – Operations
// ──────────────────────────────────────────────

export type OperationDifficulty = 'Easy' | 'Medium' | 'Hard' | 'Epic' | 'Special' | 'N/A';

export interface Operation {
  id: string;
  name: string;
  cost: Cost;
  difficulty: OperationDifficulty;
  /** Each entry is one requirement string, e.g. 'Arrakis 1'. Empty means none. */
  infoLevelsRequired: string[];
  faction: FactionId | 'all';
  effects: string[];
}

// ──────────────────────────────────────────────
// Community patch delta types
// ──────────────────────────────────────────────

export type UnitPatch = Partial<Omit<Unit, 'id' | 'category'>>;
export type BuildingPatch = Partial<Omit<Building, 'id' | 'category'>>;
export type DevelopmentPatch = Partial<Omit<Development, 'id' | 'faction'>>;

export interface CommunityPatch {
  version: string;
  description: string;
  units?: Record<string, UnitPatch>;
  buildings?: Record<string, BuildingPatch>;
  developments?: Record<string, DevelopmentPatch>;
}
