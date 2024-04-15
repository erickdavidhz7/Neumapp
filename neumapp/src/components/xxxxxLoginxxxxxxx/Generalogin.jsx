import "./Css/styles.css";
import React from "react";
import Logo from "./Logo";
import LoginForm from "./LoginForm";
import Title from "./Title";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import SplitScreen from "./SplitScreen";

const Generalogin = () => {
  return (
    <>
      <SplitScreen>
        <LeftSection>
          <Logo />
          <Title>Neumapp</Title>
        </LeftSection>
        <RightSection>
          <LoginForm />
        </RightSection>
      </SplitScreen>
    </>
  );
};

export default Generalogin;
