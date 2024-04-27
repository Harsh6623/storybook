import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dialog from "@/components/Dialog";
import ReactDOM from "react-dom";
export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    isOpen: {
      control: "boolean",
      defaultValue: false,
      description: "Controls whether the dialog is open or not",
    },
    onClose: { action: "closed" },
  },
} as Meta;
const Template: StoryFn = (args) => {
  const handleOpenDialog = () => {
    const dialogId = "dialog";
    let dialog = document.getElementById(dialogId);
    if (!dialog) {
      dialog = document.createElement("div");
      dialog.id = dialogId;
      document.body.appendChild(dialog);
    }
    const handleCloseDialog = () => {
      if (dialog && dialog.parentNode) {
        dialog.parentNode.removeChild(dialog);
      }
    };
    ReactDOM.render(
      <Dialog {...args} isOpen={true} onClose={handleCloseDialog} />,
      dialog
    );
  };
  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleOpenDialog}
      >
        Open Dialog
      </button>
    </>
  );
};
export const DialogBox = Template.bind({});
DialogBox.args = {};
