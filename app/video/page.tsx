import VideoDetails from '@/components/VideoDetails';

export const metadata = {
  title: 'Video Details | My Streaming Platform',
  description: 'Watch and learn more about this amazing video.',
};

export default function VideoPage() {
  return (
    <main>
      <VideoDetails />
    </main>
  );
}
