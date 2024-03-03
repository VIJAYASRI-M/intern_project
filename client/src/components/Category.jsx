import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Category({ id, name, img }) {
  return (
    <Link to="/products"style={{textDecoration:"none",}}>
      <Card sx={{ minHeight: "180px", width: 220 }}>
        <CardCover>
          <img src={img} srcSet={img} loading="lazy" alt="" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
