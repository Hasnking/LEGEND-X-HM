

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "hsncyber@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923183830766@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HsnCyber/LEGEND-X-HM";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajDL6mHFxP88HXtWG3F";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajDL6mHFxP88HXtWG3F";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HsnCyber/LEGEND-X-HM/main/asset/logo.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923183830766";
global.owner = process.env.OWNER_NUMBER || "923192144561";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/4dc85a29bee9f0fd24c71.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFLanUyU2NqWGl1SElTbjY4cXN5U2dPSzE1Q1MxZWNYaWpXTFg5QkJraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3pHRkQvKzJMQXM3SlU5eE5OYjVxMllIVVl4UXlnUlc1dUxUbHNtYW96QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ1VvOEt2TVdzZ3dHYVc3RUtobVBlQ1d2UHJjNHFjVkZLdG0rc0c5SzFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVKy9NYlZvVTFKMkZmdE9sN1lCOHlJTGhtN2ZwUGtkcGhtdlBndy9HaGpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJUkJvV2g1YUpKd2xPTWtLM1J6bllRcjNndkZOTnNmamRFL1FBY2tzVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFodXN3eXdoalJGTzRMeEFnQklnUTNTVm9SbXpaNHdVN2ZNeFRDQ0dzMnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEllcHBYSXYvMEhrMFNNSk8rZlhXWVRTY2ZwN05hZ2VieDdMWU01akRHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVJDcEJCa0sweWxubmtLNi9XWlZiSURpM2VmVHR2NWk3MURRRDE3eGl5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncwVDVhd092dk01bzBOUG1YSDJ6aXB5cGpRbi8wcm1lTGE5VWhYR3JrUk9veE1qZ2RDWllRaVBvS3RmaTlyQWJZbVZydloxWXRUeU5qWmdHd1FqZEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJvbDlaQUhMZm1FZS8vMDNrQndmdWZzUElwZXB0bzFTM2QxbEgwT1ZlRk9FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVejMwLVdKclFTdVZ0T3J0cF9jSkZRIiwicGhvbmVJZCI6ImQ0MDA3YWQ2LTBmYzctNDFiOS04ZmRhLWY2M2IyYjQ3NTNlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6TjljajMzeVV2QWlGMzhVRmtJN1JCK3hkclU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkh1Vy9tRDkwTnJTN04zZHg0TzlUYzFqUHAwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhKVzhNMUdNIiwibWUiOnsiaWQiOiI5MjMxOTIxNDQ1NjE6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGVwb0lnREVPblNnN1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRmdQeFFxVXhIRVRjTlovekQwdytOdjRhc0tLdG5odGQ3bFFhUEJabHNIcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVDBzQ3paNEpXVW5WRlY1VnBadUZmVEFCN1NudnRhL05oekhwR1Q2VytkbXkrUTdRT1BlM0hmY2hMaGVtZC9JVEdiM3hqNlN5TTdmVk1NTHVON0VuQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IjlJalJYOXNDNGluUnl6Z0JGR2hnNGRRVXVpdDA3VC9nZDE2b3dDQkttSk1WOTQxaUZJMFR5QTJhM3dyMTF5TlhNeEVVa2owWFIvTlNyYVlsU1ZtMUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTkyMTQ0NTYxOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUllEOFVLbE1SeEUzRFdmOHc5TVBqYitHckNpclo0YlhlNVVHandXWmJCNyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTgyMTU1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBeVcifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Powered By LEGEND-X-HM",
  author: process.env.PACK_AUTHER || "Legend",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "LEGEND-X-HM",
  ownername: process.env.OWNER_NAME || "MUBASHIR",
  errorChat: process.env.ERROR_CHAT || "923183830766",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "LEGEND").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
