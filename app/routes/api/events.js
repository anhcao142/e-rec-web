var async = require('async');

var success = {success: true};

/*
    #sample input
    {
        events: [
            {
                id: 123             #Event id
                lon: {number}       #Longitude
                lat: {number}       #Latitude
                description:
                start: 1451386841   #Start time in epoch
                duration: 24        #Event duration in hours
            },
            ...
        ],
        options: {
            overwrite: false        #Overwrite data if existed
        }
    }

    #success ouput
    {success: true}
*/
exports.add = function add(req, res, next) {
    res.status(200).json(success)
}

/*
    #sample input
    {
        events: [123, 234, 235, ...]    #Array of event ids
    }

    #success output
    {
        events: [123, 234, ...]         #Array of events have successfully deleted
    }
*/
exports.del = function del(req, res, next) {
    res.status(200).json(success)
}

/*
    Input through url, ex: api/events/123   #Delete eventId=123

    #success output
    {
        success: true
    }
*/
exports.delById = function delById(req, res, next) {
    res.status(200).json(success)
}








