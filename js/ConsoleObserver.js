class ConsoleObserver {
  constructor() {

  }
  update(module) {
    console.log('The number is ' + module.number + ' and the color is ' + module.color.toUpperCase());
  }
}