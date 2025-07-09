const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/nisal-123/nisal-muhandiram/blob/main/images/download.jpeg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 NISAL-GM Is Alive Now😍*",
BOT_OWNER: '94768511681',  // Replace with the owner's phone number



};
