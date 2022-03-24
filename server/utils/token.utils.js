module.exports.newToken = function newToken(money) {
  //less than 100rwf
  if (money < 100) return;
  let days = money / 100;
  //exceeds 5years
  if (days > 365 * 5) return;

  let token = days.toString();
  let dd = 0;
  if (token.length === 1) {
    dd = Math.floor(100000 + Math.random() * 900000);
  }
  if (token.length === 2) {
    dd = Math.floor(10000 + Math.random() * 90000);
  }
  if (token.length === 3) {
    dd = Math.floor(1000 + Math.random() * 9000);
  }
  if (token.length === 4) {
    dd = Math.floor(100 + Math.random() * 900);
  }
  dd = dd.toString();
  token = token + dd + token.length.toString();

  return token;
};

module.exports.tokenInfo = function tokenInfo(token) {
  token = token.toString();
  let i = token[7];
  let days = token.substr(0, i);
  return days;
};
