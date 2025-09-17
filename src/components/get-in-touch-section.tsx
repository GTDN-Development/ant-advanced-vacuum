import { Button } from "./button";
import { ArrowRightIcon } from "./icons/arrow-right-icon";
import { ScrollDownButton } from "./scroll-down-button";
import { RedBadgeIcon } from "./icons/red-badge-icon";

export default function GetInTouch() {
  return (
    <div className="flex flex-col items-center text-center gap-6 py-16">
      <div className="flex items-center gap-2">
        <RedBadgeIcon />
        <h1 className="text-4xl font-bold">Get in touch</h1>
      </div>

      <div className="pt-2 flex flex-col items-start text-left">
        <p className="text-xl text-gray-500 font-light">
          Do you have questions about our Advanced Vacuum solution?
        </p>

        <p className="text-base text-gray-600 mt-6">
          We can deliver welded vacuum chambers of complex shapes and various
          sizes based on your specs.
        </p>

        <Button
          variant="secondary"
          className="flex items-center gap-2 px-6 py-4 mt-6"
        >
          Contact form
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <div className="mt-16">
        <ScrollDownButton />
      </div>
    </div>
  );
}
