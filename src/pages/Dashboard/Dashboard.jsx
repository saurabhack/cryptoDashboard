import { Box,Flex, GridItem,Grid } from "@chakra-ui/react"
import SideNav from "../../components/SideNav"
import TopNav from "../../components/TopNav"
import DashboardLayOut from "../../components/DashboardLayOut"
import PortFolio from "./components/PortFolio"
import PriceSection from "./components/PriceSection"
function Dashboard({children}){
    return(
        <>
        <DashboardLayOut title={"Dashboard"}>
            <Grid gridTemplateColumns={{
                base:"repeat(1,1fr)",
                md:"repeat(2,1fr)",
                gap:"4"
            }}>
                <GridItem colSpan={2}>
            <PortFolio/>
            </GridItem>
            <GridItem colSpan={2}>
            <PriceSection/>
            </GridItem>
            </Grid>
        </DashboardLayOut>
        </>
    )
}
export default Dashboard