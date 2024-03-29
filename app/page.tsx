import Image from 'next/image';
import { HeadingH5 } from '@/components/typography';
import VideoCard from '@/components/VideoCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { homeData } from '@/lib/home-data';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              src="https://dummyimage.com/2000x500/000/fff"
              alt="Video Streaming App"
              width={2000}
              height={500}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="https://dummyimage.com/2000x500/f2f2f2/000"
              alt="Video Streaming App"
              width={2000}
              height={500}
              // layout="responsive"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <HeadingH5 className="mt-4">Cool Featured Content</HeadingH5>
      <div className="grid lg:grid-cols-3 gap-4">
        <VideoCard title="here is some text" />
        <VideoCard title="here is some text" />
        <VideoCard title="here is some text" />
      </div>

      <HeadingH5 className="mt-4">Featured Videos</HeadingH5>
      <div className="grid lg:grid-cols-3 gap-4">
        {homeData.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            // @ts-ignore
            views={parseFloat(video.views)}
          />
        ))}
      </div>

      <HeadingH5 className="mt-4">Live Streams</HeadingH5>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="grid lg:grid-cols-4 gap-4">
              <VideoCard title="carousel text1" />
              <VideoCard title="carousel text1" />
              <VideoCard title="carousel text1" />
              <VideoCard title="carousel text1" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid lg:grid-cols-4 gap-4">
              <VideoCard title="carousel text2" />
              <VideoCard title="carousel text2" />
              <VideoCard title="carousel text2" />
              <VideoCard title="carousel text2" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
