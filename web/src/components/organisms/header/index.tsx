import { Box, Container } from "bumbag";
import Nav from "../../molecules/nav";

const Header = () => {
  return (
    <Box backgroundColor={"default"}>
      <Container>
        <Nav/>
      </Container>
    </Box>
  );
};

export default Header;
