let users = [
    {
        name: "Abdulaziz"
    },
    {
        name: "Anvar"
    },
    {
        name: "Sardor"
    },
    {
        name: "Ibrohim"
    },
    {
        name: "Abdulhamid"
    },
    {
        name: "Aziz"
    },
    {
        name: "John"
    },
    {
        name: "Kate"
    },
    {
        name: "Sara"
    },
    {
        name: "Victor"
    }

]
let greaterThan5Users = [

]
let lessThan5Users = [

]
let isEqualTo5 =[

]
let result
let i = 0 
let i2 = 0 
let i3 = 0
let i4 = 0
function  usersCheck(){
   result =  users[i].name.length
   if(result > 5 ){
    i2++
    greaterThan5Users[i2] = users[i].name
   }else if(result == 5){
    i3++
    isEqualTo5[i3] = users[i].name
   }else{
    i4++
    lessThan5Users[i4] = users[i].name
    
   }
 
};
for(; i < 10; i++){
usersCheck()
}
console.log(greaterThan5Users)
console.log(lessThan5Users)
console.log(isEqualTo5)