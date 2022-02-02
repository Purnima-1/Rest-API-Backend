
const Subscriber = require('../models/subscriber')

const getSubscriber = async function getSubscriber(req,res,next){
let subscriber;

try {
    subscriber = await Subscriber.findById(req.params.id)
    if (subscriber == null){
        return res.status(404).json({message: "Cannot find the subscriber"})
    }

} catch (err) {
    return res.status(500).json({message: err.message})
}
res.subscriber = subscriber
next()
}

module.exports = getSubscriber;