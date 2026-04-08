import { Box, Divider, Rating, Typography, Paper, Button } from "@mui/material";
import Form from "./components/Form";
import { data } from "./data";
import { useEffect, useState } from "react";

function Page01() {
  const id = "l-2";
  const { price, name, descImag, themImg, phone, slug } = data.filter(
    (item) => item?.id === id,
  )[0];
  const goToForm = () => {
    window.scrollTo({
      top: 545,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const h = () => setShowBtn(window.scrollY > 1000);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <Box>
      <>
        <Paper
          elevation={0}
          sx={{
            position: "fixed",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "95%",
            p: 2,
            zIndex: 1300,
            backgroundColor: "transparent",

            // إخفاء على الحاسوب
            display: { xs: "block", md: "none" },
          }}
        >
          <Button
            onClick={goToForm}
            fullWidth
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              fontSize: "1.1rem",
              borderRadius: "12px",
              backgroundColor: "#000",
              fontWeight: "bold",

              position: "fixed",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",

              opacity: showBtn ? 1 : 0,
              pointerEvents: showBtn ? "auto" : "none",
              transition: "all 0.3s ease",

              "&:hover": {
                backgroundColor: "#111",
              },
            }}
          >
            🛒 أطلب الآن — الدفع عند الاستلام
          </Button>
        </Paper>
      </>
      <Box
        padding={"12px 250px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"start"}
        flexWrap={"wrap-reverse"}
        sx={{
          "@media(max-width:1600px)": {
            padding: "12px 180px",
          },
          "@media(max-width:1300px)": {
            padding: "12px 120px",
          },
          "@media(max-width:1100px)": {
            padding: "12px 80px",
          },
          "@media(max-width:900px)": {
            padding: "12px 5px",
          },
        }}
      >
        <Box
          sx={{
            width: "49%",
            padding: "10px",
            backgroundColor: "#eee",
            borderRadius: "12px",
            "@media(max-width:900px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            id="title"
            sx={{
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "29px",
              marginBottom: "8px",
            }}
          >
            {name}
          </Typography>
          {slug && (
            <Typography
              id="title"
              sx={{
                textAlign: "right",
                fontWeight: "bold",

                fontSize: "19px",
                marginBottom: "15px",
              }}
            >
              {slug}
            </Typography>
          )}
          {phone && (
            <Typography
              id="title"
              sx={{
                textAlign: "right",
                fontSize: "22px",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              رقم الهاتف :
              <a
                href={`tel:${phone}`}
                style={{
                  textDecoration: "none",
                  marginRight: "6px",
                }}
              >
                {phone}
              </a>
            </Typography>
          )}

          <Typography sx={{ marginBottom: "2px", textAlign: "right" }}>
            <Rating value={5} readOnly />
          </Typography>
          <Box display={"flex"} gap={"4px"} justifyContent={"flex-end"}>
            <Typography
              sx={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "32px",
                color: "rgb(135 96 161)",
              }}
            >
              دج
            </Typography>
            <Typography
              id="price"
              sx={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "32px",
                color: "rgb(135 96 161)",
              }}
            >
              {price}
            </Typography>
          </Box>
          <Form id={id} />
          <Divider />

          <Box marginTop={"50px"}>
            <Box marginTop={"50px"} width={"100%"}>
              <img
                src={descImag}
                alt=""
                style={{ margin: "8px 0", width: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "sticky",
            top: "50px",
            width: "49%",
            "@media(max-width:900px)": {
              width: "100%",
              marginBottom: "20px",
              position: "unset",
            },
          }}
        >
          <Box marginBottom={"15px"}>
            <img
              id="mainImg"
              style={{ width: "100%", objectFit: "cover", height: "100%" }}
              src={themImg}
              alt="img"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Page01;
