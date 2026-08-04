import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'
import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN

  if (!token) {
    return NextResponse.json({ success: false, message: 'Missing write token.' }, { status: 401 })
  }

  const writeClient = createClient({ projectId, dataset, apiVersion, useCdn, token })

  try {
    // Fetch all industryPage document IDs
    const ids: string[] = await writeClient.fetch(
      `*[_type == "industryPage"]._id`
    )

    if (!ids || ids.length === 0) {
      return NextResponse.json({ success: true, message: 'No industryPage documents found — nothing to delete.' })
    }

    // Delete each one
    const deleted: string[] = []
    for (const id of ids) {
      await writeClient.delete(id)
      deleted.push(id)
    }

    return NextResponse.json({
      success: true,
      message: `Deleted ${deleted.length} industryPage documents from Sanity.`,
      deleted,
    })
  } catch (error: any) {
    console.error('Error deleting industry pages:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
