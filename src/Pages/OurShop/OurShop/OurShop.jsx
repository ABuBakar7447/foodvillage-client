import { useState } from "react";
import ShopBanner from "../ShopBanner/ShopBanner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const OurShop = () => {

    const fooditem = ['salad','pizza','soup','dessert','drinks'];
    const {category} = useParams();
    
    const initialIndex = fooditem.indexOf(category);
    
    const [tabIndex, setTabIndex] = useState(initialIndex);


    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
 
    return (
        <div>
            <Helmet>
                <title>Shop Items</title>
            </Helmet>
            <ShopBanner></ShopBanner>

            <div className="text-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList> 


                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                salad.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                            }
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                pizza.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                            }
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                soup.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                            }
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                dessert.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                            }
                        </div>
                    </TabPanel>
                    

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                drinks.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                            }
                        </div>
                    </TabPanel>
                    
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;