// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'John',
//     age: 19,
//     hobbies: ['Coding', 'Photography'],
//     role: [2, 'author']
// };

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
        name: 'John',
        age: 19,
        hobbies: ['Coding', 'Photography'],
        role: Role.ADMIN
    };

// person.role.push('admin')
// person.role[1] = 10; 

// person.role= [0,'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if(person.role === Role.AUTHOR){
    console.log('is author')
}