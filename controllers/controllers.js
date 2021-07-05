const saySomething = (req, res, next) => {
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'staging'
  ) {
    res.status(200).json({
      body: process.env.REACT_APP_FAKE_TEST_KEY,
    });
  } else {
    res.status(200).json({
      body: `Hello from the server! You are in development mode.`,
    });
  }
};

module.exports.saySomething = saySomething;
