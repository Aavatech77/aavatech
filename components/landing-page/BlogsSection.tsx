"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { CardHorizontal } from "./Cards";
import AnimateInView from "../animate/AnimateInView";
import axios, { AxiosResponse } from "axios";
import { Loader2 } from "lucide-react";

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
    }>;
  };
}

const BlogsSection = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getBlogPosts = async () => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<BlogPost[]> = await axios.get(
        "https://blog.investiaa.com/wp-json/wp/v2/posts",
        {
          params: {
            per_page: 4,
            _embed: true, // This helps retrieve featured media
          },
        }
      );
      setBlogs(response.data);
      setError(null);
    } catch (error) {
      console.error("Error getting blogs", error);
      setError("Failed to load blog posts");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Loader2 className="size-8 text-primary animate-spin" />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (blogs.length === 0)
    return <div className="text-center">No blogs found</div>;

  return (
    <section className="my-8 md:my-12 py-8 md:py-12">
      <div className="container">
        <h1 className="text-2xl font-semibold text-center">
          Our <span className="text-highlight">Blogs</span>
          <br />
          Empowering Businesses with Innovative{" "}
          <span className="text-highlight">IT Solutions Worldwide</span>
        </h1>
        <p className="text-center text-sm">
          At our IT company, we empower businesses with innovative, scalable
          solutions that drive success and efficiency.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {blogs.slice(0, 4).map((blog) => (
            <AnimateInView type="slide-in" key={blog.id}>
              <CardHorizontal
                title={blog.title.rendered.split(":")[0]}
                description={blog.excerpt.rendered
                  .replace("[&hellip;]", "")
                  .slice(0, 200)
                  .trimEnd()
                  .concat("...")}
                setAsHTML
                fit="cover"
                href={blog.link}
                newTab
                img={
                  blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/assets/landing-page/library-architecture.png"
                }
              />
            </AnimateInView>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Button className="rounded-full" size="lg" asChild>
            <Link
              href="https://blog.investiaa.com/"
              target="__blank"
              className="mx-auto"
            >
              Explore More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
