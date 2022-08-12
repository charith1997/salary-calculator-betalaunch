import {
    Flex,
    Spacer,
    Text,
  } from "@chakra-ui/react";

const BasicSalary = (props: any) => {
  return (
    <>
      <Flex>
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          Basic Salary
        </Text>
        <Spacer />
        <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
          {props.basicSalary == "" && "0.00"}
          {props.basicSalary != "" && parseFloat(props.basicSalary).toFixed(2)}
        </Text>
      </Flex>
    </>
  );
};

export default BasicSalary;
