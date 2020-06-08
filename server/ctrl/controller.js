module.exports = {
  getInventory: async (req, res) => {
    const db = req.app.get("db");

    const inventory = await db.get_inventory();

    res.status(200).send(inventory);
  },
  createProduct: async (req, res) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;
    const data = await db.create_product(name, price, img).catch((err) => {
      res.status(500).send({ errorMessage: `Couldn't add product, sorry!` });
      console.log(err);
    });
    res.status(200).send(data);
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    const data = await db.delete_product(id).catch((err) => {
      res.status(500).send({ errorMessage: `Couldn't delete product, sorry!` });
      console.log(err);
    });
    res.status(200).send(data);
  },
};
