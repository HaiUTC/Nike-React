import { Tab, Tabs } from "@mui/material";



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
const TabHeader = ({value,handleChange}) =>{
    return (
      <div className="flex justify-center">
         <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All orders" {...a11yProps(0)} />
          <Tab label="Confirmation" {...a11yProps(1)} />
          <Tab label="Delivery" {...a11yProps(2)} />
          <Tab label="Delivered" {...a11yProps(3)} />
          <Tab label="Cancelled" {...a11yProps(4)} />
        </Tabs>
      </div>
    );
}

export default TabHeader;