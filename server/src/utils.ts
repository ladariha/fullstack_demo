import { RequestHandler, Request, Response, NextFunction } from "express";

export const unless = (path: string, middleware: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (path === req.path) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
};
