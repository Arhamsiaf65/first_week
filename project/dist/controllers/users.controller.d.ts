import type { Request, Response } from 'express';
export declare const createUserController: (req: Request, res: Response) => Promise<void>;
export declare const getUserByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllUsersController: (req: Request, res: Response) => Promise<void>;
export declare const updateUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const _default: {
    createUserController: (req: Request, res: Response) => Promise<void>;
    getUserByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getAllUsersController: (req: Request, res: Response) => Promise<void>;
    updateUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default _default;
//# sourceMappingURL=users.controller.d.ts.map