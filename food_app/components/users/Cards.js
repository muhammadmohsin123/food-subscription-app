//make components in this folder
// import classes from "./index.module.css";
import {
  Frame,
  TopBar,
  Navigation,
  Layout,
  Page,
  Stack,
  DisplayText,
  FooterHelp,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  SettingToggle,
} from "@shopify/polaris";

function Cards({ color, color2 }) {
  return (
    <div className='container'>
      <Stack alignment='center' distribution='fillEvenly' spacing='tight'>
        <div className={`main ${color}`}>
          <p className='text'>TOTAL</p>
          <p className='text' style={{ fontSize: "20px" }}>
            10
          </p>
        </div>
        <div className={`main ${color2}`}>
          <p className='text'>TOTAL</p>
          <p className='text' style={{ fontSize: "20px" }}>
            10
          </p>
        </div>
      </Stack>
    </div>
  );
}
export default Cards;
