// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'John',
    age: 19,
    hobbies: ['Coding', 'Photography']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}