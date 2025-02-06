/**
 * 多态思想：
 * 发出一个动作，谁去做以及怎样去做分离开
 */

abstract class Animal {
  abstract makeSound(): void;
}

class Chicken extends Animal {
  makeSound() {
    console.log('咕咕咕');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('汪汪汪');
  }
}

function makeSound(animal: Animal) {
  animal.makeSound()
}

makeSound(new Chicken())
makeSound(new Dog())

export {}