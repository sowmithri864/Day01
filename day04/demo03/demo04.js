function Person(firsntName,lastName){
    this.firsntName=firsntName;
    this.lastName=lastName;
    this.toString=function(){
        return this.firsntName+" "+this.lastName;
    }
}
 
const p2=new Person("Sowmithri","chirala");
console.log(p2.toString());
console.log(p2);