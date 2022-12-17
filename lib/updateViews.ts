export async function updateViews(postId: string) {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') return;

  const url = `${process.env.API_HOSTNAME}/data/mutate/production`;

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_TOKEN}`
    }
  };

  const res = await fetch(url, config);
  const data = await res.json();

  return data;
}
