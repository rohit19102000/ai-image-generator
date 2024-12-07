import React, { useState } from "react";
import styled from "styled-components";
import Button from "../buttons/button";
import TextInput from "../textInput/TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";



const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;



const GenerateImage = () => {
  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>
          Write your prompt according to the image you want to generate!
        </Desc>
      </Top>
      <Body>
      <TextInput
          label="Author"
          placeholder="Enter your name..."
          name="name"

        /> 
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image"
          name="prompt"
          textArea
          rows="8"
          
        />

        you can post the ai generated image to the community
      </Body>
      <Actions>

      <Button
          text="Generate Image"
          leftIcon={<AutoAwesome />}
          flex
          
        />
        <Button
          text="Post Image"
          leftIcon={<CreateRounded />}
          type="secondary"
          flex
         
        />
    </Actions>
    </Form>
  )
}

export default GenerateImage
