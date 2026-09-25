import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "transparent",
        color: "#17191c",
        textAlign: "center",
        padding: 3,
        "@media(max-width:1900px)": {
          paddingBottom: "100px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#17191c",
          borderRadius: "24px",
          padding: 3,
          marginBottom: 3,
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 100, color: "white" }} />
      </Box>

      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#17191c", marginBottom: 2 }}
      >
        Oops! Something Went Wrong
      </Typography>

      <Typography variant="body1" sx={{ color: "#555", marginBottom: 3 }}>
        Sorry, we couldn't find the page you're looking for. Please try again
        later.
      </Typography>

      <Link to="/">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#17191c",
            color: "white",
            "&:hover": {
              backgroundColor: "#2b2e33",
            },
          }}
        >
          Go Back
        </Button>
      </Link>
    </Box>
  );
};

export default Error;
