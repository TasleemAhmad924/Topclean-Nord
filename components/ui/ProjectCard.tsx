import Image from "next/image";

export function ProjectCard({
  image,
  service,
  location,
  className,
  priority,
}: {
  image: string;
  service: string;
  location: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-border">
        <Image
          src={image}
          alt={`${service} in ${location} – TopClean Nord`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-2 text-sm">
        <span className="font-medium text-ink">{service}</span>
        <span className="text-muted">{location}</span>
      </figcaption>
    </figure>
  );
}
