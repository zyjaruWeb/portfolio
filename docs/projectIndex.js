//create index for all projects

const projects = [];

import { ownLoremIpsum } from "./OWN LOREM IPSUM/projectInfo.js";
import { colorFlipper } from "./COLOR FLIPPER/projectInfo.js";
import { simpleLedger } from "./simpleLedgerAPI/projectInfo.js";
import { dashboard } from "./Dashboard/projectInfo.js";

// const {ownLoremIpsum} = ("../OWN LOREM IPSUM/projectInfo")
// const {colorFlipper} = ("../COLOR FLIPPER/projectInfo")

//connect different projects information into one array
projects.push(ownLoremIpsum, colorFlipper, simpleLedger, dashboard);

// projects = [ownLoremIpsum, colorFlipper]

export { projects };
