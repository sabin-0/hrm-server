'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.users
    .insertMany([
      {
        _id: "65dda5e1a7946887e0361a56",
        firstname: "john",
        lastname: "wick",
        email: "jw@gmail.com",
        password: "B@bayega10",
        phone: "9876543213"
      },
      {
        _id: "65dda705a7946887e0361a57",
        firstname: "john",
        lastname : "rambo",
        email: "jr@gmail.com",
        password: "R@mbo1000",
        phone: "9349157204"
      }
    ])
  },

  down: (models, mongoose) => {
    return models.users
    .deleteMany({
      _id : {
        $in: [
          "65dda5e1a7946887e0361a56",
          "65dda705a7946887e0361a57"
        ],
      },
    })
    .then((res)=>{
      console.log(res.deletedCount);
    })
  }
};
