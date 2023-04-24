import TextField from "./TextField";
import FooterColumn from "./FooterColumn";
import Dwonloads from "./Dwonloads";
import styles from "./MainFooter.module.css";
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
      <FooterColumn columnTitle={"Exclusive"} ListItem={Exclusive}>
        <h4>Subscribe</h4>
        <TextField></TextField>
      </FooterColumn>
      <FooterColumn columnTitle={"Support"} ListItem={Support} />
      <FooterColumn columnTitle={"Account"} ListItem={Account} />
      <FooterColumn columnTitle={"QuickLink"} ListItem={QuickLink} />
      <FooterColumn columnTitle={"DownloadApp"} ListItem={DownloadApp}>
        <Dwonloads /> 
      </FooterColumn>
    </div>
  );
};