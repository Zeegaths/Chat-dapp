import { Button, Card, Flex, Text, TextField, Box , Dialog } from "@radix-ui/themes";
import { useState } from "react";
import useRegisterUser from "../hooks/UseRegisterUser";

const RegisterUser = () => {
    // const [name, setName] = useState("");

    const handleSetEns = useRegisterUser(name);

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>Set Ens</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Register ENS</Dialog.Title>
                

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Name
                        </Text>
                        <TextField.Root
                            defaultValue="Freja Johnsen"
                            placeholder="Enter your ens"
                        />
                    </label>                    
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button
                          className="bg-blue-600"
                          onClick={handleSetEns}
                        >
                            Save Ens
                            </Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default RegisterUser;
