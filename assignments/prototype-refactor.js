/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(attr) {
//     (this.createdAt = attr.createdAt),
//       (this.name = attr.name),
//       (this.dimensions = attr.dimensions);
//   }

//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   };

class GameObject {
  constructor(attr) {
    this.createdAt = attr.createdAt;
    this.name = attr.name;
    this.dimensions = attr.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}
/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

// function CharacterStats(childAttr) {
//   GameObject.call(this, childAttr);
//   this.healthPoints = childAttr.healthPoints;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// };

class CharacterStats extends GameObject {
  constructor(attr) {
    super(attr);
    this.healthPoints = attr.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

// function Humanoid(attr) {
//   CharacterStats.call(this, attr);
//   (this.team = attr.team),
//     (this.weapons = attr.weapons),
//     (this.language = attr.language);
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };

class Humanoid extends CharacterStats {
  constructor(attr) {
    super(attr);
    this.team = attr.team;
    this.weapons = attr.weapons;
    this.language = attr.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// function Hero(attr) {
//   Humanoid.call(this, attr);
//   this.trait = attr.trait;
// }

// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.strike = function(obj) {
//   if (obj.healthPoints === 1) {
//     console.log(obj.destroy());
//     return;
//   } else {
//     obj.healthPoints--;
//   }
//   console.log(
//     `${obj.name} was valiantly struck! ${obj.takeDamage()} Now has ${
//       obj.healthPoints
//     } healthPoints!`
//   );
// };

class Hero extends Humanoid {
  constructor(attr) {
    super(attr);
    this.trait = attr.trait;
  }

  strike(obj) {
    if (obj.healthPoints === 1) {
      console.log(`${obj.name} has lost all health! ${obj.destroy()}`);
      return;
    } else {
      obj.healthPoints--;
    }

    console.log(
      `${obj.name} was valiantly struck! ${obj.takeDamage()} Now has ${
        obj.healthPoints
      } healthPoints!`
    );
  }
}

// function Villain(attr) {
//   Humanoid.call(this, attr);
//   this.trait = attr.trait;
// }

// Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.backstab = function(obj) {
//   if (obj.healthPoints === 1) {
//     console.log(obj.destroy());
//     return;
//   } else {
//     obj.healthPoints -= 2;
//   }
//   console.log(
//     `${obj.name} has been backstabbed! ${obj.takeDamage()} Now has ${
//       obj.healthPoints
//     } healthPoints!`
//   );
// };

class Villain extends Humanoid {
  constructor(attr) {
    super(attr);
    this.trait = attr.trait;
  }

  backstab(obj) {
    if (obj.healthPoints === 1) {
      console.log(`${obj.name} has lost all health! ${obj.destroy()}`);
      return;
    } else {
      obj.healthPoints -= 2;
    }
    console.log(
      `${obj.name} has been backstabbed! ${obj.takeDamage()} Now has ${
        obj.healthPoints
      } healthPoints!`
    );
  }
}

const valiantOne = new Hero(
  {
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 3
    },
    healthPoints: 11,
    name: "Iron Man",
    team: "Avengers",
    weapons: ["Iron Suit", "Repulsor Blasts"],
    language: "English"
  },
  { trait: "Valiant" }
);

const inevitableOne = new Villain(
  {
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 6,
      height: 8
    },
    healthPoints: 5,
    name: "Thanos",
    team: "Chitauri",
    weapons: ["Infinity Gauntlet", "Double-Bladed Sword"],
    language: "Titanish"
  },
  { trait: "Inevitable" }
);

inevitableOne.backstab(valiantOne);
valiantOne.strike(inevitableOne);
inevitableOne.backstab(valiantOne);
valiantOne.strike(inevitableOne);
inevitableOne.backstab(valiantOne);
valiantOne.strike(inevitableOne);
inevitableOne.backstab(valiantOne);
valiantOne.strike(inevitableOne);
inevitableOne.backstab(valiantOne);
valiantOne.strike(inevitableOne);
