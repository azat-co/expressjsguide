var Faker = require('Faker');
var body = [];

for (var i = 0; i < 1000; i++) {
  body.push({
    'name': Faker.Name.findName(),
    'domain': Faker.Internet.domainName(),
    'ip': Faker.Internet.ip(),
    'latitude': Faker.Address.latitude(),
    'longitude': Faker.Address.longitude()
  });
}
process.stdout.write(JSON.stringify(body));
