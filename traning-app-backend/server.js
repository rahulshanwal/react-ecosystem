const express = require("express"),
bodyParser = require("body-parser"),
app = express();
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let list = [
  {
  name: 'Jon Snow',
  house: 'Stark',
  occupation: 'Lord',
  gender: 'Male'
  },
  {
    name: 'Tyrion',
    house: 'Lannister',
    occupation: 'Hand of the king',
    gender: 'Male'
  }
]

router.get("/", function(req, res) {
  res.json({
      status: "My API is alive!"
  });
});

router.get("/characters", function(req, res) {
  res.send({data:list});
});

router.post('/character', function(req, res){
  list.push(req.body);
  res.send({data:list});
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', router);

app.listen(3001, function(){
    console.log('Service has started');
});

module.exports = app;
