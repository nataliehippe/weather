
const request = require('postman-request');


const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=95963a94a7f64d5c6bd0f4e460db30ea&query=' + lat + ',' + long+'&units=f';

    request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.length === 0) {
            callback('Coordinate error', undefined);
        } else {
            callback(undefined, body.location.name + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    });

}

module.exports = forecast