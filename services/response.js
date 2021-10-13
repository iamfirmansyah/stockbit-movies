exports.response = (res, status, message, data) => {
    return res.status(status).send({
      message,
      data
    })
};