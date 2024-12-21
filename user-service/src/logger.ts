import winston from 'winston';

const isTestEnvironment = process.env.NODE_ENV === 'test';

const logger = winston.createLogger({
    // Reduce logging verbosity in tests or disable it
    level: isTestEnvironment ? 'warn' : 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: isTestEnvironment ? [
        // In test environment, use fewer or no transports
        new winston.transports.Console({
            level: 'error',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })
    ] : [
        // In non-test environments, log as normal
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

export default logger;
