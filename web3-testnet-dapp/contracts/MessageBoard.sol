// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MessageBoard {
    string private message;
    uint256 public updateCount;

    event MessageUpdated(
        string previousMessage,
        string newMessage,
        address indexed updater,
        uint256 newUpdateCount
    );

    constructor(string memory initialMessage) {
        require(bytes(initialMessage).length > 0, "Initial message required");
        message = initialMessage;
    }

    function getMessage() external view returns (string memory) {
        return message;
    }

    function updateMessage(string calldata newMessage) external {
        require(bytes(newMessage).length > 0, "Message cannot be empty");

        string memory previousMessage = message;
        message = newMessage;
        updateCount += 1;

        emit MessageUpdated(previousMessage, newMessage, msg.sender, updateCount);
    }
}
