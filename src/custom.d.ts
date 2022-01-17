export interface CustomButtonClasses {
  containedSuccess: string;
  containedError: string;
  outlinedSuccess: string;
  outlinedError: string;
}

declare module "@mui/material" {
  interface ButtonClasses extends CustomButtonClasses {}
}
