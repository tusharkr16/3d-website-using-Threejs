import React from 'react'
import styled from 'styled-components';
import logo from "../components/images/greeting.png";
import search from "../components/images/search.png";

const Section = styled.div`
display: flex;
justify-content: center;

`;

const Container = styled.div`
width: 1400px;
padding: 10px 0;
display: flex;
justify-content: space-between;
align-items: center;

`;

const Links = styled.div`
display:flex;
align-items:center;
gap:20px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
height:50px;
padding:2px;
`;

const List = styled.div`
display: flex;
gap:30px;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const ListItem = styled.div`
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src={logo}/>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
            </Links>
            <Icons>
          <Icon src={search} />
          <Button>Hire Now</Button>
          </Icons>
        </Container>
    </Section>
  )
}

export default Navbar