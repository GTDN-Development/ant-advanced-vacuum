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
import { Widget } from "./components/widget/widget";

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
      <Container className="hidden lg:flex items-center justify-center">
        <Widget />
      </Container>

      {/* Mobile menu */}
      <Container className="flex flex-col gap-4 mt-16">
        {loadingTechnologies ? (
          <div>Loading menu...</div>
        ) : (
          technologySections.map((section, index) => {
            const filteredTechnologies = technologies.filter((tech) => {
              if (Array.isArray(section.technologySection)) {
                return section.technologySection.includes(
                  tech.technologySection,
                );
              }
              return tech.technologySection === section.technologySection;
            });

            return (
              <Collapsible key={index}>
                <CollapsibleTrigger className="bg-gray-100 py-5 px-5 font-bold text-2xl text-center w-full">
                  {section.name}
                </CollapsibleTrigger>
                <CollapsibleContent asChild>
                  <div className="py-6">
                    {filteredTechnologies.length > 0 ? (
                      <ul className="flex flex-col gap-5">
                        {filteredTechnologies.map((tech, subIndex) => (
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
                    ) : (
                      <div className="px-5 py-4 text-gray-500 text-center">
                        No technologies available for this section
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })
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

type TechnologySection = {
  name: string;
  technologySection: string | string[];
};

const technologySections: TechnologySection[] = [
  {
    name: "Vacuum Chamber",
    technologySection: [
      "vacuumChamber",
      "vacuumEnviroment",
      "vacuumEnvironment",
    ],
  },
  { name: "Adsorption", technologySection: "adsorption" },
  { name: "Vaporisation", technologySection: "vaporisation" },
  { name: "Virtual leaks", technologySection: "virtualLeaks" },
  { name: "Real leaks", technologySection: "realLeaks" },
  { name: "BackFlow vacuum pump", technologySection: "backFlowVacuumPump" },
  { name: "Permeation", technologySection: "permeation" },
  { name: "Diffusion", technologySection: "diffusion" },
  { name: "Desorption", technologySection: ["desorption", "dessorption"] },
];
