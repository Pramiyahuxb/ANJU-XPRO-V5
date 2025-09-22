//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFXY2FnNk5FZ0xick9mS21nSGVZclo3SklaeEJPdVlpSU1qZ0ZrdUtYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9xZFRpS1k3S3pPMmZIdFlLUE1EZGVwQkF2TTRnc09YNHpBUnZERVYxND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTVlTaitKcUFMU3B1Uk5jKzFiRy9wMXZ6dmN4WE02Mmh2cTB3SU5pV1dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTCs5a0V5dnV0ZXR1ajN1YWVGbkVkYzFVU1M0V1ZueExYOThyNVluQ2prPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFbC9aSVlxTGxrYTNnbjFCRWg0OWVYNEhYQ2t6aHlQYjRiNk94WFEzVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwyN0RlUkk5QVBKbG5nQmNwZDgzdTA4Z3d6YUVPd1NZdjBOcXdoTzRKQ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0pQdzFXajdXT3dQbGx0MnJiVnBwMVlKMmRtc2FweTdCVnNORWZQRW1tST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHlRUnNuVHhyNFU3RFJxbjRUZ2RKRGhBbUkvUWx0SjRQdng3dTdxZEdRZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8rdThKbmR5V2hRWDhTSEhSamNwQzRyc2NGV2hSbS9jMWdVREFZRW5zZnN5NnlZbk1ySW8zT2lrSEwxNmJwQTQxaDFrVThneDJaSXpBSFREbDdnK0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJ2UGQ5VCsvcVBvN0hUUXlOR2x1K2haL2NycEJNWjduK3VWekRydFNiNUFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhTi1kSVdyLVMydXpnVlYwcVhtbnZRIiwicGhvbmVJZCI6IjAwZjQ4MTY1LWMzZGItNDc1OS05MjE0LTEzYzEwZjU2ZGJkMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1bjI2Z2N5a01sM0NpTjlkeVluMWRoOStMRkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlZYRERrckhpT0s5UlI3N05Pd3pHYzFFY1RjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjI0NlJCRFI0IiwibWUiOnsiaWQiOiI5NDcxMzc4ODYyNjo1OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI1Mzc4OTY1MTA3NTI1Mzo1OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tmcjhaOEVFT1dLeGNZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdyLzNTVGJ6REttclovVDJGb25TaTFXeTllTVEwcG9UMVpGcUF6VEE3eE09IiwiYWNjb3VudFNpZ25hdHVyZSI6InZxUVhIWnlQZ3JkSkhHRXVxYUM3STdzQURYUXlzVEZqZFAzdUhTN0FqYWRIeWR0ZWl5QTRUaDh5aVBrMVBKcU1ROEZhM212emZadWJBdFFVazhobURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLZWxvek5adFVHTXowUFlYbjVZb0gxTVBFNk5kYTBRVk52TVJKY2pFY2pNam5yai9LRmllb09LYmRtNFZBSjNNbHRlYmdUOWR2OUNCUW5CdWkxYzZEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzEzNzg4NjI2OjU4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllLLzkwazI4d3lwcTJmMDloYUowb3RWc3ZYakVOS2FFOVdSYWdNMHdPOFQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODU0NTI2NywibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
