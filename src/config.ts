enum RepareOptions {
  cosmetic = 'cosmetic',
  complete = 'complete',
  design = 'design',
}

enum RoomOptions {
  room = 'room',
  kitchen = 'kitchen',
  bath = 'bath',
  toilet = 'toilet',
  combined = 'combined',
}

enum FlatOptions {
  second = 'second',
  new = 'new',
}

type TRepare = {
  remont: number;
  materials: number;
};

export type TConfigRoom = {
  [key in RepareOptions]: {
    [key in RoomOptions]: TRepare;
  };
};

export type TConfigFlat = {
  [key in FlatOptions]: {
    [key in RepareOptions]: TRepare;
  };
};

export const configRoom: TConfigRoom = {
  cosmetic: {
    room: {
      remont: 2500,
      materials: 200,
    },
    kitchen: {
      remont: 2650,
      materials: 350,
    },
    bath: {
      remont: 10580,
      materials: 650,
    },
    toilet: {
      remont: 13500,
      materials: 850,
    },
    combined: {
      remont: 10580,
      materials: 650,
    },
  },
  complete: {
    room: {
      remont: 5380,
      materials: 700,
    },
    kitchen: {
      remont: 5900,
      materials: 880,
    },
    bath: {
      remont: 25168,
      materials: 3630,
    },
    toilet: {
      remont: 21500,
      materials: 3200,
    },
    combined: {
      remont: 25168,
      materials: 3630,
    },
  },
  design: {
    room: {
      remont: 7150,
      materials: 1830,
    },
    kitchen: {
      remont: 7980,
      materials: 1995,
    },
    bath: {
      remont: 32150,
      materials: 4830,
    },
    toilet: {
      remont: 31850,
      materials: 4830,
    },
    combined: {
      remont: 32150,
      materials: 4830,
    },
  },
};

export const configFlat: TConfigFlat = {
  second: {
    cosmetic: {
      remont: 2500,
      materials: 200,
    },
    complete: {
      remont: 5380,
      materials: 700,
    },
    design: {
      remont: 7150,
      materials: 1830,
    },
  },
  new: {
    cosmetic: {
      remont: 2500,
      materials: 200,
    },
    complete: {
      remont: 4380,
      materials: 700,
    },
    design: {
      remont: 6150,
      materials: 1830,
    },
  },
};
