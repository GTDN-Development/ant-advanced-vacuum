import { ArrowLeftIcon } from "./components/icons/arrow-left-icon";
import { ArrowRightIcon } from "./components/icons/arrow-right-icon";
import { CaretDownIcon } from "./components/icons/caret-down-icon";
import { CloseIcon } from "./components/icons/close-icon";
import { CloseSmallIcon } from "./components/icons/close-small-icon";
import { Container } from "./components/container";
import { Card } from "./components/card";
import { Button } from "./components/button";
import { HeartIcon } from "./components/icons/heart-icon";

export default function App() {
  return (
    <>
      <div>Test</div>
      <CaretDownIcon aria-hidden="true" className="text-red-500 size-8" />
      <ArrowLeftIcon aria-hidden="true" className="text-red-500 size-8" />
      <ArrowRightIcon aria-hidden="true" className="text-red-500 size-8" />
      <CloseIcon aria-hidden="true" className="text-red-500 size-8" />
      <CloseSmallIcon aria-hidden="true" className="text-red-500 size-8" />

      <Container
        aria-hidden="true"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5"
      >
        <Card
          title="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          src="public/photo.jpeg"
        ></Card>
        <Card
          title="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          src="public/photo.jpeg"
        ></Card>
        <Card
          title="lorem ipsum lorem  lorem ipsum lorem ipsum lorem ipsum"
          src="public/photo.jpeg"
        ></Card>
        <Card
          title="l ipsum lorem ipsum lorem ipsum lorem ipsum"
          src="public/photo.jpeg"
        ></Card>
        <Button variant="secondary" icon="hasIcon">
          send wishlist
          <HeartIcon aria-hidden="true" className="text-red-500 size-8" />
        </Button>
      </Container>

      <Button variant="primary">klikni zde</Button>
      <Button variant="secondary" className="mt-10">
        klikni zde
      </Button>
    </>
  );
}
