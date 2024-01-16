import { PluginNetwork } from "./PluginNetwork";

async function bootstrap() {
  figma.ui.onmessage = PluginNetwork.onMessage;
  figma.showUI(__html__, {
    width: 300,
    height: 420,
    title: "Dummy Date",
  });
}

bootstrap();
