import { styled } from "nativewind";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);

const Home = () => {
  return (
    <StyledView className="flex justify-center items-center flex-1 bg-[#161622]">
      <StyledText className="text-gray-100">Home page</StyledText>
    </StyledView>
  );
};

// const styles = StyleSheet.create({});
export default Home;
