import React from "react";
import { withWidth, Typography, Hidden, Button } from "@material-ui/core";
import {
  ThemeProvider,
  useTheme,
  createMuiTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

function MyComponent() {
  const width = useWidth();
  return (
    <div>
    <Typography variant="h6" color="initial">
      <span>{`width: ${width}`}</span>;
    </Typography>
    <Hidden xsDown>
      <Button variant="contained" color="primary">
        xs
      </Button>
    </Hidden>
    <Hidden mdUp>
      <Button variant="contained" color="secondary">
        +
      </Button>
    </Hidden>
    </div>
  );
}
const theme = createMuiTheme();

export const Oculto = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MyComponent />
    </ThemeProvider>
  );
};
export default withWidth()(Oculto);
