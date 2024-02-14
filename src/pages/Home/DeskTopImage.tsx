import React from "react";

import {
    DesktopContainer,
    DesktopScreenContainer,
    TableContainer,
    ScreenContainer,
    PlantContainer,
} from "./homeElements";
import GetImage from "../../components/GetImage/GetImage";

const DeskTopImage = () => {
    return (
        <DesktopContainer>
            <DesktopScreenContainer>
                <PlantContainer>
                    <GetImage plant={true} whichPlant='plant3' />
                </PlantContainer>
                <ScreenContainer>
                    <GetImage item={true} whichItem='computerScreen' />
                </ScreenContainer>
                <GetImage item={true} whichItem='display' />
            </DesktopScreenContainer>
            <TableContainer>
                <GetImage item={true} whichItem='longFeetTable' />
            </TableContainer>
        </DesktopContainer>
    );
};

export default DeskTopImage;
