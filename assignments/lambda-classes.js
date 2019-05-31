// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }

  listSubjects() {
    this.favSubjects.forEach(elem => console.log(`${elem} \n`));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManagers extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel}, @channel standy times!`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const mike = new Student({
  name: "Mike Linter",
  age: 28,
  location: "Wichita, KS",
  previousBackground: "Janitor",
  className: "WEBPT7",
  favSubjects: ["CSS", "HTML", "Javascript"]
});

const josh = new Instructor({
  name: "Josh Knell",
  age: 57,
  location: "Istanbul, Turkey",
  specialty: "Banjo-Playing",
  favLanguage: "Yokel-speak",
  catchPhrase: "Something Alabama...something about knees..."
});

const aj = new ProjectManagers({
  name: "AJ Brush",
  age: 48,
  location: "Mayberry, NC",
  gradClassName: "WEB16",
  favInstructor: "Ryan Freeman",
  specialty: "Staying Awake",
  favLanguage: "Javascript",
  catchPhrase: "When I was your age..."
});

//Uncomment below to test

// mike.listSubjects();
// mike.PRAssignment("Javascript IV");
// mike.sprintChallenge("Javascript Fundamentals");

// josh.demo("strumming");
// josh.grade(mike, "picking!");

// aj.standUp("WEBPT7_AJ");
// aj.debugsCode(mike, "Javascript");
