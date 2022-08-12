import { Flex, Spacer, Text } from "@chakra-ui/react";

const EmployeeEPF8 = (props: any) => {
  const calcEPF8Total: any = (
    ((parseFloat(props.basicSalary) + parseFloat(props.totalOfEPFAllowed)) *
      8) /
    100
  ).toFixed(2);
  return (
    <>
      <Flex>
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          Employee EPF (8%)
        </Text>
        <Spacer />
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          {props.basicSalary == "null" && "0.00"}
          {props.basicSalary == "" && "0.00"}
          {props.basicSalary > 0 && calcEPF8Total}
        </Text>
      </Flex>
    </>
  );
};

export default EmployeeEPF8;
