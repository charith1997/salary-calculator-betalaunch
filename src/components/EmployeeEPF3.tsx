import { Flex, Spacer, Text } from "@chakra-ui/react";

const EmployeeEPF3 = (props: any) => {
  const calcETF8: any = (
    ((parseFloat(props.basicSalary) + parseFloat(props.totalOfEPFAllowed)) *
      3) /
    100
  ).toFixed(2);
  return (
    <>
      <Flex>
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          Employeer ETF (3%)
        </Text>
        <Spacer />
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          {props.basicSalary == "null" && "0.00"}
          {props.basicSalary == "" && "0.00"}
          {props.basicSalary > 0 && calcETF8}
        </Text>
      </Flex>
    </>
  );
};

export default EmployeeEPF3;
