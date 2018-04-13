module.exports =
{
    getHouses: (req, res) =>
    {
        const dbInstance = req.app.get('db');
        //console.log('get all working');

        dbInstance.get_Houses().then(houses => res.status(200).send(houses))
        .catch(() => res.status(500).send());
    },
    addHouse: (req, res, next) =>
    {
        const dbInstance = req.app.get('db');
        //console.log('create working:', req.body);
        const {name, address, city, state, zipcode} = req.body;
        //console.log(name, address, city, state, zipcode);

        dbInstance.add_House([name, address, city, state, zipcode])
        .then(() => res.status(200).send()).catch(() => res.status(500).send());
    },
    deleteHouse: (req, res, next) =>
    {
        const dbInstance = req.app.get('db');
        console.log('getting into delete');
        const { id } = req.params;
        console.log("ID = ", id);
        

        dbInstance.delete_House([id]).then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    }
}