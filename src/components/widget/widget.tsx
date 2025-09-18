import clsx from "clsx";
import { useState } from "react";
import type { Technology } from "../../lib/technologies";
import { technologySections } from "../../constants/technology-sections";
import {
  TopLeft as TopLeftSvg,
  TopRight as TopRightSvg,
  RightTop as RightTopSvg,
  RightBottom as RightBottomSvg,
  BottomRight as BottomRightSvg,
  BottomLeft as BottomLeftSvg,
  LeftBottom as LeftBottomSvg,
  LeftTop as LeftTopSvg,
  Center as CenterSvg,
} from "./svg-parts";
import { TechButton } from "../ui/tech-button";
import { clipPathValue } from "../clip-path-value";
import { Heading } from "../ui/heading";

type WidgetProps = React.ComponentProps<"div"> & {
  technologies?: Technology[];
  isInWishlist?: (slug: string) => boolean;
  onTechnologyClick?: (technology: Technology) => void;
};

export function Widget({
  technologies = [],
  isInWishlist,
  onTechnologyClick,
  ...props
}: WidgetProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (sectionName: string) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const handleKeyDown = (event: React.KeyboardEvent, sectionName: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSectionClick(sectionName);
    }
  };

  // Define which sections go on which side
  const rightSideSections = [
    "Vacuum Chamber",
    "Adsorption",
    "Vaporisation",
    "Virtual leaks",
    "Real leaks",
  ];
  const leftSideSections = ["Desorption", "BackFlow vacuum pump", "Permeation", "Diffusion"];

  return (
    <div {...props} className={clsx(props.className, "grid grid-cols-[1fr_auto_1fr] gap-8")}>
      <div className="flex min-h-[200px] items-start justify-end">
        <TechnologyMenu
          activeSection={activeSection}
          sectionNames={leftSideSections}
          technologies={technologies}
          isInWishlist={isInWishlist}
          onTechnologyClick={onTechnologyClick}
        />
      </div>
      <div {...props} className="relative aspect-square size-[648px]">
        <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          <TileLabel className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            Vacuum <br /> Chamber
          </TileLabel>
          <CenterSvg
            onClick={() => handleSectionClick("Vacuum Chamber")}
            onKeyDown={(e) => handleKeyDown(e, "Vacuum Chamber")}
          />
        </div>

        <div className="group absolute top-0 left-0 translate-x-2.5 select-none">
          <TileImage
            src="/widget-png/default/desorption.png"
            srcOnHover="/widget-png/hover/desorption.png"
            title="Desorption"
            className="absolute top-18 right-5 w-18"
          />
          <TileLabel className="absolute top-5 right-5">Desorption</TileLabel>
          <TopLeftSvg
            onClick={() => handleSectionClick("Desorption")}
            onKeyDown={(e) => handleKeyDown(e, "Desorption")}
          />
        </div>
        <div className="group absolute top-0 right-0 -translate-x-2.5 select-none">
          <TileImage
            src="/widget-png/default/adsorption.png"
            srcOnHover="/widget-png/hover/adsorption.png"
            title="Adsorption"
            className="absolute top-18 left-5 w-18"
          />
          <TileLabel className="absolute top-5 left-5">Adsorption</TileLabel>
          <TopRightSvg
            onClick={() => handleSectionClick("Adsorption")}
            onKeyDown={(e) => handleKeyDown(e, "Adsorption")}
          />
        </div>
        <div className="group absolute top-0 right-0 translate-y-2.5 select-none">
          <TileImage
            src="/widget-png/default/vaporisation.png"
            srcOnHover="/widget-png/hover/vaporisation.png"
            title="Vaporisation"
            className="absolute right-5 bottom-12.5 w-33.5"
          />
          <TileLabel className="absolute right-5 bottom-5">Vaporisation</TileLabel>
          <RightTopSvg
            onClick={() => handleSectionClick("Vaporisation")}
            onKeyDown={(e) => handleKeyDown(e, "Vaporisation")}
          />
        </div>
        <div className="group absolute right-0 bottom-0 -translate-y-2.5 select-none">
          <TileImage
            src="/widget-png/default/virtual-leaks.png"
            srcOnHover="/widget-png/hover/virtual-leaks.png"
            title="Virtual leaks"
            className="absolute top-16 right-5 w-23"
          />
          <TileLabel className="absolute top-5 right-5">Virtual leaks</TileLabel>
          <RightBottomSvg
            onClick={() => handleSectionClick("Virtual leaks")}
            onKeyDown={(e) => handleKeyDown(e, "Virtual leaks")}
          />
        </div>
        <div className="group absolute right-0 bottom-0 -translate-x-2.5 select-none">
          <TileImage
            src="/widget-png/default/real-leaks.png"
            srcOnHover="/widget-png/hover/real-leaks.png"
            title="Real leaks"
            className="absolute top-5.5 left-8 w-10"
          />
          <TileLabel className="absolute bottom-5 left-5">Real leaks</TileLabel>
          <BottomRightSvg
            onClick={() => handleSectionClick("Real leaks")}
            onKeyDown={(e) => handleKeyDown(e, "Real leaks")}
          />
        </div>
        <div className="group absolute bottom-0 left-0 translate-x-2.5 select-none">
          <TileImage
            src="/widget-png/default/backflow-vacuum-pump.png"
            srcOnHover="/widget-png/hover/backflow-vacuum-pump.png"
            title="Backflow vacuum pump"
            className="absolute top-10 right-8 w-13"
          />
          <TileLabel className="absolute right-5 bottom-5">Backflow vacuum pump</TileLabel>
          <BottomLeftSvg
            onClick={() => handleSectionClick("BackFlow vacuum pump")}
            onKeyDown={(e) => handleKeyDown(e, "BackFlow vacuum pump")}
          />
        </div>
        <div className="group absolute bottom-0 left-0 -translate-y-2.5 select-none">
          <TileImage
            src="/widget-png/default/permeation.png"
            srcOnHover="/widget-png/hover/permeation.png"
            title="Permeation"
            className="absolute top-14 left-5 w-38"
          />
          <TileLabel className="absolute top-5 left-5">Permeation</TileLabel>
          <LeftBottomSvg
            onClick={() => handleSectionClick("Permeation")}
            onKeyDown={(e) => handleKeyDown(e, "Permeation")}
          />
        </div>
        <div className="group absolute top-0 left-0 translate-y-2.5 select-none">
          <TileImage
            src="/widget-png/default/diffusion.png"
            srcOnHover="/widget-png/hover/diffusion.png"
            title="Diffusion"
            className="absolute bottom-12 left-5 w-33"
          />
          <TileLabel className="absolute bottom-5 left-5">Diffusion</TileLabel>
          <LeftTopSvg
            onClick={() => handleSectionClick("Diffusion")}
            onKeyDown={(e) => handleKeyDown(e, "Diffusion")}
          />
        </div>
      </div>
      <div className="flex min-h-[200px] items-start justify-start">
        <TechnologyMenu
          activeSection={activeSection}
          sectionNames={rightSideSections}
          technologies={technologies}
          isInWishlist={isInWishlist}
          onTechnologyClick={onTechnologyClick}
        />
      </div>
    </div>
  );
}

function TileLabel(props: React.ComponentProps<"span">) {
  return (
    <span
      {...props}
      className={clsx(
        "pointer-events-none text-lg font-bold group-hover:text-white",
        props.className
      )}
    >
      {props.children}
    </span>
  );
}

function TileImage(
  props: React.ComponentProps<"div"> & {
    src: string;
    srcOnHover: string;
    title: string;
  }
) {
  return (
    <div {...props} className={clsx(props.className, "pointer-events-none")}>
      <img src={props.src} alt={props.title} className="w-full object-contain group-hover:hidden" />
      <img
        src={props.srcOnHover}
        alt={props.title}
        className="hidden w-full object-contain group-hover:block"
      />
    </div>
  );
}

type TechnologyMenuProps = {
  activeSection: string | null;
  sectionNames: string[];
  technologies: Technology[];
  isInWishlist?: (slug: string) => boolean;
  onTechnologyClick?: (technology: Technology) => void;
};

export function TechnologyMenu({
  activeSection,
  sectionNames,
  technologies,
  isInWishlist,
  onTechnologyClick,
  ...props
}: React.ComponentProps<"div"> & TechnologyMenuProps) {
  if (!activeSection || !sectionNames.includes(activeSection)) {
    return null;
  }

  const getFilteredTechnologies = (sectionName: string) => {
    const section = technologySections.find((s) => s.name === sectionName);
    if (!section) return [];

    return technologies.filter((tech) => {
      if (Array.isArray(section.technologySection)) {
        return section.technologySection.includes(tech.technologySection);
      }
      return tech.technologySection === section.technologySection;
    });
  };

  const filteredTechnologies = getFilteredTechnologies(activeSection);

  return (
    <div {...props}>
      <Heading as="h3">{activeSection}</Heading>
      <ul className="mt-4 space-y-2">
        {filteredTechnologies.length === 0 && (
          <li>
            <p className="text-gray-500">No items found</p>
          </li>
        )}
        {filteredTechnologies.map((tech, index) => (
          <li key={index}>
            <TechButton
              style={{ clipPath: clipPathValue }}
              isSelected={isInWishlist ? isInWishlist(tech.slug) : false}
              onClick={() => onTechnologyClick?.(tech)}
              className={clsx(
                "w-full text-sm transition-all duration-200",
                isInWishlist && isInWishlist(tech.slug) && "ring-2 ring-red-500 ring-offset-2"
              )}
            >
              {tech.name}
            </TechButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
