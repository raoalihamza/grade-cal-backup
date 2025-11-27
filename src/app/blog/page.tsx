import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog - Grade Calculator | GPA Tips, Study Guides & Calculator Tutorials",
  description:
    "Read our latest articles on GPA calculation, study tips, CGPA guides, and grade improvement strategies. Expert advice for students to achieve academic success.",
  keywords: [
    "GPA tips",
    "study guides",
    "grade calculator blog",
    "CGPA guide",
    "academic success tips",
    "student resources",
  ],
  openGraph: {
    title: "Blog - Grade Calculator",
    description:
      "Expert articles on GPA calculation, study tips, and academic success strategies.",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

async function getBlogs() {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    category
  }`;

  return await client.fetch(query);
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Grade Calculator Blog
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Expert guides on GPA calculation, study tips, and strategies to
          improve your academic performance. Learn everything about grades,
          CGPA, SGPA, and more.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto">
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog: any) => (
              <Card
                key={blog.slug.current}
                className="group overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Cover Image */}
                {blog.coverImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={urlFor(blog.coverImage).width(600).height(400).url()}
                      alt={blog.coverImage.alt || blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <CardHeader className="pb-2">
                  {/* Category Badge */}
                  {blog.category && (
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {blog.category.replace("-", " ")}
                    </span>
                  )}
                  <CardTitle className="text-lg line-clamp-2">
                    {blog.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Date & Read More */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t">
                    {blog.publishedAt && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(blog.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    )}
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${blog.slug.current}`}>
                        Read More <ArrowRightCircle className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
