import airportAndTransport from "./airport-and-transport";
import businessCentres from "./business-centres";
import constructionSites from "./construction-sites";
import education from "./education";
import gamingAndFinance from "./gaming-and-finance";
import governmentBuildings from "./government-buildings";
import gyms from "./gyms";
import hospitalsAndCareHomes from "./hospitals-and-care-homes";
import hotels from "./hotels";
import leisureVenues from "./leisure-venues";
import marinas from "./marinas";
import offices from "./offices";
import policeAndEmergencyServices from "./police-and-emergency-services";
import portAndShipyards from "./port-and-shipyards";
import residentialBuildings from "./residential-buildings";
import sportsVenues from "./sports-venues";
import touristAttractions from "./tourist-attractions";
import type { SectorContent } from "./types";
import warehousesAndIndustrial from "./warehouses-and-industrial";

/** Page copy for each sector, keyed by slug (see client/src/lib/sectors.ts). */
export const SECTOR_CONTENT: Record<string, SectorContent> = {
  offices,
  "gaming-and-finance": gamingAndFinance,
  "warehouses-and-industrial": warehousesAndIndustrial,
  "port-and-shipyards": portAndShipyards,
  "construction-sites": constructionSites,
  "business-centres": businessCentres,
  "government-buildings": governmentBuildings,
  "hospitals-and-care-homes": hospitalsAndCareHomes,
  "police-and-emergency-services": policeAndEmergencyServices,
  education,
  hotels,
  "tourist-attractions": touristAttractions,
  marinas,
  "airport-and-transport": airportAndTransport,
  gyms,
  "sports-venues": sportsVenues,
  "leisure-venues": leisureVenues,
  "residential-buildings": residentialBuildings,
};
