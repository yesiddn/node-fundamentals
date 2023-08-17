// encryptar contraseñas
const bcrypt = require('bcrypt');

const password = '1234Segura!';

let hashPass = '$2b$05$EPzh1MMyQHsThQo/xJyeF.XykodqZnULekueJdeo9Utd1AVKWF2S.';

bcrypt.hash(password, 5, function (err, hash) {
  console.log(hash);

  console.log('hash', hashPass);
});

bcrypt.compare(password, hashPass, function (err, res) {
  // console.log(err);
  console.log(res);
});
