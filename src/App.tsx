import "./App.css";
import {
  Flex,
  Input,
  FormLabel,
  FormControl,
  Spacer,
  Center,
  Text,
  Image,
  Box,
  HStack,
  Checkbox,
  Divider,
} from "@chakra-ui/react";
import resetIcon from "./assets/reset_icon.png";
import closeIcon from "./assets/close_icon.png";
import addIcon from "./assets/add_icon.png";
import { useState } from "react";

function App() {
  const [allowances, setAllowances] = useState([
    { allowance: "", epf: false },
  ]);
  const [deductions, setDeductions] = useState([{ deduction: "" }]);

  console.log(allowances, "+++++");
  console.log(deductions, "----");

  const addNewAllowanceHandler = () => {
    setAllowances([...allowances, { allowance: "", epf: false }]);
  };

  const removeAllowanceHandler = (index: number) => {
    const allowanceList = [...allowances];
    allowanceList.splice(index, 1);
    setAllowances(allowanceList);
  };

  const addNewDeductionHandler = () => {
    setDeductions([...deductions, { deduction: "" }]);
  };

  const removeDeductionHandler = (index: number) => {
    const deductionList = [...deductions];
    deductionList.splice(index, 1);
    setDeductions(deductionList);
  };

  const allowanceChangeHandler = (event: any, index: number) => {
    const { name, value } = event.target;
    const list: any = [...allowances];
    list[index][name] = value;
    setAllowances(list);
  };

  const checkboxChangeHandler = (event: any, index: number) => {
    const { name, checked } = event.target;
    const list: any = [...allowances];
    list[index][name] = checked;
    setAllowances(list);
  };

  const deductionChangeHandler = (event: any, index: number) => {
    const { name, value } = event.target;
    const list: any = [...deductions];
    list[index][name] = value;
    setDeductions(list);
  };

  return (
    <Flex padding={"100"}>
      <Box
        flex="2"
        borderRadius={"8px"}
        bg="#FAFAFA"
        border={"1px"}
        borderColor={"#E0E0E0"}
        padding={"8"}
        me={5}
      >
        <form>
          <Flex>
            <Text fontSize="20px" fontFamily={"inter"} fontWeight={"700"}>
              Calculate Your Salary
            </Text>
            <Spacer />
            <HStack>
              <Image src={resetIcon} w={"21px"} h={"18px"} />
              <Text fontFamily={"inter"} fontSize={"14px"} color={"#0052EA"}>
                Reset
              </Text>
            </HStack>
          </Flex>

          <FormControl mt={4}>
            <FormLabel
              fontFamily={"inter"}
              fontWeight={"600"}
              fontSize={"16px"}
            >
              Basic Salary
            </FormLabel>
            <Input
              type="number"
              w={"380px"}
              h={"48px"}
              borderRadius={"4px"}
              bg={"#FFFFFF"}
              borderColor="#E0E0E0"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel
              fontFamily={"inter"}
              fontWeight={"600"}
              fontSize={"16px"}
              mb={0}
            >
              Earnings
            </FormLabel>
            <Text
              fontFamily={"inter"}
              fontWeight={"400"}
              fontSize={"12px"}
              color="#757575"
              mb={2}
            >
              Allowance, Fixed Allowance, Bonus and etc.
            </Text>

            {allowances.map((newAllowance: any, index: number) => (
              <Flex mb={3} key={index}>
                <Input
                  type="number"
                  w={"380px"}
                  h={"48px"}
                  borderRadius={"4px"}
                  bg={"#FFFFFF"}
                  borderColor="#E0E0E0"
                  name="allowance"
                  id="allowance"
                  value={newAllowance.allowance}
                  onChange={(e: any) => allowanceChangeHandler(e, index)}
                />
                <Box
                  ms={"2"}
                  w={"32px"}
                  h={"32px"}
                  bg="#EFEFEF"
                  boxSizing="border-box"
                  borderRadius={"20px"}
                >
                  <button
                    type="button"
                    onClick={() => removeAllowanceHandler(index)}
                  >
                    <Center>
                      <Image
                        src={closeIcon}
                        w="12px"
                        h="12px"
                        mt={"2.5"}
                        ms={"2.5"}
                      />
                    </Center>
                  </button>
                </Box>
                <Checkbox
                  ms={5}
                  fontFamily={"inter"}
                  fontWeight={"400"}
                  fontSize={"16px"}
                  name="epf"
                  id="epf"
                  onChange={(e: any) => checkboxChangeHandler(e, index)}
                >
                  EPF/ETF
                </Checkbox>
              </Flex>
            ))}
          </FormControl>

          <button type="button" onClick={addNewAllowanceHandler}>
            <Flex mt={5}>
              <Image src={addIcon} w="14px" h={"14px"} />
              <Text
                fontFamily={"inter"}
                fontWeight={"500"}
                fontSize={"14px"}
                color={"#0052EA"}
                ms={2}
              >
                Add New Allowance
              </Text>
            </Flex>
          </button>

          <Divider mt={2} mb={2} />

          <FormControl mt={4}>
            <FormLabel
              fontFamily={"inter"}
              fontWeight={"600"}
              fontSize={"16px"}
            >
              Deductions
            </FormLabel>
            <Text
              fontFamily={"inter"}
              fontWeight={"400"}
              fontSize={"12px"}
              color="#757575"
              mb={2}
            >
              Salary Advances, Loan Deductions and all
            </Text>

            {deductions.map((singleDeduction: any, index: number) => (
              <Flex mb={3} key={index}>
                <Input
                  type="number"
                  w={"380px"}
                  h={"48px"}
                  borderRadius={"4px"}
                  bg={"#FFFFFF"}
                  borderColor="#E0E0E0"
                  name="deduction"
                  id="deduction"
                  value={singleDeduction.deduction}
                  onChange={(e: any) => deductionChangeHandler(e, index)}
                />
                <Box
                  ms={"2"}
                  w={"32px"}
                  h={"32px"}
                  bg="#EFEFEF"
                  boxSizing="border-box"
                  borderRadius={"20px"}
                >
                  <button
                    type="button"
                    onClick={() => removeDeductionHandler(index)}
                  >
                    <Center>
                      <Image
                        src={closeIcon}
                        w="12px"
                        h="12px"
                        mt={"2.5"}
                        ms={"2.5"}
                      />
                    </Center>
                  </button>
                </Box>
              </Flex>
            ))}

            <button type="button" onClick={addNewDeductionHandler}>
              <Flex mt={5}>
                <Image src={addIcon} w="14px" h={"14px"} />
                <Text
                  fontFamily={"inter"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                  fontSize={"14px"}
                  lineHeight={"20px"}
                  color={"#0052EA"}
                  ms={2}
                >
                  Add New Deduction
                </Text>
              </Flex>
            </button>
          </FormControl>
        </form>
      </Box>

      <Box
        flex="2"
        bg={"#FFFFFF"}
        borderRadius={"8px"}
        border={"1px"}
        borderColor={"#E0E0E0"}
      >
        <Box padding={8}>
          <Text
            fontFamily={"inter"}
            fontWeight={"700"}
            fontSize={"20px"}
            mb={4}
          >
            Your salary
          </Text>
          <Flex mb={2}>
            <Text
              fontFamily={"inter"}
              fontWeight={"600"}
              fontSize={"14px"}
              color={"#757575"}
            >
              Items
            </Text>
            <Spacer />
            <Text
              fontFamily={"inter"}
              fontWeight={"600"}
              fontSize={"14px"}
              color={"#757575"}
            >
              Amount
            </Text>
          </Flex>

          <Flex>
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              Basic Salary
            </Text>
            <Spacer />
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              100,000.00
            </Text>
          </Flex>

          <Flex>
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              Gross Earning
            </Text>
            <Spacer />
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              30,000.00
            </Text>
          </Flex>

          <Flex>
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              Gross Deduction
            </Text>
            <Spacer />
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              5,000.00
            </Text>
          </Flex>

          <Flex>
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              Employee EPF (8%)
            </Text>
            <Spacer />
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              8,800.00
            </Text>
          </Flex>
        </Box>

        <Box
          bg={"#FFFFFF"}
          borderRadius={"4px"}
          border={"1px"}
          borderColor={"#E0E0E0"}
          padding={3}
          mx={5}
        >
          <Flex>
            <Text fontFamily={"inter"} fontWeight={"600"} fontSize={"16px"}>
              Net Salary (Take Home)
            </Text>
            <Spacer />
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              116,200.00
            </Text>
          </Flex>
        </Box>

        <Box padding={8}>
          <Flex mb={2}>
            <Text
              fontFamily={"inter"}
              fontWeight={"600"}
              fontSize={"14px"}
              color={"#757575"}
            >
              Contribution from the Employer
            </Text>
          </Flex>

          <Flex>
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              Employeer EPF (12%)
            </Text>
            <Spacer />
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              13,200.00
            </Text>
          </Flex>

          <Flex>
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              Employeer ETF (3%)
            </Text>
            <Spacer />
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              3,300.00
            </Text>
          </Flex>

          <Flex mt={4}>
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              CTC (Cost to Company)
            </Text>
            <Spacer />
            <Text fontFamily={"inter"} fontWeight={"400"} fontSize={"16px"}>
              141,500.00
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
