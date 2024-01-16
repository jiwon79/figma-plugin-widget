import { cn } from "@ui/@/lib/utils";

interface LogoIconProps {
  href: string;
  src: string;
  className?: string;
}

export function LogoIcon({ href, src, className }: LogoIconProps) {
  return (
    <div className="flex flex-row items-center gap-1">
      <img
        src={src}
        alt="twitter x logo"
        className="w-7 h-7 border-2 border-gray-600 rounded-sm p-1"
      />
      <p className="text-sm text-gray-800">{href}</p>
    </div>
  );
}
