import { Flex } from "@radix-ui/themes";
// import RegisterUser from "./RegisterUser";

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <div>The Matrix</div>
             {/* <RegisterUser /> */}
            <Flex gap={"4"} align={"center"}>                
                <w3m-button />
            </Flex>
        </div>
    );
} 