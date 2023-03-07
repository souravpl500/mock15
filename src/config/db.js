const mongoose = require("mongoose");
require("dotenv").config();
module.exports = connect = async () => {
  return mongoose.connect(
    "mongodb+srv://souravpl500:Souravpl500@cluster0.hlt1sxm.mongodb.net/masai?retryWrites=true&w=majority"
  );
};
