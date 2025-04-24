import React from 'react'

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }]
}

export default async function page({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id;
  return (
    <div>
      <h3>Product id: {id} rendered at {new Date().toLocaleTimeString()}</h3>
    </div>
  )
}
