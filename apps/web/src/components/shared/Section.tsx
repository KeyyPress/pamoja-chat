const Section = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`w-full ${className}`}>
    {children}
  </section>
);

export default Section;
