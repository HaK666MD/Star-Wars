import React from "react";
import ListItem from "../ListItem";

import { withData, withSwapiData } from "../hocHelpers";

const renderWithData = (RenderItem, func) => {
  return props => <RenderItem {...props}>{func}</RenderItem>;
};

const renderName = item => `${item.name}`;

const mapUserMethodToprops = swapi => {
  return { getData: swapi.getUsers };
};

const mapPlanetMethodToprops = swapi => {
  return { getData: swapi.getPlanets };
};

const mapStarshipMethodToprops = swapi => {
  return { getData: swapi.getStarShips };
};

const UsersList = withSwapiData(
  withData(renderWithData(ListItem, renderName)),
  mapUserMethodToprops
);

const PlanetsList = withSwapiData(
  withData(renderWithData(ListItem, renderName)),
  mapPlanetMethodToprops
);

const StarshipList = withSwapiData(
  withData(renderWithData(ListItem, renderName)),
  mapStarshipMethodToprops
);

export { UsersList, PlanetsList, StarshipList };
