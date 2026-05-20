import { EventEmitter } from "events";
const emitter = new EventEmitter();
// register listener for the "greet" event
// the on listens for the event and executes the callback function when the event is emitted
// the real world use case of this is when you want to listen for a specific event and execute some code when that event occurs, for example, when a user clicks a button, you can listen for the click event and execute some code when the button is clicked.
emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});
emitter.on("greet", (name) => {
    console.log(`Hello, ${name}! Welcome to the world of Node!`);
});
emitter.on("greet", (name) => {
    console.log(`Hello, ${name}! This is another listener for the greet event.`);
});
// emit the "greet" event with a name
emitter.emit("greet", "Arham");
//# sourceMappingURL=eventEmitter.js.map