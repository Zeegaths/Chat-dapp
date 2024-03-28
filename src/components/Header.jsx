import { Flex } from "@radix-ui/themes";

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <div>Chatty Chat</div>
            <Flex gap={"4"} align={"center"}>
                <w3m-button />
            </Flex>
        </div>
    );
} 