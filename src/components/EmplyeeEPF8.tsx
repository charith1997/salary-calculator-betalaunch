import {
    Flex,
    Spacer,
    Text,
  } from "@chakra-ui/react";

const EmployeeEPF8 = (props: any) => {
    return <>
    <Flex>
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              Employee EPF (8%)
            </Text>
            <Spacer />
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              {props.totalOfEPFAllowed == "" && "0.00"}
              {props.totalOfEPFAllowed != "" &&
                (
                  ((parseFloat(props.basicSalary) + parseFloat(props.totalOfEPFAllowed)) *
                    8) /
                  100
                ).toFixed(2)}
            </Text>
          </Flex></>
}

export default EmployeeEPF8;