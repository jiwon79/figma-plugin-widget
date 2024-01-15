import { cn } from "@ui/@/lib/utils";

interface NavigationProps {
  items: string[];
  selected: string;
  onSelect: (item: string) => void;
}

export function Navigation({ items, selected, onSelect }: NavigationProps) {
  return (
    <nav>
      <ul className="flex py-1">
        {items.map((item) => (
          <li key={item} className="mx-1">
            <button
              className="px-2 py-1 transition-all"
              onClick={() => onSelect(item)}
            >
              <p
                className={cn(
                  item === selected
                    ? "text-gray-800 border-b-2"
                    : "text-gray-400",
                  "border-gray-400 text-sm pb-0.5"
                )}
              >
                {item}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
