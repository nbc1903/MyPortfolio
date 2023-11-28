interface ImageGalleryProps {
  images: Array<{
    src: string;
    href: string;
    title: string;
  }>;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="group/certificates columns-1 gap-x-4 sm:columns-2 2xl:columns-3">
      {images.map((image, idx) => {
        return (
          <a
            title={image.title}
            key={`certificate-${idx}`}
            href={image.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mb-4 h-auto max-w-full origin-top rounded-lg transition-[transform,_opacity] duration-500 hover:!scale-100 hover:!opacity-100 group-hover/certificates:scale-95 group-hover/certificates:opacity-20"
              src={image.src}
            />
          </a>
        );
      })}
    </div>
  );
};

export default ImageGallery;
