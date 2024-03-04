import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import TLink from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { addTocart } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import cartitemSlice, { addCart } from "../redux/cartitemSlice";

export default function ProductCard({
  category,
  desc,
  img,
  name,
  price,
  quantity,
  id
}) {
  const dispatch = useDispatch();
  const handleaddTocart = (id) => {
    dispatch(addTocart(id));
    dispatch(addCart())
  };
  return (
    <Card sx={{ width: 220, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={img}
            srcSet={img}
            loading="lazy"
            alt=""
            style={{ objectFit: "contain" }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon style={{ fontSize: "16px" }} />}
          style={{ fontSize: "20px" }}
        >
          {name}
        </Link>
        <Typography level="body-xs">{desc}</Typography>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {"$" + price}
        </Typography>
        <Typography level="body-sm">
          (Only <b>{quantity}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button
          variant="solid"
          color="danger"
          size="lg"
          onClick={()=>handleaddTocart(id)}
        >
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            Add to cart
          </Link>
        </Button>
      </CardOverflow>
    </Card>
  );
}
