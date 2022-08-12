import { Flex, Spacer, Text } from "@chakra-ui/react";

const GrossDeduction = (props: any) => {
  return (
    <>
      <Flex>
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          Gross Deduction
        </Text>
        <Spacer />
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          {props.grossDeductions == "" && "0.00"}
          {props.grossDeductions != "" &&
            parseFloat(props.grossDeductions).toFixed(2)}
        </Text>
      </Flex>
    </>
  );
};

export default GrossDeduction;
