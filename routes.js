class Routes {
    static handleRequest(req, res) {
        res.setHeader('Content-Type', 'application/json');
        try {
            switch (req.url) {
                case '/':
                    res.write('Main page');
                    break;
                case '/contacts':
                    res.write('Contacts');
                    break;
            }
        } catch (error) {
            res.statusCode = 500;
        } finally {
            res.end();
        }
    }
}

module.exports = Routes;