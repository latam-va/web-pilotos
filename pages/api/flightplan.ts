// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.redirect('http://www.simbrief.com/system/dispatch.php?airline=DSM&manualrmk=LATAM Argentina Virtual')
}
