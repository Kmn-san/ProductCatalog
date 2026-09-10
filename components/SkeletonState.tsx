import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

export default function SkeletonState() {
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
        // a procust card in skeleton
        <View className="flex-1 m-2">
            <View className="bg-white rounded-xl p-3 shadow-sm">
                {/* PRODUCT IMAGE */}
                <Animated.View
                    style={[{ width: '100%', height: 120, borderRadius: 8 }, animatedStyle]}
                    className="bg-gray-200"
                />
                {/* PRODUCT NAME */}
                <Animated.View
                    style={[{ width: '100%', height: 16, borderRadius: 4, marginTop: 8 }, animatedStyle]}
                    className="bg-gray-200"
                />
                <Animated.View
                    style={[{ width: '60%', height: 16, borderRadius: 4, marginTop: 4 }, animatedStyle]}
                    className="bg-gray-200"
                />

                {/* PRODUCT PRICE DISCOUNTED + RATE*/}
                <View className="flex-row items-center justify-between mt-1">
                    <Animated.View
                        style={[{ width: 60, height: 18, borderRadius: 4 }, animatedStyle]}
                        className="bg-gray-200"
                    />
                    <Animated.View
                        style={[{ width: 30, height: 14, borderRadius: 4 }, animatedStyle]}
                        className="bg-gray-200"
                    />
                </View>
            </View>
        </View>
    )
}