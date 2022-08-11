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

        <FormControl>
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

        <FormControl>
          <FormLabel fontFamily={"inter"} fontWeight={"600"} fontSize={"16px"}>
            Earnings
          </FormLabel>
          <Text
            fontFamily={"inter"}
            fontWeight={"400"}
            fontSize={"12px"}
            color="#757575"
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
          <Flex>
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

        <FormControl>
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

      <Box flex="2" bg="tomato">
        <Text>Box 3</Text>
      </Box>
    </Flex>
  );
}

export default App;
