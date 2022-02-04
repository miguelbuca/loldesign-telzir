import { Box, Container, Divider } from "bumbag";
import { IMain } from "../../../interfaces/components";
import Header from "../../organisms/header";

const Main = ({ children }: IMain) => {
  return (
    <Box>
        <Header/>
        <Divider/>
        <Box paddingY={'4rem'}>
            {children}
        </Box>
    </Box>
  );
};

export default Main;
