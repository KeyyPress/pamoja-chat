const PhoneMock = ({
  className = "",
  caption,
}: {
  className?: string;
  caption?: string;
}) => (
  <div className={`relative mx-auto h-full w-full ${className}`}>
    {/* Phone Image */}
    <img
      src="/phone1.png"
      alt="Phone mockup"
      className="w-full h-full object-contain"
    />

    {caption && (
      <div className="absolute -bottom-10 w-full text-center text-sm text-gray-600 font-medium">
        {caption}
      </div>
    )}
  </div>
);

export default PhoneMock;
