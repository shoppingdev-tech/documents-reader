import React from 'react'
import { styles } from './styles'
import { YStack, XStack, Text, Button } from "tamagui";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import AppTheme from '@src/styles/theme';

const Permission = () => {
  return (
    <YStack style={styles.container}>
      <YStack justifyContent='center' alignItems='center' backgroundColor={AppTheme.colors.disabled} style={styles.box}>
        <YStack height={160} width={160} backgroundColor={AppTheme.colors.white} borderRadius={80} justifyContent='center' alignItems='center'>
          <FontAwesome
            name="file-pdf-o"
            size={80}
            color={AppTheme.colors.primary}
          />
        </YStack>
      </YStack>
      <YStack style={styles.box} >
        <YStack style={styles.wrapper}>
          <YStack paddingTop="$4">
            <Text fontWeight={'bold'} fontSize={18} textAlign='center'>Permisssion Required</Text>
            <Text fontWeight={'500'} fontSize={14} marginTop="$2" paddingHorizontal="$6" textAlign='center'>To view files, access to your storage needs to be granted</Text>
          </YStack>
          <YStack paddingTop="$8">
            <Button letterSpacing={0.5} height={50} backgroundColor={AppTheme.colors.primary} color={AppTheme.colors.white}>GRANT PERMISSION</Button>
            <Button letterSpacing={0.5} height={50} marginTop="$4" backgroundColor={AppTheme.colors.disabled} color={AppTheme.colors.black}>NOT NOW</Button>
          </YStack>
        </YStack>
      </YStack>
    </YStack>
  )
}

export default Permission