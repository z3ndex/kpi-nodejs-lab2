export function GET(req, res, url, payload) {
    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort;
    res.json({
        name: `Hello! Your IP address is ${ip}`
    });
}
