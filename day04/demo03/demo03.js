//Objects in javascript
//Two ways to create object
// new Object()
// new <Constructor>()
// Using new Object();
 
const person1=new Object();
person1.firstName="Sowmithri";
person1.lastName="Chirala";
person1.toString=function(){
    return this.firstName+" "+this.lastName;
}
console.log(person1);//JSON
console.log(person1.toString());//JSON