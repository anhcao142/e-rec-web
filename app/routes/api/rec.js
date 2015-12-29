

/*
    Input: userId
    Output: Top 10 events user most likely to attend
*/
exports.top10 = function top10(req, res, next) {
    var userId = req.params.id;

    var results = []

    res.status(200).json({
        success: true,
        result: results
    });
}