const numberModel = require("../models/number").Number;
router.get('/', (req, res) => {
    let condition = {};
    let limit = 100;
    if (req.query.limit)
        limit = req.query.limit;
    numberModel.findAll({ limit: limit }).then(numbers => {
        res.send(numbers);
    })
        .catch(err => res.status(500).send(err));
});
router.get('/:id', (req, res) => {
    if (!req.params.id)
        return res.sendStatus(400);
    numberModel.findOne({ where: { id: req.params.id } })
        .then(number => res.send(number))
        .catch(err => {
        console.log('error', err);
        res.status(400).send(err);
    });
});
router.post('/', (req, res) => {
    if (!req.body.digit)
        res.status(400).end();
    numberModel.findOne()
        .then(number => {
        let currentDay = new Date();
        currentDay.setSeconds(currentDay.getSeconds() - 10);
        if (number.length > 3 || number.updatedAt < currentDay) {
            numberModel.create({ number: req.body.digit }).then(result => res.status(201).send(result)
                .catch(err => res.status(500).send(err)));
        }
        else {
            number.number = number.number + req.body.digit;
            numberModel.upsert(number).then(result => res.status(200).send(result))
                .catch(err => res.status(500).send(err));
        }
    })
        .catch(error => console.log(error));
});
//# sourceMappingURL=number.js.map