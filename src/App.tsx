import { Container } from "./components/container";
import { Card } from "./components/card";
import { Button } from "./components/button";
import { HeartIcon } from "./components/icons/heart-icon";
import { Collapsible, CollapsibleContent } from "./components/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { clipPathValue } from "./components/clip-path-value";
import type { UseCase } from "./lib/usecases";
import { getAllUseCases } from "./lib/usecases";
import { getAllTechnologies } from "./lib/technologies";
import type { Technology } from "./lib/technologies";

import { useEffect, useState } from "react";

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loadingTechnologies, setLoadingTechnologies] = useState<boolean>(true);
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [loadingUseCases, setLoadingUseCases] = useState<boolean>(true);

  useEffect(() => {
    getAllTechnologies()
      .then(setTechnologies)
      .catch(console.error)
      .finally(() => setLoadingTechnologies(false));

    getAllUseCases()
      .then(setUseCases)
      .catch(console.error)
      .finally(() => setLoadingUseCases(false));
  }, []);

  return (
    <div className="py-10">
      {/* Mobile menu */}
      <Container className="flex flex-col gap-4 sm:hidden">
        {loadingTechnologies ? (
          <div>Loading menu...</div>
        ) : (
          Object.entries(
            technologies.reduce(
              (acc, tech) => {
                const section = tech.technologySection;
                if (!acc[section]) {
                  acc[section] = [];
                }
                acc[section].push(tech);
                return acc;
              },
              {} as Record<string, Technology[]>,
            ),
          ).map(([sectionName, techs], index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="bg-gray-100 py-5 px-5 font-bold text-2xl text-center w-full">
                {sectionName}
              </CollapsibleTrigger>
              <CollapsibleContent asChild>
                <ul className="flex flex-col gap-5 py-6">
                  {techs.map((tech, subIndex) => (
                    <li key={subIndex}>
                      <button
                        style={{ clipPath: clipPathValue }}
                        className="px-6 py-3 font-semibold text-lg bg-red-600 text-red-50"
                      >
                        {tech.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          ))
        )}
      </Container>

      {/*Cards*/}
      <Container aria-hidden="true" className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {loadingUseCases ? (
            <div>Loading...</div>
          ) : (
            <>
              {useCases.map((item, index) => (
                <Card key={index} title={item.name} src={item.images[0]} />
              ))}
            </>
          )}
        </div>

        <Button variant="secondary" className="mt-10">
          send wishlist
          <HeartIcon aria-hidden="true" className="text-red-500 size-8" />
        </Button>
      </Container>
    </div>
  );
}
