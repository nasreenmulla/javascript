//difference between map and foreach
//bot usedto loop through array
//but map rtuerned the transform array where as foreach cant and we can do filter 
//  const arr=[2,3,4];

//  const result= arr.map((index)=>{
//     return index + 2;
//   });
 
//   const array=arr.forEach((i)=>{
//     return + 3;
//   })
//   console.warn(result);
//   console.warn(array);
//   // 2 :null vs undefined 
//   //null is  a actual vaalue ,undefined means variable is declared but not initialized yet
//   console.log(null==undefined)//truebczdiubleequal matchesthe entity without requiring types
//   console.log(null===undefined)//false bcz its matchesboth entity and types
//   //3:flatten the array
//   const arra=[
//     [1,2],
//     [3,4],
//     [5,[6,7],8,9]

//   ]
//   const flattened=[].concat(...arra);// one level of flattenig
//   //console.warn(flattened)
//   console.log(arra.flat(2));//custom
//   function Cunstom(arr,depth){
//     let result=[];
//     arra.forEach((in)=>{
//         if(Array.isArray(in)&& depth>0){
//             result.push(...Cunstom(arr,depth-1))

//         }
//         else {
//             result.push(ar);
//         }

//     });
//     return result;
//   }
// {
//     const a="hello";
// }
//4 difference between var const and let
// let and cosnt have the scope within braces but the the var have out of braces
// var a=5;
// var a =10;
// let const cant  be reininitalized and declared




//5:Call Apply and bind 
//6: composition polufill

// *****************INTERVIEW PREP BU VASU SIR********************
// 2.scope value:
// let a=10;
//  a=9;
// var  c=10;
// var c=18;
// const u=10;
// var let can be reassigned and const cannot be
// var is globbal scope and developer should not use it
// var :redeclare,reassigned
// let:reassigned
// const:none

// 1.VARIABLE SHADOWING
function Hello(){
  let a="hello";
  if(true){
    let a="bye";
    console.log(a);
  }
  console.log(a);
}
Hello();
// 3:Illegal shadowing:
// function test(){
//   var a="nasreen";
//   let b="hello";
//   if(true){
//     let a="mulla";
//     var b="nnnnn";
//   }
// }
// 4:Hosting
// declared variable will be moved to top

// TRZ: temporary red zone:variables are in scope but not yet declared,
// function He(){
//   console.log(q,w,e);
//   var q=87;//value will be undefined
//   let w=87;//TRZ
//   const e=19;//TRZ
// }
// He();
// 5:Map,filter and reduce
// Map:will return the new array by adding some functions to it below is the example

// const arr=[1,2,3,4,5];
// const multhree=arr.map((n,i,array)=>{
//      return n*3+i;
// });
// console.log(multhree);
// Filter:it apply some condition if element pass the condition then 
// elemt will be pushed to output if not passedthen will not be dsiplayed in output
// const num=[1,2,3,4]
// const more=num.filter((n)=>{
//     return n>2
// });

// console.log(more);
//   // Reduce:it will reduce the code to one Number
//   const num=[1,2,3,4]

//   const accumulator=num.reduce((acc,curr,i,arr)=>{
//      return acc+curr;//acc means precois value
//   },1);
//   console.log(accumulator);
// polyfillmap
// Array.prototype.myMap=function(cb){
//    let temp=[];
//    for(let i=0;i<this.length;i++){
//       temp.push(cb(this[i],i,this))
//    }
//    return temp;
// };

// const arr=[1,2,3,4]

// const three=arr.myMap((n)=>{
//   return n*3;
// });
// console.log(three);
// Array.prototype.fil=function(cb){
//    let temp=[];
//    for(let i=0;i<this.length;i++){
//       if(this[i],i,this) temp.push(this[i]);
//    }
//    return temp;
// };
// Array.prototype.reduc=function(cb,initialized){
//    var accumulator=initialized;
//    for(let i=0;i<this.length;i++){
//       accumulator=accumulator?cb(accumulator,this[i],i,arr):this[i];
//    }
//    return accumulator;
// };
//6 difference between map and foreach
// let stud=[
//    {name:"nasreen",age:"18",num:"9999",rol:11},
//    {name:"mulla",age:"15",num:"99997",rol:16}
// ]g
// // const style=stud.map((stu)=>stu.name.toUpperCase());
// // console.log(style);
// // const store=stud.filter((stu)=>stu.age>16 && stu.rol>10);
// // console.log(store);
// // const st=stud.reduce((acc,cuu)=>acc+cuu.rol,0);
// // console.log(st);
// const names=stud.filter((st)=>st.age>16).map((st)=>st.name);
// console.log(names);
// 7:function
// Function declaration:
// function foo(num){
//    return num*num
// }
// Function expression :when we store the function inside of a variable then its called an expression :
// const square=function (num){
//    return num*num;
// }
// console.log(square(5));
// First class function:where the function are treated like a variable.

// function square(num){//params
//    return num*num;
// }

// function cal(fn){
//    console.log("square is"+fn(5));
// }
//  cal(square);//argument

//  what is IIFE:imeediatley invoked function expression
//  (function square(num){
// console.log(num*num);
//  })(5);
// (function square(num){
//   console.log(Num*num)
// })();
//  Function Hoisting: functions are hosted completely.
//  hh();
//  function hh(){
//    console.log("road");
//  }
 //Spread and Rest operator
//  function Num(...num){//rest
//    console.log(num[0]*num[1]);
//  }
//  const arr=[5,6]
//  Num(...arr);//spread
//  //Arrow function
//  const hello=(num)=>{
//    return num*num;
//  }
// //  Arrow and Normal function differenes
//  1:
//  function No(n){
//     return n+2;
//  }
//  const Afu=(n)=>{
//   return n+2
//  }
//  2: we can remove the return keyword in arrowfunction
//  3:we can specify the argument as keyword in normal function
//  4:this keyword
//8:closures
// 9:lexical scope
// a vraible defined outside function can be calledinside function its called lexical scope
// Closure:give access to outer function sceope from inner function
// var n="mulla";
// function data(){
//    var a="nasreen";
//    function da(){
//       console.log(a,n);
//    }
//    return da;
// }
// const myfu=data();
// myfu();

// function create(num){
//    return function(ine){
//       console.log(num+ine);
//    }
// }

// const add=create(6); 
// add(7);

// for(var i=0;i<3;i++){
//    function inner(i){
//       setTimeout(function log(){
//          console.log(i);
//         },i*1000);
//    }
//    inner(i);
  
// }
// how do you use closure to create private counter
//10:module pattern:
// var module=(function(){
//    function publicM(){
//       console.log("public");
//    }
//    return{
//       privateM:function (){
//          console.log("private");
//       },
//    };
  

// }

// )();
// module.publicM();
// module.privateM();
// let view;
// function like(){

//    let count=0;
//   return  function(){
//       if(count>0){
//          console.log("already subscribed")
//       }
//       else{
//          view="coder";
//    console.log("subscribe to"+view);
//    count++;

//       }
//    }
   
// }
// const style=like();

// style();
// style();
// style();

// Once polyfill
//Caching /memoiz function
// function mymemoi(fn,context){
//    const res={};
//    return function(...args){
//       argscache=JSON.stringify(...args);
//       if(![argscache]){
//         res[argscache]=fn.call(context||this,...args)
//       }else{
//          return res[argscache]
//       }
//    }
// }
//11:Currying:it take one aargument and return a function wich also require one argument
//why currying:we use currying to create high order component and to modify the dom version
// function aF(a){
//    return function bF(b){
//       console.log(a,b);
//    }
// }
// console.log(aF(1)(2));

// function sum(a){
//    return function (b){
//       return function (c){
//          return a+b+c;
//       }
//    }
// }
// console.log(sum(1)(2)(3))

// function evaluate(operation){
//    return function(a){
//       return function(b){
//          if(operation==="sum") return a+b;
//          else if (operation==="divide") return a*b;
//       }
//    }
// }
// console.log(evaluate("sum")(5)(5))
//12:INFINITE CURRYING

// function sum(a){
//    return function(b){
//       if(b) return sum(a+b);
//       else return a;
//    };
// }


// console.log(sum(1)(2)(3)(4)());
// 13:DIFFERENCE BETWEEN CURRYING AND PARTIAL APPLICATION:
// Currying function:function curr(a){
//    return function(b){
//       return function(c){
//          return a+b+c;
//       }
//    }
// }
// console.log(curr(1)(2)(3))
// partial application:
// function pa(a){
//    return function (b,c){
//       return a+b+c;
//    }

// }
// console.log(pa(1)(2,3));
// function Update(id){
//    return function(content){
//       document.querySelector( "#" +id).textContent=content;
//    };

// }
// const Up=Update("nas");
// Up("hello updated nasreen");

// 14:Curry implementations
//15:objects:
//  const user={
//     name:"nasreen",
//     age:29
//  }
//   delete user.name;
// console.log(user);


// const func=(function(a){
//     delete a;//delete wont work on variables
//     return a;
// }

// )
// console.log(5)
// const user={
//     name:"mulla",
//     age:24,
//     "like the video":true
// }
// console.log(user["like the video"]);
// const property="firstname";
// const name="piyush agarwal";

// const user={
//     [property]:name
// }
// console.log(user.firstname);
// const user={
//     name:"road side coader",
//     age:28

// };
// for(key in user){
//     console.log(user[key])
// }

// const obj={
//     a:"two",
//     b:"three",
//     a:"four"
// };
// console.log(obj);
// const nums={
//     a:100,
//     b:200,
//     title:"enter here"
// }

// multiple(nums);


// function multiple(obj){
//     for(key in obj){
//         if(typeof obj[key]=="number"){
//             obj[key]*=2;
//         }
//     }
// }
// console.log(nums)
// const a={};
// const b={key:"b"};
// const c={key:"c"};

// a[b]=123;//it will be treated as a[object object]
// a[c]=500;

// console.log(a[c]);
// 16:JSON.stringif and JSON.parse() difference
// const user={
//     name:"nasreen",
//     age:26
// }
// const url=JSON.stringify(user);
// localStorage.setItem("test",url);
// console.log(JSON.parse(url));
// console.log(..."Lydia");
// const setting={
//     sername:"mulla",
//     level:19,
//     health:67
// }
// console.log(JSON.stringify(setting,["level","health"]));
// const string={
//     name:"piyush",
//     age:27,
//     hello:{
//         names:"nasreen"
//     }
// }
// const name="mulla";
// // const {name:myname}=string;
// const {hello:{names},}=string;
// console.log(names);
// let c={greet:"hey"};
// let d;
// d=c;
// c.greet="hlelo";
// console.log(d.greet);
// let person={name:"lydia"};
// const member=[person];

// person=null;
// console.log(member);//it return name
// let person={name:"lydia"};
// const member=[person];

// person.name=null;
// console.log(member);//it return null
//Cloning a object in three ways:
//1:
// const user={
//     name:"mulla",
//     age:89

// }
// const cloned=Object.assign({},user);
// const cloned=JSON.parse(JSON.stringify(user)); 2nd way
// const cloned={...user}; 3 way




// cloned.name="nasreen";
// console.log(cloned,user);

//This keyword in javascript
// 1:Globall Object
  

// console.log(this);
// 2:here also this is global object
// this.name="nasreen";
// function sum(){
//        name="mulla";
//     var add=2+2;
//     console.log("sum is"+add);
//     console.log(this.name);
// }
// sum();
// // 3:in a normal function it belongs to owner object
// let user={
//     name:"nasreen",
//     age:26,
//     sign:function(){
//         console.log(this);
//     }
// }
// user.sign();


//javascript from raod side coaders
// in arrow function it will point to outerscops means parent scope
//in arrow function it will point to object scope

// const user={
//     name:"piyush",
//     greet(){
//         console.log(this.name);
//     },
//     farewell:()=>{
//       console.log(this.name);
//     }
// }
// console.log(user.greet());
// console.log(user.farewell());
//17:call,bind,apply
//call
// const user={name:"nasreen"};
// function userf(age){
//     return "hello"+this.name+age;
// }

// const user={name:"nasreen"};
// function userf(age){
//    return age+this.name;
// }
// console.log(userf.call(user,29));


// console.log(userf.call(user,20));
// apply
// const user={name:"nasreen"};
// function userf(age,prof){
//     return "hello"+this.name+age+prof;
// }
// console.log(userf.apply(user,[29,"SE"]));//arguments are applied in array in apply
//bind :make reusable function
// const user={name:"nasreen"};
// function userf(age,prof){
//     return "hello"+this.name+age+prof;
// }
// const bindfunc=userf.bind(user);
// console.log(bindfunc(24,"TE"));
//18 append an array to another array
// const array=[1,2];
// const element=["a","b"];

// array.push.apply(array,element);
// console.log(array);
//find min and max using apply
// const array=[2,3,4,5,6];
// console.log(Math.max.apply(null,array));
//19:callbind apply on arrow function
// const age=19;
// var person={
//     age:20,
//     name:"piyush",
//     getArrow:()=>{
//         console.log(this);
//     },
//     normal(){
//       console.log(this.age);
//     }
// }
// var pre2={age:40};
// person.normal.call(pre2);
// person.getArrow.call(pre2);//call bind apply doesnt work on arrow
//20:polyfill for call
// Function.prototype.myCall=function(context={},...args){
//     if(typeof this!=="function"){
//         throw new Error(this+"its not callable");
//     }
//     context.fn=this;
//     context.fn(...args);
// }

//21:polyfill for apply
// Function.prototype.myApply=function(context={},args=[]){
//     if(typeof this!=="function"){
//         throw new Error(this+"its not callable");
//     }
//     if(!Array.isArray(args)){
//         throw new TypeError("not a array");
//     }
//     context.fn=this;
//     context.fn(...args);
// };
//22:polyfill for bind
// Function.prototype.Bindf=function(context={},...args){
//     if(typeof this!=="function"){
//         throw new Error(this+"its not notbond");
//     }
//     context.fn=this;
//     return function(...newargs){
//            return context.fn(...args,...newargs);
//     };
// };


//22:synchronous and asynchronous code
//sync
// console.log("start");
// console.log("finish");
//async
// console.log("start");
// setTimeout(()=>{
//   console.log("middle");
// },1000)
// console.log("finished");
//async example
// console.log("start");
// function IMp(){
//     setTimeout((user)=>{
//         console.log("imported function"+user);
//     },1000)
// }
// const message=IMp("nasreen");
//call back example:when we providefunction as a argument to function we call it as callback

// console.log("start");
// function IMp(user,cb){
//     setTimeout(()=>{
//        cb( console.log("imported function"+user));
//     },1000);
// }
// function sec(ss,cb){
//     setTimeout(()=>{
//        cb( console.log("second function"+ss));
//     },2000)
// }
// const message=IMp("nasreen",function (message){
//     console.log(message);
//     sec("second",function(ac){
//           console.log(ac);
//     })
// });

// console.log("start");
// function first(user,cb){
//     setTimeout(()=>{
//        cb( 'first function '+user);
//     },1000);
// }
// function second(uses,cb){
//     setTimeout(()=>{
//       cb('second function' +uses);
//     },2000)
// }
// const message=first("firstf",function (message){
//     console.log(message);
//     second("secondf",function(ss){
//         console.log(ss);//so many functions inside one function is called as call back hell
//     })

// });


// console.log("start");
// const sub=new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         const result=true;
//         if(result) resolve("subscribed");
//         else reject("not subscrived")
//      },3000);
// })
// sub.then((res)=>{
//     console.log(res);
// })
// sub.catch((err)=>{
//     console.log(err);
// });
// rewriting call back with promises
// function first(user,cb){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve( 'first function '+user);
//          },1000);
//     });
       
//     }
//     function ss(users,cb){
//        return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve("second function"+users);
        
//          },2000)
//        })
//     }
//     function tt(){
//         return new Promise((resolve,reject)=>{
//              setTimeout((usert,cb)=>{
//                 reject("third function"+usert);
//              },500)
//         })
//     }


// first("nasreen").then((res)=>{
//   console.log(res);
//  ss("mulla").then((ress)=>{
//    console.log(ress);
//  })

// })
// .catch((err)=>{
//    console.log(err)
// });
//promises chaining
// first("nasreen").then((res)=>{
//    console.log(res);
//    return ss("mulla");
// }).then((ress)=>{
//   console.log(ress);
// }).catch(()=>{
//     console.log(err);
// })
//promise combinator there are 4 types
//1.promises.all
// console.log(Promise.all([first("nareen"),ss("mulla")]).then((res)=>{
//     console.log(res)
//     }).catch((err)=>{
//       console.log(err);
//     }));
    //2:promise.race
    // console.log(Promise.race([first("nareen"),ss("mulla"),tt("third ")]).then((res)=>{
    //     console.log(res)
    //     }).catch((err)=>{
    //       console.log(err);
    //     }));
        //3:promise.allsettled:in promise.all if one function failed the all promises will be failed but in all settled the
        //the promises wich are successfuly executed will be returned irrespective of failed promises

        // console.log(Promise.allSettled([first("nareen"),ss("mulla"),tt("third tt")]).then((res)=>{
        //     console.log(res)
        //     }).catch((err)=>{
        //       console.log(err);
        //     }));
  //4:prmise.any :it will give first fullfiled promise
//   console.log(Promise.any([first("nareen"),ss("mulla"),tt("third tt")]).then((res)=>{
//     console.log(res)
//     }).catch((err)=>{
//       console.log(err);
//     }));
//async/await
// const result=async()=>{
//     const mes1=await first("nasree");
//     console.log(mes1);
//     const mes2=await ss("mulla");
//     console.log(mes2);
//     const mes3=await tt("rahee");
//     console.log(mes3);
// }
// result();
//Promise chaining:
// const promise1=new Promise((resolve,reject)=>{
//      resolve("first")
// });
// const promise2=new Promise((resolve,reject)=>{
//     resolve(promise1);
// });
// promise2.then((res)=>{
//   return res;
// }).then((ress)=>{
//   console.log(ress);
// });
//solve promises recrsevily
// function recursive(funcpromises){
//   if(funcpromises.length===0) return;
//   else{
//     const promise1=funcpromises.shift();
//     promise1.then((res)=>{
//       console.log(res)
//     }).catch((err)=>{
//     console.log(err);
//     })
//   }
//   recursive(funcpromises);

// }
// recursive([first("nasreen"),ss("mulla"),tt("raheem")]);
//promise example

//polyfill for promise for asynchronous
// function Fpolly(executer){

//   let onresolve,onreject;
//   function resolve(value){
//      onresolve(value);
//   }
//   function reject(value){
//     onreject(value);
//   }

//   this.then=function(callback){
//          onresolve=callback;
//          return this;
//   }
//   this.catch=function(callback){
//     onreject=callback;
//    return this;
//   }
//   executer(resolve,reject);
// };


// const promisee=new Fpolly((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(2);
//   },1000)
// });
// promisee.then((res)=>{
// console.log(res);
// }).catch((err)=>{
// console.log(err);
// });
//polyfill for synchronous
// function Fpolly(executer){

//   let onresolve,onreject,isfullfiled=false,iscalled=false,val,isrejected;
//   function resolve(value){
//     isfullfiled=true;
//    val=value;
//    if(typeof onresolve==="function")
     
//    {
//     onresolve(value);
//      iscalled=true;
//    }
//   }
//   function reject(value){
//     isrejected=true;
//     val=value;
//     if(typeof onreject==="function")
     
//     {
//      onresolve(value);
//       iscalled=true;
//     }
//   }

//   this.then=function(callback){
//          onresolve=callback;
//          if(isfullfiled&&!iscalled){
//           called=true;
//           onresolve(val);
//          }
//          return this;
         
//   }
//   this.catch=function(callback){
//     onreject=callback;
//     if(isrejected&&!iscalled){
//       called=true;
//       onreject(val);
//     }
//    return this;
//   }
//   try{
//     executer(resolve,reject);
//   }catch(error){
//    reject(error);
//   }
  
// };


// const promisee=new Fpolly((resolve,reject)=>{
//   // setTimeout(()=>{
//     resolve(2);
//   // },1000)
// });
// promisee.then((res)=>{
// console.log(res);
// }).catch((err)=>{
// console.log(err);
// });
// Fpolly.resolve((val)=>{
//    return new Fpolly(function executer(resolve,reject){
//        resolve(val);
//    });
// });
// Fpolly.reject((val)=>{
//   return new Fpolly(function executer(resolve,reject){
//       reject(val);
//   });
// });
// function first(user,cb){
//   return new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve("firstfunction"+user)
//     },1000)
//   })
// }
// function second(users,cb){
//   return new Promise ((resolve,reject)=>{
//     setTimeout((user,cb)=>{
//      resolve ('secondfunction'+users);
//     },1000)
//   })
// }
// function third(usert,cb){
//   return new Promise ((resolve,reject)=>{
//     setTimeout((user,cb)=>{
//      resolve("firstfunction"+usert)
//     },1000)
//   })
// }

// Promise.polyyall=(promises)=>{
//   return new Promise((resolve,reject)=>{
//     const result=[];
//     if(!promises.length)
//     {
//       resolve(result);
//       return;
//     }
//     let pending=promises.length
//     promises.forEach((promise,idx)=>{
//       Promise.resolve(promise).then((res)=>{
//      result[idx]=res;
//      pending--;
//      if(pending==0){
//       resolve(result);
//      }
//       },reject);
      

//     });
//   });
// };
// Promise.polyall([first("nasreen"),second("mulla"),third("raheem")]).then((res)=>{
//    console.log(res);
// }).catch((err)=>{
//    console.log(err);
// });

//DEbouncing:means whenever we use emorc e website then after the specified time the api will get called.
// const btn=document.querySelector('.btnincre');
// const pressed=document.querySelector('.btnpressed');
// const count=document.querySelector('.incrmentt');

// var pressedbtn=0;
// var countpressed=0;

// const myD=(cb,d)=>{
//   let timer;
//   if(timer) clearTimeout(timer);
//   return function(...args){
//      setTimeout(() => {
//        cb(...args);
//      }, 800);
//   }
// }
// const myT=(cb,d)=>{
//   let strat=0;
//   return (...args)=>{
//     let end=new Date().getTime();
//     if(end-strat<d) return;
//      strat=end;
//    return cb(...args);
//   };
// };

// const debf= myT(()=>{
//     count.innerHTML=++countpressed;
//   },800);
// const debf= _.debounce(()=>{
//   count.innerHTML=++countpressed;
// },800);
// const debf= _.throttle(()=>{
//   count.innerHTML=++countpressed;
// },800);



// btn.addEventListener("click",()=>{
//   pressed.innerHTML= ++pressedbtn;
//   debf();
// });
//with the help of lodash we can apply debouncing
//event propgation:deciding in wich pattern the event will be genrated is called event propogation:
// event bubbling://events are fired from bottom to top is called as event bubbling
// example:
// const adiv=document.querySelector("div");
// const aform=document.querySelector("form");
// const abutt=document.querySelector("button");

// adiv.addEventListener("click",()=>{
//   alert("div box called")
// })

// aform.addEventListener("click", function(){
//   alert("form box called");
// })

// abutt.addEventListener("click",function(){
//   alert("button called");
// })
// difference between (Event.currentTarget,this.target),Event.Target:
// const adiv=document.querySelector("div");
// const aform=document.querySelector("form");
// const abutt=document.querySelector("button");

// adiv.addEventListener("click",func);
// aform.addEventListener("click",func);
// abutt.addEventListener("click",func);


// function func(ev){
//   alert(
//   "current="+ev.currentTarget.tagName +
//   "target ="+ev.target.tagName+
//   "this="+this.tagName
//   )
// }

// ev.currentTarget.tagName works same as this.tagname
// and event.target.tagname:display from where the click started
//eventcapturing/trickling:i sthe process from wich boxwill be executed from topto button
const adiv=document.querySelector("div");
const aform=document.querySelector("form");
const abutt=document.querySelector("button");

// adiv.addEventListener("click",function(){
//   alert("div")
// },{
//   capture:true
// })

// aform.addEventListener("click",function(){
//   alert("form called");
// },{
//   capture:true
// })
// abutt.addEventListener("click",function(){
//   alert("button called");
// },{
//   capture:true
// })
//how to stop capturing
// adiv.addEventListener("click",function(e){
//   e.stopPropagation();
//   alert("div")
// })

// aform.addEventListener("click",function(e){
//   e.stopPropagation();
//   alert("form called");
// })
// abutt.addEventListener("click",function(e){
//   e.stopPropagation();
//   alert("button called");
// // })
// adiv.addEventListener("click",function(e){
  
//   alert("div")
// })

// aform.addEventListener("click",function(e){
//   e.stopPropagation();
//   alert("form called");
// })
// abutt.addEventListener("click",function(e){

//   alert("button called");
// })

//event deligation:event listner toparent
// document.querySelector(".product").addEventListener("click",function(event){
//   console.log(event.target.closest==="SPAN")
// if(event.target.tagName==="SPAN"){
//   window.location.href+="/"+event.target.className;
// }
// })
// const buu=document.querySelector(".bclass");
// const modal=document.querySelector(".outside");

// buu.addEventListener("click",function(){
//        toggle(true);
// })
// function toggle(t){
// container.style.display= t ? "flex":"none";
// }

// container.addEventListener("click",function(e){
//   if(e.target.tagName==="outside"){
//     toggle(false);
//   }
// })