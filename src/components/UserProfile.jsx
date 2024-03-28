import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";


const UserProfile = () => {
    return (
        <Card size="2" style={{ width: 425 }}>
            <Flex gap="" align="center">
                <Avatar size="4" radius="full"  color="indigo" />
                <Box width={"100%"}>
                    <Flex justify={"between"} align={"center"}>
                        <Text as="div" weight="bold">
                            {name}
                        </Text>
                        <button
                            className="text-white bg-blue-600 py-1 px-4 rounded-md"
                            // onClick={() => handleMessage(name)}
                        >
                            message
                        </button>
                    </Flex>
                    <Text as="div" color="gray">
                        ens.eth
                    </Text>
                </Box>
            </Flex>
        </Card>
    );
};

export default UserProfile;