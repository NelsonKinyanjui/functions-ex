function favoriteAnimal (animal){
    return animal +" is my favorite animal";
}

console.log(
    favoriteAnimal('Zebra')
);

let userName = 'Bob';

function showMessage(){
    userName = 'Nick';
    alert("Hello, I am " + userName);
}
 
showMessage();

alert(userName);