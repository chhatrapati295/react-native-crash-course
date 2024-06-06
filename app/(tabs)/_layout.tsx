import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import icons from "../../constants/icons";
import { styled } from "nativewind";

const StyledImg = styled(Image);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTabs = styled(Tabs);

const TabIcon = ({ color, focused, icon, name }: any) => {
  return (
    <StyledView className="flex flex-col gap-2 justify-center items-center">
      <StyledImg
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="h-5 w-5"
      />
      <StyledText
        // className={`${focused ? "font-psemibold" : "font-pregular"}`}
        style={{ color: color, fontSize: 12 }}
      >
        {name}
      </StyledText>
    </StyledView>
  );
};

const Layout = () => {
  return (
    <>
      <StyledTabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.home}
                name={"Home"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.bookmark}
                name={"Bookmark"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.plus}
                name={"Create"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.profile}
                name={"Profile"}
              />
            ),
          }}
        />
      </StyledTabs>
    </>
  );
};

const styles = StyleSheet.create({});

export default Layout;
