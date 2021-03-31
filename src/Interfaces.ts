type TNumberInterface = {
  type: string;
  value: number;
};

type TStringInterface = {
  type: string;
  value: string | null;

}

export type IResponseRoomsCount = TNumberInterface;
export type IResponseArea = TNumberInterface;

export type IResponseInputType = TStringInterface
export type IResponseSelect = TStringInterface
