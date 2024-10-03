export interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: [
      {
        name: string;
        role: string;
      }
    ];
  };
  prices: [
    {
      type: string;
      price: number;
    }
  ];
  pageCount: number;
  series: {
     name: string; 
     resourceURL: string 
    };
  dates: [
    { 
      type: string; 
      date: string; 
    }
  ];
  images: [
    { 
      extension: string; 
      path: string 
    }
  ];
  name?: string;
  issueNumber: number;
  characters: { 
    items: [
      { 
        name: string; 
        resourceURI: string 
      } 
    ]
  };
  description: string;
}
