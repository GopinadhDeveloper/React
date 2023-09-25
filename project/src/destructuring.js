// object Destructuring
// let user={username:'vamshhi',age:20}
// let {username,age}=user;
// console.log(username);
// console.log(age);
// ArryDestructuring
function usestate(){
let user=["vamshhi",23,
function getName()
 {
    return 5;
 }
]

 return user;
}
 let [username,age,getName]=usestate();
 console.log(username);
 console.log(age);
 console.log(getName());
