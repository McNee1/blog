import cls from './space.module.scss';

import {
  MarginButtonType,
  MarginLeftType,
  MarginTopType,
  PaddingButtonType,
  PaddingLeftType,
  PaddingTopType,
  PaddingType,
  PaddingXType,
  PaddingYType,
} from '@/shared/types';

const marginButtonMap: Record<MarginButtonType, string> = {
  auto: cls.marginBottomAuto,
  mb2: cls.marginBottom2,
  mb4: cls.marginBottom4,
  mb6: cls.marginBottom6,
  mb8: cls.marginBottom8,
  mb10: cls.marginBottom10,
  mb12: cls.marginBottom12,
  mb14: cls.marginBottom14,
  mb16: cls.marginBottom16,
  mb18: cls.marginBottom18,
  mb20: cls.marginBottom20,
  mb22: cls.marginBottom22,
};

const marginLeftMap: Record<MarginLeftType, string> = {
  auto: cls.marginLeftAuto,
  ml8: cls.marginLeft8,
  ml2: cls.marginLeft2,
  ml4: cls.marginLeft4,
  ml6: cls.marginLeft6,
  ml10: cls.marginLeft10,
  ml12: cls.marginLeft12,
  ml14: cls.marginLeft14,
  ml16: cls.marginLeft16,
  ml18: cls.marginLeft18,
  ml20: cls.marginLeft20,
  ml22: cls.marginLeft22,
};

const marginTopMap: Record<MarginTopType, string> = {
  auto: cls.marginTopAuto,
  mt2: cls.marginTop2,
  mt4: cls.marginTop4,
  mt6: cls.marginTop6,
  mt8: cls.marginTop8,
  mt10: cls.marginTop10,
  mt12: cls.marginTop12,
  mt14: cls.marginTop14,
  mt16: cls.marginTop16,
  mt18: cls.marginTop18,
  mt20: cls.marginTop20,
  mt22: cls.marginTop22,
};

const paddingButtonClasses: Record<PaddingButtonType, string> = {
  pb2: cls.paddingBottom2,
  pb4: cls.paddingBottom4,
  pb6: cls.paddingBottom6,
  pb8: cls.paddingBottom8,
  pb10: cls.paddingBottom10,
  pb12: cls.paddingBottom12,
  pb14: cls.paddingBottom14,
  pb16: cls.paddingBottom16,
};

const paddingLeftMap: Record<PaddingLeftType, string> = {
  pl2: cls.paddingLeft2,
  pl4: cls.paddingLeft4,
  pl6: cls.paddingLeft6,
  pl8: cls.paddingLeft8,
  pl10: cls.paddingLeft10,
  pl12: cls.paddingLeft12,
  pl14: cls.paddingLeft14,
  pl16: cls.paddingLeft16,
};

const paddingTopMap: Record<PaddingTopType, string> = {
  pt2: cls.paddingTop2,
  pt4: cls.paddingTop4,
  pt6: cls.paddingTop6,
  pt8: cls.paddingTop8,
  pt10: cls.paddingTop10,
  pt12: cls.paddingTop12,
  pt14: cls.paddingTop14,
  pt16: cls.paddingTop16,
};

const paddingMap: Record<PaddingType, string> = {
  p2: cls.padding2,
  p4: cls.padding4,
  p6: cls.padding6,
  p8: cls.padding8,
  p10: cls.padding10,
  p12: cls.padding12,
  p14: cls.padding14,
  p16: cls.padding16,
};
const paddingXMap: Record<PaddingXType, string> = {
  px2: cls.paddingX2,
  px4: cls.paddingX4,
  px6: cls.paddingX6,
  px8: cls.paddingX8,
  px10: cls.paddingX10,
  px12: cls.paddingX12,
  px14: cls.paddingX14,
  px16: cls.paddingX16,
};
const paddingYMap: Record<PaddingYType, string> = {
  py2: cls.paddingY2,
  py4: cls.paddingY4,
  py6: cls.paddingY6,
  py8: cls.paddingY8,
  py10: cls.paddingY10,
  py12: cls.paddingY12,
  py14: cls.paddingY14,
  py16: cls.paddingY16,
};

interface SpaceProps {
  marginButton?: MarginButtonType;
  marginLeft?: MarginLeftType;
  marginTop?: MarginTopType;
  padding?: PaddingType;
  paddingBottom?: PaddingButtonType;
  paddingLeft?: PaddingLeftType;
  paddingTop?: PaddingTopType;
  paddingX?: PaddingXType;
  paddingY?: PaddingYType;
}

export const Space = (props: SpaceProps) => {
  const {
    marginButton,
    marginLeft,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingTop,
    padding,
    paddingX,
    paddingY,
  } = props;

  const marginClasses = [
    marginButton && marginButtonMap[marginButton],
    marginLeft && marginLeftMap[marginLeft],
    marginTop && marginTopMap[marginTop],
  ];

  const paddingClasses = [
    paddingBottom && paddingButtonClasses[paddingBottom],
    paddingLeft && paddingLeftMap[paddingLeft],
    paddingTop && paddingTopMap[paddingTop],
    padding && paddingMap[padding],
    paddingX && paddingXMap[paddingX],
    paddingY && paddingYMap[paddingY],
  ];

  return [...marginClasses, ...paddingClasses];
};
