import { Flex, Spacer, Text } from "@chakra-ui/react";

const GrossEarnings = (props: any) => {
  return (
    <>
      <Flex>
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          Gross Earning
        </Text>
        <Spacer />
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          {props.grossEarnings == "" && "0.00"}
          {props.grossEarnings != "" &&
            parseFloat(props.grossEarnings).toFixed(2)}
        </Text>
      </Flex>
    </>
  );
};

export default GrossEarnings;
