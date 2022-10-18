// const person: {
//     name: string;
//     age: number;
//} 
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Arsen', 
//     age: 33,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

const person = {
    name: 'Arsen', 
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());    
}

if(person.role === Role.AUTHOR) {
    console.log('is author');
    
}