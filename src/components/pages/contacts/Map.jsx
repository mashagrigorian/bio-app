import { Container, Stack } from "@mui/material";
import React, { Component } from "react";

class MapContainer extends Component {
  render() {
    return (
      <>
        <Container>
          <div>
            <Stack>
              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "center",
                  gap: "5px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "40px 0px",
                }}
              >
                {/* <h3>{t("ourAddress")}</h3> */}
                <iframe
                  style={{
                    width: "80%",
                    height: "600px",
                  }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=129%20Armenakyan%20Street,%20Yerevan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                {/* <Map
          google={this.props.google}
          style={{ width: "30%", height: "30%" }}
          zoom={10}
          initialCenter={{
            lat: 49.19531,
            lng: -122.86467,
          }}
        /> */}
              </div>
            </Stack>
          </div>
        </Container>
      </>
    );
  }
}

export default MapContainer;
