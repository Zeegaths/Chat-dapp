import React from 'react';
import MyAvatar from './MyAvatar';
import { Button, Card, Flex, Text, TextField, Box , Dialog } from "@radix-ui/themes";


const AvatarPopUp = () => {
  return (
    <div>
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>Set Ens</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                              

               <MyAvatar />
               
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                   
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
      
    </div>
  )
}

export default AvatarPopUp
