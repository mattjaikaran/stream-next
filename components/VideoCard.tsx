'use client';

import { HeadingH5 } from './typography';
import { Badge } from './ui/badge';
import { Card, CardHeader, CardContent } from './ui/card';
import Image from 'next/image';

const VideoCard = ({
  title,
  thumbnail,
  views,
  tags,
}: {
  title: string;
  thumbnail?: string;
  views?: string;
  tags?: string[];
}) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={thumbnail || 'https://dummyimage.com/400x300/000/fff'}
          alt="Video Streaming App"
          width={400}
          height={300}
        />
      </CardHeader>
      <CardContent>
        <HeadingH5 className="mb-2">{title}</HeadingH5>
        <p>Uploaded 2 days ago</p>
        <p>by Some User</p>
        <p>{views ?? 0} views</p>
        <div className="mt-2">
          {tags?.map((tag, index) => (
            <Badge key={index} variant="default" className="mr-1">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
