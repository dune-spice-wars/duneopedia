import type { FactionData } from './types';

import atreidesBanner    from '../assets/banners/atreidesBanner.jpg';
import atreidesLogo      from '../assets/banners/atreidesBanner.png';
import atreidesDevTree   from '../assets/devtrees/atreidesDevTree.png';

import harkonnenBanner   from '../assets/banners/harkonnenBanner.jpg';
import harkonnenLogo     from '../assets/banners/harkonnenBanner.png';
import harkonnenDevTree  from '../assets/devtrees/harkonnenDevTree.png';

import smugglersBanner   from '../assets/banners/smugglersBanner.jpg';
import smugglersLogo     from '../assets/banners/smugglersBanner.png';
import smugglersDevTree  from '../assets/devtrees/smugglersDevTree.png';

import fremenBanner      from '../assets/banners/fremenBanner.jpg';
import fremenLogo        from '../assets/banners/fremenBanner.png';
import fremenDevTree     from '../assets/devtrees/fremenDevTree.png';

import corrinoBanner     from '../assets/banners/corrinoEmperorBanner.png';
import corrinoLogo       from '../assets/banners/corrinoLogoBanner.png';
import corrinoDevTree    from '../assets/devtrees/corrinoDevTree.png';

import ecazBanner        from '../assets/banners/ecazBanner.jpg';
import ecazLogo          from '../assets/banners/ecazBanner.png';
import ecazDevTree       from '../assets/devtrees/ecazDevTree.png';

import verniusBanner     from '../assets/banners/verniusBanner.jpg';
import verniusLogo       from '../assets/banners/verniusBanner.png';
import verniusDevTree    from '../assets/devtrees/verniusDevTree.png';

export const factions: FactionData[] = [

  // ──────────────────────────────────────────────
  // Atreides
  // ──────────────────────────────────────────────

  {
    id: 'atreides',
    name: 'House Atreides',
    blockquote: "The stellar reputation of House Atreides owes a lot to its leader's commanding style: firm yet honorable and fair. By imperial decree, the Atreides have just inherited the stewardship of Arrakis and have a lot of work to do to take over from the Harkonnens.",
    banner: atreidesBanner,
    logo: atreidesLogo,
    devTreeImage: atreidesDevTree,
    passives: [
      '+ Can use Peaceful Annexation on non-devastated neutral Villages.',
      '+ Atreides Villages cost +10% Authority to Annex and are 10% longer to Liberate.',
      '+ All Solari upkeeps are reduced by 10%.',
      '− Cannot pillage neutral Villages.',
    ],
    hegemony5k: [
      '+ While under the effect of a positive Resolution, gain +10% Solari',
      '+ While under the effects of a negative Resolution, gain +10% unit Power',
    ],
    hegemony10k: [
      '+ You can ignore Charters prerequisites except for the necessary Landsraad Standing',
      '+ Permanently gain +2% resource production upon being elected for a positive Resolution (x20 max)',
    ],
    uniqueAbility: {
      name: 'Peaceful Annexation',
      description: 'Allows House Atreides to gain control of Villages peacefully at the cost of Authority & Influence.',
      effects: [
        '+ Peaceful Annexation allows House Atreides to gain control of Villages for the standard Authority cost & 50 Influence.',
        '+ This process takes 5 days, can be used globally and cannot be used on devastated or occupied villages',
        '+ Peaceful Annexation retains any Militia that are present in the Village',
      ],
    },
  },

  // ──────────────────────────────────────────────
  // Harkonnen
  // ──────────────────────────────────────────────

  {
    id: 'harkonnen',
    name: 'House Harkonnen',
    blockquote: "House Harkonnen shares its chilling reputation with its leader, Baron Vladimir Harkonnen. They have been called despotic, merciless, scheming and devious. And those are only their finer qualities.",
    banner: harkonnenBanner,
    logo: harkonnenLogo,
    devTreeImage: harkonnenDevTree,
    passives: [
      '+ Can use the Oppression Ability on Harkonnen Villages',
      '+ Can sacrifice an Agent to reduce a Mission\'s cost and preparation time',
      '+ Villages gain +5% resource production per active Militia',
      '− Villages suffer -10% resource production',
    ],
    hegemony5k: [
      '+ Gain 50 Intel when you pillage a Village',
      '+ After killing 20 non-mechanical units, receive a free Brainwashed Agent',
    ],
    hegemony10k: [
      '+ Sacrificed Agents give a chance to not consume an operation on use',
      '+ Grants +1 additional Agent slot in each non-faction field',
    ],
    uniqueAbility: {
      name: 'Oppression',
      description: 'Can be used on any Village controlled by House Harkonnen at the cost of 20 Manpower.',
      effects: [
        '+ Oppression can be used on any Village controlled by House Harkonnen at the cost of 20 Manpower',
        '+ Oppressed Villages gain +100% resource production for 2 days',
        '− When Oppression ends, the Oppressed Village has -20% resource production and a 3% chance to rebel each day',
        '− This debuff lasts for 10 days and stacks every time a Village is repeatedly Oppressed',
      ],
    },
  },

  // ──────────────────────────────────────────────
  // Smugglers
  // ──────────────────────────────────────────────

  {
    id: 'smugglers',
    name: 'Smugglers',
    blockquote: "There's a fine line between smugglers and full-fledged bandits, and Esmar Tuek is adept at walking that line. Smugglers can provide anything to anyone, provided they put the price… and do not look at the specifics too closely.",
    banner: smugglersBanner,
    logo: smugglersLogo,
    devTreeImage: smugglersDevTree,
    passives: [
      '+ Can install Underworld Headquarters in opponent\'s Villages',
      '+ Gain +30% resources from pillaging a Village',
      '+ Authority cost to Annex a Village is not increased by distance from your Main Base',
      '− Authority cost to Annex a Village is increased 100% more by owner Villages',
    ],
    hegemony5k: [
      '+ Can place a Bounty on Landsraad Resolutions',
      '+ Join the Landsraad Council with 50 Votes',
    ],
    hegemony10k: [
      '+ Smuggler\'s Villages under siege do not resupply the occupant',
      '+ Automatically installs a Major Underworld Headquarters in every enemy Main Base',
    ],
  },

  // ──────────────────────────────────────────────
  // Fremen
  // ──────────────────────────────────────────────

  {
    id: 'fremen',
    name: 'Fremen',
    blockquote: "Fremen are the only people native to Arrakis and will do anything to protect their way against the offworlders. While their leader, Liet-Kynes, doesn't originally come from Dune, she is every bit as determined and attached to the planet as the next Fremen.",
    banner: fremenBanner,
    logo: fremenLogo,
    devTreeImage: fremenDevTree,
    passives: [
      '+ Spice Fields in neutral and controlled regions are harvested by Harvesting Teams, a mobile unit',
      '+ Can form alliances with Sietches outside of your territory',
      '+ May use Thumpers for Wormriding',
      '− Villages have -1 maximum Building slot',
    ],
    hegemony5k: [
      '+ Surrounding a Deep Desert region grants control over it',
      '+ Thumpers are generated passively and attract larger Sandworms that can travel further',
    ],
    hegemony10k: [
      '+ Grants knowledge of enemy alliances with Sietches',
      '+ Every allied Sietch automatically has a Settlement on it, allowing you to build unique Sietch Buildings',
    ],
  },

  // ──────────────────────────────────────────────
  // Corrino
  // ──────────────────────────────────────────────

  {
    id: 'corrino',
    name: 'House Corrino',
    blockquote: "Imperial House Corrino has ruled the galaxy for ten millenia, and Shaddam IV intends to keep it that way. The situation on Arrakis calls for the direct intervention of the Padishah Emperor, who will use all His wit and the might of His administration to turn the war to His benefit.",
    banner: corrinoBanner,
    logo: corrinoLogo,
    devTreeImage: corrinoDevTree,
    passives: [
      '+ Can use Imperial Edict on Landsraad Resolutions to switch their scope',
      '+ Villages have +1 Building slots',
      '+ Units from any faction that recently betrayed a Truce receive +10% damage from Corrino',
      '− +100% Authority cost to annex Villages due to the distance from Main Base',
    ],
    hegemony5k: [
      '+ Can use Main Base Deployment on Corrino and neutral Villages once',
      '+ Can offer Imperial Mandate, which gives Sardaukar to another faction, as part of a trade',
    ],
    hegemony10k: [
      '+ Military Units gain +5% Power per faction with less CHOAM Shares',
      '+ Gain +1 Guild Favour production per faction with less CHOAM Shares',
    ],
  },

  // ──────────────────────────────────────────────
  // Ecaz
  // ──────────────────────────────────────────────

  {
    id: 'ecaz',
    name: 'House Ecaz',
    blockquote: "House Ecaz is known for its touristic resorts, its recreational drugs, and its patronage for the Art. But behind this enticing exterior, the refined house and its no less refined ruler, Archduchess Armanda, are ruthless and efficient defenders of their interests.",
    banner: ecazBanner,
    logo: ecazLogo,
    devTreeImage: ecazDevTree,
    passives: [
      '+ Surrounded neutral Villages become Sanctuaries that cannot be attacked by other factions',
      '+ Gain 1 Authority production per Sanctuary',
      '+ Villages adjacent to a Sanctuary gain +1 instance of the Village\'s traits',
      '− Cannot betray a faction in Truce',
    ],
    hegemony5k: [
      '+ A single Ecazi Village can be turned into a Garden Resort',
      '+ A single Ecazi non-mechanical unit can be named Champion, who raises Hegemony by killing other factions\' units',
    ],
    hegemony10k: [
      '+ Turn 0.2% of your Hegemony into Solari production',
      '+ The first 50 votes placed on each Resolution are free',
    ],
  },


  // ──────────────────────────────────────────────
  // Vernius
  // ──────────────────────────────────────────────

  {
    id: 'vernius',
    name: 'House Vernius',
    blockquote: "House Vernius rules over Ix, the subterranean world of marvels where the Imperium's most advanced technology is forged. Driven from their homeworld by Bene Tleilax usurpers and their Sardaukar allies, Earl Rhombur Vernius has never stopped fighting to reclaim Ix — and with it, the unrivalled manufacturing power that made his house great.",
    banner: verniusBanner,
    logo: verniusLogo,
    devTreeImage: verniusDevTree,
    passives: [
      '+ Machine units do not consume Manpower; they consume Machine Scraps instead',
      '+ Machine units are immune to sandstorm movement penalties and do not require Water',
      '+ Machine units do not attract Sandworms',
      '− Cannot recruit Machine units without an active Ixian Foundry in the region',
    ],
    hegemony5k: [
      '+ Machine units gain +10% Power',
      '+ Ixian Foundries produce +5 Machine Scraps per day',
    ],
    hegemony10k: [
      '+ Machine units gain +2 Armor and recover 5% Health per day while in controlled regions',
      '+ Unlocks the Ixian Constructor frigate upgrade: Mobile Foundry',
    ],
  },

];
