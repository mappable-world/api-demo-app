# Integration API Demo Application

This is a powerful React application designed to demonstrate how our API can be integrated.
See the [**live example**](https://mappable.world/demo/index.html).

The demo app encapsulates all the logic within a single browser page, with 4 main components:

- The `customer` is a user who can place orders in our store,
  which will be delivered to a pick-up point or a selected address.
  The customer can also request delivery from point A to point B.
- The `driver` is a user who accepts orders, navigates to the order, brings it, and delivers it to the destination point.
  The server tracks their position and builds past and remaining routes.
- The `manager` is a user who can view both orders and drivers and analyze them.
- The `server` is the page application that simulates server work.
  It patches `window.fetch` to interact with `/api/...` requests.
  The server stores entities in a `SQLite` database using a [fork of SQL.js](https://github.com/danielbarela/sql.js),
  with the [RTree module enabled](https://www.sqlite.org/rtree.html).
  The server also provides an HTTP interface similar to `Express.js`.

The application includes the following APIs:

- [Geosuggest API](https://mappable.world/docs/suggest-api/index.html) - used in case of searching for addresses for the customer.
- [Places API](https://mappable.world/docs/geosearch-api/index.html) - used for finding necessary points on the map for the customer.
- [Geocoder API](https://mappable.world/docs/geocoder-api/index.html) - to obtain the coordinates of a point based on an address and vice versa.
- [Distance Matrix API](https://mappable.world/docs/distancematrix-api/index.html) for calculating distance and route time.
  Used at the server to find the closest warehouse that can package the order after it is created.
- [Route Details API](https://mappable.world/docs/router-api/index.html) for building routes between two or more points.
  Used to plan routes for the customer, arrival, and remaining for the driver
- [Isochrone API](https://mappable.world/docs/isoline-api/index.html) API for creating a reachability area from a point within a specified duration.
  Used to find the closest pickpoints in the area of the first suggested address.
   The server filters pickpoints in the database using an `RTree index` and combines them into the suggested results.
- The [Static API](https://mappable.world/docs/static-api/index.html) is used by the application to demonstrate a selected pickpoint on the map for `customer`.
- The [JavaScript API](https://mappable.world/docs/js-api/index.html) is used to show interactive maps for `customer`, `driver` and `manager`.
