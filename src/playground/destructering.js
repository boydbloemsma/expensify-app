// Object Destructering

/*
const person = {
    name: 'Boyd',
    age: 21,
    location: {
        city: 'Sellingen',
        temp: 15
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;

if(city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    authors: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);
*/

// Array Destructering

const address = [
    '1299 S Juniper Street',
    'Philadelphia',
    'Pennsylvania',
    '19147'
];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = [
    'Coffee (iced)',
    '$2.00',
    '$2.60',
    '$2.75'
];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);