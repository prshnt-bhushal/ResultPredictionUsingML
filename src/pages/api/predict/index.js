import { predict } from "../../../../controller/predictController";

export default function handler(req, res) {
    const {method} = req;
    switch (method) {
        case 'POST':
            try {
                predict(req, res);
            } catch (error) {
                console.error(error);
            }
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}