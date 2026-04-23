import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

            <p className="text-slate-600 mb-4">{post.description}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium"
            >
              Ler artigo →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
