import { useEffect, useState } from 'react';

interface ImageModalProps {
  imageSrc: string;
  altText: string;
  triggerClose?: boolean;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  imageSrc,
  altText,
  triggerClose = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  useEffect(() => {
    if (triggerClose) {
      closeOverlay();
    }
  }, [triggerClose]);

  const toggleEnlarge = () => {
    setIsVisible(true);
    setTimeout(() => setIsFullyVisible(true), 10);
  };

  const closeOverlay = () => {
    setIsFullyVisible(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  return (
    <>
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={altText}
          className="w-3/4 mt-4 cursor-pointer transition-all duration-300 w-1/2 max-w-[300px] md:max-w-[375px] lg:w-[39.1vw] lg:max-w-[565px]" // Initial smaller size
          onClick={toggleEnlarge}
        />
      </div>

      {isVisible && (
        <div
          className={`fixed inset-0 bg-[#1A1A1AEF] flex justify-center items-center z-50 transition-opacity duration-300 ${
            isFullyVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeOverlay}
        >
          <div className="text-center">
            <img
              className="w-[65vw] max-w-[90vw] max-h-[80vh] object-contain"
              src={imageSrc}
              alt={altText}
            />
            <p className="text-white mt-4">{altText}</p>
          </div>
        </div>
      )}
    </>
  );
};
