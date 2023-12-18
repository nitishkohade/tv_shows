import { Box, CircularProgress } from "@mui/material";

type LoaderProps = {
  loading: boolean;
  children: React.ReactNode;
};

export const Loader = ({ loading, children }: LoaderProps) => {
  return loading ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  ) : (
    <>{children}</>
  );
};
