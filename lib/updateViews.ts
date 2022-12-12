export async function updateViews(postId: string) {

  const url = `${process.env.API_HOSTNAME}/data/mutate/production`;
  const reqBody = JSON.stringify({
    mutations: [{
      patch: {
        id: postId,
        inc: {
          views: 1
        }
      }
    }]
  });

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_TOKEN}`
    },
    body: reqBody
  };

  const res = await fetch(url, config);
  const data = await res.json();

  return data;
}
