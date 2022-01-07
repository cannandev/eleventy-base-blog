var axios = require('axios');

// module.exports = function () {
//   return {
//     collection: process.env.COLLECTION_NAME,
//     db: process.env.DATABASE_NAME,
//     key: process.env.API_KEY,
//     source: process.env.DATA_SOURCE
//   };
// };

module.exports = function () {
  let data = JSON.stringify({
    "collection": process.env.COLLECTION_NAME,
    "database": process.env.DATABASE_NAME,
    "dataSource": process.env.DATA_SOURCE,
    "limit": 7
  });

  let config = {
    method: 'post',
    url: `https://data.mongodb-api.com/app/${ process.env.API_ID }/endpoint/data/beta/action/find`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

}

