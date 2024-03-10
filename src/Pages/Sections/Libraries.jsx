import React, { Fragment, useState } from "react";
import { Typography } from "@material-tailwind/react";
import SearchBar from "../Components/SearchBar";

export const Libraries = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Your library data
  const libraries = [
    {
      category: "Webpages",
      items: [
        {
          name: "PHET Interactive Simulation",
          link: "https://phet.colorado.edu/",
          image: "/images/links-images/PHET Interactive Simulation.png",
        },
        {
          name: "CK-12 Biology for High School",
          link: "https://www.ck12.org/student/",
          image: "/images/links-images/CK-12.png",
        },
      ],
    },
    {
      category: "Powerpoints",
      items: [
        {
          name: "Heredity, inheritance, and variation Chapter 1",
          link: "https://www.slideshare.net/VictorOribe/heredity-inheritance-and-variation-63558613",
          image:
            "/images/links-images/Heredity, inheritance, and variation Chapter 1.png",
        },
        {
          name: "Heredity, inheritance, and variation Chapter 2",
          link: "https://www.slideshare.net/HonorioManayaoJr/heredity-inheritance-and-variation-85710541?fbclid=IwAR22_B9EVYl5RWfKPdOzB5DJQciojonq_Ycp4DmWFJxfSb7Gwb9d0F5b9Hw",
          image:
            "/images/links-images/Heredity, inheritance, and variation Chapter 2.png",
        },
        {
          name: "Heredity, inheritance, and variation Chapter 3",
          link: "https://www.slideshare.net/HamizahMuhammad/chapter-3-heredity-and-variations",
          image:
            "/images/links-images/Heredity, inheritance, and variation Chapter 3.png",
        },
      ],
    },
    {
      category: "Youtube Videos",
      items: [
        {
          name: "From DNA to Protein",
          link: "https://www.youtube.com/watch?v=gG7uCskUOrA",
          image: "/images/links-images/From DNA to Protein.png",
        },
        {
          name: "Mutation",
          link: "https://www.youtube.com/watch?v=vl6Vlf2thvI",
          image: "/images/links-images/Mutation.png",
        },
        {
          name: "Science 10 Quarter 3 LAS 4 Heredity: Inheritance and Variation",
          link: "https://www.ck12.org/student/",
          image: "/images/links-images/Science10.png",
        },
      ],
    },
    {
      category: "Ebooks",
      items: [
        {
          name: "The Central Dogma",
          link: "https://www.filscihub.com/community/blogpost-bio-module-central-dogma?fbclid=IwAR2i0zNuNFbxvYgfm2fyoobxDs2OpR0FPnZpNgRJBCkx7oM-t32OviXpecU",
          image:
            "/images/The Central Dogma.png",
        },
        {
          name: "Mutation",
          link: "https://www.filscihub.com/community/blogpost-bio-module-mutation-abnormalities?fbclid=IwAR3JCk7xUkNR7G1l6CRM3q-gyYmOxy4rZUrSjPu8du0Hfpre1uPGBXSBPPY",
          image:
            "/images/Mutation-Ebook.png",
        },
        {
          name: "Heredity",
          link: "https://balliya.kvs.ac.in/sites/default/files/HEREDITY.pdf",
          image:
            "/images/Heredity-Ebook.png",
        },
      ],
    },
    {
      category: "Work Sheets",
      items: [
        {
          name: "Heredity and Genetics Matching Worksheets",
          link: "https://wordmint.com/public_puzzles/1897011?fbclid=IwAR3_vQoxq6JMYHnKWW4Rj6jaZbS1E7kQeg1W8_2gSvFlcOQ8CE_b8KlHDks",
          image:
            "/images/Genetic Variation Genetics.png",
        },
        {
          name: "Genetic Variation Genetics",
          link: "https://quizizz.com/en/genetic-variation-worksheets-class-10",
          image:
            "/images/links-images/Heredity, inheritance, and variation Chapter 2.png",
        },
      ],
    }
  ];

  // Filter libraries based on search term
  const filteredLibraries = libraries
    .map((section) => ({
      category: section.category,
      items: section.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <Fragment>
      <div className="h-full bg-[url('/images/libraries-bg.png')] bg-no-repeat bg-center bg-cover flex py-12 justify-center pl-6">
        <div className="flex flex-col gap-12 w-full lg:w-[1200px]">
          <div className="flex gap-12">
            <Typography className="font-bold text-xl">
              Virtual
              <br />
              Library
            </Typography>
            <SearchBar onChange={setSearchTerm} />
          </div>

          {/* Display filtered libraries */}
          {filteredLibraries.map((section, index) => (
            <div key={index}>
              <Typography className="font-bold text-xl text-black mb-6">
                {section.category}
              </Typography>
              <div className="flex gap-12 overflow-x-scroll md:overflow-x-auto">
                {section.items.map((library, idx) => (
                  <a key={idx} href={library.link}>
                    <div className="border hover:bg-green text-green hover:text-white border-light-gray rounded-xl flex flex-col gap-3 items-center py-3 px-2 lg:w-[264px] h-full w-[200px]">
                      <img src={library.image} alt={library.name} />
                      <Typography className="font-bold">
                        {library.name}
                      </Typography>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
