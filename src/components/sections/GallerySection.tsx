import gallery1 from "@/assets/images/gallery/gallery1.jpg";
import gallery2 from "@/assets/images/gallery/gallery2.jpg";
import gallery3 from "@/assets/images/gallery/gallery3.jpg";
import gallery4 from "@/assets/images/gallery/gallery4.jpg";
import gallery5 from "@/assets/images/gallery/gallery5.jpg";
import gallery6 from "@/assets/images/gallery/gallery6.jpg";
import gallery7 from "@/assets/images/gallery/gallery7.jpg";
import gallery8 from "@/assets/images/gallery/gallery8.jpg";
import gallery9 from "@/assets/images/gallery/gallery9.jpg";
import gallery10 from "@/assets/images/gallery/gallery10.jpg";
import gallery11 from "@/assets/images/gallery/gallery11.jpg";
import gallery12 from "@/assets/images/gallery/gallery12.jpg";

const images = [
  gallery1, gallery2, gallery3, gallery4,
  gallery5, gallery6, gallery7, gallery8,
  gallery9, gallery10, gallery11, 
];

export function GallerySection() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* 🔥 HERO GRADIENT BG */}
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base">
            Explore our premium gym environment and training sessions
          </p>
        </div>

        {/* 🔥 MASONRY GRID */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">

          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid">

              {/* BORDER WRAPPER */}
              <div className="relative rounded-2xl p-[2px] overflow-hidden group">

                {/* 🔥 ANIMATED BORDER */}
                <div className="absolute inset-0 animate-borderMove bg-gradient-to-r from-primary via-[color:var(--primary-glow)] to-primary opacity-80" />

                {/* IMAGE */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={img}
                    alt="gallery"
                    className="w-full h-auto object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                  />
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* 🔥 BORDER ANIMATION */}
      <style>
        {`
          @keyframes borderMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .animate-borderMove {
            animation: borderMove 8s linear infinite;
          }
        `}
      </style>

    </section>
  );
}