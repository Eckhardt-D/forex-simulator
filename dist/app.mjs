const _0x4e37 = [
  "form",
  "querySelector",
  "#losers",
  "#winRate",
  "submit",
  "#riskToReward",
  "addEventListener",
  "#startingBalance",
  "value",
  "#strategyWinRate",
  "innerText",
  "#riskPerTrade",
  "#winners",
  "click",
  "Please\x20Enter\x20All\x20Fields",
  "preventDefault",
  "#numTrades",
];
(function (_0x5d82a6, _0x4e37db) {
  const _0x2a4cec = function (_0x402972) {
    while (--_0x402972) {
      _0x5d82a6["push"](_0x5d82a6["shift"]());
    }
  };
  _0x2a4cec(++_0x4e37db);
})(_0x4e37, 0x1ed);
const _0x2a4c = function (_0x5d82a6, _0x4e37db) {
  _0x5d82a6 = _0x5d82a6 - 0x0;
  let _0x2a4cec = _0x4e37[_0x5d82a6];
  return _0x2a4cec;
};
import _0x579147 from "./simulator.mjs";
const form = document[_0x2a4c("0x1")](_0x2a4c("0x0")),
  winners = document[_0x2a4c("0x1")](_0x2a4c("0xc")),
  losers = document[_0x2a4c("0x1")](_0x2a4c("0x2")),
  winRate = document[_0x2a4c("0x1")](_0x2a4c("0x3")),
  simButton = document[_0x2a4c("0x1")]("#simButton"),
  startingBalanceInput = document[_0x2a4c("0x1")](_0x2a4c("0x7")),
  numTradesInput = document["querySelector"](_0x2a4c("0x10")),
  riskPerTradeInput = document[_0x2a4c("0x1")](_0x2a4c("0xb")),
  riskToRewardInput = document[_0x2a4c("0x1")](_0x2a4c("0x5")),
  strategyWinRateInput = document["querySelector"](_0x2a4c("0x9"));
form["addEventListener"](
  _0x2a4c("0x4"),
  (_0x2f51a2) => void _0x2f51a2[_0x2a4c("0xf")]()
),
  simButton[_0x2a4c("0x6")](_0x2a4c("0xd"), (_0xc8918e) => {
    _0xc8918e[_0x2a4c("0xf")]();
    if (!setError()) {
      const {
        amountOfWinners: _0x338a0a,
        amountOfLosers: _0xbc3e6e,
        actualWinRate: _0xbcb04e,
      } = _0x579147(
        parseFloat(numTradesInput[_0x2a4c("0x8")]),
        parseFloat(startingBalanceInput[_0x2a4c("0x8")]),
        parseFloat(strategyWinRateInput[_0x2a4c("0x8")]),
        parseFloat(riskPerTradeInput[_0x2a4c("0x8")]),
        parseFloat(riskToRewardInput[_0x2a4c("0x8")])
      );
      (winners["innerText"] = _0x338a0a),
        (losers[_0x2a4c("0xa")] = _0xbc3e6e),
        (winRate[_0x2a4c("0xa")] = (_0xbcb04e * 0x64)["toFixed"](0x2) + "%");
    }
  });
function setError() {
  const _0x419bf1 = "";
  let _0xe798e2 = ![];
  return (
    (!startingBalanceInput[_0x2a4c("0x8")] ||
      !numTradesInput[_0x2a4c("0x8")] ||
      !riskPerTradeInput[_0x2a4c("0x8")] ||
      !riskToRewardInput[_0x2a4c("0x8")] ||
      !strategyWinRateInput[_0x2a4c("0x8")]) &&
      ((_0x419bf1 = _0x2a4c("0xe")), (_0xe798e2 = !![])),
    (document["querySelector"]("#error")[_0x2a4c("0xa")] = _0x419bf1),
    _0xe798e2
  );
}
