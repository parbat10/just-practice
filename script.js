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
       