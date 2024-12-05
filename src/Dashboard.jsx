import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #f7f9fc;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SidebarHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const NavItem = styled.li`
  font-size: 18px;
  padding: 15px 20px;
  color: #bdc3c7;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #34495e;
    color: white;
  }
`;

const Main = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: white;
  width: 500px;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const Detail = styled.p`
  font-size: 18px;
  margin: 10px 0;
  color: #555555;
`;

const Button = styled.button`
  margin-top: 30px;
  background-color: #2980b9;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1c5980;
  }
`;

const Dashboard = () => {
  const location = useLocation();
  const data = location.state || {greet: "", name: "Unknown", email: "Unknown" };

  return (
    <Container>
      <Sidebar>
        <SidebarHeading>Dashboard</SidebarHeading>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Profile</NavItem>
          <NavItem>Privacy</NavItem>
          <NavItem>Settings</NavItem>
        </NavList>
      </Sidebar>
      <Main>
        <Card>
          <Heading>{data.greet}, {data.name}!</Heading>
          <Detail><strong>Your Email:</strong> {data.email}</Detail>
          <a href="/"><Button>Log Out</Button></a>
        </Card>
      </Main>
    </Container>
  );
};

export default Dashboard;
