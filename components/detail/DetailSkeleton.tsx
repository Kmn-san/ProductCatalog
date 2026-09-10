import { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

function Bone({ style, className }: { style?: object, className?: string }) {
    const opacity = useSharedValue(0.3)

    useEffect(() => {
        opacity.value = withRepeat(
            withTiming(1, { duration: 800, easing: Easing.ease }),
            -1, // loop
            true // play 1,0.3,1 looks like breathing
        )
    }, [])

    const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }))

    return (
        <Animated.View
            style={[style, animatedStyle]}
            className="bg-gray-200"
        />

    )
}

export default function DetailSkeleton() {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            {/* PICTURE */}
            <Bone style={{ width, height: width }} className='rounded-none' />

            {/* PRICE */}
            <View className="flex-row items-baseline px-4 mt-3">
                <Bone style={{ width: 100, height: 28 }} />
                <Bone style={{ width: 60, height: 18, marginLeft: 10 }} />
            </View>

            {/* PRODUCT NAME  */}
            <View className=" px-4 mt-3">
                <Bone style={{ width: '80%', height: 20 }} />
            </View>

            {/* REMAIN  */}
            <View className=" px-4 mt-5">
                <Bone style={{ width: '100%', height: 16, marginBottom: 12 }} />
                <Bone style={{ width: '100%', height: 16, marginBottom: 12 }} />
                <Bone style={{ width: '100%', height: 16, marginBottom: 12 }} />
                <Bone style={{ width: '100%', height: 16, marginBottom: 12 }} />

            </View>
        </SafeAreaView >)
}