export type StreetType = {
  title: string;
};

export type AddressType = {
  number?: number;
  street: StreetType;
};

export type HouseType = {
  id?: number;
  buildedAt: number;
  repaired: boolean;

  address: AddressType;
};

export type GovernmentBuildingType = {
  type: 'HOSPITAL' | 'FIRE-STATION';
  budget: number;
  staffCount: number;

  address: AddressType;
};

export type CityType = {
  title: string;

  houses: Array<HouseType>;
  governmentBuildings: Array<GovernmentBuildingType>;

  citizensNumber: number;
};


export let city: CityType;



beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      { 
        buildedAt: 2012, repaired: false,
        address: {
          number: 100,
          street: { title: 'White Street' },
        },
      },
      { 
        buildedAt: 2008, repaired: false,
        address: {
          number: 100,
          street: { title: 'Happy street' },
        },
      },
      { 
        buildedAt: 2020, repaired: false,
        address: {
          number: 101,
          street: { title: 'Happy street' },
        },
      },
    ],

    governmentBuildings: [
      { 
        type: 'HOSPITAL', budget: 200000, staffCount: 200,
        address: {
          street: {
            title: 'Central Str',
          },
        },
      },
      { 
        type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
        address: {
          street: {
            title: 'South Str',
          },
        },
      },
    ],

    citizensNumber: 100000,
  };
});
