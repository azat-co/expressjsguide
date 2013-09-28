var Faker = require('Faker');
var fs = require('fs');
var body = 'name, email, pin\n';

for (var i = 0; i< 100; i++) {
  body += Faker.Name.findName() + ',' + Faker.Internet.email() + ',' + Faker.random.number(1000) + '\n';
}

fs.writeFile('users.csv', new Buffer(body));
