
const names = [
  "NotATRex",
  "Drake",
  "Kyouryuu",
  "Zahrax",
  "Shrapnel",
  "ShadowFang",
  "Sabrina",
  "Frodo",
  "Flubber",
  "Murturtle",
  "Waddles",
  "Waldorf",
  "Yarly",
  "Indira",
  "Elania",
  "Quilstream",
  "Rocklobster",
  "Periscope",
  "Seamore",
  "Skirax",
  "Scuttlebutt",
  "Game Master",
  "Too Easy",
  "Saraswati",
  "Onyx",
  "Snoots",
  "Mr. Wiggle",
  "Lola",
  "Blitz",
  "Mglrmglmglmgl",
  "Bob",
  "Kevin",
  "Stuart",
  "Bigfoot",
  "White Hydra",
  "Spicy Moth"
//   "Oliver, The All Knowning",
//   "Greg, The TA",
//   "Lawrence, The Seconds",
//   "Anton, The Coffee",
//   "John, The Slacker"
];

const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];

const abilities = [
  "None",
  "Fly",
  "Dig",
  "Sleep",
  "AFK",
  "Confused",
  "Fast",
  "Slow",
  "Fire bolt",
  "Windtail",
  "Chaser",
  "Kick",
  "Punch",
  "Run Away",
  "Swim",
  "Tackle",
  "Double Strike",
  "Self Destruct",
  "Rampage",
  "Ice Blast",
  "Fireball",
  "Meteor",
  "Happy",
  "Play Dead",
  "Snap",
  "Recover",
  "Eat"
];

const min_attack = 50;
const max_attack = 100;

const min_defense = 1;
const max_defense = 50;

const min_hp = 100;
const max_hp = 1000;

const tokens = [];
for (let i = 0; i < 20; i++) {
  tokens.push({
    url: "test",
    name: names[Math.floor(Math.random() * names.length)],
    attack: Math.floor(Math.random() * 50 + 50),
    defense: Math.floor(Math.random() * 49 + 1),
    hp: Math.floor(Math.random() * 900 + 100),
    rarity: rarities[Math.floor(Math.random() * rarities.length)],
    ability: abilities[Math.floor(Math.random() * abilities.length)]
  });
}

module.exports = tokens;

//seed --db-name mydb ./data-import