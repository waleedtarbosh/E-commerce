import image1 from "./ProductImages/image1.png";
import image2 from "./ProductImages/image2.png";
import image3 from "./ProductImages/image3.png";
import image4 from "./ProductImages/image4.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const productDetails = [
  {
    images: [
      { img: image1, id: 1 },
      { img: image2, id: 2 },
      { img: image3, id: 3 },
      { img: image4, id: 4 },
    ],
    path: "Account / Gaming / Havic HV G-92 Gamepad",
    title: "Havic HV G-92 Gamepad",
    rating: {
      rate: 4.1,
      count: 150,
    },
    price: 192,
    inStock: true,
    discreption:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    sizes: [
      { size: "XS", id: 1 },
      { size: "S", id: 2 },
      { size: "M", id: 3 },
      { size: "L", id: 4 },
      { size: "XL", id: 5 },
    ],
    availableColors: [
      { color: "#89CFF0", id: 1 },
      { color: "#E07575", id: 2 },
    ],
  },
];

export const productIconData = [
  {
    id: 1,
    iconName: <FavoriteBorderIcon sx={{ color: "#000000" }} />,
    top: 12,
    right: 12,
    backgroundColor: "#FFFFFF",
    variant: "rounded",
  },
];
