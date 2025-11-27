import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Fetch single blog
async function getBlog(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    slug,
    excerpt,
    coverImage,
    content,
    category,
    publishedAt
  }`;

  return await client.fetch(query, { slug });
}

// Fetch all slugs for static generation
async function getAllSlugs() {
  const query = `*[_type == "blog"] { slug }`;
  return await client.fetch(query);
}

// Generate static params
export async function generateStaticParams() {
  const blogs = await getAllSlugs();
  return blogs.map((blog: any) => ({
    slug: blog.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Grade Calculator Blog`,
    description: blog.excerpt,
    keywords: [blog.category, "GPA", "grade calculator", "study tips"],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishedAt,
      images: blog.coverImage
        ? [
            {
              url: urlFor(blog.coverImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: blog.coverImage.alt || blog.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: blog.coverImage
        ? [urlFor(blog.coverImage).width(1200).height(630).url()]
        : [],
    },
    alternates: {
      canonical: `/blog/${blog.slug.current}`,
    },
  };
}

// PortableText components for rendering content
const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(600).url()}
            alt={value.alt || "Blog image"}
            width={600}
            height={400}
            className="rounded-lg mx-auto"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-7 text-base sm:text-lg text-muted-foreground">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 mb-6 space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 mb-6 space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-base sm:text-lg">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-base sm:text-lg">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => <u>{children}</u>,
    link: ({ children, value }: any) => (
      <Link
        href={value?.href || "#"}
        className="text-primary underline hover:text-primary/80 transition-colors"
        target={value?.href?.startsWith("http") ? "_blank" : "_self"}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : ""}
      >
        {children}
      </Link>
    ),
  },
};

export const revalidate = 60;

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage
      ? urlFor(blog.coverImage).width(1200).height(630).url()
      : undefined,
    datePublished: blog.publishedAt,
    author: {
      "@type": "Organization",
      name: "Grade Calculator",
    },
    publisher: {
      "@type": "Organization",
      name: "Grade Calculator",
      url: "https://markcalculator.com",
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-8 space-y-4">
          {/* Category */}
          {blog.category && (
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wide">
              {blog.category.replace("-", " ")}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Grade Calculator Team
            </span>
            {blog.publishedAt && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
          </div>
        </header>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="relative w-full h-64 sm:h-80 md:h-96 mb-10 rounded-xl overflow-hidden">
            <Image
              src={urlFor(blog.coverImage).width(1200).height(630).url()}
              alt={blog.coverImage.alt || blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <PortableText
            value={blog.content}
            components={PortableTextComponents}
          />
        </div>

        {/* Footer CTA */}
        <div className="mt-12 p-6 bg-secondary/50 rounded-xl text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">
            Ready to Calculate Your GPA?
          </h3>
          <p className="text-muted-foreground mb-4">
            Try our free GPA calculator and get instant results!
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-600"
          >
            <Link href="/gpa-calculator">
              Use GPA Calculator{" "}
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
}
