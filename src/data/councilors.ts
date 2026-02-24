import type { Councilor } from './types';
import type { ImageMetadata } from 'astro';

const portraits = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/councilors/*.png',
  { eager: true }
);

function portrait(filename: string): ImageMetadata {
  return portraits[`../assets/councilors/${filename}`].default;
}

export const councilors: Councilor[] = [

  // ──────────────────────────────────────────────
  // Atreides
  // ──────────────────────────────────────────────

  {
    id: 'ladyJessica',
    name: 'Lady Jessica',
    image: portrait('jessica.png'),
    faction: 'atreides',
    difficulty: 'Hard',
    abilities: [
      'Can impose any Treaty upon other factions at the cost of 50 Influence',
      'Treaties have no Authority upkeep',
      'Betraying a Treaty costs -50 Landsraad Standing',
    ],
    flavorText: 'The Lady Jessica is Duke Leto\'s concubine. Although she is a Bene Gesserit, her loyalty always goes to house Atreides before the Sisterhood.',
  },

  {
    id: 'thufirHawat',
    name: 'Thufir Hawat',
    image: portrait('thufir.png'),
    faction: 'atreides',
    difficulty: 'Easy',
    abilities: [
      'Your Agents have 1 additional trait',
      'Can speed up mission progress and construction of Village Buildings at the cost of Solari',
    ],
    flavorText: "Thufir is an elderly Mentat—a human computer—, and also House Atreides' Master of Assassins. Renowned in the Landsraad for being both outstandingly cunning and honorable, Thufir is also a master in the art of war and political instruction.",
  },

  {
    id: 'wellingtonYueh',
    name: 'Dr. Wellington Yueh',
    image: portrait('yueh.png'),
    faction: 'atreides',
    difficulty: 'Easy',
    abilities: [
      '+2 Knowledge production',
      'Non-mechanical Military Units gain +15% Health and +30% Health Regeneration',
    ],
    flavorText: "Dr. Yueh is a Suk doctor in service of House Atreides, trained to the highest medical standards and bound by an Imperial Conditioning that should make betrayal unthinkable. Despite his vow, his love for his captured wife Wanna would lead him down a tragic path.",
  },

  {
    id: 'youngPaul',
    name: 'Young Paul Atreides',
    image: portrait('paul.png'),
    faction: 'atreides',
    difficulty: 'Easy',
    abilities: [
      '+2 Authority production per allied Sietch',
      'Revealing a Sietch improves initial relations with its Naib to 30',
    ],
    flavorText: "Paul Atreides is the son of Duke Leto and Lady Jessica. Raised as both a Bene Gesserit and a Mentat, he is a gifted fighter and thinker, believed by some Fremen to be the Lisan al-Gaib — the Voice from the Outer World prophesied to lead them to freedom.",
  },

  // ──────────────────────────────────────────────
  // Harkonnen
  // ──────────────────────────────────────────────

  {
    id: 'feydRautha',
    name: 'Feyd-Rautha Harkonnen',
    image: portrait('feyd.png'),
    faction: 'harkonnen',
    difficulty: 'Hard',
    abilities: [
      'Can use Corruption on Landsraad Resolutions, causing a loss of Landsraad Standing for the elected enemy faction',
      'While at least one Village is under Oppression: Gain +20% Influence production & +100% Agent recruitment speed',
    ],
    flavorText: "Glossu's younger brother and the Baron's favored nephew, Feyd-Rautha has all it takes to uphold his family's sadistic culture. An unmatched duelist and charismatic leader, he is the chosen na-Baron of House Harkonnen, destined to take over his uncle's legacy.",
  },

  {
    id: 'piterDeVries',
    name: 'Piter De Vries',
    image: portrait('piter.png'),
    faction: 'harkonnen',
    difficulty: 'Hard',
    abilities: [
      'Sacrificed Agents permanently reduce all costs by 15%',
      'Gain 60 Solari each time an Agent is sacrificed',
    ],
    flavorText: 'Piter is a twisted Mentat; that is a human computer, but bred on planet Tleilax with much less ethical constraints in mind that their regular counterparts.',
  },

  {
    id: 'cronVatia',
    name: 'Cron Vatia',
    image: portrait('cronvatia.png'),
    faction: 'harkonnen',
    difficulty: 'Easy',
    abilities: [
      'Oppressed Villages construct Buildings 200% faster',
      'Oppressing a Village generates Manpower',
      'Gain 50 Solari upon killing a Rebel',
    ],
    flavorText: "Cron Vatia is the administrator in charge of House Harkonnen's enslaved workforce on Arrakis. Efficient and utterly ruthless, he keeps production high through relentless pressure and swift punishment of any who fall short.",
  },

  {
    id: 'ummanKudu',
    name: 'Umman Kudu',
    image: portrait('ummankudu.png'),
    faction: 'harkonnen',
    difficulty: 'Easy',
    abilities: [
      '+2 Manpower production',
      'Military Units are recruited 30% faster',
      'Military Units gain +1 Armor while in a region where an active Military Operation is underway',
    ],
    flavorText: "Umman Kudu is the ruthless Captain of Harkonnen forces on Arrakis. Known for his iron discipline and heavy-handed methods, he ensures the Baron's dominance through overwhelming military presence.",
  },

  // ──────────────────────────────────────────────
  // Smugglers
  // ──────────────────────────────────────────────

  {
    id: 'stabanTuek',
    name: 'Staban Tuek',
    image: portrait('staban.png'),
    faction: 'smugglers',
    difficulty: 'Easy',
    abilities: [
      'Underworld Headquarters have +1 Extension slot',
    ],
    flavorText: "Staban is Esmar Tuek's son and, just like his father, a renowned smuggler of various goods on Arrakis, most notably Spice Melange. Like many of his people, he thrives in a harsh environment while routinely defying the highest authorities. He is a proud man who doesn't abide by anybody's rules but his own.",
  },

  {
    id: 'lingarBewt',
    name: 'Lingar Bewt',
    image: portrait('lingar.png'),
    faction: 'smugglers',
    difficulty: 'Easy',
    abilities: [
      '+12 Water production',
      'Unlocks Water Network Extensions in Underworld Headquarters',
    ],
    flavorText: "Lingar's business revolves around a single commodity, but one which is so rare on Arrakis, only Spice tops it in importance: water. While his extraction operations are not technically illegal, they are by nature risky enough that Lingar had to forge an alliance with smugglers, and most notably Esmar Tuek.",
  },

  {
    id: 'lashonHara',
    name: 'Lashon Hara',
    image: portrait('lashonhara.png'),
    faction: 'smugglers',
    difficulty: 'Hard',
    abilities: [
      'Trading with factions generates Information on them; Information decays 50% slower',
      'Each Information level on a faction grants +15 Solari and +1 Influence production',
    ],
    flavorText: "Lashon Hara is a shadowy information broker who deals in secrets as readily as others deal in spice. His network of contacts across Arrakis allows him to turn every trade into an intelligence opportunity, making knowledge itself the most profitable commodity.",
  },

  {
    id: 'stakkanov',
    name: 'Stakkanov',
    image: portrait('stakkanov.png'),
    faction: 'smugglers',
    difficulty: 'Hard',
    abilities: [
      'Villages not adjacent to your territories have longer Siege timers and +20% resource production',
      'Refund 50% of the Authority cost when losing a Village',
    ],
    flavorText: "Stakkanov is a calculating logistics expert who has turned the chaos of smuggling into a science. He believes every setback is a business opportunity and ensures the operation profits from conflict regardless of outcome.",
  },

  // ──────────────────────────────────────────────
  // Fremen
  // ──────────────────────────────────────────────

  {
    id: 'shimoom',
    name: 'Shimoom',
    image: portrait('shimoom.png'),
    faction: 'fremen',
    difficulty: 'Hard',
    abilities: [
      'Villages producing 12 or more Water reduce their upkeep by 4% and produce +4 Plascrete',
      'Empty Village Extension slots generate Water',
    ],
    flavorText: "Shimoom is a Fremen watermaster deeply devoted to the dream of transforming Arrakis through careful management of its most precious resource. His expertise in water conservation makes even the driest village a productive contributor to the Fremen cause.",
  },

  {
    id: 'jamis',
    name: 'Jamis',
    image: portrait('jamis.png'),
    faction: 'fremen',
    difficulty: 'Hard',
    abilities: [
      'Liberating a Village from enemy control grants +70 Authority',
      'Military Units deal +10% damage to units outside their home territory',
      'Can trade Authority for Manpower',
    ],
    flavorText: "Jamis is a fierce and aggressive Fremen warrior, renowned for his skill in single combat and his unyielding hatred of all who would dominate Arrakis. His prowess in battle inspires his fellow fighters to push deeper into enemy territory.",
  },

  {
    id: 'motherRamallo',
    name: 'Mother Ramallo',
    image: portrait('mother.png'),
    faction: 'fremen',
    difficulty: 'Easy',
    abilities: [
      'Can use Incite Rebellion on Landsraad Resolutions, causing rebellions in other factions if the targeted Resolution passes',
      'Each active Harvesting Team generates +3 Intel and +0.5 Authority per day',
    ],
    flavorText: 'Ramallo is an elderly Sayyadina, a rogue Bene Gesserit Reverend Mother who successfully changed the Water of Life. She therefore possesses a vast knowledge inherited from her foremothers, and her immense wisdom makes her a reverend mother figure among the Fremen.',
  },

  {
    id: 'stilgarBenFifrawi',
    name: 'Stilgar Ben Fifrawi',
    image: portrait('stilgar.png'),
    faction: 'fremen',
    difficulty: 'Easy',
    abilities: [
      'All Sietches are revealed at the start of the game',
      '+1 Authority production',
    ],
    flavorText: 'Stilgar is the Naib—the leader—of Sietch Tabr, one of the most prominent Fremen communities on Arrakis. A wise and honorable leader, he has a soft spot for Chani Kynes, whom he regards as his niece.',
  },

  // ──────────────────────────────────────────────
  // Corrino
  // ──────────────────────────────────────────────

  {
    id: 'zumGaron',
    name: 'Zum Garon',
    image: portrait('zumgaron.png'),
    faction: 'corrino',
    difficulty: 'Hard',
    abilities: [
      'Military Units gain +15% Power for each faction currently in Truce with House Corrino',
      'Can propose Imperial Mandate Landsraad Resolutions for free',
    ],
    flavorText: "Zum Garon is a decorated Imperial military commander who has spent decades enforcing the Emperor's will across the Imperium. He views diplomacy as another form of warfare, using every truce as leverage to sharpen Corrino's military edge.",
  },

  {
    id: 'gaiusHelenMohiam',
    name: 'Gaius Helen Mohiam',
    image: portrait('mohiam.png'),
    faction: 'corrino',
    difficulty: 'Easy',
    abilities: [
      'Every Corrino vote placed on a Landsraad Resolution counts as double',
      'Charter Support from House Corrino counts as double',
    ],
    flavorText: "Gaius Helen Mohiam is the Reverend Mother and Truthsayer to Emperor Shaddam IV, a formidable Bene Gesserit whose influence over the Landsraad is unmatched. Her ability to detect truth and subtly bend minds makes her indispensable to the Emperor's political dominance.",
  },

  {
    id: 'princessIrulan',
    name: 'Princess Irulan',
    image: portrait('irulan.png'),
    faction: 'corrino',
    difficulty: 'Easy',
    abilities: [
      'Non-major Village Buildings can be constructed one additional time in any Village',
    ],
    flavorText: "Irulan is the eldest daughter of Shaddam IV. Her lack of brother makes her the prime candidate to become Empress at the death of her father. She received a Bene Gesserit education from her mother, but still keeps a strong ambition that often puts her at odds with the Emperor.",
  },

  {
    id: 'hasimirFenring',
    name: 'Hasimir Fenring',
    image: portrait('hasimir.png'),
    faction: 'corrino',
    difficulty: 'Hard',
    abilities: [
      'Can investigate Discoveries everywhere, even without Agents',
      'Each time a Discovery is resolved, Agent recruitment is accelerated by 1 day',
    ],
    flavorText: 'Hasimir Fenring was once part of the Bene Gesserit breeding program, candidate for the role of Kwisatz Haderach. He was abandoned by the Bene Gesserit because of a genetic defect. Serving as a mentat and assassin for Shaddam IV, he is also His closest friend.',
  },

  // ──────────────────────────────────────────────
  // Ecaz
  // ──────────────────────────────────────────────

  {
    id: 'sanyaEcaz',
    name: 'Sanya Ecaz',
    image: portrait('sanya.png'),
    faction: 'ecaz',
    difficulty: 'Hard',
    abilities: [
      'For each Sanctuary on the map, gain +15 Solari production and -40% Masterpiece construction costs',
    ],
    flavorText: 'Sanya Ecaz is the eldest daughter of Armanda, and current heir to the Ecaz dynasty. Her charming personality and eclectic tastes allow her to thrive among the artistic community of the house.',
  },

  {
    id: 'rivvyDinari',
    name: 'Rivvy Dinari',
    image: portrait('rivvy.png'),
    faction: 'ecaz',
    difficulty: 'Easy',
    abilities: [
      'Military Units at maximum Experience level have no upkeep cost',
      'Military Units start with 1 additional Experience level',
    ],
    flavorText: "Rivvy Dinari is a master swordsman and veteran instructor who carries on the traditions of the great Ginaz swordmaster school. His relentless emphasis on excellence ensures that only the finest fighters serve under House Ecaz's banner.",
  },

  {
    id: 'ibboVipp',
    name: 'Ibbo Vipp',
    image: portrait('ibbovipp.png'),
    faction: 'ecaz',
    difficulty: 'Easy',
    abilities: [
      'Can use Landsraad Immunity on a Resolution to make House Ecaz ineligible as a target',
      'Gain 2 Landsraad Standing upon completing a Masterpiece',
    ],
    flavorText: "Ibbo Vipp is a sharp-tongued Ecazi diplomat whose talent for navigating the Landsraad's byzantine politics has saved House Ecaz from countless unfavorable resolutions. He believes the speaker's lectern is more powerful than any blade.",
  },

  {
    id: 'mesaEcaz',
    name: 'Mesa Ecaz',
    image: portrait('mesa.png'),
    faction: 'ecaz',
    difficulty: 'Hard',
    abilities: [
      'Abandoning a Village refunds 100% of the Authority capture cost',
      'Masterpieces in neutral Villages reduce their Siege duration by 15%',
      'Masterpieces are built +100% faster',
    ],
    flavorText: 'Mesa Ecaz is the youngest daughter of Armanda. She is driven and smart, always trying to encourage the use of house resources toward supporting and benefiting the people.',
  },


  // ──────────────────────────────────────────────
  // House Vernius
  // ──────────────────────────────────────────────

  {
    id: 'boligAvati',
    name: 'Bolig Avati',
    image: portrait('boligavati.png'),
    faction: 'vernius',
    difficulty: 'Hard',
    abilities: [
      'Multiple S-Vault buildings can be constructed simultaneously',
      'Removing an S-Vault building reimburses its full construction cost',
      'Gain +1 Knowledge when a new District is established',
    ],
    flavorText: "Bolig Avati is House Vernius's chief architect and modular design specialist. His philosophy that technology should be adaptive and reconfigurable has transformed Ixian engineering, allowing their facilities to be reorganized to meet any strategic need.",
  },

  {
    id: 'bronsoVernius',
    name: 'Bronso Vernius',
    image: portrait('bronso.png'),
    faction: 'vernius',
    difficulty: 'Easy',
    abilities: [
      'Villages with only one neighboring territory cost 20% less Authority to capture',
      'The furthest active Neural Node automatically generates an Airfield',
    ],
    flavorText: "Bronso Vernius is Rhombur's brilliant son, caught between Ixian technical tradition and the broader currents of the Imperium. His forward-thinking approach to expansion focuses on finding weak points in an adversary's perimeter and exploiting them before they can be reinforced.",
  },

  {
    id: 'cammarPilru',
    name: 'Cammar Pilru',
    image: portrait('cammar.png'),
    faction: 'vernius',
    difficulty: 'Easy',
    abilities: [
      'Maximum Influence increases by 5 for each Knowledge level',
      'Gain 200 Influence when entering Conflict with a faction; gain 30 Landsraad Standing when a faction enters Conflict with you',
    ],
    flavorText: "Cammar Pilru served as the Ixian ambassador to the Spacing Guild for decades. His long-standing relationships with Guild navigators ensure that Ixian interests are always represented in matters of interstellar commerce.",
  },

  {
    id: 'tessiaVernius',
    name: 'Tessia Vernius',
    image: portrait('tessia.png'),
    faction: 'vernius',
    difficulty: 'Hard',
    abilities: [
      'Spy Missions require 1 fewer piece of Information to initiate',
      'Idle Knowledge generates 50% of its value as Intel and Solari per day',
    ],
    flavorText: "Tessia is Rhombur's devoted Bene Gesserit consort. Her political acuity complements Rhombur's technical genius, making the couple a formidable presence at both the Landsraad table and the battlefield.",
  },

];
