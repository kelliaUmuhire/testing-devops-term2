const { newToken, tokenInfo } = require("../utils/token.utils");

describe("Token Functions", () => {
  it("Creates a token with days", () => {
    let token = newToken(1000);
    expect(token[7]).toEqual(2);
    // expect(token[7]).toEqual(1)
  });
  it("Returns days in token", () => {
    let days = tokenInfo(17688021);
    expect(days).toEqual(1);
  });
});
