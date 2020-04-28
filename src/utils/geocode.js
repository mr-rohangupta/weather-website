const request = require("request");

const geocode = (address, callback) => {

  const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoidHVzaGFyZ3VwdGEzNDQ3IiwiYSI6ImNrOWhpaXphaDA4bXMzZ3FmNGc3aXBvdWMifQ.3x2Mnk9ZrthxKtlMtzi3LA';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
        console.log('Inside Error')
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
        console.log('Inside length')
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
