const axios = require('axios');

function getRestResponse () {

  return new Promise(function (resolve, reject) {
      axios.get('https://www.google.com/')
          .then(function (response) {
              console.log("+++++++++++++++++++++++ " + response.data);
              resolve({
                  response :{
                      data : response.data
                  }
              });
          })
          .catch(function (error) {
              console.log(error);
              reject(error.response.data);
          });
  })

}

module.exports = {
  getRestResponse : getRestResponse
};
