// State Pattern Example.
// Note this is not mine. It is a copy of the code from https://medium.com/javascript-in-plain-english/stop-using-the-else-keyword-in-your-code-907e82b3054a
// This could be used to avoid using Else statement.

var TrafficLight = function () {

    var count = 0;

    // default state = green
    var currentState = new Green(this);

    this.change = function (state) {
        // limits number of changes
        if (count++ >= 10) return;
        currentState = state;
        currentState.go();
    }
    this.start = function () {
        currentState.go();
    }
}

var Red = function (light) {
    this.light = light

    this.go = function () {
        console.log(("Red --> for 1 minute"))
        light.change(new RedAndYellow(light));
    }
}

var RedAndYellow = function (light) {
    this.light = light

    this.go = function () {
        console.log(("Red and Yellow --> for 10 seconds"))
        light.change(new Green(light));
    }
}

var Yellow = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Yellow --> for 10 seconds")
        light.change(new Red(light));
    }
};

var Green = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Green --> for 1 minute");
        light.change(new Yellow(light));
    }
};

var trafficLight = new TrafficLight(); // DEclare a new instance of TrafficLight
trafficLight.start(); // Call start()