import express from "express";
import healthRouter from "./routes/healthRouter";
import userRouter from "./routes/userRouter";
import { errorHandler, errorLogger, logRequests } from "./loggingMiddleware";

const app = express();

app.use(logRequests);

app.use(express.json());

app.use(healthRouter);
app.use(userRouter);

app.use(errorLogger);
app.use(errorHandler);

export default app;
