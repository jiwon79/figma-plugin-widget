import { useState } from "react";
import { Navigation } from "@ui/components";

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
      {pages[route]}
    </div>
  );
}
