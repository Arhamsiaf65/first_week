declare const createUser: (name: string, email: string, role: string) => Promise<any>;
declare const getUserById: (id: string) => Promise<any>;
declare const getAllUsers: () => Promise<any[]>;
declare const updateUser: (id: string, name: string, email: string, role: string) => Promise<any>;
declare const deleteUser: (id: string) => Promise<any>;
export { createUser, getUserById, getAllUsers, updateUser, deleteUser };
//# sourceMappingURL=users.services.d.ts.map