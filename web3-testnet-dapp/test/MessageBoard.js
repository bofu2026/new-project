const { expect } = require("chai");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");

describe("MessageBoard", function () {
  async function deployFixture() {
    const MessageBoard = await ethers.getContractFactory("MessageBoard");
    const contract = await MessageBoard.deploy("Hello from test");
    await contract.waitForDeployment();
    return contract;
  }

  it("stores the initial message", async function () {
    const contract = await deployFixture();
    expect(await contract.getMessage()).to.equal("Hello from test");
    expect(await contract.updateCount()).to.equal(0);
  });

  it("updates the message and increments the counter", async function () {
    const contract = await deployFixture();
    await expect(contract.updateMessage("Updated from test"))
      .to.emit(contract, "MessageUpdated")
      .withArgs("Hello from test", "Updated from test", anyValue, 1);

    expect(await contract.getMessage()).to.equal("Updated from test");
    expect(await contract.updateCount()).to.equal(1);
  });
});
