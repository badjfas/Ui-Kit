import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Modal } from "../../components";
import { Grid } from "@mui/material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Modal",
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Modal> = (args) => {
  return (
    <Modal {...args} open={true}>
      Dynamic Contents
    </Modal>
  );
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({});

Default.args = {
  renderButton: () => {
    return (
      <Grid container spacing={1}>
        <Grid item sm={6}>
          <Button fullWidth variant="contained" size="large">
            1234
          </Button>
        </Grid>
        <Grid item sm={6}>
          <Button fullWidth variant="contained" size="large">
            1234
          </Button>
        </Grid>
      </Grid>
    );
  },
};
