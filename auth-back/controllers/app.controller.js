const getUser = (req, res) => {
    console.log("USER")
}

const testAuth = (req, res) => {
    console.log("REACHING BACKEND, AUTHORIZED");
    res.status(200).send("REACHING BACKEND, AUTHORIZED")
}

module.exports = {getUser, testAuth}