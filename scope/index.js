const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        console.log("log A ", personB); // Ben
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
          console.log("Log B ", personC); // CardiB
        }
      }

      personC = personA;

      // Log C: personB
      console.log("Log C: ", personB); // CardiB
    }

    changePerson();

    // Log D: personC
    console.log("Log D: ", personC); // Paul

    const result = [
      {A:'Ben'},
      {B: 'CardiB'},
      {C: 'CardiB'},
      {D: 'Paul'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number
      console.log("Log A Answer: ", number, "Log A Guess 75"); // 75

      function newNumber() {
        number = 64;

        // Log B: number
        console.log("Log B answer: ", number, "Log B guess 64"); // 64
      }

      newNumber();

      // Log C: number
      console.log("Log C answer: ",number, "log c guess 64"); // 64
    }

    numberFunction();

    // Log D: number
    console.log("Log D answer: ", number, "log D guess 30"); // 30

    const result = [
      {A: 75 },
      {B: 64},
      {C: 64},
      {D: 30}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting
      console.log(greeting); // YO
      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
        console.log(greeting); //Hey
      }

      newPhrase();

      // Log C: greeting
      console.log(greeting); // Hey
    }

    greetingFunction();

    // Log D: greeting
    console.log(greeting); // Hello

    const result = [
      {A: 'Yo'},
      {B: 'Hey'},
      {C: 'Hey'},
      {D: 'Hello'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting
      console.log(greeting); // hi

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
        console.log(greeting); //welcome
      };

      newGreeting();

      // Log C: greeting
      console.log(greeting); // welcome
    };

    greetingGenerator();

    // Log D: greeting
    console.log(greeting);//howdy

    const result = [
      {A: 'hi'},
      {B: 'welcome'},
      {C: 'welcome'},
      {D: 'howdy'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
        console.log('Log A: ', name); // Nathaniel
      }

      // Log B: name
      console.log('Log B: ', name);// Nathaniel
    }

    // Log C: name
    console.log('Log C: ', name);// Brittany
    sayName();

    // Log D: name
    console.log('Log D: ', name);// Brittany

    const result = [
      {C: 'Brittany'},
      {A: 'Nathaniel'},
      {B: 'Nathaniel'},
      {D: 'Brittany'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog
      console.log("Log A: ", dog); // Spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog
        console.log("Log B: ", dog);// Spot
        dog = 'Biscuit';

        // Log C: dog
        console.log("Log C: ", dog);// Biscuit
      }

      rollOver();

      // Log D: dog
      console.log("Log D: ", dog);// Biscuit

    }

    petDog();

    // Log E: dog
    console.log("Log E: ", dog);//Biscuit
    const result = [
      {A: 'Spot'},
      {B: 'Spot'},
      {C: 'Biscuit'},
      {D: 'Biscuit'},
      {E: 'Biscuit'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit

          const fruit = 'strawberry';
          console.log('Log  A: ', fruit);// strawberry


        }

        // Log B: fruit
        console.log('Log  B: ', fruit);// mango

      }

      // Log C: fruit
      console.log('Log C: ', fruit); // mango

    }

    eatFruit();

    // Log D: fruit
    console.log('Log D: ', fruit); // apple

    const result = [
      {A: 'reference error'},
      {B: 'mango'},
      {C: 'mango'},
      {D: 'apple'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num
      console.log('Log A: ', num, 4);// 4

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
        console.log('Log B: ', num, 9); //

      }

      newNum = num;

      // Log C: newNum
      console.log('Log C: ', num, 4);//

    };

    const fn2 = function(num){
      // Log D: num
      console.log('Log D: ', num, 9);//


      num = num + 1;

      // Log E: num
      console.log('Log E: ', num, 10);//

    };

    fn1();

    const result = [
      {A: 4},
      {D: 9},
      {E: 10},
      {B: 9},
      {C: 4}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      console.log("Log A: ", hunger);// 75, 55 second time
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
        console.log("Log B: ", hunger); // 0

      }

      // Log C: hunger
      console.log("Log C: ", hunger); //  75 , 55 second time

    }

    eatSnack();

    hunger += 5;
    // Log D: hunger
    console.log("Log D: ", hunger); // 80

    eatSnack();
    // Log E: hunger
    console.log("Log E: ", hunger);// 55

    const result = [
      {A: 75},
      {B: 0},
      {C: 75},
      {D: 80},
      {A: 55},
      {B: 0},
      {C: 55},
      {E: 55}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich
    console.log('Log A:', sandwich, 'ketchup sandwich');

    const addChipotle = () => {
      // Log B: toppings
      console.log('Log B:', toppings, 'unfefined');


      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') {
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
      console.log('Log C:', sandwich, 'not a mediocre sandwich');

    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping
      console.log('Log D:', cheeseTopping, 'gouda');


      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    console.log('Log E:', sandwich, 'not a mediocre sandwich');

    // Log F: amandaBynes
    console.log('Log F:', amandaBynes, 'National Treasure');


    const result = [
      {A: 'ketchup sandwich'},
      {D: 'gouda'},
      {B: undefined},
      {C: 'not a mediocre sandwich'},
      {E: 'not a mediocre sandwich'},
      {F: 'National Treasure'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
      console.log("Log A: ", num, 7);
    }

    foo();

    // Log B: num
    console.log("Log B: ", num, 7);

    const result = [
      {A: 7},
      {B: 7}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids

      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla';
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;
