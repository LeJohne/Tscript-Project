// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'John',
    age: 19,
    hobbies: ['Coding', 'Photography'],
    role: [2, 'author']
};
person.role.push('admin');
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
