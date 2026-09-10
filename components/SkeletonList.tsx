import { FlatList } from 'react-native';
import SkeletonState from './SkeletonState';

export default function SkeletonList() {
  // 8 items for a screen
  const placeholders = Array.from({ length: 8 });
  return (
    <FlatList
      data={placeholders}
      numColumns={2}
      renderItem={() => <SkeletonState />}
    />
  )
}