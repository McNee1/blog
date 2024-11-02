import { Flex, FlexProps } from '../Flex';

type FlexColProps = Omit<FlexProps, 'direction'>;

export const FlexCol = (props: FlexColProps) => {
  return (
    <Flex
      direction='col'
      {...props}
    />
  );
};
