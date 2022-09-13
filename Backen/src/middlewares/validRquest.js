const { body, validationResult } = require("express-validator");

const validRequest = [
  body("concepto", "verificar concepto").exists().not().isEmpty(),
  body("categoria", "verificar categoria").exists().not().isEmpty(),
  body("monto", "verificar monto").exists().not().isEmpty().isNumeric(),
  body("fecha", "verificar fecha").exists().not().isEmpty(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    }
    next();
  },
];
module.exports = validRequest;
