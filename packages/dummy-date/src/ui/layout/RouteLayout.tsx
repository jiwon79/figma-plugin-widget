import { useState } from "react";
import { Navigation } from "@won-dummy-date-ui/components";

interface RouteLayoutProps {
  routes: string[];
  defaultRoute: string;
  pages: Record<string, React.ReactNode>;
}

export function RouteLayout({ routes, defaultRoute, pages }: RouteLayoutProps) {
  const [route, setRoute] = useState<string>(defaultRoute);

  const handleRoute = (route: string) => {
    setRoute(route);
  };

  return (
    <div>
      <Navigation items={routes} selected={route} onSelect={handleRoute} />
      {Object.entries(pages).map(([key, value]) => (
        <div key={key} hidden={key !== route}>
          {value}
        </div>
      ))}
    </div>
  );
}
