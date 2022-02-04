import { Box, Container, Image, TopNav } from "bumbag";
import Logo from "../../../favicon.svg";

const Nav = () => {
  return (
    <TopNav defaultSelectedId="get-started">
      <TopNav.Section>
        <TopNav.Item fontWeight={"semibold"} marginRight={".5rem"}>
          <Image width={"2.5rem"} paddingY={".5rem"} src={Logo} />
          telzir
        </TopNav.Item>
        <TopNav.Item navId="get-started">Get started</TopNav.Item>
        <TopNav.Item navId="price">Prices</TopNav.Item>
      </TopNav.Section>
    </TopNav>
  );
};

export default Nav;
