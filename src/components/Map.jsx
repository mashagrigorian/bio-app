import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  //   const { t, i18n } = useTranslation();
  render() {
    return (
      <>
        {/* <h3>{t("ourAddress")}</h3> */}
        <h5>
          Մեր հասցեն ՝ Հայաստանի Հանրապետություն, ք․ Երևան, 0047, փող․ Ա․
          Արմենակյան 129{" "}
        </h5>
        <Map
          google={this.props.google}
          style={{ width: "30%", height: "30%" }}
          zoom={10}
          initialCenter={{
            lat: 49.19531,
            lng: -122.86467,
          }}
        />
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDwncsn8sBeNaenEpg1WIvo26tlPpQLClU",
})(MapContainer);
