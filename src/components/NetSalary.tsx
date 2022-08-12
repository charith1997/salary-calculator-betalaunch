import { Flex, Spacer, Text } from "@chakra-ui/react";

const NetSalary = (props: any) => {
  const calcNetSalary: any = (
    parseFloat(props.basicSalary) +
    parseFloat(props.grossEarnings) -
    parseFloat(props.grossDeductions) -
    ((parseFloat(props.basicSalary) + parseFloat(props.totalOfEPFAllowed)) *
      8) /
      100
  ).toFixed(2);

  return (
    <>
      <Flex>
        <Text fontFamily={"inter"} fontWeight={"600"} fontSize={"16px"}>
          Net Salary (Take Home)
        </Text>
        <Spacer />
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          {props.basicSalary == "null" && "0.00"}
          {props.basicSalary == "" && "0.00"}
          {props.basicSalary > 0 && calcNetSalary}
        </Text>
      </Flex>
    </>
  );
};

export default NetSalary;
