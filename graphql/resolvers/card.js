const Event = require('../../models/event');
const Card = require('../../models/card');
const {transformCard,transformEvent} = require('./merge');

module.exports = {    
    cards: async (args,req) => {
        if (!req.isAuth) {
            throw new Error('unauthenticated!');
        }
        try {
            const cards = await Card.find();
            return cards.map(card => {
                return transformCard(card);
            });
        } catch (err) {
            throw err;
        }
    },
    createCard: async (args,req) => {
        if (!req.isAuth) {
            throw new Error('unauthenticated!');
        }
        const fetchedEvent = await Event.findOne({ _id: args.eventId });
        const card = new Card( {
            user: req.userId,
            event: fetchedEvent
        });
        const result = await card.save();
        return transformCard(result);
    },
    cancelCard: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('unauthenticated!');
        }
        try {
            const card = await Card.findById(args.cardId).populate('event');
            const event = transformEvent(card.event);
            await Card.deleteOne({_id:args.cardId});
            return event;
        } catch (err) {
            throw err;
        }
    }
};