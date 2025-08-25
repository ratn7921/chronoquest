const mongoose = require('mongoose');
const Empire = require('./models/Empire');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Empire.deleteMany();

  await Empire.create([
    {
      name: "Gupta Empire",
      startYear: 320,
      endYear: 550,
      capital: "Pataliputra",
      ruler: "Chandragupta I",
      geoBoundary: {}
    },
    {
      name: "Mughal Empire",
      startYear: 1526,
      endYear: 1857,
      capital: "Agra",
      ruler: "Babur",
      geoBoundary: {}
    }
  ]);

  console.log("Sample empires seeded");
  process.exit();
});
