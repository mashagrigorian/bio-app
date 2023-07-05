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
                <iframe
                  style={{
                    width: "80%",
                    height: "600px",
                  }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Yerevan+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </Stack>
          </div>
        </Container>
      </>
    );
  }
}

export default MapContainer;
