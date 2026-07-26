import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { client } from '@/sanity/lib/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (secret !== process.env.SANITY_PREVIEW_SECRET && process.env.NODE_ENV === 'production') {
    return new Response('Invalid token', { status: 401 })
  }

  if (!slug) {
    return new Response('Missing slug', { status: 400 })
  }

  // Check if the post with the given `slug` exists
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!post) {
    return new Response('Invalid slug', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  const draft = await draftMode()
  draft.enable()

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(`/blog/${post.slug.current}`)
}
