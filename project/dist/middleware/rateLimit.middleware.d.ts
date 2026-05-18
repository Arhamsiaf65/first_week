import type { Request, Response, NextFunction } from 'express';
declare const rateLimitMiddleware: (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export default rateLimitMiddleware;
//# sourceMappingURL=rateLimit.middleware.d.ts.map