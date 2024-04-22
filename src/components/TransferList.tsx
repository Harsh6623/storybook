import React, { useState } from "react";

export interface TransferListProps {
  availableItems: string[];
  transferredItems: string[];
  onTransfer: (
    items: string[],
    direction: "toTransferred" | "toAvailable"
  ) => void;
}

const TransferList: React.FC<TransferListProps> = ({
  availableItems,
  transferredItems,
  onTransfer,
}) => {
  const [selectedAvailableItems, setSelectedAvailableItems] = useState<
    string[]
  >([]);
  const [selectedTransferredItems, setSelectedTransferredItems] = useState<
    string[]
  >([]);

  const handleTransfer = (direction: "toTransferred" | "toAvailable") => {
    if (direction === "toTransferred") {
      // Move selected available items to transferred items
      onTransfer(selectedAvailableItems, direction);
      setSelectedAvailableItems([]);
    } else {
      // Move selected transferred items to available items
      onTransfer(selectedTransferredItems, direction);
      setSelectedTransferredItems([]);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex">
        {/* Available Items */}
        <div className="w-48 mr-4">
          <h3 className="text-lg font-semibold mb-2">Available Items</h3>
          <ul className="bg-gray-100 p-2 rounded">
            {availableItems.map((item, index) => (
              <li
                key={index}
                className={`py-1 px-2 cursor-pointer hover:bg-gray-200 ${
                  selectedAvailableItems.includes(item) ? "bg-blue-200" : ""
                }`}
                onClick={() =>
                  setSelectedAvailableItems((prev) =>
                    prev.includes(item)
                      ? prev.filter((i) => i !== item)
                      : [...prev, item]
                  )
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Transfer Buttons */}
        <div className="flex flex-col justify-center">
          <button
            className="my-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleTransfer("toTransferred")}
          >
            &gt;
          </button>
          <button
            className="my-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleTransfer("toAvailable")}
          >
            &lt;
          </button>
        </div>
        {/* Transferred Items */}
        <div className="w-48">
          <h3 className="text-lg font-semibold mb-2">Transferred Items</h3>
          <ul className="bg-gray-100 p-2 rounded">
            {transferredItems.map((item, index) => (
              <li
                key={index}
                className={`py-1 px-2 cursor-pointer hover:bg-gray-200 ${
                  selectedTransferredItems.includes(item) ? "bg-blue-200" : ""
                }`}
                onClick={() =>
                  setSelectedTransferredItems((prev) =>
                    prev.includes(item)
                      ? prev.filter((i) => i !== item)
                      : [...prev, item]
                  )
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransferList;
