/**
 * 多态思想：
 * 发出一个动作，谁去做以及怎样去做分离开
 */

class Chicken {
  sound() {
    console.log('咕咕咕');
  }
}

class Dog {
  sound() {
    console.log('汪汪汪');
  }
}

function makeSound(animal: Chicken | Dog) {
  if (animal instanceof Chicken) {
    animal.sound()
  } else if (animal instanceof Dog) {
    animal.sound()
  }
}

makeSound(new Chicken())
makeSound(new Dog())

export {}