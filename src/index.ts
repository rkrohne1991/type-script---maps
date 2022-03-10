//AIzaSyD5PH5K4VWuZxXGM4NWb6NP57uFenOLGPE

import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);

console.log(user);
console.log(company);
