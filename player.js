import useScript from "./useScript.js";
export default function Player(config) {
  if (config.id && config.file) {
    if (!window.Playerjs) {
      window.pjsconfig = config;
      useScript("https://site.com/playerjs.js");
    } else {
      CreatePlayer(config);
    }
  }
  return "";
}
function CreatePlayer(config) {
  new window.Playerjs(config);
}
window.PlayerjsAsync = function () {
  if (window.pjsconfig) {
    CreatePlayer(window.pjsconfig);
    window.pjsconfig = undefined;
  }
}