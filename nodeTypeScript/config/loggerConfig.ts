
// define the custom settings for each transport (file, console)
const options = {
    file: {
      level: "info",
      filename: "../logs/app.log",
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: "debug",
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };

export default options;
