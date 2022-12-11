import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return;
  }

  const url = `${process.env.API_HOSTNAME}/data/mutate/production`;

  const reqBody = JSON.stringify({
    mutations: [{
      patch: {
        id: req.query.id,
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

  try {
    const patch = await fetch(url, config);

    return res.status(200).json({patch});
  } catch (e) {
    console.error(e);
    return;
  }
}
