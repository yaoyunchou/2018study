function BingMap(config) {
  this.map = null;
  this.center = null;
  this.config = {
    credentials: "AgnYN2m1W0epu_MpnwA0vIIy3LFDH73sy5WgwYmKyWNoRuy4L3kNt7Y-Tkr1p7L1",
    lat: 0,
    lng: 0,
    zoom: 17,
    domId: "",
    title: "",
    description: ""
  };
  this.config = Object.assign({}, this.config, config);
  this.loadMap = function () {
    this.center = new Microsoft.Maps.Location(this.config.lat, this.config.lng);
    this.map = new Microsoft.Maps.Map(
      document.getElementById(this.config.domId), {
        credentials: this.config.credentials,
        center: this.center,
        zoom: this.config.zoom,
        domId: this.config.domId
      }
    );
    this.pushPin(this.center);
    this.infoBox(this.center, this.config.title, this.config.description);
  };
  this.pushPin = function (pins) {
    if (this.map != null) {
      var pushpin = new Microsoft.Maps.Pushpin(pins, null);
      this.map.entities.push(pushpin);
      pushpin.setOptions({
        enableHoverStyle: true,
        enableClickedStyle: true
      });
    } else {
      console.log("Map load error.");
    }
  };
  this.infoBox = function (loc, title, description) {
    var infobox = new Microsoft.Maps.Infobox(loc, {
      title: title,
      description: description
    });
    infobox.setMap(this.map);
  };
}

export default BingMap
