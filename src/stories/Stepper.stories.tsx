import React from "react";
import Stepper from "@/components/Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
};

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

export const Default = () => <Stepper steps={steps} />;
