import {
    Flex,
    Spacer,
    Text,
  } from "@chakra-ui/react";

const EmployeeEPF12 = (props: any) => {
  return (
    <>
      <Flex>
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          Employeer EPF (12%)
        </Text>
        <Spacer />
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          {props.totalOfEPFAllowed == "" && "0.00"}
          {props.totalOfEPFAllowed != "" &&
            (
              ((parseFloat(props.basicSalary) + parseFloat(props.totalOfEPFAllowed)) * 12) /
              100
            ).toFixed(2)}
        </Text>
      </Flex>
    </>
  );
};

export default EmployeeEPF12;
