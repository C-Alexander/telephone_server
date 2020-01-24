const stateModel = require("../models/state").State;
router.get('/', (req, res) => {
    stateModel.findAll().then(state => {
        res.send(this.state);
    })
        .catch(err => res.status(500).send(err));
});
router.get('/:id', (req, res) => {
    if (!req.params.id)
        return res.sendStatus(400);
    stateModel.findOne({ where: { id: req.params.id } })
        .then(state => res.send(state))
        .catch(err => {
        console.log('error', err);
        res.status(400).send(err);
    });
});
router.put('/:id', (req, res) => {
    stateModel.upsert(req.body).then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err));
});
//# sourceMappingURL=phone.js.map