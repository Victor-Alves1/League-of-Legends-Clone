import OverviewHome from "./HomeComponents/Overview/OverviewHome";
import HomeNav from "./HomeComponents/HomeNav";

import { useState } from "react";

const HomeBody = ({setBg}) => {
    const [HomeScreen, setHomeScreen]= useState(<OverviewHome/>)
    return (
        <>
            <HomeNav 
                setHomeScreen={setHomeScreen}
                setBg={setBg}
            />
            {HomeScreen}
        </>
    );
}
export default HomeBody;