import app from "./app";
const PORT = process.env.PORT || 3000;

process.on("uncaughtException", (e) => {
    console.log(e);
    process.exit(1);
  });
process.on("unhandledRejection", (e) => {
    console.log(e);
    process.exit(1);
  });

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
