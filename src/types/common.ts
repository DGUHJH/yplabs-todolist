type MarginType = {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

export type FontType = {
  fontFamily:
    | 'NotoSansKR-Black'
    | 'NotoSansKR-Bold'
    | 'NotoSansKR-Medium'
    | 'NotoSansKR-Regular'
    | 'NotoSansKR-Thin'
    | 'NanumSquareLight'
    | 'NanumSquare'
    | 'NanumSquareBold'
    | 'NanumSquareExtraBold'
    | 'NanumSquareAcb'
    | 'NanumSquareAceb'
    | 'NanumSquareAcl'
    | 'NanumSquareAcr';
  fontSize: number;
  fontWeight?: number;
  color?: string;
  lineHeight?: string;
  onClick?: () => void;
  animation?: string;
} & MarginType;

export type ImageType = {
  src: string;
  width: number;
  height?: number;
  borderRadius?: number;
  onClick?: () => void;
} & MarginType;

export type DividerType = {
  width: number;
  height?: number;
  background: string;
} & MarginType;

export type DotType = {
  width: number;
  height?: number;
  background: string;
} & MarginType;
