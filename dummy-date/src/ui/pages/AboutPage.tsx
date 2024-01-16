import { LogoIcon } from "@ui/components";

export function AboutPage() {
  return (
    <div className="flex flex-col h-screen px-3 py-2">
      <ul className="text-sm marker:text-blue-600">
        <li className="list-disc list-inside mb-1">
          This plugin changes the text to the date of the given format.
        </li>
        <li className="list-disc list-inside mb-1">
          If the feature doesn't work, please let me know via Figma comments or
          at jiiwon79@gmail.com. I'll fix it as soon as possible.
        </li>
        <li className="list-disc list-inside">
          If the plugin works well or you like it, please give me a heart or a
          comment.
        </li>
      </ul>
      <div className="flex flex-col gap-1 mt-4">
        <LogoIcon
          src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/1227/X-256.png"
          href="twitter.com/ijiwon59585123"
        />
        <LogoIcon
          src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-256.png"
          href="linkedin.com/in/jiiwon79"
        />
      </div>
    </div>
  );
}
