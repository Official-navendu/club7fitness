import { useEffect, useRef, useState } from "react";
import { Play, Heart, MessageCircle, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

// Import local images as beautiful placeholders
import img1 from "@/assets/images/gallery/gallery2.jpg";
import img2 from "@/assets/images/gallery/gallery5.jpg";
import img3 from "@/assets/images/gallery/gallery8.jpg";
import img4 from "@/assets/images/gallery/gallery10.jpg";

const WIDGET_ID = "b5f2530b-0d80-43d9-b852-b3cb1cc58f58";

interface MockPost {
  id: string;
  img: string;
  type: "post" | "reel";
  caption: string;
  likes: string;
  comments: string;
  url: string;
}

const MOCK_POSTS: MockPost[] = [
  {
    id: "1",
    img: img1,
    type: "reel",
    caption: "Daily motivation at Club 7. Push hard! 🏋️‍♂️ #gymmotivation #fitnessgoals",
    likes: "428",
    comments: "24",
    url: "https://www.instagram.com/",
  },
  {
    id: "2",
    img: img2,
    type: "post",
    caption: "Meet our certified strength coaches. Ready to guide your path. 🎯 #personaltrainer",
    likes: "612",
    comments: "38",
    url: "https://www.instagram.com/",
  },
  {
    id: "3",
    img: img3,
    type: "reel",
    caption: "High intensity, high energy HIIT training session! 🔥 #conditioning #workout",
    likes: "895",
    comments: "51",
    url: "https://www.instagram.com/",
  },
  {
    id: "4",
    img: img4,
    type: "post",
    caption: "World-class equipment for world-class results. 🏆 #gymlife #training",
    likes: "504",
    comments: "19",
    url: "https://www.instagram.com/",
  },
];

export function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWidgetHydrated, setIsWidgetHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const retryCount = useRef(0);

  const initWidget = () => {
    try {
      const scriptId = "elfsight-platform-script";
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      // Re-inject script if needed or trigger reload
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://elfsightcdn.com/platform.js";
        script.defer = true;
        script.setAttribute("data-use-service-core", "");
        document.body.appendChild(script);
      } else {
        // If script is already there, trigger global Elfsight initialize if available
        if ((window as any).ElfsightPlatform) {
          try {
            (window as any).ElfsightPlatform.init();
          } catch (e) {
            console.warn("Failed calling Elfsight init:", e);
          }
        }
      }
    } catch (e) {
      console.error("Elfsight initialization error:", e);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    initWidget();

    const observer = new MutationObserver(() => {
      if (containerRef.current && containerRef.current.children.length > 0) {
        setIsWidgetHydrated(true);
        setIsLoading(false);
        setHasError(false);
        observer.disconnect();
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
      if (containerRef.current.children.length > 0) {
        setIsWidgetHydrated(true);
        setIsLoading(false);
        observer.disconnect();
      }
    }

    // Timeout to retry or fallback
    const timeout = setTimeout(() => {
      if (!isWidgetHydrated && containerRef.current && containerRef.current.children.length === 0) {
        if (retryCount.current < 2) {
          retryCount.current += 1;
          console.warn(`Elfsight load timed out. Retry attempt #${retryCount.current}...`);
          initWidget();
        } else {
          console.error("Elfsight failed to load after retries. Activating fallback content.");
          setHasError(true);
          setIsLoading(false);
        }
      }
      observer.disconnect();
    }, 7000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [isWidgetHydrated]);

  return (
    <section className="relative py-20 bg-surface-darker text-white border-t border-white/5">
      {/* Background radial gradient */}
      <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Social Media
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-normal">
            Latest From <span className="text-primary-gradient bg-clip-text text-transparent">Instagram</span>
          </h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Follow our latest workouts, transformations, events, and fitness tips.
          </p>
        </div>

        {/* INSTAGRAM CONTAINER */}
        <div className="relative min-h-[320px] w-full">
          
          {/* Official Elfsight Widget */}
          {!hasError && (
            <div 
              ref={containerRef}
              className={cn(
                "w-full transition-opacity duration-500",
                isWidgetHydrated ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
              )}
            >
              <div className={`elfsight-app-${WIDGET_ID}`} data-elfsight-app-lazy />
            </div>
          )}

          {/* Loading Skeleton */}
          {isLoading && !isWidgetHydrated && !hasError && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-[#0f2a44]/30 rounded-2xl border border-white/5" />
              ))}
            </div>
          )}

          {/* Fallback mockup grid if loading fails */}
          {hasError && (
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MOCK_POSTS.map((post) => (
                  <a
                    key={post.id}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#0f2a44]/30 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow"
                  >
                    {/* Image */}
                    <img
                      src={post.img}
                      alt={post.caption}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Play Icon */}
                    {post.type === "reel" && (
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/45 border border-white/20 backdrop-blur-md text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-6 w-6 fill-white ml-0.5 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Hover Info */}
                    <div className="absolute inset-0 flex flex-col justify-between bg-slate-950/90 backdrop-blur-sm p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-soft">
                          {post.type}
                        </span>
                        <Instagram className="h-5 w-5 text-white/80" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-white/95 line-clamp-3 mb-4 leading-relaxed font-semibold">
                          {post.caption}
                        </p>
                        <div className="flex items-center gap-6 border-t border-white/10 pt-3 text-sm text-white/80">
                          <span className="flex items-center gap-2">
                            <Heart className="h-4 w-4 fill-primary text-primary" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-2">
                            <MessageCircle className="h-4 w-4 text-white" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
