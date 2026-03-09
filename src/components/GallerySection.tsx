

const images = [
  { src: "/pictures/playing.png", alt: "Kids playing together", span: "md:col-span-2 md:row-span-2" },
  { src: "/pictures/class.png", alt: "Kids learning in class", span: "" },
  { src: "/pictures/extra c1.png", alt: "Art and craft activities", span: "" },
  { src: "/pictures/event1.png", alt: "School celebration", span: "md:col-span-2" },
  { src: "/pictures/group.png", alt: "Outdoor games", span: "" },
  { src: "/pictures/study2.png", alt: "Story time with teacher", span: "" },
  // New images
  { src: "/pictures/event2.png", alt: "Cultural event", span: "" },
  { src: "/pictures/event4.png", alt: "Stage performance", span: "" },
  { src: "/pictures/event6.png", alt: "Special celebration", span: "md:col-span-2" },
  { src: "/pictures/event7.png", alt: "School festival", span: "" },
  { src: "/pictures/extra c2.png", alt: "Creative playtime", span: "" },
  { src: "/pictures/extra c3.png", alt: "Hands-on learning", span: "" },
  { src: "/pictures/extra c4.png", alt: "Interactive activity", span: "md:col-span-2" },
  { src: "/pictures/faculty.png", alt: "Our dedicated faculty", span: "" },
  { src: "/pictures/happy1.png", alt: "Joyful moments", span: "" },
  { src: "/pictures/happy2.png", alt: "Smiling students", span: "" },
  { src: "/pictures/prize1.png", alt: "Award distribution", span: "md:col-span-2" },
  { src: "/pictures/prize2.png", alt: "Student achievement", span: "" },
  { src: "/pictures/study1.png", alt: "Focused reading", span: "" },
  { src: "/pictures/group photo 1.png", alt: "Class group photo", span: "" },
  { src: "/pictures/group photo 2.png", alt: "School group photo", span: "md:col-span-2 md:row-span-2" },
  { src: "/pictures/group photo.png", alt: "Students together", span: "" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 gradient-warm">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-foreground mb-3">Photo <span className="text-secondary">Gallery</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Glimpses of the joyful moments at Genesis International Montessori School.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end">
              <p className="text-primary-foreground text-sm font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
