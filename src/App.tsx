import { Container } from "./components/container";
import { Card } from "./components/card";
import { Button } from "./components/button";
import { HeartIcon } from "./components/icons/heart-icon";
import { Widget } from "./components/widget";
import { Collapsible, CollapsibleContent } from "./components/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { clipPathValue } from "./components/clip-path-value";

export default function App() {
  return (
    <>
      {/*Mobile menu*/}
      <Container className="flex flex-col gap-4 sm:hidden">
        {menu.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className="bg-gray-100 py-5 px-5 font-bold text-2xl text-center w-full">
              {item.name}
            </CollapsibleTrigger>
            <CollapsibleContent asChild>
              <ul className="flex flex-col gap-5 py-6">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <button
                      style={{ clipPath: clipPathValue }}
                      className="px-6 py-3 font-semibold text-lg bg-red-600 text-red-50"
                    >
                      {subItem.name}
                    </button>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </Container>

      <Container
        aria-hidden="true"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5"
      >
        <Card
          title="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          src="public/photo.jpeg"
        />
        <Card
          title="  lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          src="public/photo.jpeg"
        />
        <Card
          title="lorem ipsum lorem  lorem ipsum lorem ipsum lorem ipsum"
          src="public/photo.jpeg"
        />
        <Card
          title="l ipsum lorem ipsum lorem ipsum lorem ipsum"
          src="public/photo.jpeg"
        />
        <Button variant="secondary" icon="hasIcon">
      {/*Cards*/}
      <Container aria-hidden="true" className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <Card
            title="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            src="public/photo.jpeg"
          />
          <Card
            title="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            src="public/photo.jpeg"
          />
          <Card
            title="lorem ipsum lorem  lorem ipsum lorem ipsum lorem ipsum"
            src="public/photo.jpeg"
          />
          <Card
            title="l ipsum lorem ipsum lorem ipsum lorem ipsum"
            src="public/photo.jpeg"
          />
        </div>
        <Button variant="secondary" className="mt-10">
          send wishlist
          <HeartIcon aria-hidden="true" className="text-red-500 size-8" />
        </Button>
      </Container>

      <Widget />
    </>
  );
}

const menu = [
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
  {
    name: "Lorem ipsum",
    subItems: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
    ],
  },
];
