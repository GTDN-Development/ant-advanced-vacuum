import { ArrowLeftIcon } from "./components/icons/arrow-left-icon";
import { ArrowRightIcon } from "./components/icons/arrow-right-icon";
import { CaretDownIcon } from "./components/icons/caret-down-icon";
import { CloseIcon } from "./components/icons/close-icon";
import { CloseSmallIcon } from "./components/icons/close-small-icon";

export default function App() {
  return (
    <>
      <div>Test</div>
      <CaretDownIcon aria-hidden="true" className="text-red-500 size-8" />
      <ArrowLeftIcon aria-hidden="true" className="text-red-500 size-8" />
      <ArrowRightIcon aria-hidden="true" className="text-red-500 size-8" />
      <CloseIcon aria-hidden="true" className="text-red-500 size-8" />
      <CloseSmallIcon aria-hidden="true" className="text-red-500 size-8" />
    </>
  );
}
