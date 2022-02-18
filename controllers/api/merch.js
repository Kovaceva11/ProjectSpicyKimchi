const router = require("express").Router();
const { merch } = require("../models");

// GET all merch
router.get("/", async (req, res) => {
  try {
    const dbMerchData = await merch.findAll({});

    const merchData = dbMerchData.map((merch) => merch.get({ plain: true }));

    res.render("store", { merchData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get("/merch/:id", async (req, res) => {
  try {
    const dbMerchData = await merch.findByPk(req.params.id, {});

    const merchData = [dbMerchData.get({ plain: true })];
    res.render("store", { merchData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
