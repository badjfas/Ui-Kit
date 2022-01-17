import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>텍스트</Button>;
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const ContainedPrimary = Template.bind({});

ContainedPrimary.args = {
  variant: "contained",
  color: "primary",
};

export const ContainedSecondary = Template.bind({});

ContainedSecondary.args = {
  variant: "contained",
  color: "secondary",
};

export const ContainedError = Template.bind({});

ContainedError.args = {
  variant: "contained",
  color: "error",
};

export const ContainedSuccess = Template.bind({});

ContainedSuccess.args = {
  variant: "contained",
  color: "success",
};

export const OutlinedPrimary = Template.bind({});

OutlinedPrimary.args = {
  variant: "outlined",
  color: "primary",
};

export const OutlinedSecondary = Template.bind({});

OutlinedSecondary.args = {
  variant: "outlined",
  color: "secondary",
};

export const OutlinedError = Template.bind({});

OutlinedError.args = {
  variant: "outlined",
  color: "error",
};

export const OutlinedSuccess = Template.bind({});

OutlinedSuccess.args = {
  variant: "outlined",
  color: "success",
};

export const Text = Template.bind({});

Text.args = {
  variant: "text",
};
