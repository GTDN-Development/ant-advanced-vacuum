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
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleSectionClick = (sectionName: string) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const handleKeyDown = (event: React.KeyboardEvent, sectionName: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSectionClick(sectionName);
    }
  };

  const handleMouseEnter = (sectionName: string) => {
    setHoveredSection(sectionName);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
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
    <div {...props} className={clsx(props.className, "grid w-full grid-cols-[1fr_auto_1fr] gap-8")}>
      <div className="flex min-h-[200px] w-full max-w-md items-start justify-end">
        <TechnologyMenu
          activeSection={activeSection}
          sectionNames={leftSideSections}
          technologies={technologies}
          isInWishlist={isInWishlist}
          onTechnologyClick={onTechnologyClick}
          className="w-full"
        />
      </div>
      <div {...props} className="relative aspect-square size-[648px]">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          <TileLabel
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            isHovered={hoveredSection === "Vacuum Chamber"}
          >
            Vacuum <br /> Chamber
          </TileLabel>
          <CenterSvg
            onPathClick={() => handleSectionClick("Vacuum Chamber")}
            onPathKeyDown={(e) => handleKeyDown(e, "Vacuum Chamber")}
            onPathMouseEnter={() => handleMouseEnter("Vacuum Chamber")}
            onPathMouseLeave={handleMouseLeave}
          />
        </div>

        <div className="pointer-events-none absolute top-0 left-0 translate-x-2.5 select-none">
          <TileImage
            src="/widget-png/default/desorption.png"
            srcOnHover="/widget-png/hover/desorption.png"
            title="Desorption"
            className="absolute top-18 right-5 w-18"
            isHovered={hoveredSection === "Desorption"}
          />
          <TileLabel className="absolute top-5 right-5" isHovered={hoveredSection === "Desorption"}>
            Desorption
          </TileLabel>
          <TopLeftSvg
            onPathClick={() => handleSectionClick("Desorption")}
            onPathKeyDown={(e) => handleKeyDown(e, "Desorption")}
            onPathMouseEnter={() => handleMouseEnter("Desorption")}
            onPathMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="pointer-events-none absolute top-0 right-0 -translate-x-2.5 select-none">
          <TileImage
            src="/widget-png/default/adsorption.png"
            srcOnHover="/widget-png/hover/adsorption.png"
            title="Adsorption"
            className="absolute top-18 left-5 w-18"
            isHovered={hoveredSection === "Adsorption"}
          />
          <TileLabel className="absolute top-5 left-5" isHovered={hoveredSection === "Adsorption"}>
            Adsorption
          </TileLabel>
          <TopRightSvg
            onPathClick={() => handleSectionClick("Adsorption")}
            onPathKeyDown={(e) => handleKeyDown(e, "Adsorption")}
            onPathMouseEnter={() => handleMouseEnter("Adsorption")}
            onPathMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="pointer-events-none absolute top-0 right-0 translate-y-2.5 select-none">
          <TileImage
            src="/widget-png/default/vaporisation.png"
            srcOnHover="/widget-png/hover/vaporisation.png"
            title="Vaporisation"
            className="absolute right-5 bottom-12.5 w-33.5"
            isHovered={hoveredSection === "Vaporisation"}
          />
          <TileLabel
            className="absolute right-5 bottom-5"
            isHovered={hoveredSection === "Vaporisation"}
          >
            Vaporisation
          </TileLabel>
          <RightTopSvg
            onPathClick={() => handleSectionClick("Vaporisation")}
            onPathKeyDown={(e) => handleKeyDown(e, "Vaporisation")}
            onPathMouseEnter={() => handleMouseEnter("Vaporisation")}
            onPathMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="pointer-events-none absolute right-0 bottom-0 -translate-y-2.5 select-none">
          <TileImage
            src="/widget-png/default/virtual-leaks.png"
            srcOnHover="/widget-png/hover/virtual-leaks.png"
            title="Virtual leaks"
            className="absolute top-16 right-5 w-23"
            isHovered={hoveredSection === "Virtual leaks"}
          />
          <TileLabel
            className="absolute top-5 right-5"
            isHovered={hoveredSection === "Virtual leaks"}
          >
            Virtual leaks
          </TileLabel>
          <RightBottomSvg
            onPathClick={() => handleSectionClick("Virtual leaks")}
            onPathKeyDown={(e) => handleKeyDown(e, "Virtual leaks")}
            onPathMouseEnter={() => handleMouseEnter("Virtual leaks")}
            onPathMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="pointer-events-none absolute right-0 bottom-0 -translate-x-2.5 select-none">
          <TileImage
            src="/widget-png/default/real-leaks.png"
            srcOnHover="/widget-png/hover/real-leaks.png"
            title="Real leaks"
            className="absolute top-5.5 left-8 w-10"
            isHovered={hoveredSection === "Real leaks"}
          />
          <TileLabel
            className="absolute bottom-5 left-5"
            isHovered={hoveredSection === "Real leaks"}
          >
            Real leaks
          </TileLabel>
          <BottomRightSvg
            onPathClick={() => handleSectionClick("Real leaks")}
            onPathKeyDown={(e) => handleKeyDown(e, "Real leaks")}
            onPathMouseEnter={() => handleMouseEnter("Real leaks")}
            onPathMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 translate-x-2.5 select-none">
          <TileImage
            src="/widget-png/default/backflow-vacuum-pump.png"
            srcOnHover="/widget-png/hover/backflow-vacuum-pump.png"
            title="Backflow vacuum pump"
            className="absolute top-10 right-8 w-13"
            isHovered={hoveredSection === "BackFlow vacuum pump"}
          />
          <TileLabel
            className="absolute right-5 bottom-5"
            isHovered={hoveredSection === "BackFlow vacuum pump"}
          >
            Backflow vacuum pump
          </TileLabel>
          <BottomLeftSvg
            onPathClick={() => handleSectionClick("BackFlow vacuum pump")}
            onPathKeyDown={(e) => handleKeyDown(e, "BackFlow vacuum pump")}
            onPathMouseEnter={() => handleMouseEnter("BackFlow vacuum pump")}
            onPathMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 -translate-y-2.5 select-none">
          <TileImage
            src="/widget-png/default/permeation.png"
            srcOnHover="/widget-png/hover/permeation.png"
            title="Permeation"
            className="absolute top-14 left-5 w-38"
            isHovered={hoveredSection === "Permeation"}
          />
          <TileLabel className="absolute top-5 left-5" isHovered={hoveredSection === "Permeation"}>
            Permeation
          </TileLabel>
          <LeftBottomSvg
            onPathClick={() => handleSectionClick("Permeation")}
            onPathKeyDown={(e) => handleKeyDown(e, "Permeation")}
            onPathMouseEnter={() => handleMouseEnter("Permeation")}
            onPathMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="pointer-events-none absolute top-0 left-0 translate-y-2.5 select-none">
          <TileImage
            src="/widget-png/default/diffusion.png"
            srcOnHover="/widget-png/hover/diffusion.png"
            title="Diffusion"
            className="absolute bottom-12 left-5 w-33"
            isHovered={hoveredSection === "Diffusion"}
          />
          <TileLabel
            className="absolute bottom-5 left-5"
            isHovered={hoveredSection === "Diffusion"}
          >
            Diffusion
          </TileLabel>
          <LeftTopSvg
            onPathClick={() => handleSectionClick("Diffusion")}
            onPathKeyDown={(e) => handleKeyDown(e, "Diffusion")}
            onPathMouseEnter={() => handleMouseEnter("Diffusion")}
            onPathMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <div className="flex min-h-[200px] w-full max-w-md items-start justify-start">
        <TechnologyMenu
          activeSection={activeSection}
          sectionNames={rightSideSections}
          technologies={technologies}
          isInWishlist={isInWishlist}
          onTechnologyClick={onTechnologyClick}
          className="w-full"
        />
      </div>
    </div>
  );
}

function TileLabel(props: React.ComponentProps<"span"> & { isHovered?: boolean }) {
  const { isHovered, ...spanProps } = props;
  return (
    <span
      {...spanProps}
      className={clsx(
        "pointer-events-none text-lg font-bold",
        isHovered ? "text-white" : "text-current",
        spanProps.className
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
    isHovered?: boolean;
  }
) {
  const { src, srcOnHover, title, isHovered, ...divProps } = props;
  return (
    <div {...divProps} className={clsx(divProps.className, "pointer-events-none")}>
      <img
        src={isHovered ? srcOnHover : src}
        alt={title}
        className="pointer-events-none w-full object-contain transition-opacity duration-200"
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
