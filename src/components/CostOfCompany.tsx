import { Flex, Spacer, Text } from "@chakra-ui/react";

const CostOfCompany = (props: any) => {
  const calcCost: any = (
    parseFloat(props.basicSalary) +
    parseFloat(props.grossEarnings) -
    parseFloat(props.grossDeductions) +
    ((parseFloat(props.basicSalary) + parseFloat(props.totalOfEPFAllowed)) *
      12) /
      100 +
    ((parseFloat(props.basicSalary) + parseFloat(props.totalOfEPFAllowed)) *
      3) /
      100
  ).toFixed(2);
  return (
    <>
      <Flex mt={4}>
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          CTC (Cost to Company)
        </Text>
        <Spacer />
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          {props.basicSalary == "null" && "0.00"}
          {props.basicSalary == "" && "0.00"}
          {props.basicSalary > 0 && calcCost}
        </Text>
      </Flex>
    </>
  );
};

export default CostOfCompany;
