import { LinkIcon } from "@ui/components";
import IconLinkedin from "@ui/assets/icon/icon-linkedin.png";
import IconTwitter from "@ui/assets/icon/icon-twitter.png";

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
      <h3 className="mt-3 mb-1">Contact</h3>
      <div className="flex flex-row gap-1">
        <LinkIcon src={IconTwitter} href="https://twitter.com/ijiwon59585123" />
        <LinkIcon src={IconLinkedin} href="https://linkedin.com/in/jiiwon79" />
      </div>
    </div>
  );
}
