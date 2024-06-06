import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

const StyledSafeArea = styled(SafeAreaView);
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledLink = styled(Link);
const StyledImage = styled(Image);

const index = () => {
  return (
    // <>
    //   <Text>Header</Text>
    //   <StyledView className="flex flex-1 justify-center items-center">
    //     <StyledText className="text-2xl capitalize font-pblack ">
    //       I'm Aura
    //     </StyledText>
    //     <StyledLink
    //       href={"/profile"}
    //       className="text-blue-600 font-medium underline text-sm"
    //     >
    //       Go to profile page
    //     </StyledLink>
    //   </StyledView>
    //   <Text>Footer</Text>
    // </>
    <StyledSafeArea className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <StyledView className=" w-full  justify-center items-center p-4">
          <StyledImage
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            source={images.logo}
          />
          <StyledImage
            className="w-full max-w-[380px] h-[300px]"
            resizeMode="contain"
            source={images.cards}
          />
          <StyledView className="relative mt-5">
            <StyledText className="text-3xl text-white font-bold text-center">
              Discover endless possibilities with{" "}
              <StyledText className="text-secondary-200">Aura</StyledText>
            </StyledText>
            <StyledImage
              source={images.path}
              resizeMode="contain"
              className="absolute -bottom-2 -right-8 w-[136px] h-[15px] "
            />
          </StyledView>
          <StyledLink
            href={"/profile"}
            className="text-blue-300 mt-16 font-medium underline text-sm"
          >
            Go to profile page
          </StyledLink>
        </StyledView>
      </ScrollView>
    </StyledSafeArea>
  );
};

export default index;
