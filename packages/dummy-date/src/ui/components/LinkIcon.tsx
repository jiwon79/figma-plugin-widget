import { cn } from "@ui/@/lib/utils";
import { UINetwork } from "@ui/UINetwork";

interface LogoIconProps {
  href: string;
  src: string;
  className?: string;
}

export function LinkIcon({ href, src, className }: LogoIconProps) {
  const openLink = () => {
    UINetwork.send({
      type: "OPEN_LINK",
      payload: {
        url: href,
      },
    });
  };

  return (
    <div onClick={() => openLink()}>
      <img
        src={src}
        alt="twitter x logo"
        className={cn(
          "w-7 h-7 border-2 border-gray-600 rounded-sm p-1",
          className
        )}
      />
    </div>
  );
}
