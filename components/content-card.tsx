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
  variant?: "default" | "photo";
};

export function ContentCard({
  tag,
  title,
  description,
  href,
  thumbnail,
  comingSoon,
  variant = "default",
}: ContentCardProps) {
  if (variant === "photo" && thumbnail?.image) {
    return (
      <article className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-hover)]">
        {!comingSoon && (
          <Link href={href} className="absolute inset-0 z-10" aria-label={title} />
        )}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <Image
            src={thumbnail.image}
            alt={thumbnail.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,6,0.78)] via-[rgba(20,12,6,0.18)] to-transparent" />
          {/* Text content overlaid on photo */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[rgba(255,200,150,0.9)]">
              {tag}
            </p>
            <h3 className="mt-1.5 font-serif text-xl text-white sm:text-2xl leading-tight">
              {title}
            </h3>
            {!comingSoon && (
              <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2">{description}</p>
            )}
            {comingSoon && (
              <span className="mt-3 inline-flex items-center rounded-full bg-white/15 border border-white/25 px-3 py-1 text-xs font-semibold text-white/80">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="section-shell group relative flex h-full flex-col justify-between rounded-[1.5rem] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] sm:rounded-[1.75rem]">
      {!comingSoon && (
        <Link href={href} className="absolute inset-0 z-10" aria-label={title} />
      )}
      {thumbnail && (
        thumbnail.image ? (
          <div className="relative h-44 w-full shrink-0 overflow-hidden">
            <Image
              src={thumbnail.image}
              alt={thumbnail.imageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center bg-gradient-to-br ${thumbnail.gradient ?? ""} h-44 w-full shrink-0`}
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
          <h3 className="mt-3 font-serif text-xl text-[var(--foreground)] sm:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
        </div>
        <div className="mt-6">
          {comingSoon ? (
            <span className="inline-flex min-h-10 items-center rounded-full border border-[var(--line)] bg-white/50 px-4 py-2 text-sm font-semibold text-[var(--muted)]">
              Coming Soon
            </span>
          ) : (
            <span className="relative z-20 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
              Explore
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
