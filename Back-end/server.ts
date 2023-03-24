import app from "./app";

const port_env = process.env.PORT || 3333;

app.listen(port_env, () => {
    console.log(`Server is running at port ${port_env}`)
});