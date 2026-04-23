import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-posts'

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">Blog</h1>
        <p className="text-slate-600">
          Dicas, treinos e estratégias para evoluir na academia
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </Link>

            <div className="p-5">
              <p className="text-xs text-slate-400 mb-2">
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </p>

              <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                {post.title}
              </h2>

              <p className="text-sm text-slate-600 mb-4">{post.description}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 font-medium text-sm"
              >
                Ler artigo →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
