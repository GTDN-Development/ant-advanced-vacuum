import { Button } from "./ui/button";
import { ArrowRightIcon } from "./icons/arrow-right-icon";
import { ScrollDownButton } from "./ui/scroll-down-button";
import { Container } from "./ui/container";
import { Heading, RedBadgeIcon } from "./ui/heading";
import clsx from "clsx";

export default function GetInTouch(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={clsx(props.className, "bg-gradient-to-b from-gray-200 via-gray-50 to-gray-200")}
    >
      <Container className="flex flex-col items-center gap-6 py-16 text-center">
        <div className="flex items-center gap-2">
          <RedBadgeIcon />
          <Heading as="h2" className="text-3xl">
            Get in touch
          </Heading>
        </div>

        <div className="flex flex-col items-start pt-2 text-left">
          <p className="text-xl font-light text-gray-500">
            Do you have questions about our Advanced Vacuum solution?
          </p>

          <p className="mt-6 text-base text-gray-600">
            We can deliver welded vacuum chambers of complex shapes and various sizes based on your
            specs.
          </p>

          <Button variant="secondary" className="mt-6 flex items-center gap-2 px-6 py-4">
            Contact form
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-16">
          <ScrollDownButton />
        </div>
      </Container>
    </div>
  );
}
