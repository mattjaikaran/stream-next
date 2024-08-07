/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KvH5A7jsS9h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="bg-[url('/placeholder.svg')] bg-cover bg-center relative h-[50vh] flex items-end justify-center">
        <div className="bg-gradient-to-t from-black/50 to-transparent absolute inset-0" />
        <div className="text-white z-10 p-8 sm:p-12 md:p-16 lg:p-20 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Planet Earth II
          </h1>
          <p className="max-w-[700px] text-lg sm:text-xl md:text-2xl">
            A breathtaking exploration of the most remote and spectacular places
            on our planet.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground">
            <PlayIcon className="mr-2 h-6 w-6" />
            Watch Now
          </Button>
        </div>
      </section>
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20 grid gap-12 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px]">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">About the Video</h2>
            <Separator className="my-4" />
            <div className="grid gap-4 text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Duration</span>
                <span>48 minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Release Date</span>
                <span>June 11, 2022</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Category</span>
                <span>Nature Documentary</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Director</span>
                <span>David Attenborough</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Related Videos</h2>
            <Separator className="my-4" />
            <div className="grid gap-6">
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Thumbnail"
                  width={120}
                  height={68}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: '120/68', objectFit: 'cover' }}
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Blue Planet II: A World of Wonder
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Explore the incredible diversity of life in the world's
                    oceans.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Thumbnail"
                  width={120}
                  height={68}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: '120/68', objectFit: 'cover' }}
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Life in Color with David Attenborough
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Discover the incredible world of animal coloration.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Thumbnail"
                  width={120}
                  height={68}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: '120/68', objectFit: 'cover' }}
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Our Planet: Our Business
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Explore the relationship between business and the
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Reviews</h2>
            <Separator className="my-4" />
            <div className="grid gap-6">
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground">
                    JD
                  </div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground">
                    2 days ago
                  </div>
                </div>
                <p className="text-muted-foreground">
                  This documentary is absolutely stunning. The cinematography is
                  breathtaking and the narration by David Attenborough is
                  captivating. I highly recommend watching this.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center text-secondary-foreground">
                    SM
                  </div>
                  <div className="font-medium">Sarah Miller</div>
                  <div className="text-xs text-muted-foreground">
                    1 week ago
                  </div>
                </div>
                <p className="text-muted-foreground">
                  I was blown away by the stunning visuals and the incredible
                  stories told in this documentary. It's a must-watch for anyone
                  interested in the natural world.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center text-muted-foreground">
                    TL
                  </div>
                  <div className="font-medium">Tom Lee</div>
                  <div className="text-xs text-muted-foreground">
                    1 month ago
                  </div>
                </div>
                <p className="text-muted-foreground">
                  This is one of the best nature documentaries I've ever seen.
                  The attention to detail and the way it transports you to these
                  incredible places is truly remarkable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">About the Series</h2>
            <Separator className="my-4" />
            <p className="text-muted-foreground">
              Planet Earth II is a 2016 British television series produced by
              the BBC as a sequel to the 2006 series Planet Earth. The series is
              presented and narrated by Sir David Attenborough.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              More from the Series
            </h2>
            <Separator className="my-4" />
            <div className="grid gap-6">
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Thumbnail"
                  width={120}
                  height={68}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: '120/68', objectFit: 'cover' }}
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Planet Earth II: Islands
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Explore the unique and diverse ecosystems of the world's
                    islands.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Thumbnail"
                  width={120}
                  height={68}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: '120/68', objectFit: 'cover' }}
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Planet Earth II: Jungles
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Discover the incredible diversity of life in the world's
                    jungles.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Thumbnail"
                  width={120}
                  height={68}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: '120/68', objectFit: 'cover' }}
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Planet Earth II: Mountains
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Explore the unique and challenging environments of the
                    world's mountains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
