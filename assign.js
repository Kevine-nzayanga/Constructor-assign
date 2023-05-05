// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.
// Requirements:
// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)

class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make
        this.model = model
        this.year = year
        this.isAvailable = isAvailable
    }

        toggleAvailability = function () {
           this.isAvailable=!this.isAvailable
           console.log(this.isAvailable);
        }
    
}
let car1=new Car("Toyota","BB",2012,false)
console.log(car1);
car1.toggleAvailability()

// 2) Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate
    }
    calculateRentalDuration=function(){
        console.log(this.rentalEndDate - this.rentalStartDate);
        
    }
}
let rental1= new Rental("Benz", "Marc Mills",12,20)
console.log(rental1);
 rental1.calculateRentalDuration()

// 3. Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.
class Rambo extends Car{
    constructor(make, model, year, isAvailable){
        super(make, model, year, isAvailable)
    }
}
let rm=new Rambo("rambo","weish",2016,false)
console.log(rm);

class Benz extends Rental{
    constructor(car, renterName, rentalStartDate, rentalEndDate){
        super(car, renterName, rentalStartDate, rentalEndDate)
    }
}
let ben= new Benz("benz","Mike",25,28)
console.log(ben);
ben.calculateRentalDuration()


// Question 2
// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.
// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.
class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    checkAnswer(answer) {
     return answer ===this.correctAnswer
    }
  }

let question1= new Question("what goes round comes round",["sun","moon","karma"],"karma")
console.log( question1.checkAnswer("kama"));


// 2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct.

class Quiz{
    constructor(questions,currentQuestionIndex,score){
        this.questions=questions
        this.currentQuestionIndex=currentQuestionIndex
        this.score=score 
    }
    addQuestion(qnobject){
       this.questions.push(qnobject);
       console.log(this.questions);
    }
    nextQuestion(){
        this.currentQuestionIndex++
        
    }
    submitAnswer(userAnswer){
        if(userAnswer===Question.checkAnswer){
          this.score++;
        }
    }
}

let quiz1= new Quiz([{qn1:"what is the biggest animal on earth"},{qn2:"what goes round comes round"}],
1,10)
console.log(quiz1);
quiz1.addQuestion({qn3:"longest building in kenya"})
quiz1.nextQuestion();
quiz1.submitAnswer("karma")
console.log(quiz1);