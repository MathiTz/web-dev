let NeDB = require("nedb");
let db = new NeDB({
  filename: "users.db",
  autoload: true
});

module.exports = app => {
  const { check, validationResult } = require("express-validator");
  let route = app.route("/users"),
    routeId = app.route("/users/:id");

  route.get((req, res) => {
    db.find({})
      .sort({ name: 1 })
      .exec((err, users) => {
        if (err) {
          app.utils.error.send(err, req, res);
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json({
            users
          });
        }
      });
  });

  route.post(
    [
      check("name", "O nome é obrigatório.")
        .not()
        .isEmpty(),
      check("email", "O email está vazio.")
        .not()
        .isEmpty(),
      check("email", "O email está inválido").isEmail()
    ],
    (req, res) => {
      let errors = validationResult(req);

      if (errors && errors.length > 0) {
        app.utils.error.send(errors, req, res);
        return false;
      } else {
        db.insert(req.body, (err, user) => {
          if (err) {
            app.utils.error.send(err, req, res);
          } else {
            res.status(200).json(user);
          }
        });
      }
    }
  );

  routeId.get((req, res) => {
    db.findOne({ _id: req.params.id }).exec((err, user) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user);
      }
    });
  });

  routeId.put((req, res) => {
    db.update({ _id: req.params.id }, req.body, err => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(Object.assign(req.params, req.body));
      }
    });
  });

  routeId.delete((req, res) => {
    db.remove({ _id: req.params.id }, {}, err => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(req.params);
      }
    });
  });
};
