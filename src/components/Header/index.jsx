import React from "react";
import { YStack, Text } from "tamagui";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AppTheme from "@src/styles/theme";

const Header = ({
  backgroundColor,
  paddingHorizontal = "$4",
  showBackIcon = false,
  onPress = () => {}
}) => {
  return (
    <YStack
      flexDirection="row"
      paddingHorizontal={paddingHorizontal}
      paddingVertical="$2"
      alignItems="center"
      backgroundColor={backgroundColor}
      onPress={onPress}
    >
      {showBackIcon && (
        <MaterialIcons
          name="chevron-left"
          size={28}
          style={{ color: AppTheme.colors.white }}
        />
      )}
      <Text color={"$white"} fontWeight={"bold"} fontSize={18}>
        PDF Reader
      </Text>
    </YStack>
  );
};

export default Header;
