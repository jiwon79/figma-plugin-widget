import { PluginNetwork } from "./PluginNetwork";

async function bootstrap() {
  figma.ui.onmessage = PluginNetwork.onMessage;

  if (figma.editorType === "figma") {
    figma.showUI(__html__, {
      width: 240,
      height: 280,
      title: "Dummy Date",
    });
  } else if (figma.editorType === "figjam") {
    figma.showUI(__html__, {
      width: 240,
      height: 280,
      title: "Dummy Date",
    });
  }
}

bootstrap();
