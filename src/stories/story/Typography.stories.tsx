import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "../../components/Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    controls: {
      include: ["color", "fontWeight"],
    },
  },
  argTypes: {
    fontWeight: {
      options: ["normal", "medium", "bold"],
      control: {
        type: "radio",
      },
    },

    color: {
      options: [
        "default",
        "primary",
        "textPrimary",
        "textSecondary",
        "error",
        "success",
        "warning",
      ],
      control: {
        type: "radio",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Typography> = (args) => {
  return (
    <React.Fragment>
      <Typography {...args} variant="body1">
        body1
      </Typography>
      <Typography {...args} variant="body2">
        body2
      </Typography>
      <Typography {...args} variant="subtitle1">
        subtitle1
      </Typography>
      <Typography {...args} variant="subtitle2">
        subtitle2
      </Typography>
      <Typography {...args} variant="h1">
        h1
      </Typography>
      <Typography {...args} variant="h2">
        h2
      </Typography>
      <Typography {...args} variant="h3">
        h3
      </Typography>
      <Typography {...args} variant="h4">
        h4
      </Typography>
      <Typography {...args} variant="caption">
        caption
      </Typography>
    </React.Fragment>
  );
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
