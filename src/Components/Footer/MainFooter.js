import TextField from "./TextField";
import FooterColumn from "./FooterColumn";
import Dwonloads from "./Dwonloads";
import styles from "./MainFooter.module.css";
import { Grid } from "@mui/material";

export default function MainFooter() {
  const Exclusive = [ 
    "Get 10% off your first order",
  ]

  const Support = [
    " 111 Bijou sarnie, Dhaka, DH 1515, Bangladesh.",
    "exclusive@gmail.com",
    "+88015-88888-9999",
  ]

  const Account = [
    " My Account",
    "Login / Register",
    "Cart",
    "Wishlist",
    "Shop",
  ]
  const QuickLink = [
    " Privacy Policy",
    "Terms Of Use",
    "FAQ",
    "Contact",
  ]

  const DownloadApp = [
    "Save $3 with App New User Only",
  ]

  return (
    <div className={styles.Container}>
      <Grid container spacing={{ xs: 0, sm: 2, md: 27 }}>
        {/* Exclusive Column */}
        <Grid item xs={12} sm={5} md={2}>
          <FooterColumn columnTitle={"Exclusive"} ListItem={Exclusive}>
            <h4>Subscribe</h4>
            <TextField />
          </FooterColumn>
        </Grid>

        {/* Support Column */}
        <Grid item xs={12} sm={5} md={2}>
          <FooterColumn columnTitle={"Support"} ListItem={Support} />
        </Grid>

        {/* Account Column */}
        <Grid item xs={12} sm={5} md={2}>
          <FooterColumn columnTitle={"Account"} ListItem={Account} />
        </Grid>

        {/* Quick Link Column */}
        <Grid item xs={12} sm={5} md={2}>
          <FooterColumn columnTitle={"QuickLink"} ListItem={QuickLink} />
        </Grid>

        {/* Download App Column */}
        <Grid item xs={12} sm={5} md={2}>
          
          <FooterColumn columnTitle={"DownloadApp"} ListItem={DownloadApp}>
            <Dwonloads />
          </FooterColumn>
        </Grid>
      </Grid>
    </div>
  );
};
