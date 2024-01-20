// https://www.figma.com/plugin-docs/manifest/
export default {
  name: "Dummy Date",
  id: "1329456254452207875",
  api: "1.0.0",
  main: "plugin.js",
  ui: "index.html",
  capabilities: [],
  enableProposedApi: false,
  editorType: ["figma", "figjam"],
  permissions: ["payments"],
  networkAccess: { allowedDomains: ["none"] },
};
