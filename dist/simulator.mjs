const _0x17e7 = [
  "\x0a\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>",
  "innerHTML",
  "#tradesTable",
  "toFixed",
  "querySelector",
  "random",
  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>$",
  "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>",
  "\x0a\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20<th>Trade\x20#</th>\x0a\x20\x20\x20\x20\x20\x20<th>Opening\x20Balance</th>\x0a\x20\x20\x20\x20\x20\x20<th>Profit\x20/\x20Loss</th>\x0a\x20\x20\x20\x20\x20\x20<th>Closing\x20Balance</th>\x0a\x20\x20\x20\x20</tr>\x0a\x20\x20",
];
(function (_0x4f4389, _0x17e776) {
  const _0x5536b1 = function (_0x2c7955) {
    while (--_0x2c7955) {
      _0x4f4389["push"](_0x4f4389["shift"]());
    }
  };
  _0x5536b1(++_0x17e776);
})(_0x17e7, 0x1b1);
const _0x5536 = function (_0x4f4389, _0x17e776) {
  _0x4f4389 = _0x4f4389 - 0x0;
  let _0x5536b1 = _0x17e7[_0x4f4389];
  return _0x5536b1;
};
const tradesTable = document[_0x5536("0x3")](_0x5536("0x1"));

function runSimulation(_0x59832d, _0x3db844, _0x23c2d2, _0x18a338, _0x3ca4f2) {
  let amountOfWinners = 0,
    amountOfLosers = 0,
    actualWinRate = 0;
  tradesTable["innerHTML"] = _0x5536("0x7");
  for (let _0x5ad985 = 0x0; _0x5ad985 < _0x59832d; _0x5ad985++) {
    const _0x4fb3b4 = Math[_0x5536("0x4")](),
      _0x2e9ef6 = _0x3db844 * _0x18a338 * _0x3ca4f2,
      _0x2662ff = _0x3db844 * _0x18a338 * -0x1;
    let _0x35a7df;
    _0x4fb3b4 < _0x23c2d2
      ? ((_0x35a7df =
          "\x0a\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>" +
          (_0x5ad985 + 0x1) +
          _0x5536("0x5") +
          _0x3db844[_0x5536("0x2")](0x2) +
          _0x5536("0x5") +
          _0x2e9ef6[_0x5536("0x2")](0x2) +
          _0x5536("0x5") +
          (_0x3db844 + _0x2e9ef6)["toFixed"](0x2) +
          "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>"),
        (_0x3db844 += _0x2e9ef6),
        amountOfWinners++)
      : ((_0x35a7df =
          _0x5536("0x8") +
          (_0x5ad985 + 0x1) +
          _0x5536("0x5") +
          _0x3db844[_0x5536("0x2")](0x2) +
          "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>$" +
          _0x2662ff[_0x5536("0x2")](0x2) +
          _0x5536("0x5") +
          (_0x3db844 + _0x2662ff)[_0x5536("0x2")](0x2) +
          _0x5536("0x6")),
        (_0x3db844 += _0x2662ff),
        amountOfLosers++),
      (tradesTable[_0x5536("0x0")] += _0x35a7df);
  }
  return (
    (actualWinRate = amountOfWinners / (amountOfWinners + amountOfLosers)),
    {
      amountOfLosers: amountOfLosers,
      amountOfWinners: amountOfWinners,
      actualWinRate: actualWinRate,
    }
  );
}
export default runSimulation;
