import React from 'react'
import { YStack, Text } from 'tamagui'
const Header = () => {
    return (
        <YStack paddingHorizontal="$4" paddingVertical="$2" backgroundColor={'$primary'} >
            <Text color={'$white'} fontWeight={'bold'} fontSize={18}>All PDF Reader</Text>
        </YStack>
    )
}

export default Header