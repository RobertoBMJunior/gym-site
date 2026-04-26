import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-posts'

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">Blog</h1>
        <p className="text-slate-600">
          Dicas, treinos e estratégias para evoluir na academia
        </p>
      </div>

      <article className="mb-12 group relative rounded-2xl overflow-hidden">
        <Link href={`/blog/${featuredPost.slug}`}>
          <div className="relative w-full h-72 md:h-96">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-xs mb-2 opacity-80">
                {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {featuredPost.title}
              </h2>

              <p className="text-sm md:text-base opacity-90 line-clamp-2">
                {featuredPost.description}
              </p>
            </div>
          </div>
        </Link>
      </article>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {otherPosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
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

              <h2 className="text-xl font-semibold leading-snug mb-2 group-hover:text-blue-600 transition">
                {post.title}
              </h2>

              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                {post.description}
              </p>

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
