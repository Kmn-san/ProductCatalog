import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { Review } from '../../types/Review';

type Props = {
    reviews: Review[];
}

function ReviewItem({ review }: { review: Review }) {
    const formattedDate = new Date(review.date).toLocaleDateString();
    return (
        <View className="py-3 border-b border-gray-50">
            <View className="flex-row items-center justify-between">
                <Text className="text-sm font-semibold text-gray-900">
                    {review.reviewerName}
                </Text>
                <Text className="text-xs text-gray-400">
                    {formattedDate}
                </Text>
            </View>

            <View className="flex-row items-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Ionicons
                        key={i}
                        name={i < review.rating ? "star" : "star-outline"}
                        size={12}
                        color="#FBBF24"
                    />
                ))}
            </View>
            <Text className="text-sm text-gray-600 mt-1">{review.comment}</Text>
        </View>
    )
}

export default function ReviewSection({ reviews }: Props) {
    const topThree = reviews.slice(0, 3)
    return (
        <View className="px-4 mt-3 border-t border-gray-100 pt-2">
            <Text className="text-base font-semibold text-gray-900">
                Reviews ({reviews.length})
            </Text>
            {topThree.map((review, index) => (
                <ReviewItem key={index} review={review} />
            ))}
        </View>
    )
}