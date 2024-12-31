import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderImg from "../assets/shop/banner2.jpg";
import Cover from "../Components/Cover.jsx";
import OrderTabs from "../Components/Order/OrderTabs.jsx";
import useMenu from "../Hooks/useMenu.jsx";

const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>Order - Bistro Boss</title>
            </Helmet>
            <Cover img={orderImg} title="Our Shop" />
            <Tabs
                defaultIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
                className="flex flex-wrap items-center justify-center gap-4 py-8 my-8"
            >
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
