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
        <VideoCard
          title="here is some text"
          views="999"
          tags={['sports', 'nba', 'miami heat', 'lebron james']}
        />
        <VideoCard
          title="here is some text"
          views="2349578"
          tags={['sports', 'nfl', 'miami dolphins', 'dan marino']}
        />
        <VideoCard
          title="here is some text"
          views="230582820"
          tags={['news', 'politics', 'labor', 'unions']}
        />
      </div>

      <HeadingH5 className="mt-4">Featured Videos</HeadingH5>
      <div className="grid lg:grid-cols-3 gap-4">
        {homeData.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            // @ts-ignore
            views={parseFloat(video.views)}
            tags={video.tags}
          />
        ))}
      </div>

      <HeadingH5 className="mt-4">Trending Videos</HeadingH5>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="grid lg:grid-cols-4 gap-4">
              <VideoCard title="carousel text1" views="1" />
              <VideoCard title="carousel text2" views="2" />
              <VideoCard title="carousel text3" views="3" />
              <VideoCard title="carousel text4" views="4" />
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
