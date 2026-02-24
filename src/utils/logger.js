const isDev = import.meta.env.DEV

const logger = {
    info: (msg, object)=>isDev && console.info(`[INFO] ${msg} `+object),
    warn: (msg)=>isDev && console.warn(`[WARNING] ${msg}`),
    error: (msg)=>isDev && console.error(`[ERROR] ${msg}`)
};
export default logger;
