import Link from "next/link";
import Image from "next/image";
import type { Thumbnail } from "@/lib/content";

type ContentCardProps = {
  tag: string;
  title: string;
  description: string;
  href: string;
  thumbnail?: Thumbnail;
  comingSoon?: boolean;
};

export function ContentCard({
  tag,
  title,
  description,
  href,
  thumbnail,
  comingSoon,
}: ContentCardProps) {
  return (
    <article className="section-shell group flex h-full flex-col justify-between rounded-[1.5rem] overflow-hidden sm:rounded-[1.75rem]">
      {thumbnail && (
        thumbnail.image ? (
          <div className="relative h-36 w-full shrink-0 overflow-hidden">
            <Image
              src={thumbnail.image}
              alt={thumbnail.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center bg-gradient-to-br ${thumbnail.gradient ?? ""} h-36 w-full shrink-0`}
          >
            <span className="text-5xl select-none" role="img">
              {thumbnail.icon}
            </span>
          </div>
        )
      )}
      <div className="flex flex-col flex-1 justify-between p-5 sm:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
            {tag}
          </p>
          <h3 className="mt-4 font-serif text-xl text-[var(--foreground)] sm:text-2xl">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
        </div>
        <div className="mt-7">
          {comingSoon ? (
            <span className="inline-flex min-h-11 items-center rounded-full border border-[var(--line)] bg-white/50 px-4 py-2 text-sm font-semibold text-[var(--muted)]">
              Coming Soon
            </span>
          ) : (
            <Link
              href={href}
              className="inline-flex min-h-11 items-center rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Read more
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
