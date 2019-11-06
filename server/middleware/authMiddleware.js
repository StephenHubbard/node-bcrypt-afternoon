module.exports = {
    usersOnly: (req, res, next) => {
        if (!req.session.user) {
            return res.status(404).send('Gotta log in first yo');
        }
        next();
    }, 
    adminsOnly: (req, res, next) => {
        if (!req.session.user.isAdmin) {
            return res.status(403).send('You must be an Admin')
        }
        next();
    }
}