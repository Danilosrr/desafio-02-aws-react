export const comicMock = {
  code: 200,
  status: "Ok",
  copyright: "© 2024 MARVEL",
  attributionText: "Data provided by Marvel. © 2024 MARVEL",
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: "4caab4ceaa037b9a546fa8db9d4a3a2ee88db8da",
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 96,
        digitalId: 7231,
        title: "Thor (1998) #70",
        issueNumber: 70,
        variantDescription: "",
        description: "",
        modified: "2016-03-23T11:04:36-0400",
        isbn: "",
        upc: "75960603506907011",
        diamondCode: "AUG031528",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_preview_text",
            language: "en-us",
            text: "Thialfi has travelled to the future to see the paradise that Thor has created. But there is a dark side to Lord Thor's utopia. A group of mortals conspire against the Asgardians. What is their plan? Who are these rebels?",
          },
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: '"THE REIGNING" pt. 2\r\nA character from the present is thrust into the future. What will he make of the world Thor has constructed from the ruins of Earth and Asgard ... and how will his presence change the balance of power?\r\n32 PGS./MARVEL PSR...$2.99',
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/96",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/96/thor_1998_70?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "purchase",
            url: "http://comicstore.marvel.com/Thor-70/digital-comic/7231?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "reader",
            url: "http://marvel.com/digitalcomics/view.htm?iid=7231&utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "inAppLink",
            url: "https://applink.marvel.com/issue/7231?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/581",
          name: "Thor (1998 - 2004)",
        },
        variants: [],
        collections: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/1283",
            name: "THOR: THE REIGNING (Trade Paperback)",
          },
        ],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2003-10-15T00:00:00-0400",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
          {
            type: "unlimitedDate",
            date: "2003-10-15T00:00:00-0400",
          },
          {
            type: "digitalPurchaseDate",
            date: "2003-10-15T00:00:00-0400",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 0,
          },
          {
            type: "digitalPurchasePrice",
            price: 1.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/3/30/56f2c20e27246",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/30/56f2c20e27246",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4bc6af0235f05",
            extension: "jpg",
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/96/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/13804",
              name: "Scot Eaton",
              role: "penciler",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/8635",
              name: "Vc Randy Gentile",
              role: "letterer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/155",
              name: "Dan Jurgens",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/486",
              name: "Scott Koblish",
              role: "inker",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/6146",
              name: "Avalon Studios",
              role: "colorist",
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/96/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009664",
              name: "Thor",
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/96/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/974",
              name: "Cover #974",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/975",
              name: "Interior #975",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: "http://gateway.marvel.com/v1/public/comics/96/events",
          items: [],
          returned: 0,
        },
      },
    ],
  },
};

export const characterMock = {
  code: 200,
  status: "Ok",
  copyright: "© 2024 MARVEL",
  attributionText: "Data provided by Marvel. © 2024 MARVEL",
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: "3a565674f6f27521e45d74d0e743c0b8a55d2877",
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 1009664,
        name: "Thor",
        description:
          "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        modified: "2020-03-11T10:18:57-0400",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          extension: "jpg",
        },
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009664",
        comics: {
          available: 1908,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/comics",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
              name: "A+X (2012) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30090",
              name: "Age of Heroes (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33566",
              name: "Age of Heroes (2010) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30092",
              name: "Age of Heroes (2010) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30093",
              name: "Age of Heroes (2010) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/112411",
              name: "Alligator Loki (2023) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100083",
              name: "Alligator Loki Infinity Comic (2022) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100084",
              name: "Alligator Loki Infinity Comic (2022) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100086",
              name: "Alligator Loki Infinity Comic (2022) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/110713",
              name: "Alligator Loki Infinity Comic (2022) #33",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/46852",
              name: "Alpha: Big Time (2013) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
              name: "Alpha Flight (1983) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12725",
              name: "Alpha Flight (1983) #61",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
              name: "Alpha Flight (1983) #127",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6748",
              name: "The Amazing Spider-Man (1963) #339",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16904",
              name: "Amazing Spider-Man Annual (1964) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16890",
              name: "Amazing Spider-Man Annual (1964) #16",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1262",
              name: "AMAZING SPIDER-MAN: HAPPY BIRTHDAY (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/39896",
              name: "Art of Marvel Studios TPB Slipcase (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/32769",
              name: "Astonishing Thor (2010) #1",
            },
          ],
          returned: 20,
        },
        series: {
          available: 564,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/series",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/16450",
              name: "A+X (2012 - 2014)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9790",
              name: "Age of Heroes (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/38698",
              name: "Alligator Loki (2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/34402",
              name: "Alligator Loki Infinity Comic (2022 - 2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
              name: "Alpha Flight (1983 - 1994)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/17650",
              name: "Alpha: Big Time (2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/454",
              name: "Amazing Spider-Man (1999 - 2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
              name: "Amazing Spider-Man Annual (1964 - 2018)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/318",
              name: "AMAZING SPIDER-MAN: HAPPY BIRTHDAY (2004)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/14779",
              name: "Art of Marvel Studios TPB Slipcase (2011 - Present)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9858",
              name: "Astonishing Thor (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/744",
              name: "Astonishing X-Men (2004 - 2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9085",
              name: "Avengers (2010 - 2012)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/354",
              name: "Avengers (1998 - 2004)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
              name: "Avengers (1963 - 1996)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/3621",
              name: "Avengers (1996 - 1997)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/24229",
              name: "Avengers (2018 - 2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/22547",
              name: "Avengers (2016 - 2018)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9859",
              name: "Avengers & the Infinity Gauntlet (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/34340",
              name: "Avengers 1,000,000 BC (2022)",
            },
          ],
          returned: 20,
        },
        stories: {
          available: 2815,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/876",
              name: "THOR (1998) #76",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/877",
              name: "Interior #877",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/879",
              name: "Interior #879",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/880",
              name: "THOR (1998) #77",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/881",
              name: "Interior #881",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/882",
              name: "THOR (1998) #83",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/883",
              name: "Interior #883",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/884",
              name: "THOR (1998) #82",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/885",
              name: "Interior #885",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/886",
              name: "THOR (1998) #78",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/887",
              name: "Interior #887",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/888",
              name: "THOR (1998) #79",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/889",
              name: "Interior #889",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/890",
              name: "THOR (1998) #80",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/891",
              name: "Interior #891",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/892",
              name: "THOR (1998) #81",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/893",
              name: "Interior #893",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/894",
              name: "THOR (1998) #84",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/895",
              name: "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/896",
              name: "THOR (1998) #85",
              type: "cover",
            },
          ],
          returned: 20,
        },
        events: {
          available: 27,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/events",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/116",
              name: "Acts of Vengeance!",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/233",
              name: "Atlantis Attacks",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/234",
              name: "Avengers Disassembled",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/310",
              name: "Avengers VS X-Men",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/235",
              name: "Blood and Thunder",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/296",
              name: "Chaos War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/238",
              name: "Civil War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/318",
              name: "Dark Reign",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/246",
              name: "Evolutionary War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/302",
              name: "Fear Itself",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/252",
              name: "Inferno",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/315",
              name: "Infinity",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/29",
              name: "Infinity War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/317",
              name: "Inhumanity",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/311",
              name: "Marvel NOW!",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/37",
              name: "Maximum Security",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/263",
              name: "Mutant Massacre",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/154",
              name: "Onslaught",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/319",
              name: "Original Sin",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/336",
              name: "Secret Empire",
            },
          ],
          returned: 20,
        },
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "wiki",
            url: "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "comiclink",
            url: "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
      },
      {
        id: 1009664,
        name: "Thor",
        description:
          "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        modified: "2020-03-11T10:18:57-0400",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          extension: "jpg",
        },
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009664",
        comics: {
          available: 1908,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/comics",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
              name: "A+X (2012) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30090",
              name: "Age of Heroes (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33566",
              name: "Age of Heroes (2010) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30092",
              name: "Age of Heroes (2010) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30093",
              name: "Age of Heroes (2010) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/112411",
              name: "Alligator Loki (2023) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100083",
              name: "Alligator Loki Infinity Comic (2022) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100084",
              name: "Alligator Loki Infinity Comic (2022) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100086",
              name: "Alligator Loki Infinity Comic (2022) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/110713",
              name: "Alligator Loki Infinity Comic (2022) #33",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/46852",
              name: "Alpha: Big Time (2013) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
              name: "Alpha Flight (1983) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12725",
              name: "Alpha Flight (1983) #61",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
              name: "Alpha Flight (1983) #127",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6748",
              name: "The Amazing Spider-Man (1963) #339",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16904",
              name: "Amazing Spider-Man Annual (1964) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16890",
              name: "Amazing Spider-Man Annual (1964) #16",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1262",
              name: "AMAZING SPIDER-MAN: HAPPY BIRTHDAY (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/39896",
              name: "Art of Marvel Studios TPB Slipcase (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/32769",
              name: "Astonishing Thor (2010) #1",
            },
          ],
          returned: 20,
        },
        series: {
          available: 564,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/series",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/16450",
              name: "A+X (2012 - 2014)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9790",
              name: "Age of Heroes (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/38698",
              name: "Alligator Loki (2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/34402",
              name: "Alligator Loki Infinity Comic (2022 - 2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
              name: "Alpha Flight (1983 - 1994)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/17650",
              name: "Alpha: Big Time (2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/454",
              name: "Amazing Spider-Man (1999 - 2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
              name: "Amazing Spider-Man Annual (1964 - 2018)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/318",
              name: "AMAZING SPIDER-MAN: HAPPY BIRTHDAY (2004)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/14779",
              name: "Art of Marvel Studios TPB Slipcase (2011 - Present)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9858",
              name: "Astonishing Thor (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/744",
              name: "Astonishing X-Men (2004 - 2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9085",
              name: "Avengers (2010 - 2012)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/354",
              name: "Avengers (1998 - 2004)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
              name: "Avengers (1963 - 1996)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/3621",
              name: "Avengers (1996 - 1997)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/24229",
              name: "Avengers (2018 - 2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/22547",
              name: "Avengers (2016 - 2018)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9859",
              name: "Avengers & the Infinity Gauntlet (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/34340",
              name: "Avengers 1,000,000 BC (2022)",
            },
          ],
          returned: 20,
        },
        stories: {
          available: 2815,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/876",
              name: "THOR (1998) #76",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/877",
              name: "Interior #877",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/879",
              name: "Interior #879",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/880",
              name: "THOR (1998) #77",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/881",
              name: "Interior #881",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/882",
              name: "THOR (1998) #83",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/883",
              name: "Interior #883",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/884",
              name: "THOR (1998) #82",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/885",
              name: "Interior #885",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/886",
              name: "THOR (1998) #78",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/887",
              name: "Interior #887",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/888",
              name: "THOR (1998) #79",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/889",
              name: "Interior #889",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/890",
              name: "THOR (1998) #80",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/891",
              name: "Interior #891",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/892",
              name: "THOR (1998) #81",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/893",
              name: "Interior #893",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/894",
              name: "THOR (1998) #84",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/895",
              name: "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/896",
              name: "THOR (1998) #85",
              type: "cover",
            },
          ],
          returned: 20,
        },
        events: {
          available: 27,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/events",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/116",
              name: "Acts of Vengeance!",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/233",
              name: "Atlantis Attacks",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/234",
              name: "Avengers Disassembled",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/310",
              name: "Avengers VS X-Men",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/235",
              name: "Blood and Thunder",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/296",
              name: "Chaos War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/238",
              name: "Civil War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/318",
              name: "Dark Reign",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/246",
              name: "Evolutionary War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/302",
              name: "Fear Itself",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/252",
              name: "Inferno",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/315",
              name: "Infinity",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/29",
              name: "Infinity War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/317",
              name: "Inhumanity",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/311",
              name: "Marvel NOW!",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/37",
              name: "Maximum Security",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/263",
              name: "Mutant Massacre",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/154",
              name: "Onslaught",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/319",
              name: "Original Sin",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/336",
              name: "Secret Empire",
            },
          ],
          returned: 20,
        },
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "wiki",
            url: "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "comiclink",
            url: "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
      },{
        id: 1009664,
        name: "Thor",
        description:
          "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        modified: "2020-03-11T10:18:57-0400",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          extension: "jpg",
        },
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009664",
        comics: {
          available: 1908,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/comics",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
              name: "A+X (2012) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30090",
              name: "Age of Heroes (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33566",
              name: "Age of Heroes (2010) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30092",
              name: "Age of Heroes (2010) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30093",
              name: "Age of Heroes (2010) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/112411",
              name: "Alligator Loki (2023) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100083",
              name: "Alligator Loki Infinity Comic (2022) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100084",
              name: "Alligator Loki Infinity Comic (2022) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100086",
              name: "Alligator Loki Infinity Comic (2022) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/110713",
              name: "Alligator Loki Infinity Comic (2022) #33",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/46852",
              name: "Alpha: Big Time (2013) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
              name: "Alpha Flight (1983) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12725",
              name: "Alpha Flight (1983) #61",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
              name: "Alpha Flight (1983) #127",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6748",
              name: "The Amazing Spider-Man (1963) #339",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16904",
              name: "Amazing Spider-Man Annual (1964) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16890",
              name: "Amazing Spider-Man Annual (1964) #16",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1262",
              name: "AMAZING SPIDER-MAN: HAPPY BIRTHDAY (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/39896",
              name: "Art of Marvel Studios TPB Slipcase (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/32769",
              name: "Astonishing Thor (2010) #1",
            },
          ],
          returned: 20,
        },
        series: {
          available: 564,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/series",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/16450",
              name: "A+X (2012 - 2014)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9790",
              name: "Age of Heroes (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/38698",
              name: "Alligator Loki (2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/34402",
              name: "Alligator Loki Infinity Comic (2022 - 2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
              name: "Alpha Flight (1983 - 1994)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/17650",
              name: "Alpha: Big Time (2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/454",
              name: "Amazing Spider-Man (1999 - 2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
              name: "Amazing Spider-Man Annual (1964 - 2018)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/318",
              name: "AMAZING SPIDER-MAN: HAPPY BIRTHDAY (2004)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/14779",
              name: "Art of Marvel Studios TPB Slipcase (2011 - Present)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9858",
              name: "Astonishing Thor (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/744",
              name: "Astonishing X-Men (2004 - 2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9085",
              name: "Avengers (2010 - 2012)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/354",
              name: "Avengers (1998 - 2004)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
              name: "Avengers (1963 - 1996)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/3621",
              name: "Avengers (1996 - 1997)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/24229",
              name: "Avengers (2018 - 2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/22547",
              name: "Avengers (2016 - 2018)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9859",
              name: "Avengers & the Infinity Gauntlet (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/34340",
              name: "Avengers 1,000,000 BC (2022)",
            },
          ],
          returned: 20,
        },
        stories: {
          available: 2815,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/876",
              name: "THOR (1998) #76",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/877",
              name: "Interior #877",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/879",
              name: "Interior #879",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/880",
              name: "THOR (1998) #77",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/881",
              name: "Interior #881",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/882",
              name: "THOR (1998) #83",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/883",
              name: "Interior #883",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/884",
              name: "THOR (1998) #82",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/885",
              name: "Interior #885",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/886",
              name: "THOR (1998) #78",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/887",
              name: "Interior #887",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/888",
              name: "THOR (1998) #79",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/889",
              name: "Interior #889",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/890",
              name: "THOR (1998) #80",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/891",
              name: "Interior #891",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/892",
              name: "THOR (1998) #81",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/893",
              name: "Interior #893",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/894",
              name: "THOR (1998) #84",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/895",
              name: "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/896",
              name: "THOR (1998) #85",
              type: "cover",
            },
          ],
          returned: 20,
        },
        events: {
          available: 27,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/events",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/116",
              name: "Acts of Vengeance!",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/233",
              name: "Atlantis Attacks",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/234",
              name: "Avengers Disassembled",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/310",
              name: "Avengers VS X-Men",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/235",
              name: "Blood and Thunder",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/296",
              name: "Chaos War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/238",
              name: "Civil War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/318",
              name: "Dark Reign",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/246",
              name: "Evolutionary War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/302",
              name: "Fear Itself",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/252",
              name: "Inferno",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/315",
              name: "Infinity",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/29",
              name: "Infinity War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/317",
              name: "Inhumanity",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/311",
              name: "Marvel NOW!",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/37",
              name: "Maximum Security",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/263",
              name: "Mutant Massacre",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/154",
              name: "Onslaught",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/319",
              name: "Original Sin",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/336",
              name: "Secret Empire",
            },
          ],
          returned: 20,
        },
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "wiki",
            url: "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "comiclink",
            url: "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
      },{
        id: 1009664,
        name: "Thor",
        description:
          "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        modified: "2020-03-11T10:18:57-0400",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          extension: "jpg",
        },
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009664",
        comics: {
          available: 1908,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/comics",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
              name: "A+X (2012) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30090",
              name: "Age of Heroes (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33566",
              name: "Age of Heroes (2010) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30092",
              name: "Age of Heroes (2010) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30093",
              name: "Age of Heroes (2010) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/112411",
              name: "Alligator Loki (2023) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100083",
              name: "Alligator Loki Infinity Comic (2022) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100084",
              name: "Alligator Loki Infinity Comic (2022) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/100086",
              name: "Alligator Loki Infinity Comic (2022) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/110713",
              name: "Alligator Loki Infinity Comic (2022) #33",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/46852",
              name: "Alpha: Big Time (2013) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
              name: "Alpha Flight (1983) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12725",
              name: "Alpha Flight (1983) #61",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
              name: "Alpha Flight (1983) #127",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6748",
              name: "The Amazing Spider-Man (1963) #339",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16904",
              name: "Amazing Spider-Man Annual (1964) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16890",
              name: "Amazing Spider-Man Annual (1964) #16",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1262",
              name: "AMAZING SPIDER-MAN: HAPPY BIRTHDAY (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/39896",
              name: "Art of Marvel Studios TPB Slipcase (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/32769",
              name: "Astonishing Thor (2010) #1",
            },
          ],
          returned: 20,
        },
        series: {
          available: 564,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/series",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/16450",
              name: "A+X (2012 - 2014)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9790",
              name: "Age of Heroes (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/38698",
              name: "Alligator Loki (2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/34402",
              name: "Alligator Loki Infinity Comic (2022 - 2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
              name: "Alpha Flight (1983 - 1994)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/17650",
              name: "Alpha: Big Time (2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/454",
              name: "Amazing Spider-Man (1999 - 2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
              name: "Amazing Spider-Man Annual (1964 - 2018)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/318",
              name: "AMAZING SPIDER-MAN: HAPPY BIRTHDAY (2004)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/14779",
              name: "Art of Marvel Studios TPB Slipcase (2011 - Present)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9858",
              name: "Astonishing Thor (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/744",
              name: "Astonishing X-Men (2004 - 2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9085",
              name: "Avengers (2010 - 2012)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/354",
              name: "Avengers (1998 - 2004)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
              name: "Avengers (1963 - 1996)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/3621",
              name: "Avengers (1996 - 1997)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/24229",
              name: "Avengers (2018 - 2023)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/22547",
              name: "Avengers (2016 - 2018)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/9859",
              name: "Avengers & the Infinity Gauntlet (2010)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/34340",
              name: "Avengers 1,000,000 BC (2022)",
            },
          ],
          returned: 20,
        },
        stories: {
          available: 2815,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/876",
              name: "THOR (1998) #76",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/877",
              name: "Interior #877",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/879",
              name: "Interior #879",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/880",
              name: "THOR (1998) #77",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/881",
              name: "Interior #881",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/882",
              name: "THOR (1998) #83",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/883",
              name: "Interior #883",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/884",
              name: "THOR (1998) #82",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/885",
              name: "Interior #885",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/886",
              name: "THOR (1998) #78",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/887",
              name: "Interior #887",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/888",
              name: "THOR (1998) #79",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/889",
              name: "Interior #889",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/890",
              name: "THOR (1998) #80",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/891",
              name: "Interior #891",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/892",
              name: "THOR (1998) #81",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/893",
              name: "Interior #893",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/894",
              name: "THOR (1998) #84",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/895",
              name: "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/896",
              name: "THOR (1998) #85",
              type: "cover",
            },
          ],
          returned: 20,
        },
        events: {
          available: 27,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1009664/events",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/116",
              name: "Acts of Vengeance!",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/233",
              name: "Atlantis Attacks",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/234",
              name: "Avengers Disassembled",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/310",
              name: "Avengers VS X-Men",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/235",
              name: "Blood and Thunder",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/296",
              name: "Chaos War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/238",
              name: "Civil War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/318",
              name: "Dark Reign",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/246",
              name: "Evolutionary War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/302",
              name: "Fear Itself",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/252",
              name: "Inferno",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/315",
              name: "Infinity",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/29",
              name: "Infinity War",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/317",
              name: "Inhumanity",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/311",
              name: "Marvel NOW!",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/37",
              name: "Maximum Security",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/263",
              name: "Mutant Massacre",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/154",
              name: "Onslaught",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/319",
              name: "Original Sin",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/336",
              name: "Secret Empire",
            },
          ],
          returned: 20,
        },
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "wiki",
            url: "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "comiclink",
            url: "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
      },
    ],
  },
};

export const comicsMock = {
  code: 200,
  status: "Ok",
  copyright: "© 2024 MARVEL",
  attributionText: "Data provided by Marvel. © 2024 MARVEL",
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: "484dfcefa34c6fd164ace3c67104ea5bb85b07b9",
  data: {
    offset: 5,
    limit: 20,
    total: 61520,
    count: 20,
    results: [
      {
        id: 183,
        digitalId: 0,
        title: "Startling Stories: The Incorrigible Hulk (2004) #1",
        issueNumber: 1,
        variantDescription: "",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605429-00811",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "For Doctor Bruce Banner life is anything but normal. But what happens when two women get between him and his alter ego, the Incorrigible Hulk? Hulk confused! \r\nIndy superstar Peter Bagge (THE MEGALOMANIACAL SPIDER-MAN) takes a satirical jab at the Hulk mythos with a tale of dames, debauchery and destruction.\r\n32 PGS./MARVEL PSR...$2.99",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/183",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/183/startling_stories_the_incorrigible_hulk_2004_1?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/565",
          name: "Startling Stories: The Incorrigible Hulk (2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        images: [],
        creators: {
          available: 1,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/183/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/6291",
              name: "Peter Bagge",
              role: "penciller (cover)",
            },
          ],
          returned: 1,
        },
        characters: {
          available: 1,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/183/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009351",
              name: "Hulk",
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/183/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/1891",
              name: "Cover #1891",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/1892",
              name: "Interior #1892",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/183/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 1003,
        digitalId: 0,
        title: "Sentry, the (Trade Paperback)",
        issueNumber: 0,
        variantDescription: "",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "0-7851-0799-1",
        upc: "",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Trade Paperback",
        pageCount: 240,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "On the edge of alcoholism and a failed marriage, Bob Reynolds wakes up to discover his true nature. A forgotten hero, he must unravel the conspiracy to erase his memory from mankind before an evil entity returns.",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1003",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/collection/1003/sentry_the_trade_paperback?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/65",
          name: "Sentry, the (1999)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 9.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bc66d78f1bee",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bc66d78f1bee",
            extension: "jpg",
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1003/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/55",
              name: "Paul Jenkins",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/56",
              name: "Jae Lee",
              role: "penciller",
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1003/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1003/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/66",
              name: "On the edge of alcoholism and a failed marriage, Bob Reynolds wakes up to discover his true nature. A forgotten hero, he must un",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/65143",
              name: "SENTRY, THE TPB 0 cover",
              type: "cover",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1003/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 2088,
        digitalId: 0,
        title:
          "Official Handbook of the Marvel Universe (2004) #14 (FANTASTIC FOUR)",
        issueNumber: 14,
        variantDescription: "FANTASTIC FOUR",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605677-00111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "At last, Marvel's First Family gets the OHOTMU treatment! This Official Handbook contains in-depth bios on the family, friends and foes of the Fantastic Four - from Annihilus to the Watcher! Plus: An all-new cover by superstar artist Tom Grummett, digitally painted by Morry Hollowell!\r<br>48 PGS./T+ Suggested for Teens and Up ...$3.99\r<br>\r<br>",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2088",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/2088/official_handbook_of_the_marvel_universe_2004_14_fantastic_four/fantastic_four?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/787",
          name: "Official Handbook of the Marvel Universe (2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 3.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bc6353e5fc56",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bc6353e5fc56",
            extension: "jpg",
          },
        ],
        creators: {
          available: 9,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/2088/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/887",
              name: "Ronald Byrd",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/902",
              name: "Jeff Christiansen",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/903",
              name: "Anthony Flamini",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/888",
              name: "Michael Hoskin",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/898",
              name: "Bill Lentz",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/897",
              name: "Sean Mcquaid",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/899",
              name: "Mark OEnglish",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/896",
              name: "Stuart Vandal",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/483",
              name: "Tom Grummett",
              role: "penciller (cover)",
            },
          ],
          returned: 9,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/2088/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/2088/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4511",
              name: "Cover #4511",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4512",
              name: "Interior #4512",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/2088/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 1220,
        digitalId: 0,
        title:
          "Amazing Spider-Man 500 Covers Slipcase - Book II (Trade Paperback)",
        issueNumber: 0,
        variantDescription: "",
        description: null,
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Trade Paperback",
        pageCount: 0,
        textObjects: [],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1220",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/collection/1220/amazing_spider-man_500_covers_slipcase_-_book_ii_trade_paperback?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/277",
          name: "Amazing Spider-Man 500 Covers Slipcase - Book II (2003)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 0,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        images: [],
        creators: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1220/creators",
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1220/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1220/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/351",
              name: "Interior #351",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/65310",
              name: "AMAZING SPIDER-MAN 500 COVERS SLIPCASE - BOOK II 0 cover",
              type: "cover",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1220/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 384,
        digitalId: 0,
        title: "Gun Theory (2003) #3",
        issueNumber: 3,
        variantDescription: "",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605492-00411",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "The phone rings, and killer-for-hire Harvey embarks on another hit. But nothing's going right this job. There's little room for error in the business of killing - so what happens when one occurs?\r\n\r\n32 PGS./ PARENTAL ADVISORY ...$2.50",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/384",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/384/gun_theory_2003_3?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/649",
          name: "Gun Theory (2003)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.5,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
            extension: "jpg",
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/384/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/576",
              name: "Jon Proctor",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
              name: "Daniel Way",
              role: "writer",
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/384/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/384/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/2538",
              name: "Cover #2538",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/2539",
              name: "Interior #2539",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/384/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 428,
        digitalId: 0,
        title: "Ant-Man (2003) #4",
        issueNumber: 4,
        variantDescription: "",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605482-00411",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "Ant-Man digs deeper into finding out who is leaking those dirty little secrets that are threatening our national security. And who's better at uncovering dirty LITTLE secrets than him??",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/428",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/428/ant-man_2003_4?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/551",
          name: "Ant-Man (2003 - 2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890",
            extension: "jpg",
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/428/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/600",
              name: "Clayton Crain",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
              name: "Daniel Way",
              role: "writer",
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/428/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/428/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/2331",
              name: "Cover #2331",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/2332",
              name: "Interior #2332",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/428/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 1749,
        digitalId: 0,
        title:
          "Official Handbook of the Marvel Universe (2004) #11 (X-MEN - AGE OF APOCALYPSE)",
        issueNumber: 11,
        variantDescription: "X-MEN - AGE OF APOCALYPSE",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605625-00111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "Your complete guide to the epic saga! This Official Handbook includes in-depth bios on more than 40 denizens of the Age of Apocalypse - from Abyss to Weapon X! Plus: An all-new cover by superstar-in-waiting Mark Brooks, digitally painted by Justin Ponsor.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1749",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/1749/official_handbook_of_the_marvel_universe_2004_11_x-men_-_age_of_apocalypse/x-men_-_age_of_apocalypse?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/787",
          name: "Official Handbook of the Marvel Universe (2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 3.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4",
            extension: "jpg",
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1749/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/694",
              name: "Mark Brooks",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/684",
              name: "Mike Raicht",
              role: "writer",
            },
          ],
          returned: 2,
        },
        characters: {
          available: 14,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1749/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009156",
              name: "Apocalypse",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009197",
              name: "Blink",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009243",
              name: "Colossus",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009313",
              name: "Gambit",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009349",
              name: "Holocaust (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009417",
              name: "Magneto",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009447",
              name: "Mister Sinister",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009546",
              name: "Rogue",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010969",
              name: "Sabretooth (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010975",
              name: "Shadowcat (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010976",
              name: "Silver Samurai (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010979",
              name: "Storm (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009636",
              name: "Sunfire",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009718",
              name: "Wolverine",
            },
          ],
          returned: 14,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1749/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4153",
              name: "Cover #4153",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4154",
              name: "Interior #4154",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1749/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 1332,
        digitalId: 0,
        title: "X-Men: Days of Future Past (Trade Paperback)",
        issueNumber: 0,
        variantDescription: "",
        description: "",
        modified: "2017-02-28T14:52:22-0500",
        isbn: "0-7851-1560-9",
        upc: "5960611560-00111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Trade Paperback",
        pageCount: 144,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: '"Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity\'s only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!? "',
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1332",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/collection/1332/x-men_days_of_future_past_trade_paperback?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/1327",
          name: "X-Men: Days of Future Past (2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13683",
            name: "Uncanny X-Men (1981) #142",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/12460",
            name: "Uncanny X-Men (1981) #141",
          },
        ],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 9.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4bc66463ef7f0",
            extension: "jpg",
          },
        ],
        creators: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1332/creators",
          items: [],
          returned: 0,
        },
        characters: {
          available: 10,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1332/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009159",
              name: "Archangel",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009164",
              name: "Avalanche",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009199",
              name: "Blob",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009243",
              name: "Colossus",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009271",
              name: "Destiny",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009472",
              name: "Nightcrawler",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009522",
              name: "Pyro",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009629",
              name: "Storm",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009718",
              name: "Wolverine",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009726",
              name: "X-Men",
            },
          ],
          returned: 10,
        },
        stories: {
          available: 3,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1332/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/15472",
              name: "Days of Future Past",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/27788",
              name: "Mind Out of Time!",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/65738",
              name: "X-MEN: DAYS OF FUTURE PAST TPB 0 cover",
              type: "cover",
            },
          ],
          returned: 3,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1332/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 323,
        digitalId: 0,
        title: "Ant-Man (2003) #2",
        issueNumber: 2,
        variantDescription: "",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605396-01911",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "Ant-Man digs deeper to find out who is leaking secret information that threatens our national security.\r\n32 pgs./PARENTAL ADVISORY...$2.99",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/323",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/323/ant-man_2003_2?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/551",
          name: "Ant-Man (2003 - 2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0",
            extension: "jpg",
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/323/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/600",
              name: "Clayton Crain",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
              name: "Daniel Way",
              role: "writer",
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/323/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/323/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/1808",
              name: "Cover #1808",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/1809",
              name: "Interior #1809",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/323/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 15808,
        digitalId: 8701,
        title: "Ultimate Spider-Man (2000) #110 (Mark Bagley Variant)",
        issueNumber: 110,
        variantDescription: "Mark Bagley Variant",
        description: "#N/A",
        modified: "2010-11-15T14:32:28-0500",
        isbn: "",
        upc: "5960605031-11021",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: '"ULTIMATE KNIGHTS"\r<br>The mind-stunning climax to the "Ultimate Knights" arc! The traitor revealed! The fate of the Kingpin of Crime! Daredevil\'s deep secret exposed! And Spidey\'s in the issue, too, we think. Don\'t miss a conclusion that will rock your world!\r<br>32 PGS./Rated A ...$2.99 \r<br>',
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15808",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/15808/ultimate_spider-man_2000_110_mark_bagley_variant/mark_bagley_variant?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "purchase",
            url: "http://comicstore.marvel.com/Ultimate-Spider-Man-110/digital-comic/8701?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "reader",
            url: "http://marvel.com/digitalcomics/view.htm?iid=8701&utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
          {
            type: "inAppLink",
            url: "https://applink.marvel.com/issue/8701?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/466",
          name: "Ultimate Spider-Man (2000 - 2009)",
        },
        variants: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/15809",
            name: "Ultimate Spider-Man (2000) #110",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21901",
            name: "Ultimate Spider-Man (2000) #110 (Zombie Variant)",
          },
        ],
        collections: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/16621",
            name: "ULTIMATE SPIDER-MAN VOL. 18: ULTIMATE KNIGHTS TPB (Trade Paperback)",
          },
        ],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
          {
            type: "unlimitedDate",
            date: "2007-04-28T00:00:00-0400",
          },
          {
            type: "digitalPurchaseDate",
            date: "2011-10-25T00:00:00-0400",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99,
          },
          {
            type: "digitalPurchasePrice",
            price: 1.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/4bc4947ea8f4d",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/4bc4947ea8f4d",
            extension: "jpg",
          },
        ],
        creators: {
          available: 9,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/15808/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/87",
              name: "Mark Bagley",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/13055",
              name: "Richard Isanove",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/24",
              name: "Brian Michael Bendis",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/552",
              name: "Wade Von Grawbadger",
              role: "inker",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/548",
              name: "Andrew Hennessy",
              role: "inker",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/192",
              name: "Stuart Immonen",
              role: "penciler",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/12980",
              name: "Vc Cory Petit",
              role: "letterer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/360",
              name: "Justin Ponsor",
              role: "colorist",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/4430",
              name: "Jeff Youngquist",
              role: "editor",
            },
          ],
          returned: 9,
        },
        characters: {
          available: 1,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/15808/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011010",
              name: "Spider-Man (Ultimate)",
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/15808/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/32282",
              name: "5 of 5 - Ultimate Knights",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/32283",
              name: "5 of 5 - Ultimate Knights",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/15808/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 376,
        digitalId: 0,
        title: "Ant-Man (2003) #3",
        issueNumber: 3,
        variantDescription: "",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605396-02011",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "When Hank Pym - a.k.a. Ant-Man - is tapped by U.S. Intelligence to infiltrate an international spy ring that has been siphoning secrets out of Washington, the diminutive hero jumps at the chance - unaware that he's being used as a pawn in a larger game of espionage.\r32 PGS./PARENTAL ADVISORY...$2.99",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/376",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/376/ant-man_2003_3?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/551",
          name: "Ant-Man (2003 - 2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7",
            extension: "jpg",
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/376/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/600",
              name: "Clayton Crain",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/344",
              name: "Daniel Way",
              role: "writer",
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/376/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/376/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/1810",
              name: "Cover #1810",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/1811",
              name: "Interior #1811",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/376/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 1689,
        digitalId: 0,
        title:
          "Official Handbook of the Marvel Universe (2004) #10 (MARVEL KNIGHTS)",
        issueNumber: 10,
        variantDescription: "MARVEL KNIGHTS",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605694-00111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "On the mean streets of the Marvel Universe, the kid gloves come off. Guardian devils, vengeance-seeking vigilantes and enigmatic assassins stalk the city's dark underbelly _ and the urban action unfolds with gritty intensity. The newest entry in Marvel's best-selling Handbook series, OHOTMUMK04 includes in-depth bios on a host of the House's edgiest icons - from Black Panther to Shang-Chi!",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1689",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/1689/official_handbook_of_the_marvel_universe_2004_10_marvel_knights/marvel_knights?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/787",
          name: "Official Handbook of the Marvel Universe (2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 3.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc64df4105b9",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc64df4105b9",
            extension: "jpg",
          },
        ],
        creators: {
          available: 9,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1689/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/887",
              name: "Ronald Byrd",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/902",
              name: "Jeff Christiansen",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/903",
              name: "Anthony Flamini",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/888",
              name: "Michael Hoskin",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/897",
              name: "Sean Mcquaid",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/394",
              name: "Eric J. Moreels",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/900",
              name: "Barry Reese",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/896",
              name: "Stuart Vandal",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/490",
              name: "Pat Lee",
              role: "penciller (cover)",
            },
          ],
          returned: 9,
        },
        characters: {
          available: 14,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1689/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009156",
              name: "Apocalypse",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009197",
              name: "Blink",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009243",
              name: "Colossus",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009313",
              name: "Gambit",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009349",
              name: "Holocaust (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009417",
              name: "Magneto",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009447",
              name: "Mister Sinister",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009546",
              name: "Rogue",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010969",
              name: "Sabretooth (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010975",
              name: "Shadowcat (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010976",
              name: "Silver Samurai (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010979",
              name: "Storm (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009636",
              name: "Sunfire",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009718",
              name: "Wolverine",
            },
          ],
          returned: 14,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1689/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4612",
              name: "Cover #4612",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4613",
              name: "Interior #4613",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1689/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 331,
        digitalId: 0,
        title: "Gun Theory (2003) #4",
        issueNumber: 4,
        variantDescription: "",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605468-00111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "The phone rings, and killer-for-hire Harvey embarks on another hit. But nothing's going right this job. There's little room for error in the business of killing - so what happens when one occurs?\r\n32 PGS./ PARENTAL ADVISORY ...$2.50",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/331",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/331/gun_theory_2003_4?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/649",
          name: "Gun Theory (2003)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.5,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
            extension: "jpg",
          },
        ],
        creators: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/331/creators",
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/331/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/331/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/2263",
              name: "Interior #2263",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/65423",
              name: "GUN THEORY 4 cover",
              type: "cover",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/331/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 1590,
        digitalId: 0,
        title:
          "Official Handbook of the Marvel Universe (2004) #9 (THE WOMEN OF MARVEL)",
        issueNumber: 9,
        variantDescription: "THE WOMEN OF MARVEL",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605678-00111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "Marvel's leading ladies take center stage! This Official Handbook includes in-depth bios on more than 40 of the House's most powerful women warriors - from Araña to Vindicator! Plus: an all-new cover by superstar artist Greg Land!",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1590",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/1590/official_handbook_of_the_marvel_universe_2004_9_the_women_of_marvel/the_women_of_marvel?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/787",
          name: "Official Handbook of the Marvel Universe (2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 3.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d666c0e58a",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d666c0e58a",
            extension: "jpg",
          },
        ],
        creators: {
          available: 12,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1590/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/887",
              name: "Ronald Byrd",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/902",
              name: "Jeff Christiansen",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/919",
              name: "Jonathan Coupersmartt",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/903",
              name: "Anthony Flamini",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/888",
              name: "Michael Hoskin",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/898",
              name: "Bill Lentz",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/897",
              name: "Sean Mcquaid",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/394",
              name: "Eric J. Moreels",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/899",
              name: "Mark OEnglish",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/896",
              name: "Stuart Vandal",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/425",
              name: "Greg Land",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/500",
              name: "Christopher Sotomayor",
              role: "colorist",
            },
          ],
          returned: 12,
        },
        characters: {
          available: 14,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1590/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009156",
              name: "Apocalypse",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009197",
              name: "Blink",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009243",
              name: "Colossus",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009313",
              name: "Gambit",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009349",
              name: "Holocaust (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009417",
              name: "Magneto",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009447",
              name: "Mister Sinister",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009546",
              name: "Rogue",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010969",
              name: "Sabretooth (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010975",
              name: "Shadowcat (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010976",
              name: "Silver Samurai (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010979",
              name: "Storm (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009636",
              name: "Sunfire",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009718",
              name: "Wolverine",
            },
          ],
          returned: 14,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1590/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4513",
              name: "Cover #4513",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4514",
              name: "Interior #4514",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1590/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 26620,
        digitalId: 0,
        title: "The Stand: American Nightmares HC (Hardcover)",
        issueNumber: 0,
        variantDescription: "",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "978-0-7851-3621-7",
        upc: "5960613621-00111",
        diamondCode: "SEP090507",
        ean: "9780785 136217 52499",
        issn: "",
        format: "Hardcover",
        pageCount: 136,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "The deadly super flu Captain Trips has devastated the country and now the few survivors must pick up the pieces and go on. Larry Underwood seeks escape from New York City. Lloyd contemplates an extremely unsavory dinner option in jail, and Stu Redman makes a desperate bid for freedom from his interrogators. Most ominous of all, the stange being called Randall Flagg continues his dread journey across the devastated landscape of America. You must not miss it! Collecting THE STAND: AMERICAN NIGHTMARE #1-5.\r\nParental Advisory ...$24.99 \r\nISBN: 978-0-7851-3621-7\r\nTrim size: standard",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26620",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/collection/26620/the_stand_american_nightmares_hc_hardcover?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/8405",
          name: "The Stand: American Nightmares HC (2009)",
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/26616",
            name: "The Stand: American Nightmares (2009) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/26613",
            name: "The Stand: American Nightmares (2009) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/23997",
            name: "The Stand: American Nightmares (2009) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/23807",
            name: "The Stand: American Nightmares (2009) #1",
          },
        ],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "2009-10-08T00:00:00-0400",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 24.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4bb4c3523c46f",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/a/70/65f9f1878d6ca",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4bb577ca755b2",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4bb4c3523c46f",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/20/4bb4c34ce5f08",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4bb4c3470fc45",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/00/4bb4c341e3655",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/8/80/4bb4c33c45e10",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/4bb4c3375305e",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/1/d0/4bb4bee5ec02e",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/40/4bb4918b7ab4e",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4bb4425274acd",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bb4424d5d4c7",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb44248833c4",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/4bb4424353d48",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4bb4423de877e",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/4bb44238b854a",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/40/4bb43f4b28275",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bb43f3bb8d87",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/10/4bb43f368c205",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bb43f3168322",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/4bb43f2c7a1e3",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4bb43f2737a29",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/4bb40349e5b76",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/f/10/4bb4004041146",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/7/f0/4bb4003b0bc35",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/4/f0/4bb4003610aa6",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/30/4bb40030dbee3",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/00/4bb4002b993c7",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/4bb40026aa876",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/4bb3f8aa8cc7e",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bb3f8a2154b9",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bb3f89c8edd1",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4bb3f8966416c",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4bb3f89111400",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/2/10/4bb3f88c2baaf",
            extension: "jpg",
          },
        ],
        creators: {
          available: 7,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/26620/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/13661",
              name: "Roberto Aguirre-Sacasa",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/512",
              name: "Lee Bermejo",
              role: "other",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/452",
              name: "Virtual Calligr",
              role: "other",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/10363",
              name: "John Rhett Thomas",
              role: "other",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/4306",
              name: "Laura Martin",
              role: "colorist",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/708",
              name: "Mike Perkins",
              role: "inker",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/410",
              name: "Rus Wooton",
              role: "letterer",
            },
          ],
          returned: 7,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/26620/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 10,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/26620/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/52828",
              name: "5XLS 1 of 5",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/52829",
              name: "5XLS 1 of 5",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/53228",
              name: "5XLS 2 of 5",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/53229",
              name: "5XLS 2 of 5",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/58535",
              name: "Cover #58535",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/58536",
              name: "Interior #58536",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/58541",
              name: "Cover #58541",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/58542",
              name: "Interior #58542",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/58550",
              name: "Cover #58550",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/58551",
              name: "Interior #58551",
              type: "interiorStory",
            },
          ],
          returned: 10,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/26620/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 1886,
        digitalId: 0,
        title:
          "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
        issueNumber: 12,
        variantDescription: "SPIDER-MAN",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605667-00111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "The spectacular sequel to last year's OFFICIAL HANDBOOK OF THE MARVEL UNIVERSE: SPIDER-MAN 2004, this Official Handbook contains in-depth bios on more than 30 of the wisecracking web-slinger's closest allies and most infamous enemies - including the Stacy Twins, fresh from the pages of AMAZING SPIDER-MAN, and Toxin, in time for this month's TOXIN #1! Plus: An all-new cover by superstar artist Tom Raney, digitally painted by Morry Hollowell.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1886",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/1886/official_handbook_of_the_marvel_universe_2004_12_spider-man/spider-man?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/787",
          name: "Official Handbook of the Marvel Universe (2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 3.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc",
            extension: "jpg",
          },
        ],
        creators: {
          available: 12,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1886/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/907",
              name: "Heather Buchanan",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/887",
              name: "Ronald Byrd",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/902",
              name: "Jeff Christiansen",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/909",
              name: "Eric Engelhard",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/906",
              name: "Mike Fichera",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/910",
              name: "Jason Godin",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/897",
              name: "Sean Mcquaid",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/900",
              name: "Barry Reese",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/905",
              name: "Al Sjoerdsma",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/911",
              name: "Bryan Thiessen",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/908",
              name: "Kerry Wilkinson",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/444",
              name: "Tom Raney",
              role: "penciller (cover)",
            },
          ],
          returned: 12,
        },
        characters: {
          available: 14,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1886/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009156",
              name: "Apocalypse",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009197",
              name: "Blink",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009243",
              name: "Colossus",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009313",
              name: "Gambit",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009349",
              name: "Holocaust (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009417",
              name: "Magneto",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009447",
              name: "Mister Sinister",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009546",
              name: "Rogue",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010969",
              name: "Sabretooth (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010975",
              name: "Shadowcat (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010976",
              name: "Silver Samurai (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010979",
              name: "Storm (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009636",
              name: "Sunfire",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009718",
              name: "Wolverine",
            },
          ],
          returned: 14,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1886/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4430",
              name: "Cover #4430",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4431",
              name: "Interior #4431",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1886/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 6181,
        digitalId: 0,
        title:
          "Ultimate Spider-Man Ultimate Collection Book 1 (Trade Paperback)",
        issueNumber: 0,
        variantDescription: "",
        description: "",
        modified: "2024-09-24T09:47:21-0400",
        isbn: "0-7851-2492-6",
        upc: "5960612492-00111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Trade Paperback",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "Collecting the groundbreaking first year of Ultimate Spider-Man in one colossal trade paperback! High school, puberty, first dances - there are many pitfalls to being young. Compound these with intense personal tragedy and super human powers, and you can start to visualize the world of Peter Parker, a.k.a. Spider-Man. Following the murder of his uncle and the Green Goblin's assault on his high school, Peter finds himself on the brink of manhood: getting a job at the Daily Bugle to help support his widowed aunt and taking on extracurricular activities - such as bringing down the Kingpin, the head of organized crime in New York City! Collecting ULTIMATE SPIDER-MAN #1-13.\r\n352 PGS./Rated A ...$24.99",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/6181",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/collection/6181/ultimate_spider-man_ultimate_collection_book_1_trade_paperback?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/1919",
          name: "Ultimate Spider-Man Ultimate Collection Book 1 (2007)",
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14838",
            name: "Ultimate Spider-Man (2000) #12",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14837",
            name: "Ultimate Spider-Man (2000) #11",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14836",
            name: "Ultimate Spider-Man (2000) #10",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14912",
            name: "Ultimate Spider-Man (2000) #8",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14901",
            name: "Ultimate Spider-Man (2000) #7",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14890",
            name: "Ultimate Spider-Man (2000) #6",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14879",
            name: "Ultimate Spider-Man (2000) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14868",
            name: "Ultimate Spider-Man (2000) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14857",
            name: "Ultimate Spider-Man (2000) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14846",
            name: "Ultimate Spider-Man (2000) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/4372",
            name: "Ultimate Spider-Man (2000) #1",
          },
        ],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "1961-01-01T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 9.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/59079911f0fdb",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/59079911f0fdb",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/70/4bc5a059dc189",
            extension: "jpg",
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/6181/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/87",
              name: "Mark Bagley",
              role: "penciler",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/24",
              name: "Brian Michael Bendis",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/210",
              name: "Bill Jemas",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/1909",
              name: "Steve Buccellato",
              role: "colorist",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/350",
              name: "Richard Starkings",
              role: "letterer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/568",
              name: "Art Thibert",
              role: "inker",
            },
          ],
          returned: 6,
        },
        characters: {
          available: 7,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/6181/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1014991",
              name: "Crusher Hogan (Ultimate)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010922",
              name: "Electro (Ultimate)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1014974",
              name: "George Stacy (Ultimate)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011218",
              name: "Harry Osborn (Ultimate)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011203",
              name: "Mary Jane Watson (Ultimate)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011010",
              name: "Spider-Man (Ultimate)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011128",
              name: "Venom (Ultimate)",
            },
          ],
          returned: 7,
        },
        stories: {
          available: 29,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/6181/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/528",
              name: "Interior #528",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/8038",
              name: "Ultimate Spider-Man 1-13",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/8039",
              name: "Ultimate Spider-Man 1-13",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/8512",
              name: "Ultimate Spider-Man 1-13",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30293",
              name: "",
              type: "",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30294",
              name: "",
              type: "",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30296",
              name: "Previously. . .",
              type: "recap",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30297",
              name: "[",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30298",
              name: "[Spidey Letters]",
              type: "letters",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30326",
              name: "Previously. . .",
              type: "recap",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30327",
              name: "Growing Pains",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30352",
              name: "Previously . . .",
              type: "recap",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30353",
              name: "Wannabe",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30354",
              name: "[Spidey Letters]",
              type: "letters",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30366",
              name: "Previously . . .",
              type: "recap",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30367",
              name: "With Great Power",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30368",
              name: "[Spidey Letters]",
              type: "letters",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30383",
              name: "Previously. . .",
              type: "recap",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30384",
              name: "Life Lessons",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30385",
              name: "[Spidey Letters]",
              type: "letters",
            },
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/6181/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 5813,
        digitalId: 0,
        title: "Marvel Milestones (2005) #22",
        issueNumber: 22,
        variantDescription: "",
        description: null,
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605721-02211",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5813",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/5813/marvel_milestones_2005_22?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/901",
          name: "Marvel Milestones (2005 - 2007)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 3.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        images: [],
        creators: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/5813/creators",
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/5813/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/5813/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4846",
              name: "Interior #4846",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/65491",
              name: "MARVEL MILESTONES 22 cover",
              type: "cover",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/5813/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 1994,
        digitalId: 0,
        title: "Official Handbook of the Marvel Universe (2004) #13 (TEAMS)",
        issueNumber: 13,
        variantDescription: "TEAMS",
        description: "",
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "5960605695-00111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "Heavy-hitting heroes unite! This Official Handbook contains in-depth bios on more than 30 of the Marvel Universe's most awesome assemblages - including the Defenders, Power Pack and the New Thunderbolts! Plus: An all-new cover by superstar artist Tom Grummett, digitally painted by Morry Hollowell.\r<br>48 PGS./All Ages ...$3.99\r<br>",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1994",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/1994/official_handbook_of_the_marvel_universe_2004_13_teams/teams?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/787",
          name: "Official Handbook of the Marvel Universe (2004)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 3.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb",
            extension: "jpg",
          },
        ],
        creators: {
          available: 10,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1994/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/887",
              name: "Ronald Byrd",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/902",
              name: "Jeff Christiansen",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/903",
              name: "Anthony Flamini",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/930",
              name: "Richard Green",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/888",
              name: "Michael Hoskin",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/897",
              name: "Sean Mcquaid",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/394",
              name: "Eric J. Moreels",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/899",
              name: "Mark OEnglish",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/896",
              name: "Stuart Vandal",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/483",
              name: "Tom Grummett",
              role: "penciller (cover)",
            },
          ],
          returned: 10,
        },
        characters: {
          available: 14,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1994/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009156",
              name: "Apocalypse",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009197",
              name: "Blink",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009243",
              name: "Colossus",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009313",
              name: "Gambit",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009349",
              name: "Holocaust (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009417",
              name: "Magneto",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009447",
              name: "Mister Sinister",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009546",
              name: "Rogue",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010969",
              name: "Sabretooth (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010975",
              name: "Shadowcat (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010976",
              name: "Silver Samurai (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010979",
              name: "Storm (Age of Apocalypse)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009636",
              name: "Sunfire",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009718",
              name: "Wolverine",
            },
          ],
          returned: 14,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1994/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4614",
              name: "Cover #4614",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/4615",
              name: "Interior #4615",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/1994/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 15094,
        digitalId: 0,
        title: "Silver Surfer (1987)",
        issueNumber: 0,
        variantDescription: "",
        description: null,
        modified: "-0001-11-30T00:00:00-0500",
        isbn: "",
        upc: "",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 0,
        textObjects: [],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15094",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/15094/silver_surfer_1987?utm_campaign=apiRef&utm_source=01e97ff8c99fed1b6901f5a4faac2538",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2288",
          name: "Silver Surfer (1987 - 1998)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2029-12-31T00:00:00-0500",
          },
          {
            type: "focDate",
            date: "-0001-11-30T00:00:00-0500",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 0,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        images: [],
        creators: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/15094/creators",
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/15094/characters",
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/15094/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/30658",
              name: "",
              type: "",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/67348",
              name: "silver surfer 0 cover",
              type: "cover",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/15094/events",
          items: [],
          returned: 0,
        },
      },
    ],
  },
};
