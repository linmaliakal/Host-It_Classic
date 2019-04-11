cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-contacts.contacts",
      "file": "plugins/cordova-plugin-contacts/www/contacts.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "navigator.contacts"
      ]
    },
    {
      "id": "cordova-plugin-contacts.Contact",
      "file": "plugins/cordova-plugin-contacts/www/Contact.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "Contact"
      ]
    },
    {
      "id": "cordova-plugin-contacts.convertUtils",
      "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
      "pluginId": "cordova-plugin-contacts"
    },
    {
      "id": "cordova-plugin-contacts.ContactAddress",
      "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactAddress"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactError",
      "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactError"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactField",
      "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactField"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactFindOptions",
      "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactFindOptions"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactName",
      "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactName"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactOrganization",
      "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactOrganization"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactFieldType",
      "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
      "pluginId": "cordova-plugin-contacts",
      "merges": [
        ""
      ]
    },
    {
      "id": "cordova-plugin-contacts.contacts-ios",
      "file": "plugins/cordova-plugin-contacts/www/ios/contacts.js",
      "pluginId": "cordova-plugin-contacts",
      "merges": [
        "navigator.contacts"
      ]
    },
    {
      "id": "cordova-plugin-contacts.Contact-iOS",
      "file": "plugins/cordova-plugin-contacts/www/ios/Contact.js",
      "pluginId": "cordova-plugin-contacts",
      "merges": [
        "Contact"
      ]
    },
    {
      "id": "cordova-plugin-googlemaps.Promise",
      "file": "plugins/cordova-plugin-googlemaps/www/Promise.js",
      "pluginId": "cordova-plugin-googlemaps"
    },
    {
      "id": "cordova-plugin-googlemaps.BaseClass",
      "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.BaseArrayClass",
      "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.LatLng",
      "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.LatLngBounds",
      "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.VisibleRegion",
      "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Location",
      "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.CameraPosition",
      "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Polyline",
      "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Polygon",
      "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Marker",
      "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
      "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Circle",
      "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.TileOverlay",
      "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.GroundOverlay",
      "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Common",
      "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.encoding",
      "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.spherical",
      "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.poly",
      "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Geocoder",
      "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.LocationService",
      "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Map",
      "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.event",
      "file": "plugins/cordova-plugin-googlemaps/www/event.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.MapTypeId",
      "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.KmlOverlay",
      "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.KmlLoader",
      "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Environment",
      "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.MarkerCluster",
      "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Cluster",
      "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.geomodel",
      "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.commandQueueExecutor",
      "file": "plugins/cordova-plugin-googlemaps/www/commandQueueExecutor.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.pluginInit",
      "file": "plugins/cordova-plugin-googlemaps/www/pluginInit.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.StreetViewPanorama",
      "file": "plugins/cordova-plugin-googlemaps/www/StreetViewPanorama.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Overlay",
      "file": "plugins/cordova-plugin-googlemaps/www/Overlay.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Thread",
      "file": "plugins/cordova-plugin-googlemaps/www/Thread.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.InlineWorker",
      "file": "plugins/cordova-plugin-googlemaps/www/InlineWorker.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.googlemaps-cdv-plugin",
      "file": "plugins/cordova-plugin-googlemaps/www/plugin-loader-for-android_ios.js",
      "pluginId": "cordova-plugin-googlemaps",
      "clobbers": [
        "plugin.google.maps"
      ]
    },
    {
      "id": "cordova-plugin-googlemaps.js_CordovaGoogleMaps",
      "file": "plugins/cordova-plugin-googlemaps/www/js_CordovaGoogleMaps-for-android_ios.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-contacts": "3.0.1",
    "cordova-plugin-googlemaps": "2.5.3"
  };
});