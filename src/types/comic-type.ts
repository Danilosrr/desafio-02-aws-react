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
      },
    ];
  };
  prices: [
    {
      type: string;
      price: number;
    },
  ];
}
