import express from "express";
import healthRouter from "./routes/healthRouter";
import userRouter from "./routes/userRouter";

const app = express();
app.use(express.json());

app.use(healthRouter);
app.use(userRouter);

export default app;
