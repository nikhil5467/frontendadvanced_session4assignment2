class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
	makeSound(soundmade : string){
		console.log(`${this.name} made ${soundmade}sound`);
	}
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        /*console.log("Slithering...");*/
        super.move(distanceInMeters);
    }
	makeSound(soundmade = "Slithering"){
		super.makeSound(soundmade);
		/*console.log(`${this.name} made ${soundmade}sound`);*/
	}
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
		
    }
	makeSound(soundmade = "Galloping"){
		super.makeSound(soundmade);
		console.log(`${this.name} made ${soundmade}sound`);
	}
}
class tiger extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
	makeSound(soundmade = "roaring"){
		super.makeSound(soundmade);
		console.log(`${this.name} made ${soundmade}sound`);
	}
}
    class lion extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
	makeSound(soundmade = "roar"){
		super.makeSound(soundmade);
		console.log(`${this.name} made ${soundmade}sound`);
	}
    }
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
sam.makeSound("slithering");
tom.makeSound("roaring");