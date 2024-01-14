import { PluginNetwork } from "./PluginNetwork";

async function bootstrap() {
  figma.ui.onmessage = PluginNetwork.onMessage;

  if (figma.editorType === "figma") {
    figma.showUI(__html__, {
      width: 300,
      height: 400,
      title: "My Figma Plugin!",
    });
  } else if (figma.editorType === "figjam") {
    figma.showUI(__html__, {
      width: 800,
      height: 650,
      title: "My FigJam Plugin!",
    });
  }

  PluginNetwork.send({
    type: "TEST",
  });
}

bootstrap();
