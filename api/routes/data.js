const router = require("express").Router();
const Data = require("../models/Data");


//get_all_data
router.get('/all', async (req, res)=>{
    try{
        const allData = await Data.find({}).sort({"id":1});
        res.status(200).json(allData);
    } catch(err) {
        res.status(500).json(err);
    }
});

//query1
router.get('/query1', async (req, res)=>{
    try {
        const ans = await Data.find({
            income: { $lt: "$5" },
            car: { $in: ["BMW", "Mercedes"] }
        }).sort({"id":1});
        res.status(200).json(ans);
    } catch(err) {
        res.status(500).json(err);
    }
});

//query2
router.get('/query2', async (req, res)=>{
    try {
        const ans = await Data.find({ 
            gender: "Male", 
            phone_price: { $gt: 10000 } 
        }).sort({"id":1});
        res.status(200).json(ans);
    } catch(err) {
        res.status(500).json(err);
    }
});

//query3
router.get('/query3', async (req, res)=>{
    try {
        const ans = await Data.find({
            last_name: { $regex: /^M/i },
            quote: { $regex: /.{15}/ },
            email: { $regex: /M$/i },
          }).sort({"id":1});
        res.status(200).json(ans);
    } catch(err) {
        res.status(500).json(err);
    }
});

//query4
router.get('/query4', async (req, res)=>{
    try {
        const ans = await Data.find({
            car: { $in: ['BMW', 'Mercedes', 'Audi'] },
            email: { $not: /\d/ },
          }).sort({"id":1});
        res.status(200).json(ans);
    } catch(err) {
        res.status(500).json(err);
    }
});

//query5
router.get('/query5', async (req, res)=>{
    try {
        const ans = await Data.aggregate([{
            $group: {
                _id: "$city"/*{city: "$city"}*/,
                count: { $sum: 1 },
                avg_income: { $avg: { $toDouble: { $substr: [ "$income", 1, { $strLenCP: "$income" } ] } } }
            },
            },
            { $sort: { count: -1, avg_income: -1} },
            { $limit: 10 },
            {
              $project: {
                _id: 1,
                // "id": "$_id.city",
                "city": "$_id",
                count: "$count",
                average_income: { $round: [ "$avg_income", 2 ] }
                
              }
            }
        ]);
        res.status(200).json(ans);
    } catch(err) {
        res.status(500).json(err);
    }
});
module.exports = router;