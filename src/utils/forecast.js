const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b4e6fd40773213d4ac10b5d389555a30&query=' + latitude + ',' + longitude
    console.log(url)

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain. Humidity Factor is '+body.current.humidity)
        }
    })
}

module.exports = forecast