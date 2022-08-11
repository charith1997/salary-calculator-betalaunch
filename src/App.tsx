import "./App.css";
import {
  Flex,
  FormHelperText,
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
  VStack,
} from "@chakra-ui/react";
import resetIcon from "./assets/reset_icon.png";
import closeIcon from "./assets/close_icon.png";
import addIcon from "./assets/add_icon.png";

function App() {
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
          <FormLabel fontFamily={"inter"} fontWeight={"600"} fontSize={"16px"}>
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
          <Flex mb={3}>
            <Input
              type="number"
              w={"380px"}
              h={"48px"}
              borderRadius={"4px"}
              bg={"#FFFFFF"}
              borderColor="#E0E0E0"
            />
            <Box
              ms={"2"}
              w={"32px"}
              h={"32px"}
              bg="#EFEFEF"
              boxSizing="border-box"
              borderRadius={"20px"}
            >
              <Center>
                <Image src={closeIcon} w="12px" h="12px" mt={"2.5"} />
              </Center>
            </Box>
            <Checkbox
              ms={5}
              fontFamily={"inter"}
              fontWeight={"400"}
              fontSize={"16px"}
            >
              EPF/ETF
            </Checkbox>
          </Flex>
          <Flex mb={3}>
            <Input
              type="number"
              w={"380px"}
              h={"48px"}
              borderRadius={"4px"}
              bg={"#FFFFFF"}
              borderColor="#E0E0E0"
            />
            <Box
              ms={"2"}
              w={"32px"}
              h={"32px"}
              bg="#EFEFEF"
              boxSizing="border-box"
              borderRadius={"20px"}
            >
              <Center>
                <Image src={closeIcon} w="12px" h="12px" mt={"2.5"} />
              </Center>
            </Box>
            <Checkbox
              ms={5}
              fontFamily={"inter"}
              fontWeight={"400"}
              fontSize={"16px"}
              defaultChecked
            >
              EPF/ETF
            </Checkbox>
          </Flex>

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
        </FormControl>

        <Divider mt={2} mb={2} />

        <FormControl mt={4}>
          <FormLabel fontFamily={"inter"} fontWeight={"600"} fontSize={"16px"}>
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
          <Flex mb={3}>
            <Input
              type="number"
              w={"380px"}
              h={"48px"}
              borderRadius={"4px"}
              bg={"#FFFFFF"}
              borderColor="#E0E0E0"
            />
            <Box
              ms={"2"}
              w={"32px"}
              h={"32px"}
              bg="#EFEFEF"
              boxSizing="border-box"
              borderRadius={"20px"}
            >
              <Center>
                <Image src={closeIcon} w="12px" h="12px" mt={"2.5"} />
              </Center>
            </Box>
          </Flex>

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
        </FormControl>
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
