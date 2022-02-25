import { Container, Grid } from "@material-ui/core";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({ displayLoadingRooms }) => {
  console.log("displayLoadingRooms:", displayLoadingRooms);
  console.log("In Skeloton Card");
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Grid container justify="center" spacing={2}>
              {displayLoadingRooms.map((item) => (
                <Grid item key={item._id}>
                  <div>
                    <div>
                      <Skeleton height={`13rem`} width={`285px`} />
                    </div>

                    <div>
                      <Skeleton height={`3.5rem`} width={`100%`} />
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SkeletonCard;
