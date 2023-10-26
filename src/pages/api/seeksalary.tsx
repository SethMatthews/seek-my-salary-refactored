import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  message: string;
};

export interface LoginApiRequest extends NextApiRequest {
  body: {
    jobId: string;
  };
}

export default function handler(req: LoginApiRequest, res: NextApiResponse<ResponseData>){
    if (req.method !== 'POST') {
        res.status(400).json({ message: 'Error: GET request required!' });
        return res
    }
    if (!req.body) {
        res.status(400).json({ message: 'Error: No body in POST request' });
        return res
    }

    const {
        body: { jobId },
    } = req;
    console.log('typeof jobId  ', typeof jobId);
    console.log('jobIdd is  ', jobId);
    
    res
        .status(200)
        .json({ message: `All good, Searching for jobID ${jobId}` });
    return res;
}