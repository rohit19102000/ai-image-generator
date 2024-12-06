import React from "react";
import styled from "styled-components";
import Button from "./buttons/button";
import { useLocation, useNavigate } from "react-router";
import { AddRounded, ExploreRounded } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.menu_primary_text};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;



const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split("/");

  
  return (
    <Container>
      GemAI
      {
        path[1] === 'post' ? 
        (
            <Button
            onClick={()=> navigate("/")}
            text="Explore posts"
            leftIcon={<ExploreRounded style={{ fontSize: "18px" }} 
             type="secondary"
            />}
        />
        ):(
    <Button

    onClick={()=> navigate("/post")}
        text="Create new post"
        leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
     
    />
        )
      }
    </Container>
  );
};

export default Navbar;