// 1.global scope

       let userName = 'parbat';

       function example1(){
        console.log(userName);
       }
       example1();
       console.log(userName);

// userName is accessible everywhere, its a global scope.

// 2. function scope

       function example2(){
        let message='hello world!';
        console.log(message);
       }
       example2();
  //     console.log(message);

// message is not accessible in out of the function

//3. Block scope

    let condition= true;

    if(condition === true){
        let age =30;
        const city = 'btm';
        var country = 'Nepal'; 
    }
    //console.log(age);
    //console.log(city);
    console.log(country);

// let and const respect the bloxk scope 
// var is not block scope - its unction scoped, which can cause bugs in future.

