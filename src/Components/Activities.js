import React from "react";
import { Box, Grid } from "@material-ui/core";

const activities = [{
    company: "Twitter Inc",
    ticker: "TWTR",
    stockPrice: "22.76 USD",
    timeElapsed: "5 sec ago",
},
{
    company: "Square Inc",
    ticker: "SQ",
    stockPrice: "45.28 USD",
    timeElapsed: "10 sec ago",
},]

function Activities() {
    return (
        <div>
            <h3>Cronograma de Actividades</h3>
            <Grid container>
                {
                    activities.map((data, index) => {
                        return (
                            <div>
                                <Box xsUp={4}>
                                    <h2>{data.company}</h2>
                                </Box>
                            </div>
                        )
                    }
                    )
                }
            </Grid>
        </div>
    );
}

export default Activities;