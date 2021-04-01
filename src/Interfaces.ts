type TNumberInterface = {
  type: string;
  value: number;
};

type TStringInterface = {
  type: string;
  value: string | null;
};

export type IResponseRoomsCount = TNumberInterface;
export type IResponseArea = TNumberInterface;

export type IResponseInputType = TStringInterface;
export type IResponseSelect = TStringInterface;

export type TComplexData = {
  houseType: 'new' | 'second' | 'room' | null;
  area: number;
  repareType: 'cosmetic' | 'complete' | 'design' | null;
  roomType: 'room' | 'kitchen' | 'combined' | 'toilet' | 'bath' | null;
  rooms: number;
};
