const mongoose = require('mongoose');
const config = require("config");

const dbconn = config.get("mongoDBConnectURI");

const database = async () => {
  try {
    await mongoose.connect(dbconn, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (err) {
    console.log("unable to connect");
    process.exit();
  }
};
module.exports = database;
/*mongoose.connect('mongodb://localhost/angular-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));*/