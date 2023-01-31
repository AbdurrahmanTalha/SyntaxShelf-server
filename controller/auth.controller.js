exports.users = async (req, res) => {
    try {
        res.json({
            name: "Jon"
        })
    } catch (error) {
        res.status(400).json({

        })
    }
}
