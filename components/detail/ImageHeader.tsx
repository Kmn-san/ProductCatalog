import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Dimensions, Image, Pressable, View } from 'react-native';

const { width } = Dimensions.get('window');

type Props = {
    images: string[]
}

export default function ImageHeader({ images }: Props) {
    return (
        <View>
            <Image
                source={{ uri: images[0] }}
                style={{ width, height: width }}
                resizeMode="cover"
            />
            <Pressable
                onPress={() => router.back()}
                className="absolute top-12 left-4 bg-white/90 rounded-full w-10 h-10 items-center justify-center"
            >
                <Ionicons name='arrow-back' size={22} color="black" />
            </Pressable>
        </View>
    )
}